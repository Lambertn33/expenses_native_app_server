import { Column, Table, Model, DataType } from "sequelize-typescript";

interface ExpenseAttributes {
  id: string;
  amount: number;
  date: Date;
  description: string;
}

@Table({
  tableName: "expenses",
  timestamps: true,
})


export class Expense extends Model<ExpenseAttributes> {
  @Column({
    allowNull: false,
    type: DataType.UUID,
    primaryKey: true,
  })
  id!: string;

  @Column({
    allowNull: false,
    type: DataType.BIGINT,
  })
  amount!: number;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  description!: string;

  @Column({
    allowNull: false,
    type: DataType.DATE,
  })
  date!: Date;
}
