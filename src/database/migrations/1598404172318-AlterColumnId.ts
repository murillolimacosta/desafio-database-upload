import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterColumnId1598404172318 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('transactions', 'id');
    await queryRunner.dropColumn('categories', 'id');

    await queryRunner.addColumn(
      'categories',
      new TableColumn({
        name: 'id',
        type: 'varchar',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      }),
    );

    await queryRunner.addColumn(
      'transactions',
      new TableColumn({
        name: 'id',
        type: 'varchar',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('transactions', 'id');
    await queryRunner.dropColumn('categories', 'id');

    await queryRunner.addColumn(
      'categories',
      new TableColumn({
        name: 'id',
        type: 'varchar',
        isPrimary: true,
        generationStrategy: 'uuid',
      }),
    );

    await queryRunner.addColumn(
      'transactions',
      new TableColumn({
        name: 'id',
        type: 'varchar',
        isPrimary: true,
        generationStrategy: 'uuid',
      }),
    );
  }
}
