import Image from "next/image";
import laptop from "../public/image/laptop.jpg";
const about = () => {
  return (
    <section id="about" className="py-40 md:px-40 px-10 grid lg:grid-cols-2 grid-flow-row items-center gap-16">
      <div className="relative">
        <div className=" w-[200px] absolute sm:bottom-6 sm:left-6 bottom-2 left-2 z-10 text-justify">
          <h4 className="text-white sm:p-8 p-6 bg-blue-600">It&rsquo;s a 24 hours and 3 day long Hackathon</h4>
        </div>
        <Image src={laptop} alt="laptop-image" />
      </div>

      <div className="space-y-6">
        <h3>We Belive, &ldquo;The Last Keys Pressued at pressure gives life to your idea.&rdquo;</h3>
        <div className="grid sm:grid-cols-2 grid-cols-1 grid-flow-row gap-4">
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
