"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRouter_1 = __importDefault(require("./routes/userRouter"));
const depenseRouter_1 = __importDefault(require("./routes/depenseRouter"));
const categorieDepenseRouter_1 = __importDefault(require("./routes/categorieDepenseRouter"));
const config_1 = __importDefault(require("./db/config"));
const body_parser_1 = require("body-parser");
const app = (0, express_1.default)();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use((0, body_parser_1.json)());
app.use((0, body_parser_1.urlencoded)({ extended: true }));
app.use("/", userRouter_1.default);
app.use("/", depenseRouter_1.default);
app.use("/", categorieDepenseRouter_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
config_1.default
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
