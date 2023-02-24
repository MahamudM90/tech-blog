"use client";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const LoginForm = () => {
  return (
    <div className="max-w-md mx-auto">
      <Formik
        initialValues={{ password: "", confirmPassword: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="********"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  touched.password && errors.password ? "border-red-500" : ""
                }`}
              />
              <ErrorMessage
                name="password"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-bold mb-2"
              >
                Confirm Password
              </label>
              <Field
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="********"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  touched.confirmPassword && errors.confirmPassword
                    ? "border-red-500"
                    : ""
                }`}
              />
              <ErrorMessage
                name="confirmPassword"
                className="text-red-500 text-xs italic"
              />
            </div>
            <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center"
            >
              Submit
            </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
