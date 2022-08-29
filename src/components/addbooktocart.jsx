// import React from "react";
// import { useFormik } from "formik";
// import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
// import Joi from "joi";
import { useState } from "react";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import booksservice from "../services/booksservice";

function Addbooktocart({book}) {
  // const [error, setError] = useState("");
    const navigate = useNavigate();
    
    // useEffect(() => {
      // const book={
      //   title:book.title,
      //   description:book.description,
      //   price:book.price,
      //   img:book.img
      // }
        
        async function addbooktocart(book) {
          await booksservice.addBookToCart(book);
          navigate("/cart");
        }
    
        addbooktocart(book);
      // })
      return ( 
          null
       );
}

export default Addbooktocart;