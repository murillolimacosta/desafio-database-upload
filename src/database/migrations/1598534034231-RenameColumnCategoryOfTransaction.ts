import { MigrationInterface, QueryRunner } from 'typeorm';

export default class RenameColumnCategoryOfTransaction1598534034231
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.renameColumn('transactions', 'category', 'category_id');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.renameColumn('transactions', 'category_id', 'category');
  }
}
