import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./userModel";
import { Depense } from "./depenseModel";

@Table({
  timestamps: false,
  tableName: "Participation",
})
export class Participation extends Model<Participation> {
  // Définition des colonnes de la table "Participation"

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  // Colonne "montantPaye" de type nombre flottant non null
  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  montantPaye!: number;

  // Colonne "id_utilisateur" de type entier non null avec clé étrangère vers la table "User"
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id_utilisateur!: number;

  // Colonne "id_depense" de type entier non null avec clé étrangère vers la table "Depense"
  @ForeignKey(() => Depense)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id_depense!: number;

  // Relation "Participation" appartient à un seul "User"
  @BelongsTo(() => User)
  utilisateur!: User;

  // Relation "Participation" appartient à une seule "Depense"
  @BelongsTo(() => Depense)
  depense!: Depense;
}
