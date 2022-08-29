import { useState } from "react";
import { useEffect } from "react";
import booksservice from "../services/booksservice";
import Cardboard from "../components/cardboard";

function Books() {
  const [books, setBooks] = useState([]);
  async function getBooks() {
    const { data } = await booksservice.getAllBooks();
    setBooks(data);
  }
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <>
      <div className="row">
        {!books.length ? (
          <p>No Books..</p>
        ) : (
          books.map((book) => (
            <Cardboard  key={book._id} book={book}
            
            />
          ))
        )}
      </div>
    </>
  );
}

export default Books;
