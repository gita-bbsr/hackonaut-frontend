import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

import logo from "../public/logo/logo-light.png";

const Navbar = () => {
  const router = useRouter();
  const [showMe, setShowMe] = useState(false);
  const onScreenChange = (e) => {
    console.log(e);
  };
  const navToggle = () => {
    setShowMe(!showMe);
  };

  return (
    <header className="w-full fixed flex lg:justify-evenly justify-between items-center text-center mx-auto text-slate-200 px-2 py-2 bg-[#12141D] z-40">
      <div>
        <span className="relative">
          <Link href="#intro">
            <a>
              <Image src={logo} width={210} height={41} alt="logo" />
            </a>
          </Link>
        </span>
      </div>
      <button
        id="menuBtn"
        className={showMe ? "hamburger block md:hidden focus:outline-none open ml-10" : "ml-10 hamburger block md:hidden focus:outline-none"}
        type="button"
        onClick={navToggle}
      >
        <span className="hamburger__top-bun"></span>
        <span className="hamburger__bottom-bun"></span>
      </button>
      <nav className="md:flex flex-col sm:flex-row p-4 space-x-5 hidden ">
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
        <Link href="#faq">
          <a>FAQ&rsquo;s</a>
        </Link>
      </nav>
      <div className="lg:inline-block hidden">
        <button className="bg-gray-700 py-3 px-4" onClick={() => router.push("/register")}>
          Get you Ticket
        </button>
      </div>
    </header>
  );
};

export default Navbar;
