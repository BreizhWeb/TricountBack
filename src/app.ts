import express from "express";
import userRoutes from "./routes/userRouter";
import depenseRoutes from "./routes/depenseRouter";
import categorieDepenseRoutes from "./routes/categorieDepenseRouter";
import participationRoutes from "./routes/participationRouter";
import connection from "./db/config";
import { json, urlencoded } from "body-parser";

const app = express();

// Configuration des en-têtes CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Middleware pour traiter les données JSON dans les requêtes
app.use(json());

// Middleware pour traiter les données URL encodées dans les requêtes
app.use(urlencoded({ extended: true }));

// Routes pour les utilisateurs
app.use("/", userRoutes);

// Routes pour les dépenses
app.use("/", depenseRoutes);

// Routes pour les catégories de dépenses
app.use("/", categorieDepenseRoutes);

// Routes pour les participations
app.use("/", participationRoutes);

// Middleware pour gérer les erreurs
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

// Connexion à la base de données
connection
  .sync()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });

// Démarrage du serveur sur le port 3000
app.listen(3000, () => {
  console.log("Server started on port 3000");
});