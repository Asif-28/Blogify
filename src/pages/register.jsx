
import axios from "axios";
import React, { useState } from "react";
import styles from "../styles/login.module.css"
import { useRouter } from "next/router";
const Register = () => {
    const router=useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/register", {
        name,
        email,
        password,
        
      });

    //   console.log(data);
router.push("/")
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.form}>
        <div className="col-10 col-lg-5 ">
          <form
            className="border border-secondary rounded p-4"
            onSubmit={submitHandler}
          >
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button 
              type="submit"
              className={styles.btn}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
