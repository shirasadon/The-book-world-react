import httpService from "./httpservice";

export function getAllBooksInWishlist() {
  return httpService.get("/wishlist");
}

export function deleteBookFromWishlist(id) {
  return httpService.delete();
}
const wishlistservice = {
  getAllBooksInWishlist,
  deleteBookFromWishlist,
};

export default wishlistservice;
