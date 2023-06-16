import { Table, Model, Column, DataType, HasMany } from "sequelize-typescript";
import { Depense } from "./depenseModel";

@Table({
  timestamps: false,
  tableName: "CategoriesDepense",
})
export class CategorieDepense extends Model<CategorieDepense> {
  // Définition des colonnes de la table "CategoriesDepense"

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  // Colonne "nom" de type chaîne de caractères non nullable
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nom!: string;

  // Relation "CategorieDepense" a plusieurs "Depense"
  @HasMany(() => Depense)
  depenses!: Depense[];
}
