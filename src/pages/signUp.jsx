import { useFormik } from "formik";
import { useState } from "react";
import { toast } from "react-toastify";

import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
import Input from "../components/Input";
import joi from "joi";
import { CreateUser } from "../services/userservice";
import { useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";

const Signup = ({redirect}) => {
  const [error, setError] = useState("");
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      userName: "",
      userPhone: "",
      userEmail: "",
      password: "",
    },
    validate: formikValidateUsingJoi({
      userName: joi.string().min(5).max(1024).required(),
      userPhone: joi.string().min(5).max(1024).required(),
      userEmail: joi
        .string()
        .min(3)
        .max(60)
        .required()
        .email({ tlds: { allow: false } }),
      password: joi.string().min(2).max(400).required(),
    }),

    async onSubmit(values) {
      try {
        
        await CreateUser({ ...values, biz: false });
        toast("Your account is ready 👏");
        if (redirect) {
          navigate(redirect);
        }
      } catch ({ response }) {
        if (response.status === 400) {
          setError(response.data);
        }
      }
    },
  });
  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div class="container container-table" style={{ width: "600px" }}>
      <form noValidate onSubmit={form.handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}
        <Input
          label="userEmail"
          name="userEmail"
          type="email"
          {...form.getFieldProps("userEmail")}
          error={form.touched.userEmail && form.errors.userEmail}
        />
        <Input
          label="password"
          name="password"
          type="password"
          {...form.getFieldProps("password")}
          error={form.touched.password && form.errors.password}
        />
        <Input
          label="userName"
          name="userName"
          type="text"
          {...form.getFieldProps("userName")}
          error={form.touched.userName && form.errors.userName}
        />
        <Input
          label="userPhone"
          name="userPhone"
          type="string"
          {...form.getFieldProps("userPhone")}
          error={form.touched.userPhone && form.errors.userPhone}
        />

        <button disabled={!form.isValid} className="btn btn-primary">
          sign up
        </button>
      </form>
    </div>
  );
};
export default Signup;
