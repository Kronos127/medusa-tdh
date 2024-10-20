import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class AddProductType1632345678901 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "product_type",
      columns: [
        {
          name: "id",
          type: "uuid",
          isPrimary: true,
          isGenerated: true,
          generationStrategy: "uuid",
        },
        {
          name: "name",
          type: "varchar",
          isNullable: false,
        },
        {
          name: "created_at",
          type: "timestamp",
          default: "now()",
        },
        {
          name: "updated_at",
          type: "timestamp",
          default: "now()",
        },
      ],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("product_type")
  }
}
