import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Alert } from "@mui/material";
import Link from "next/link";
const Register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showAlert, setShowAlert] = useState(true);
  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  const validatePassword = () => {
    // Regex pattern for password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    // Check if the password matches the pattern
    const isValid = passwordPattern.test(password);

    // Update the validity state
    setValid(isValid);
    // console.log(valid);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (valid) {
      try {
        const { data } = await axios.post("/api/register", {
          name,
          email,
          password,
        });

        console.log("register success", data);
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorMessage("Please enter a valid password ");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('./assets/b.jpg')",
        filter: "brightness(0.9)",
        overflow: "hidden",
      }}
      className="flex justify-center bg-center bg-cover min-h-[100vh] items-center "
    >
      <div className="bg-slate-50  text-black px-4 sm:px-8 py-5 sm:py-4 rounded-xl ">
        <div className="flex flex-col gap-10 ">
          <h1 className=" text-4xl sm:text-5xl text-center pt-2 font-thin">
            Register
          </h1>
          <form className="" onSubmit={submitHandler}>
            <div className="flex flex-col mb-4">
              <label
                className="form-label font-light text-lg m-[5px]"
                htmlFor="name_field"
              >
                Name
              </label>
              <input
                placeholder="John"
                type="text"
                id="name_field"
                className="form-control border-[1px] md:border-[2px] w-[320px]  sm:w-[380px] px-2 py-1 md:py-[9px] text-gray-600"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                className="form-label font-light text-lg m-[5px]"
                htmlFor="email_field"
              >
                Email address
              </label>
              <input
                type="email"
                placeholder="abc@example.com"
                id="email_field"
                className="form-control border-[1px] md:border-[2px] w-[320px] sm:w-[380px] px-2 py-1 md:py-[9px] text-gray-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                className="form-label font-light text-lg m-[5px]"
                htmlFor="password_field"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="*****"
                id="password_field"
                className="form-control border-[1px] md:border-[2px] w-[320px] sm:w-[380px] px-2 py-1 md:py-[9px] text-gray-600"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="btn flex gap-4 ">
              <button
                type="submit"
                onClick={validatePassword}
                className="min-w-[80px] px-3 py-2 text-lg font-light hover:bg-[#ffd558] bg-[#f5e8c2]"
              >
                Register
              </button>
              <Link href="./login">
                <button className="min-w-[80px] px-3 py-2 text-lg font-light hover:bg-[#ffd558] bg-[#f5e8c2]">
                  Login
                </button>
              </Link>
            </div>

            {errorMessage && showAlert && (
              <Alert
                className="m-2 md:m-3 "
                severity="error"
                onClose={handleCloseAlert}
              >
                {errorMessage}
              </Alert>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
