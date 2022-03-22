import styles from "../styles/Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="text-center p-20 bg-gradient-to-br from-[#12141D] to-slate-800 text-white">
      <div className="flex justify-around text-left">
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div>Link of socal media</div>
        </div>
        <div>
          Page
          <nav className="flex flex-col">
            <Link href="#about">
              <a>About</a>
            </Link>
            <Link href="#topic">
              <a>Topic</a>
            </Link>
            <Link href="#schedule">
              <a>Schedule</a>
            </Link>
            <Link href="#prizes">
              <a>Prizes</a>
            </Link>
            <Link href="#team">
              <a>Team</a>
            </Link>
          </nav>
        </div>
        <div>
          Help
          <nav className="flex flex-col">
            <Link href="/faq">
              <a>FAQ&rsquo;s</a>
            </Link>

            <Link href="/contact">
              <a>Contact Us</a>
            </Link>
            <Link href="/term">
              <a>Terms & Conditions</a>
            </Link>
            <Link href="/policy">
              <a>Privacy Policy</a>
            </Link>
          </nav>
        </div>
        <div>Venue</div>
      </div>
      <div>
        <p>@copyright 2022, All rights Reserved by Hackonaut | Gita Autonomous Collage</p>{" "}
      </div>
    </footer>
  );
};

export default Footer;
