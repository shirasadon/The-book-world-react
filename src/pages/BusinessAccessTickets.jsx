import { useState } from "react";
import { useEffect } from "react";
import addbookservice from "../services/addbookservice";
import Cardboard from "../components/cardboard";
const BusinessAccessTickets = () => {
  const [books, setBooks] = useState([]);

  async function getBooks() {
    const { data } = await addbookservice.getAllBooks();
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
            <Cardboard
              key={book._id}
              book={book}
            />
          ))
        )}
      </div>
    </>
  );
};
export default BusinessAccessTickets;
