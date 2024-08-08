"use client";

import Image from "next/image";
import img from "../../../../public/auth-img1.png";
import googleLogo from "../../../../public/google-logo.png";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterPage = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values, { resetForm }) => {
      const postData = async () => {
        try {
          const res = await axios.post("api/auth/register", values);
          resetForm({ values: "" });
          console.log(res.data.message);
          toast.success(res.data.message);
          router.push("/login");
        } catch (err) {
          resetForm({ values: "" });
          console.error(err.response.data.message);
          toast.error(err.response.data.message);
        }
      };

      // Call the async function
      postData();
    },
    validationSchema: yup.object({
      name: yup.string().required("Name is required"),
      email: yup.string().email("Invalid email").required("Email is required"),
      username: yup.string().required("Username is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
      confirmPassword: yup
        .string()
        .required("Confirm password is required")
        .oneOf([yup.ref("password"), null], "Passwords do not match"),
    }),
  });

  return (
    <div className="grid w-full grid-cols-2 gap-5 mx-auto md:flex-row md:w-3/4 min-h-[85vh] md:p-5">
      <div className="col-span-2 p-4 shadow md:p-10 rounded-xl md:col-span-1">
        <h2>Create an account</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="my-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className={`form-input ${
                formik.touched.name && formik.errors.name
                  ? "border-red-600 focus:border-red-600 focus:ring-red-600"
                  : ""
              }`}
              placeholder="Aaisha"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <small className="text-red-600">{formik.errors.name}</small>
            )}
          </div>

          <div className="my-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className={`form-input ${
                formik.touched.email && formik.errors.email
                  ? "border-red-600 focus:border-red-600 focus:ring-red-600"
                  : ""
              }`}
              placeholder="aaisha@gmail.com"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <small className="text-red-600">{formik.errors.email}</small>
            )}
          </div>

          <div className="my-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className={`form-input ${
                formik.touched.username && formik.errors.username
                  ? "border-red-600 focus:border-red-600 focus:ring-red-600"
                  : ""
              }`}
              placeholder="Aaisha"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username && (
              <small className="text-red-600">{formik.errors.username}</small>
            )}
          </div>

          <div className="my-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className={`form-input ${
                formik.touched.password && formik.errors.password
                  ? "border-red-600 focus:border-red-600 focus:ring-red-600"
                  : ""
              }`}
              placeholder="Enter password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <small className="text-red-600">{formik.errors.password}</small>
            )}
          </div>

          <div className="my-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm password
            </label>
            <input
              type="password"
              className={`form-input ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? "border-red-600 focus:border-red-600 focus:ring-red-600"
                  : ""
              }`}
              placeholder="Enter confirm password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <small className="text-red-600">
                  {formik.errors.confirmPassword}
                </small>
              )}
          </div>

          <div className="my-3">
            <button className="form-btn bg-secondary-100" type="submit">
              Sign Up
            </button>
            <button
              className="flex items-center justify-center mt-2 border form-btn border-secondary-100"
              type="submit"
            >
              <Image
                src={googleLogo}
                alt="Google Logo"
                width={15}
                className="mr-2"
              />
              Continue with Google
            </button>
          </div>

          <div className="flex items-center justify-center my-3 font-medium">
            <span>Have an account?</span>
            <span>
              <Link
                href="/login"
                className="ml-2 font-semibold text-primary-200"
              >
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
      <div className="items-center justify-center hidden md:flex">
        <Image src={img} alt="Picture of a Muslim girl" className="w-2/6" />
      </div>
    </div>
  );
};

export default RegisterPage;
