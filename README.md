# Étapes d'installation

1. Ouvrir un terminal :
```shell
cd tricount-back
```

2. Installez les dépendances nécessaires :
```shell
npm install
```

3. Configurez le fichier [config.js](./src/db/config.ts). 

Remplir votre username et password utiliser dans phpMyAdmin :
```js
const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "<identifiant>",
  password: "<mdp>",
  database: "tricount",
  logging: false,
  models: [User, Depense, CategorieDepense],
});
```

4. Lancer l'API et votre BDD va se créér :
```shell
npm start
```