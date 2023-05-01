import React from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <main className={styles.main}>
      <div className={styles.logo}>Blogs..</div>
      <nav className={styles.items}>
        <ul className={styles.item}>
          <Link href={`/ `}>
            <li>Home</li>
          </Link>
          {/* <li>About</li>
            <li>Gallery</li>
            <li>Blogs</li> */}
          <Link href="./credentialsLogin">
            <li>{session ? `${session.user.name}` : "Login"}</li>
          </Link>
        </ul>
      </nav>
    </main>
  );
};

export default Header;
