import Card from "react-bootstrap/Card";
import { useState } from "react";
import { useEffect } from "react";
import cartservice from "../services/cartservice";

function Cartbook({ removeFromCart, book }) {
  const [refresh, setRefresh] = useState(false);
  const { _id, title, price, description, img } = book;
  const styleCard = {
    width: "17rem",
    backgroundColor: "",
    margin: "15px",
    color: "#bf2b7a",
    fontFamily: "cursive",
    fontSize: "",
  };

  const removeBookFromCart = async (id) => {
    await cartservice.deleteBookFromCart(id);
    setRefresh(!refresh);
  };

  return (
    <div>
      <Card style={styleCard}>
        <Card.Img
          style={{ width: "180px", height: "180px" }}
          variant="top"
          src={img}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <br />
        </Card.Body>
        <button
          type="button"
          className="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          delete <i className="bi bi-trash-fill"></i>
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title" id="exampleModalLabel">
                  delete book
                </h3>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="close"
                ></button>
              </div>
              <div className="modal-body">
                <p>are you sure to delete?</p>
                <h5>{title}</h5>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn bg-danger"
                  data-bs-dismiss="modal"
                >
                  cancel
                </button>
                <button
                  type="button"
                  className="btn btn bg-danger"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    removeBookFromCart(_id);
                  }}
                >
                  delete book from cart
                </button>
              </div>
            </div>
         </div> 
        </div> 
      </Card> 
    </div> 
  );
}

export default Cartbook;
