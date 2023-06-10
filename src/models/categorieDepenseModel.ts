import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { Depense } from "./depenseModel";

@Table({
  timestamps: false,
  tableName: "CategoriesDepense",
})
export class CategorieDepense extends Model<CategorieDepense> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nom!: string;

  // Relations
  @HasMany(() => Depense)
  depenses!: Depense[];
}
