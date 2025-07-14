import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Password and confirm password must be same");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }
    if (!/[!@#$%^&*()]/.test(password)) {
    setError("Password must contain at least one special character");
    return
  } else if(!/[A-Z]/.test(password)){
    setError("Password must contain any capital letter")
    return
  }

    setName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setError("")
  };
  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          submitHandler(e)
        }}
      >
        <div>
          <div
            className="bg-red-100 border border-red-400 text-red-900 mb-3 px-4 py-3 rounded-lg text-center font-semibold"
          >
            {error}
          </div>

          <label className="block font-medium mb-1">Full Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value)
            }}
            value={name}
            type="text"
            placeholder="John Doe"
            className="w-full text-black px-4 py-2 border border-black-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email Address</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            value={email}
            type="email"
            placeholder="example@mail.com"
            className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            value={password}
            type="password"
            placeholder="••••••••"
            className="w-full text-black px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Confirm Password</label>
          <input
            onChange={(e) => {
              setConfirmPassword(e.target.value)
            }}
            value={confirmPassword}
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
    </div>
  );
};

export default Form;
