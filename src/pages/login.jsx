import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-hot-toast";
import styles from "../styles/login.module.scss";

import { signIn, useSession } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import { GitHub } from "@mui/icons-material";
import { Alert } from "@mui/material";

const CreLogin = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showAlert, setShowAlert] = useState(true);

  const handleCloseAlert = () => {
    setShowAlert(false);
  };
  // LOGIN THOROUGH THE SESSIONS PROVIDED BY THE NEXT-AUTH
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      console.log(data);
      if (error) {
        throw new Error(error);
      }
    } catch (error) {
      setErrorMessage("Invalid Email or Password");
      setShowAlert(true);
      console.log(error);
    }
  };
  // const onLogin = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const { data } = await axios.post("/api/login", {
  //       email,
  //       password,
  //     });
  //     console.log("Login success", data);
  //     // toast.success("Login success");
  //     router.push("/");
  //   } catch (error) {
  //     console.log("Login failed from frontend", error);
  //     toast.error(error.message);
  //   }
  // };
  const handleGoogleLogin = async () => {
    await signIn("google");
  };
  const handleGithubLogin = async () => {
    await signIn("github");
  };

  if (session) {
    router.push("/");
  } else {
    return (
      <div className="flex justify-center items-center min-h-[100vh]">
        <div className="bg-slate-50 text-black px-4 sm:px-8 py-5 sm:py-4 rounded-xl">
          <div className="flex flex-col gap-10 ">
            <form onSubmit={submitHandler}>
              <h1 className="text-4xl sm:text-5xl text-center pt-2 font-thin md:mb-6">
                Login
              </h1>
              <div className="flex flex-col mb-4">
                <label
                  className="form-label font-light text-lg m-[5px]"
                  htmlFor="email_field"
                >
                  Email address
                </label>
                <input
                  required
                  type="email"
                  placeholder="abc@example.com"
                  id="email_field"
                  className="form-control form-control border-[1px] md:border-[2px] w-[320px]  sm:w-[380px] px-2 py-1 md:py-[9px] text-gray-600"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  placeholder="******"
                  required
                  id="password_field "
                  className="form-control border-[1px] md:border-[2px] w-[320px] sm:w-[380px] px-2 py-1 md:py-[9px] text-gray-600"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="btn flex gap-3">
                <button
                  // onClick={onLogin}
                  type="submit"
                  className="min-w-[80px] px-3 py-2 text-lg font-light hover:bg-[#ffd558] bg-[#f5e8c2]"
                >
                  Sign in
                </button>
                <Link href="./register">
                  <button className="min-w-[80px] px-3 py-2 text-lg font-light hover:bg-[#ffd558] bg-[#f5e8c2]">
                    Register
                  </button>
                </Link>
              </div>

              <div className=" mt-2 md:m-3">
                {errorMessage && showAlert && (
                  <Alert severity="error" onClose={handleCloseAlert}>
                    {errorMessage}
                  </Alert>
                )}
              </div>
              <div>
                <p>
                  Not a member?
                  <Link className={styles.reg} href="/register">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center gap-4 mt-2 sm:pb-5">
            <button
              className="hover:bg-[#ffd558] bg-[#f5e8c2] px-3 py-2  flex justify-center gap-1 text-xl font-light"
              onClick={handleGoogleLogin}
            >
              <GoogleIcon />
              Google
            </button>
            <button
              className="hover:bg-[#ffd558] bg-[#f5e8c2] px-3 py-2 flex justify-center gap-1 text-xl font-light"
              onClick={handleGithubLogin}
            >
              <GitHub />
              Github
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default CreLogin;
