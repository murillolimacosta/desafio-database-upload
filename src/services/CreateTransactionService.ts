import { getCustomRepository, getRepository } from 'typeorm';
import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import Category from '../models/Category';
import TransactionRepository from '../repositories/TransactionsRepository';

interface Request {
  title: string;
  value: number;
  type: string;
  category: string;
}

class CreateTransactionService {
  public async execute({
    title,
    value,
    type,
    category,
  }: Request): Promise<Transaction> {
    if (type !== 'outcome' && type !== 'income') {
      throw new AppError('Type invalid', 500);
    }

    const categoryRepository = getRepository(Category);
    const transactionRepository = getCustomRepository(TransactionRepository);

    const balance = await transactionRepository.getBalance();

    if (type === 'outcome' && value > balance.total) {
      throw new AppError('The outcome value is greater than the total', 400);
    }

    /**
     * Check category exists
     */
    let categorySearch = await categoryRepository.findOne({
      where: { title: category },
    });

    if (!categorySearch) {
      const categoryCretaed = categoryRepository.create({
        title: category,
      });

      categorySearch = await categoryRepository.save(categoryCretaed);
    }

    /**
     * Insert transactions
     */
    const transaction = transactionRepository.create({
      title,
      value,
      type,
      category_id: categorySearch.id,
    });

    await transactionRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
