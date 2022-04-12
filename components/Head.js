import Image from "next/image";
import Gallery from "./Gallery.js";
import Navbar from "./Navbar";

import lineImg from "../public/image/line.svg";
import { useRouter } from "next/router";

const head = () => {
  const router = useRouter();

  const getTicket = (e) => {
    e.preventDefault();
    router.push("/register");
  };

  return (
    <>
      <Navbar />
      <section id="intro" className=" relative text-center lg:px-44 sm:px-28 px-8 py-52 bg-gradient-to-br from-[#12141D] to-slate-800 text-white">
        <div className=" absolute xl:w-[15vw] xl:h-[15vw] w-[250px] h-[250px] lg:top-32 top-44 lg:left-[16%] bg-orange-400 rounded-full z-20"></div>
        <div className="relative flex flex-col items-center z-20 space-y-4">
          <h1 className="uppercase">
            Open Idea <span>Hackathon</span>
            <br /> of Odisha in <span>2022</span>
          </h1>
          <p className="max-w-prose text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam natus nemo laboriosam repellendus explicabo nostrum ipsam corporis consequuntur nihil corrupti ipsum
            adipisci, quo laborum ex!
          </p>
          <div className="md:space-x-7 space-y-4">
            <button className="md:inline block" onClick={getTicket}>
              Get Your Ticket
            </button>
            <button className="bg-transparent border-4">Check Topic</button>
          </div>
        </div>

        <Gallery />
        <div className="absolute bottom-0 right-0 z-10">
          <Image src={lineImg} alt="line-svg" />
        </div>
      </section>
    </>
  );
};

export default head;
