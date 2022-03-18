import Gallery from "./Gallery.js";
const head = () => {
  return (
    <section id="head-section" className="flex flex-col items-center text-center p-44 space-y-4 bg-gradient-to-br from-[#12141D] to-slate-800 text-white">
      <h1 className="text-8xl">
        Open Idea <span>Hackathon</span>
        <br /> of Odisha in <span>2022</span>
      </h1>
      <p className="max-w-prose text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam natus nemo laboriosam repellendus explicabo nostrum ipsam corporis consequuntur nihil corrupti ipsum
        adipisci, quo laborum ex!
      </p>
      <div className="space-x-7">
        <button>Get Your Ticket</button>
        <button>Check Topic</button>
      </div>

      <Gallery />
    </section>
  );
};

export default head;
