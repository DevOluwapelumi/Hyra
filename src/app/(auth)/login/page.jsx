"use client";

import Image from "next/image";
import img from "../../../../public/auth-img1.png";
import googleLogo from "../../../../public/google-logo.png";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      const postData = async () => {
        try {
          const res = await axios.post("api/auth/login", values);
          resetForm({ values: "" });
          console.log(res.data.message);
          toast.success(res.data.message);
          router.push("/teachings");
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
      username: yup.string().required("Username is required"),
      password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters"),
    }),
  });

  return (
    <div className="grid w-full grid-cols-2 gap-5 mx-auto md:flex-row md:w-3/4 min-h-[85vh] md:p-5">
      <div className="col-span-2 p-4 shadow md:p-32 rounded-xl md:col-span-1">
        <h2>Login to your account</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="my-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className={`form-input border-primary-200 ${
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
              className={`form-input border-primary-200 ${
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

          <div className="flex items-center justify-between my-3 font-medium">
            <div className="flex items-center justify-between">
              <input type="checkbox" name="rememberMe" id="rememberMe" />
              <label htmlFor="checkbox" className="ml-2">
                Remember Me
              </label>
            </div>

            <div>
              <Link href="/forgotpassword" className="text-primary-200">
                Forgot Password
              </Link>
            </div>
          </div>

          <div className="my-3">
            <button
              className="text-white form-btn bg-primary-200"
              type="submit"
            >
              Sign In
            </button>
            <button
              className="flex items-center justify-center mt-2 border form-btn border-primary-200"
              type="submit"
            >
              <Image
                src={googleLogo}
                alt="Google Logo"
                width={15}
                className="mr-2"
              />
              Sign in with Google
            </button>
          </div>

          <div className="flex items-center justify-center my-3 font-medium">
            <span>Don&#39;t have an account?</span>
            <Link
              href="/register"
              className="ml-2 font-semibold text-primary-200"
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>

      <div className="items-center justify-center hidden md:flex">
        <Image src={img} alt="Picture of a Muslim girl" className="w-2/6" />
      </div>
    </div>
  );
};

export default LoginPage;
