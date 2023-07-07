import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
// import Logout from "./Logout";

// const Header = () => {
//   const { data: session } = useSession();
//   return (
//     <main className={styles.main}>
//       <div className={styles.logo}>Blogs..</div>
//       <nav className={styles.items}>
//         <ul className={styles.item}>
//           <Link href={`/ `}>
//             <li>Home</li>
//           </Link>
//           <Link href="./credentialsLogin">
//             <li>{session ? `${session.user.name}` : "Login"}</li>
//           </Link>
//         </ul>
//       </nav>
//     </main>
//   );
// };
const Logout = () => {
  return <button onClick={signOut}>Logout</button>;
};

const Header = () => {
  const [show, handleShow] = useState(false);
  const { data: session } = useSession();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && `nav__black`}`}>
      <div className="container justify-between px-3  sm:px-6 flex max-w-[1280px] mx-auto">
        <div className="logo sm:flex-1 text-2xl sm:text-2xl ">Logo</div>
        <div className="flex sm:flex-1 gap-8 ">
          <div className="flex-1 ">
            <ul className="flex justify-center gap-2 sm:gap-6 text-[17px] sm:text-[20px] sm:font-normal ">
              <li className="sm:hover:border sm:hover-border-[#e5eaf3] sm:px-[0.4rem] font-light sm:w-[70px] sm:text-center">
                <Link href="/">Home</Link>
              </li>
              <li className="sm:hover:border sm:hover-border-[#e5eaf3] sm:px-[0.4rem] font-light sm:w-[60px] sm:text-center">
                <Link href="#">Blog</Link>
              </li>
              <li className="sm:hover:border sm:hover-border-[#e5eaf3] sm:px-[0.4rem] font-light sm:w-[90px] sm:text-center">
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="login flex-2 text-[17px] sm:text-[20px] sm:font-normal">
            <Link href="./login">
              <li className="list-none font-light border px-[0.2rem] sm:border-[#fff] sm:px-[0.4rem]">
                {session ? <Logout /> : "Login"}
              </li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// .nav {
//   position: fixed;
//   top: 0;
//   padding: 10px;
//   width: 100%;
//   height: 50px;
//   z-index: 1;
//   transition-timing-function: ease-in;
//   transition: all 0.5s;
// }
