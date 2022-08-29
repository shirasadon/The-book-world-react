import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Editbook from "./editbook";
const styleCard = {
  width: "17rem",
  backgroundColor: "",
  margin: "15px",
  color: "#bf2b7a",
  fontFamily: "cursive",
  fontSize: "",
};

function Cardboard({
  book,
}) {
  const { _id, title, price, description, img } = book;
  return (
    <>
      <Card style={styleCard}>
        <Card.Img
          style={{ width: "180px", height: "180px" }}
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>price: {price}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <br />
        </Card.Body>

        <Link  to={`/book/${_id}`} className="card-link">
         <i  className = "bi bi-trash-fill"></i>
        </Link>

        <Link  to={`/addbooktocart`} className="card-link">
       <i className = "bi bi-cart"></i>
        </Link>


        <button
            type="button"
            className="btn btn-warning mx-2"
            data-bs-toggle="modal"
            data-bs-target="#editmodal"
          >
            edit <i className="bi bi-pencil-fill"></i>
          </button>
          <Editbook book={book} Editbook={Editbook}></Editbook>
      </Card>
    </>
  );
}
export default Cardboard;
