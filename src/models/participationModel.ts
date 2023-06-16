import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "./userModel";
import { Depense } from "./depenseModel";

@Table({
  timestamps: false,
  tableName: "Participation",
})
export class Participation extends Model<Participation> {
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
  montantPaye!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id_utilisateur!: number;

  @ForeignKey(() => Depense)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id_depense!: number;

  // Relations
  @BelongsTo(() => User)
  utilisateur!: User;

  @BelongsTo(() => Depense)
  depense!: Depense;
}
