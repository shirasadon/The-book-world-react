import React from "react";
import { useFormik } from "formik";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
import Joi from "joi";
import Input from "../components/Input";
import { useState } from "react";
import{editBook}from "../services/addbookservice"
function Editbook({ book }) {
    const [error, setError] = useState("");


    const form = useFormik({
      validateOnMount: true,
      initialValues: {
        title:book.title,
        description:book.description,
        price: book.price,
        img:book.img,
      },
      validate: formikValidateUsingJoi({
        title: Joi.string().min(3).max(60).required(),
        description: Joi.string().min(5).max(1024).required(),
        price: Joi.string().min(2).max(400).required(),
        img: Joi.string().required(),
      }),
       onSubmit(values) {
        try{
          editBook(book._id, values);
        }catch({response}){
          if (response.status === 400) {
               setError(response.data);
             }
        }
      },
    })
 
    return ( 
      
        <>
        <div
          class="modal fade"
          id="editmodal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form autoComplete="off" noValidate onSubmit={form.handleSubmit}>
                  {error && <div className="alert alert-danger ">{error}</div>}
                  <Input
                    name="title"
                    label="title"
                    {...form.getFieldProps("title")}
                    error={form.touched.title && form.errors.title}
                  />
                  <Input
                    name="description"
                    label="description"
                    {...form.getFieldProps("description")}
                    error={
                      form.touched.description && form.errors.description
                    }
                  />
                  <Input
                    name="price"
                    label="price"
                    {...form.getFieldProps("price")}
                    error={form.touched.price && form.errors.price}
                  />
                  <Input
                    name="img"
                    label="img"
                    {...form.getFieldProps("img")}
                    error={form.touched.img && form.errors.img}
                  />
                  <div className="my-2">
                    <button
                      disabled={!form.isValid}
                      className="btn btn-success"
                      type="submit"
                      data-bs-dismiss="modal"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

export default Editbook;