'use client';

import React, { useState } from "react";
import Head from "next/head";
import Cookies from "js-cookie"; // Ensure you have this installed if you want to use cookies
import axios from "axios"; // Ensure you have axios installed for API calls
import { useRouter } from "next/router";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false); // Track if the form is for login or signup

  const router = useRouter();

  const handleSignup = async () => {
    console.log(name, email, password); // Log the current state values
    if (!name.trim() || !email.trim() || !password.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.post(`/api/user/register`, {
        name,
        email,
        password,
      });
      if (res.data) {
        Cookies.set("user", res.data.token, { expires: 7 }); // Save user token in cookies
        alert(res.data.msg);
        router.push("/"); // Redirect after successful signup
      }
    } catch (error) {
      console.error(error.response);
      alert(error.response?.data?.msg || "Signup failed. Please try again.");
    }
  };

  const handleLogin = async () => {
    console.log(email, password); // Log the current state values
    if (!email.trim() || !password.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.post(`/api/user/login`, {
        email,
        password,
      });
      if (res.data) {
        Cookies.set("user", res.data.token, { expires: 7 }); // Save user token in cookies
        alert(res.data.msg);
        router.push("/"); // Redirect after successful login
      }
    } catch (error) {
      console.error(error.response);
      alert(error.response?.data?.msg || "Login failed. Please try again.");
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    // Clear fields when switching between forms
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Head>
        <title>OYO - Login</title>
      </Head>
      <div className="flex h-screen justify-center items-center relative bg-login-background">
        <div className="absolute w-full top-5 px-20 flex items-center text-red-600">
          <h2 className="text-5xl font-bold mr-5">OYO</h2>
          <p className="font-bold text-2xl text-white">
            Hotels and homes across 800 cities, 24+ countries
          </p>
        </div>

        <div className="flex justify-center items-center w-9/12 mt-20">
          <div>
            <p className="font-bold text-5xl text-justify text-white">
              There's a smarter way to OYO around
            </p>
            <p className="text-2xl mt-5 text-justify text-white">
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
              partners.
            </p>
          </div>
          <div className="ml-20 pb-40 w-15/12 border-2 items-center border-white h-96 bg-white">
            <p className="h-10 flex items-center px-10 bg-gradient-to-r from-red-400 to bg-red-600 text-lg font-bold text-white">
              Sign up & Get ₹500 OYO Money
            </p>
            <div className="px-10">
              <h3 className="text-2xl font-bold my-1">{isLogin ? "Login" : "Signup"}</h3>
              <p className="font-bold text-lg mb-1">
                Please enter your details to continue
              </p>
              {!isLogin && (
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="outline-none border my-2 border-black px-3 py-1 w-96 h-10"
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <input
                type="email"
                placeholder="Enter your email..."
                className="outline-none border my-2 border-black px-3 py-1 w-96 h-10"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="outline-none border my-2 border-black px-3 py-1 w-96 h-10"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="submit"
                className="w-96 h-10 text-lg font-bold bg-red-400 hover:cursor-pointer hover:bg-red-600 text-white my-1 rounded-lg"
                onClick={isLogin ? handleLogin : handleSignup}
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
              <p className="my-1 text-xl">
                <span>{isLogin ? "Don't have an account?" : "Already have an account?"}</span>
                <span
                  className="ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer"
                  onClick={toggleForm}
                >
                  {isLogin ? " Sign Up" : " Login"}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
