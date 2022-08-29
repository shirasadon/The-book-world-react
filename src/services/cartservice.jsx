import httpService from "./httpservice";

export function getAllBooksInCart() {
  return httpService.get("/cart");
}

export function deleteBookFromCart(book) {
  const bookId = book._id;
  delete book._id;
  return httpService.delete(`/cart/${bookId}`, book);
}

export const addBookWishlist = (book) => {
  return httpService.post("/wishlist", book);
};
const cartservice = {
  //addBookToCart,
  getAllBooksInCart,
  deleteBookFromCart,
  addBookWishlist,
};

export default cartservice;
