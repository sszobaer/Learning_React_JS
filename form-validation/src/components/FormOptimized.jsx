import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import User from "./User";

const FormOptimized = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Password and confirm password must be same");
      return;
    }
    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    if (!/[!@#$%^&*()]/.test(formData.password)) {
      setError("Password must contain at least one special character");
      return;
    } else if (!/[A-Z]/.test(formData.password)) {
      setError("Password must contain any capital letter");
      return;
    }

    toast.success("✅ Submitted", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setUsers((prevUser) => [
      ...prevUser,
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      },
    ]);

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setError("");
  };
  return (
    <>
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create an Account
        </h2>

        <form
          className="space-y-4"
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <div>
            <div className="bg-red-100 border border-red-400 text-red-900 mb-3 px-4 py-3 rounded-lg text-center font-semibold">
              {error}
            </div>

            <label className="block font-medium mb-1">Full Name</label>
            <input
              onChange={changeHandler}
              value={formData.name}
              name="name"
              type="text"
              placeholder="John Doe"
              className="w-full text-black px-4 py-2 border border-black-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email Address</label>
            <input
              onChange={changeHandler}
              value={formData.email}
              name="email"
              type="email"
              placeholder="example@mail.com"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              onChange={changeHandler}
              name="password"
              value={formData.password}
              type="password"
              placeholder="••••••••"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Confirm Password</label>
            <input
              onChange={changeHandler}
              value={formData.confirmPassword}
              name="confirmPassword"
              type="password"
              placeholder="••••••••"
              className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <ToastContainer></ToastContainer>
      </div>
      {users.map((elem) => {
        return <User name={elem.name} email={elem.password}/>
      })}
    </>
  );
};

export default FormOptimized;
