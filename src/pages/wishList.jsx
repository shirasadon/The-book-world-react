import { useState } from "react";
import { useEffect } from "react";
import wishlistservice from "../services/wishlistservice";
import Cardboard from "../components/cardboard";
const Wishlist = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function getBooksFromWishlist() {
      const { data } = await wishlistservice.getAllBooksInWishlist();

      setBooks(data);
    }

    getBooksFromWishlist();
  }, []);

  return (
    <>
      <div className="row">
        {!books.length ? (
          <p>No Books..</p>
        ) : (
          books.map((book) => (
            <Cardboard
              linkToWishlist="Remove Book From WishList"
              key={book._id}
              book={book}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Wishlist;
