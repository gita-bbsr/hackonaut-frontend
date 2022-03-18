import Image from "next/image";
import laptop from "../public/image/laptop.jpg";
const about = () => {
  return (
    <section id="about" className="p-40 grid lg:grid-cols-2 grid-flow-row items-center gap-16">
      <div className="relative">
        <div className="bg-blue-600 max-w-[250px] h-40 absolute bottom-6 left-6 z-10 p-8 text-justify">
          <h4 className="text-2xl text-white font-bold">It's a 24 hours and 3 day long Hackathon</h4>
        </div>
        <Image src={laptop} width={400} height={500} sizes="320 640 750" layout="responsive" />
      </div>

      <div className="space-y-6">
        <h3>We Belive, "The Last Keys Pressued at pressure gives life to your idea."</h3>
        <div className="flex gap-4">
          <div>
            <h3>72+</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sed inventore laborum minima distinctio reiciendis suscipit dolor, nulla ipsum sit.</p>
          </div>
          <div>
            <h3>20+</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto saepe tempora, officia perspiciatis nobis dicta.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default about;
