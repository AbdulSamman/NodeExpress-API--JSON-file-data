import express from "express";
import * as model from "./model.js";
import logger from "./logger.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.use(logger);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send(model.getApiInstructions());
});

app.get("/books", (req: express.Request, res: express.Response) => {
  res.json(model.getBooks());
});

app.get("/book/:id", (req: express.Request, res: express.Response) => {
  const id = Number(req.params.id);
  res.json(model.getBook(id));
});

app.get("/filtredBook/:id", (req: express.Request, res: express.Response) => {
  const id = Number(req.params.id);
  res.json(model.getFilteredBook(id));
});

app.get("*", (req: express.Request, res: express.Response) => {
  res.send(model.getApiInstructions());
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
