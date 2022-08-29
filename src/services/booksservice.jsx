import httpService from "./httpservice";

export const addBookToCart = (book) => {
  return httpService.post("/cart", book);
};

export function getAllBooks() {
  return httpService.get("/book");
}

const booksservice = {
  addBookToCart,
  getAllBooks,
};

export default booksservice;
