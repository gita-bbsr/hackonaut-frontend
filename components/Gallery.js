import Image from "next/image";
import write from "../public/msg.png";

const gallery = () => {
  return (
    <div className="relative grid lg:grid-cols-3 my-40 z-20 gap-10">
      <div>
        <div className="w-full h-80 bg-black mx-auto"></div>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="md:relative md:top-24 ">
        <div className="w-full h-64 bg-black mx-auto"></div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div>
        <div className="w-full h-80 bg-black mx-auto"></div>

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
