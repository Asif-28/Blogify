import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

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
      <div className="container flex gap-8 sm:gap-0 text-black ">
        <div className="logo sm:flex-1 text-2xl sm:text-2xl ">Logo</div>
        <div className="items flex sm:flex-1 gap-8">
          <div className="flex-1 ">
            <ul className="flex justify-center gap-4 text-[18px] sm:text-[20px] sm:font-normal ">
              <li className="hover:text-[#ff3636] font-light">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-[#ff3636] font-light">
                <Link href="#">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="login flex-1 text-xl text-[18px] sm:text-[20px] sm:font-normal">
            <Link href="./credentialsLogin">
              <li className="list-none hover:text-[#ff3636] font-light ">
                {session ? `${session.user.name}` : "Login"}
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
