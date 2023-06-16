import { Table, Model, Column, DataType, BelongsToMany, BelongsTo, ForeignKey } from "sequelize-typescript";
import { User } from "./userModel";
import { CategorieDepense } from "./categorieDepenseModel";
import { Participation } from "./participationModel";

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

  @ForeignKey(() => CategorieDepense)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })

  id_categorie_depense!: number;
  @BelongsToMany(() => User, () => Participation)
  utilisateurs!: User[];

  @BelongsTo(() => CategorieDepense)
  categorie_depense!: CategorieDepense;
}