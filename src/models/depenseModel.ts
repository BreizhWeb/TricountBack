import { Table, Model, Column, DataType, BelongsToMany, BelongsTo, ForeignKey } from "sequelize-typescript";
import { User } from "./userModel";
import { CategorieDepense } from "./categorieDepenseModel";
import { Participation } from "./participationModel";

@Table({
  timestamps: false,
  tableName: "Depenses",
})
export class Depense extends Model<Depense> {
  // Définition des colonnes de la table "null"

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  // Colonne "montant" de type nombre flottant non null
  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  montant!: number;

  // Colonne "date" de type Date non null
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date!: Date;

  // Colonne "id_categorie_depense" de type entier non null avec clé étrangère vers la table "CategorieDepense"
  @ForeignKey(() => CategorieDepense)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id_categorie_depense!: number;

  // Relation Many-to-Many avec la table "User" via la table de jointure "Participation"
  @BelongsToMany(() => User, () => Participation)
  utilisateurs!: User[];

  // Relation "Depense" appartient à une seule "CategorieDepense"
  @BelongsTo(() => CategorieDepense)
  categorie_depense!: CategorieDepense;
}