import axios from "axios";
import React, { useState } from "react";
import styles from "../styles/login.module.scss";
import { useRouter } from "next/router";
import { Alert } from "@mui/material";
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
    console.log(valid);
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

        console.log(data);
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrorMessage("Please enter a valid password ");
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 1000);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.form}>
        <div className=" ">
          <form className="" onSubmit={submitHandler}>
            <h1 className={styles.loginText}>Register</h1>

            <div className={styles.item}>
              <label className="form-label" htmlFor="name_field">
                Name
              </label>
              <input
                placeholder="John"
                type="text"
                id="name_field"
                className="form-control"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className={styles.item}>
              <label className="form-label" htmlFor="email_field">
                Email address
              </label>
              <input
                type="email"
                placeholder="abc@example.com"
                id="email_field"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.item}>
              <label className="form-label" htmlFor="password_field">
                Password
              </label>
              <input
                type="password"
                placeholder="*****"
                id="password_field"
                className="form-control"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              onClick={validatePassword}
              className={styles.regBtn}
            >
              Register
            </button>
            {errorMessage && showAlert && (
              <Alert
                className="m-2 md:m-3"
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
