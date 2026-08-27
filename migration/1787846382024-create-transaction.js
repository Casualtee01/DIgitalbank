/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

import { Table, TableForeignKey } from "typeorm";

/**
 * @class
 * @implements {MigrationInterface}
 */
export default class CreateTransaction1787846382024 {
  /**
   * @param {QueryRunner} queryRunner
   */
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "transaction",
        columns: [
          {
            name: "identifier",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "accountIdentifier",
            type: "varchar",
          },
          {
            name: "amount",
            type: "numeric",
          },
          {
            name: "type",
            type: "varchar",
          },
          {
            name: "status",
            type: "varchar",
          },
          {
            name: "createdAt",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updatedAt",
            type: "timestamp",
            default: "now()",
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      "transaction",
      new TableForeignKey({
        columnNames: ["accountIdentifier"],
        referencedTableName: "account",
        referencedColumnNames: ["identifier"],
      }),
    );
  }

  /**
   * @param {QueryRunner} queryRunner
   */
  async down(queryRunner) {
    await queryRunner.dropTable("transaction");
  }
};
