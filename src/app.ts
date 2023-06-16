import express from "express";
import userRoutes from "./routes/userRouter";
import depenseRoutes from "./routes/depenseRouter";
import categorieDepenseRoutes from "./routes/categorieDepenseRouter";
import connection from "./db/config";
import { json, urlencoded } from "body-parser";

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(json());

app.use(urlencoded({ extended: true }));

app.use("/", userRoutes);
app.use("/", depenseRoutes);
app.use("/", categorieDepenseRoutes);

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

connection
  .sync()
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) => {
    console.log("Error", err);
  });
app.listen(3000, () => {
  console.log("Server started on port 3000");
});