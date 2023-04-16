import React from 'react'
import styles from "./Header.module.css"
import Link from 'next/link'

const Header = () => {
  return (
<main className={styles.main}>
    <div className={styles.logo}>Blogs..</div>
    <nav className={styles.items}>
        <ul className={styles.item}>
           <Link href={`/ `}><li>Home</li></Link> 
            <li>About</li>
            <li>Contact</li>
            <li>Blogs</li>
            <Link href='./credentialsLogin'><li>Login</li></Link>
            
        </ul>
    </nav>
</main>
    )
}

export default Header