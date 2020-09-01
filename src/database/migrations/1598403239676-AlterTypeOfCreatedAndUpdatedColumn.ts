import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterTypeOfCreatedAndUpdatedColumn1598403239676
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('transactions', 'created_at');
    await queryRunner.dropColumn('transactions', 'updated_at');

    await queryRunner.addColumn(
      'transactions',
      new TableColumn({
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
      }),
    );

    await queryRunner.addColumn(
      'transactions',
      new TableColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
      }),
    );

    await queryRunner.dropColumn('categories', 'created_at');
    await queryRunner.dropColumn('categories', 'updated_at');

    await queryRunner.addColumn(
      'categories',
      new TableColumn({
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
      }),
    );

    await queryRunner.addColumn(
      'categories',
      new TableColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('categories', 'updated_at');
    await queryRunner.dropColumn('categories', 'created_at');

    await queryRunner.addColumn(
      'categories',
      new TableColumn({
        name: 'updated_at',
        type: 'timestamp with time zone',
      }),
    );

    await queryRunner.addColumn(
      'categories',
      new TableColumn({
        name: 'created_at',
        type: 'timestamp with time zone',
      }),
    );

    await queryRunner.dropColumn('transactions', 'updated_at');
    await queryRunner.dropColumn('transactions', 'created_at');

    await queryRunner.addColumn(
      'transactions',
      new TableColumn({
        name: 'updated_at',
        type: 'timestamp with time zone',
      }),
    );

    await queryRunner.addColumn(
      'transactions',
      new TableColumn({
        name: 'created_at',
        type: 'timestamp with time zone',
      }),
    );
  }
}
