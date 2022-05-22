import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    reset,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // handle form submit of React-Hook-Form
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    reset();
    navigate("/MyActions");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
          <div className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4">
            EZ Stocks Login
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-normal mb-2"
              htmlFor="username"
            >
              User
            </label>
            <input
              {...register("user", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="user"
              v-model="form.text"
              type="text"
              required
              autoFocus
              placeholder="Usuario"
            >
            </input>
            <span className="text-red-500 ml-1">
            {errors.user?.type === "required" && "User is required"}
            </span>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-normal mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              v-model="form.password"
              type="password"
              placeholder="Password"
              name="password"
              required
              autoComplete="current-password"
            ></input>
            <span className="text-red-500 ml-1">
            {errors.password?.type === "required" && "password is required"}
            </span>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Gau Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
