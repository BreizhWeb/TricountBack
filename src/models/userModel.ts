import { Table, Column, Model, DataType, BelongsToMany, BeforeCreate } from 'sequelize-typescript';
import bcrypt from 'bcrypt';
import { Depense } from './depenseModel';
import { Participation } from './participationModel';

@Table({
  timestamps: false,
  tableName: "Users",
})
export class User extends Model<User> {
  // Définition des colonnes de la table "Users"
  
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;
  
  // Colonne "nom" de type string de caractères non nullable
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nom!: string;
  
  // Colonne "prenom" de type string de caractères non null
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  prenom!: string;
  
  // Colonne "email" de type string de caractères non null et unique
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;
  
  // Colonne "mdp" de type string de caractères non null
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  mdp!: string;
  
  // Relation Many-to-Many avec la table "Depense" via la table de jointure "Participation"
  @BelongsToMany(() => Depense, () => Participation)
  
  // Fonction exécutée avant la création d'un "User"
  @BeforeCreate
  static hashPassword(instance: User) {
    const saltRounds = 10;
    
    // Hashage du mot de passe avec bcrypt
    const hashedPassword = bcrypt.hashSync(instance.mdp, saltRounds);
    instance.mdp = hashedPassword;
  }
}