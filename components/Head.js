import Image from "next/image";
import Gallery from "./Gallery.js";

import lineImg from "../public/image/line.svg";
const head = () => {
  return (
    <section id="head-section" className="text-center lg:px-44 sm:px-28 px-8 py-44 bg-gradient-to-br from-[#12141D] to-slate-800 text-white">
      <div className="relative flex flex-col items-center z-20 space-y-4">
        <h1>
          Open Idea <span>Hackathon</span>
          <br /> of Odisha in <span>2022</span>
        </h1>
        <p className="max-w-prose text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam natus nemo laboriosam repellendus explicabo nostrum ipsam corporis consequuntur nihil corrupti ipsum
          adipisci, quo laborum ex!
        </p>
        <div className="md:space-x-7 space-y-4">
          <button className="md:inline block">Get Your Ticket</button>
          <button>Check Topic</button>
        </div>
      </div>

      <Gallery />
      <div className="absolute bottom-0 right-0 z-10">
        <Image src={lineImg} alt="line-svg" />
      </div>
    </section>
  );
};

export default head;
