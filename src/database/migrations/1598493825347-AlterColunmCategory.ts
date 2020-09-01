import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AlterColunmCategory1598493825347
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.renameColumn('transactions', 'category_id', 'category');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.renameColumn('transactions', 'category', 'category_id');
  }
}
