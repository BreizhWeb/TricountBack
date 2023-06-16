import { Table, Column, Model, DataType, BelongsToMany, BeforeCreate } from 'sequelize-typescript';
import bcrypt from 'bcrypt';
import { Depense } from './depenseModel';
import { Participation } from './participationModel';

@Table({
  timestamps: false,
  tableName: "Users",
})
export class User extends Model<User> {
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

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  prenom!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  mdp!: string;

  // Relations
  @BelongsToMany(() => Depense, () => Participation)

  @BeforeCreate
  static hashPassword(instance: User) {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(instance.mdp, saltRounds);
    instance.mdp = hashedPassword;
  }
}
