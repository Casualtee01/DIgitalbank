/**
 * @typedef {import('typeorm').MigrationInterface} MigrationInterface
 * @typedef {import('typeorm').QueryRunner} QueryRunner
 */

import { TableForeignKey } from "typeorm";

/**
 * @class
 * @implements {MigrationInterface}
 */
export default class AddKycCustomerFk1787846390000 {
  /**
   * @param {QueryRunner} queryRunner
   */
  async up(queryRunner) {
    await queryRunner.createForeignKey(
      "kyc",
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
    await queryRunner.dropForeignKey("kyc", "FK_0ad5de805396905d9e6674c2d12");
  }
};
