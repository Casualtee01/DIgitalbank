/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

import { Table, TableForeignKey } from "typeorm";

/**
 * @class
 * @implements {MigrationInterface}
 */
export default class CreateAccount1787846337294 {
  /**
   * @param {QueryRunner} queryRunner
   */
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "account",
        columns: [
          {
            name: "identifier",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "customerIdentifier",
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
      "account",
      new TableForeignKey({
        columnNames: ["customerIdentifier"],
        referencedTableName: "customer",
        referencedColumnNames: ["identifier"],
      }),
    );
  }

  /**
   * @param {QueryRunner} queryRunner
   */
  async down(queryRunner) {
    await queryRunner.dropTable("account");
  }
};
