import { Table, Column, Model, DataType, HasMany, BeforeCreate } from 'sequelize-typescript';
import bcrypt from 'bcrypt';
import { Depense } from './depenseModel';

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
  @HasMany(() => Depense)
  depenses!: Depense[];

  @BeforeCreate
  static hashPassword(instance: User) {
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(instance.mdp, saltRounds);
    instance.mdp = hashedPassword;
  }
}
