import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./userModel";
import { CategorieDepense } from "./categorieDepenseModel";

@Table({
  timestamps: false,
  tableName: "Depenses",
})
export class Depense extends Model<Depense> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  montant!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date!: Date;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id_utilisateur_payeur!: number;

  @ForeignKey(() => CategorieDepense)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id_categorie_depense!: number;

  // Relations
  @BelongsTo(() => User)
  utilisateur_payeur!: User;

  @BelongsTo(() => CategorieDepense)
  categorie_depense!: CategorieDepense;
}