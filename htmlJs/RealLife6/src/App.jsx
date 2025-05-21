/* eslint-disable react/jsx-key */
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import User from "./components/User.jsx";
// src/components/User.jsx

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (formData.password.length < 8) {
      setError("Password must be more than 8 characters");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Password didn't match with confirm password");
      return;
    }

    if (!/[!@#$%^&*()<>,."]/.test(formData.password)) {
      setError("Password must contain a special character!");
      return;
    }

    if (!/[1234567890]/.test(formData.password)) {
      setError("Password must contain a number!");
      return;
    }

    if (!/[A-Z]/.test(formData.password)) {
      setError("Password must contain a capital letter!");
      return;
    }

    // setUsers([...users, formData]);

    setUsers((prevUsers) => [
      ...prevUsers,
      {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      },
    ]);

    setError("");
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    toast.success("Form Submitted!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
        <ToastContainer />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="w-full max-w-md bg-white shadow-lg rounded-xl pt-12 pb-15 pl-12 pr-12 flex flex-col gap-5"
        >
          {/* Form Title */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Create Your Account
            </h2>
            <p className="text-gray-500 mt-1 mb-4">
              Join us and start your journey!
            </p>
          </div>

          {error && (
            <p className="text-red-400 text-l text-center font-medium">
              {error}
            </p>
          )}

          <input
            className="w-full border border-gray-300 px-4 py-3 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="fullName"
            placeholder="Enter your name"
            autoComplete="name"
            required
            value={formData.fullName}
            onChange={handleChange}
          />

          <input
            className="w-full border border-gray-300 px-4 py-3 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <input
            className="w-full border border-gray-300 px-4 py-3 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="new-password"
            required
            value={formData.password}
            onChange={handleChange}
          />

          <input
            className="w-full border border-gray-300 px-4 py-3 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            autoComplete="new-password"
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full text-lg py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all mt-6"
          >
            Sign Up
          </button>
        </form>
        <div>
          {users.map((user, index) => (
            <User key={index} fullName={user.fullName} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
