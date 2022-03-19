import Image from "next/image";
import write from "../public/msg.png";

import classroom from "../public/image/class.jpeg";
import lead from "../public/image/lead.jpeg";
import team from "../public/image/team.jpeg";

const gallery = () => {
  return (
    <div className="relative grid lg:grid-cols-3 my-40 z-20 gap-10">
      <div>
        <div className="w-full  mx-auto">
          <Image src={lead} />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="md:relative md:top-24 ">
        <div className="w-full mx-auto">
          <Image src={classroom} />
        </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div>
        <div className="w-full mx-auto">
          <Image src={team} />
        </div>

        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

const galleryText = () => {
  return (
    <>
      <Image src={write} />
    </>
  );
};

export default gallery;
