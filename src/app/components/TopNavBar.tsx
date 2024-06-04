import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import styles from "../styles/TopNavBar.module.css"
import logo from "../images/Hungery_Monster.jpeg"


const TopNavBar: React.FC = () => {
    return (
        <nav className={styles.topNav}>
            <div className={styles.navLeft}>
                <Image src={logo} alt="Logo" className={styles.logo} />
                <h1 className={styles.mosterImg}>Hungry Monster</h1>
            </div>
            <ul className={styles.navRight}>
                <li><Link href="/" className={styles.homeLink}>Home</Link></li>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Recipes</Link></li>
                <li><Link href="/">Blog</Link></li>
            </ul>
        </nav>
    );
};

export default TopNavBar;
