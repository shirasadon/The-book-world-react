import { useState } from "react";
import { useEffect } from "react";
import cartservice from "../services/cartservice";
import Cardboard from "../components/cardboard";
import Cartbook from "../components/cartbook";
const Cart = () => {
  const [books, setBooks] = useState([]);
  async function getBooks() {
    const { data } = await cartservice.getAllBooksInCart();
    setBooks(data);
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <div className="row">
        {!books.length ? (
          <p>No Books In Your Cart..</p>
        ) : (
          books.map((book) => (
            <Cartbook
              key={book._id}
              book={book}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Cart;
