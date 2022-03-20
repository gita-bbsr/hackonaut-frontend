import styles from "../styles/Footer.module.css";
import Link from "next/link";
// TODO: Footer update
const Footer = () => {
  return (
    <footer className="text-center lg:p-20 p-8 bg-gradient-to-br from-[#12141D] to-slate-800 text-white">
      <div className="grid md:grid-cols-4  grid-cols-2 justify-around md:text-left text-center gap-8">
        <div className="lg:col-span-1 col-span-2">
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
        <div className="md:col-span-1 col-span-2">
          <h4>Venue</h4>
          <div id="map" className="w-full h-60"></div>
        </div>
      </div>
      <div>
        <p>@copyright 2022, All rights Reserved by Hackonaut | Gita Autonomous Collage</p>{" "}
      </div>
    </footer>
  );
};

export default Footer;
