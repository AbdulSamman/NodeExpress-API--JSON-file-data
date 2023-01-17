import express from "express";
import * as model from "./model.js";
import logger from "./logger.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 3002;
app.use(logger);
app.get("/", (req, res) => {
    res.send(model.getApiInstructions());
});
app.get("/books", (req, res) => {
    res.json(model.getBooks());
});
app.get("/book/:id", (req, res) => {
    const id = Number(req.params.id);
    res.json(model.getBook(id));
});
app.get("/filtredBook/:id", (req, res) => {
    const id = Number(req.params.id);
    res.json(model.getFilteredBook(id));
});
app.get("*", (req, res) => {
    res.send(model.getApiInstructions());
});
app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map