import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import addbookservice from "../services/addbookservice"


function DeleteBook() {
    const navigate = useNavigate();
    const { id } = useParams();
  
    useEffect(() => {
      async function deleteBook() {
        await addbookservice.deleteBook(id);
        navigate("/book");
      }
  
      deleteBook();
    })
    return ( 
        null
     );
}


export default DeleteBook;