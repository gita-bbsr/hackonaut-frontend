// import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

import logo from "../public/logo/HACKONAUT.svg";

const Navbar = () => {
  const onScreenChange = (e) => {
    console.log(e);
  };
  return (
    <header className="w-full fixed flex justify-evenly items-center text-center mx-auto text-slate-200 p-2" style={{ display: "none" }}>
      <div>
        <span>
          <Image src={logo} width={120} />
        </span>
      </div>
      <nav className="p-4 space-x-5 ">
        <Link href="#about">
          <a>About</a>
        </Link>
        <Link href="#topic">
          <a>Topic</a>
        </Link>
        <Link href="#schedules">
          <a>Schedule</a>
        </Link>
        <Link href="#prizes">
          <a>Prizes</a>
        </Link>
        <Link href="#team">
          <a>Team</a>
        </Link>
        <Link href="/faq">
          <a>FAQ's</a>
        </Link>
      </nav>
      <div>
        <button>Get you Ticket</button>
      </div>
    </header>
  );
};

export default Navbar;
