import fs from "fs";
import { IRawBooks, IBook } from "./interfaces.js";

const rawBooks: IRawBooks[] = JSON.parse(
  fs.readFileSync(`./src/data/rawBooks.json`, `utf-8`)
);

const books: IBook[] = rawBooks.map((rawBook) => {
  return {
    id: rawBook.id,
    idCode: rawBook.idCode,
    title: rawBook.title,
    description: rawBook.description,
    language: rawBook.language === "" ? "english" : rawBook.language,
  };
});

export const getBooks = () => {
  return rawBooks;
};

export const getBook = (id: number): IRawBooks => {
  return rawBooks.find((m) => m.id === id);
};

export const getFilteredBook = (id: number) => {
  return books.find((m) => m.id === id);
};

export const getApiInstructions = () => {
  return `
    <style>
    body{
        background-color:#333;
        padding: 1rem;
        color: #eee;
        font-family: courier;
    }
    a{
        color: orange;
      
    }
    
    </style>
    <h1>Book Site API</h1>
    <ul>
    <li>
    <a href="books">/Books</a> - get all books
    
    </li>
    <li>
    <a href="book/3">/book/3</a>  - get a book with id 3
    </li>
    <li>
    <a href="filtredBook/3">/filtredBook/3</a>  - get a filtred book with id 3
    </li>
    </ul>

    `;
};
