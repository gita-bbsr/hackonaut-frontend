import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="container fixed w-full z-10 left-1/2 -translate-x-1/2 px-4">
      <div className="flex justify-between items-center">
        <Link href="/">
          <a>
            <Image src="/vercel.svg" width={120} height={80} />
          </a>
        </Link>
        <nav>
          <Link href="/contact">
            <a>Contact us</a>
          </Link>
          <Link href="/register">
            <a className="px-3">Registor</a>
          </Link>
          <Link href="/about">
            <a>About us</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
