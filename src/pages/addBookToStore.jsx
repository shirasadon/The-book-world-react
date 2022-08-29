import React from "react";
import { useFormik } from "formik";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
import Joi from "joi";
import { addBook } from "../services/addbookservice";
import { toast } from "react-toastify";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";



const AddBookToStore = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      title: "",
      description: "",
      price: "",
      img: "",
    },
    validate: formikValidateUsingJoi({
      title: Joi.string().min(3).max(60).required(),
      description: Joi.string().min(5).max(1024).required(),
      price: Joi.string().min(2).max(400).required(),
      img: Joi.string().required(),
    }),
    async onSubmit(values) {
      try {
        console.log(values);
        const { ...body } = values;
        await addBook(body);
        console.log(body);
        toast("A new Book Created👏");

        navigate("/book");
      } catch ({ response }) {
        if (response.status === 400) {
          setError(response.data);
        }
      }
    },
  });
  return (
    <div className="container container-table" style={{ width: "600px" }}>
      <form onSubmit={form.handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}

        <Input
          type="text"
          label="Title"
          {...form.getFieldProps("title")}
          error={form.touched.title && form.errors.title}
        />

        <Input
          type="text"
          label="Description"
          {...form.getFieldProps("description")}
          error={form.touched.description && form.errors.description}
        />

        <Input
          type="text"
          label="price"
          {...form.getFieldProps("price")}
          error={form.touched.price && form.errors.price}
        />

        <Input
          type="text"
          label="image"
          {...form.getFieldProps("img")}
          error={form.touched.img && form.errors.img}
        />
        <div className="my-2">
          <button disabled={!form.isValid} className="btn btn-primary">
            Create Book
          </button>
        </div>
      </form>
      <Link
        style={{
          color: "#bf2b7a",
          fontFamily: "cursive",
          fontSize: "16px",
          textDecoration: "none",
        }}
        to="/businessaccesstickets"
      >
        edit book
      </Link>
      <br />
      <br />
    </div>
  );
};

export default AddBookToStore;
