/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

import { Table } from "typeorm";

/**
 * @class
 * @implements {MigrationInterface}
 */
export default class CreateKyc1787846361948 {
  /**
   * @param {QueryRunner} queryRunner
   */
  async up(queryRunner) {
    await queryRunner.createTable(
      new Table({
        name: "kyc",
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
            name: "verificationStatus",
            type: "varchar",
          },
          {
            name: "verificationDate",
            type: "timestamp",
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
  }

  /**
   * @param {QueryRunner} queryRunner
   */
  async down(queryRunner) {
    await queryRunner.dropTable("kyc");
  }
};
