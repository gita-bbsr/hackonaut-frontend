import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Image src="/vercel.svg" width={120} height={80} />
        </a>
      </Link>
      <nav className={styles.nav}>
        <Link href="/contact">
          <a>Contact us</a>
        </Link>
        <Link href="/register">
          <a>registor</a>
        </Link>
        <Link href="/about">
          <a>About us</a>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
