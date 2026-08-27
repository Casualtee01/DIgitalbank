/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

import { Table, TableForeignKey } from "typeorm";

/**
 * @class
 * @implements {MigrationInterface}
 */
export default class CreateCustomer1787846366960 {
  /**
   * @param {QueryRunner} queryRunner
   */
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "customer",
        columns: [
          {
            name: "identifier",
            type: "varchar",
            isPrimary: true,
          },
          {
            name: "firstName",
            type: "varchar",
          },
          {
            name: "lastName",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "address",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "kycIdentifier",
            type: "varchar",
            isNullable: true,
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
      "customer",
      new TableForeignKey({
        columnNames: ["kycIdentifier"],
        referencedTableName: "kyc",
        referencedColumnNames: ["identifier"],
      }),
    );
  }

  /**
   * @param {QueryRunner} queryRunner
   */
  async down(queryRunner) {
    await queryRunner.dropTable("customer");
  }
};
