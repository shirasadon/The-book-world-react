import httpService from "./httpservice";

export const addBook = (book) => {
  return httpService.post("/book", book);
};

export function getAllBooks() {
  return httpService.get("/book");
}

export function editBook(id,book) {
 
  return httpService.put(`/book/${id}`,book);
}

export function deleteBook(id) {
  return httpService.delete(`/book/${id}`);
}
const addbookservice = {
  addBook,
  getAllBooks,
  deleteBook,
  editBook,
};

export default addbookservice;
