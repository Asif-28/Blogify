import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

import { signIn, useSession } from "next-auth/react";


const CreLogin = () => {
    const router = useRouter();
    const { data: session } = useSession()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
    });
    // router.push('./account')

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGoogleLogin = async () => {
    await signIn('google')
   
  }
  const handleGithubLogin = async () => {
    await signIn('github')
    
  }

if(session)
{
router.push('/account')
}
else{
    return (
        <div className="">
          <div className="">
            <div className="col-10 col-lg-5 ">
              <form
                className=""
                onSubmit={submitHandler}
              >
                <h1 className="">Login</h1>
                <div className="">
                  <label className="form-label" htmlFor="email_field">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email_field"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
    
                <div className="">
                  <label className="form-label" htmlFor="password_field">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password_field"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
    
                <button
                  type="submit"
                  className=""
                >
                  Sign in
                </button>
    
                <div className="">
                  <p>
                    Not a member? <Link href="/register">Register</Link>
                  </p>
                </div>
              </form>
            </div>
            <button onClick={handleGoogleLogin}>
            Sign in with Google
          </button>
          
          <button onClick={handleGithubLogin}>
            Sign in with Github
          </button>
          </div>
        </div>
      );
    
}
};

export default CreLogin;