import Input from "../components/Input";
import { useFormik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginUser } from "../services/userservice";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
import joi from "joi";
import { useAuth } from "../context/auth.context";

const Login = ({ redirect, redirectBiz }) => {
  const [error, setError] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      userEmail: "",
      password: "",
    },
    validate: formikValidateUsingJoi({
      userEmail: joi
        .string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      password: joi.string().min(6).max(1024).required(),
    }),

    async onSubmit(values) {
      try {
        const dataFromLogin = await LoginUser(values);
        if (dataFromLogin.biz) {
          navigate(redirectBiz);
        } else if (redirect) {
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

        <button disabled={!form.isValid} className="btn btn-primary">
          sign In
        </button>
      </form>
    </div>
  );
};
export default Login;
