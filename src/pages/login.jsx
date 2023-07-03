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
      <div className={styles.main}>
        <div className={styles.form}>
          <div className="">
            <form onSubmit={submitHandler}>
              <h1 className={styles.loginText}>Login</h1>
              <div className={styles.item}>
                <label className="form-label" htmlFor="email_field">
                  Email address
                </label>
                <input
                  required
                  type="email"
                  placeholder="abc@example.com"
                  id="email_field"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={styles.item}>
                <label className="form-label" htmlFor="password_field">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="******"
                  required
                  id="password_field"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                // onClick={onLogin}
                type="submit"
                className={styles.signBtn}
              >
                Sign in
              </button>
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
          <div className={styles.btnCont}>
            <button onClick={handleGoogleLogin}>
              <GoogleIcon />
              Google
            </button>
            <button className="" onClick={handleGithubLogin}>
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
