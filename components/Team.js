import Image from "next/image";
// import img from "https://www.w3schools.com/howto/img_avatar.png";
const team = () => {
  return (
    <section id="team" className="text-center bg-gradient-to-br from-[#12141D] to-slate-800 text-white py-24">
      <h2>Team</h2>
      <p className="max-w-prose mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iure sequi autem excepturi reprehenderit nostrum, soluta culpa consequatur maiores ipsa at, porro sapiente
        voluptas aperiam ullam quasi facilis minus non, obcaecati ad!
      </p>
      {/* Team grid display */}
      <div className="py-40 grid grid-cols-[repeat(9,minmax(100px,_1fr))] grid-flow-row gap-y-16 px-28">
        <div className="relative col-start-1 col-span-1">
          <Image src="https://www.w3schools.com/howto/img_avatar.png" width={350} height="350" />
          <h4 className="py-2">Ujjwal sittu</h4>
          <p className="px-6">Lead Organiser</p>
        </div>
        <div className="relative col-start-3 col-span-1">
          <Image src="https://www.w3schools.com/howto/img_avatar.png" width={350} height="350" />
          <h4 className="py-2">Ujjwal sittu</h4>
          <p className="px-6">Lead Organiser</p>
        </div>
        <div className="col-start-5 col-span-1">
          <Image src="https://www.w3schools.com/howto/img_avatar.png" width={350} height="350" />
        </div>
        <div className="col-start-7 col-span-1">
          <Image src="https://www.w3schools.com/howto/img_avatar.png" width={350} height="350" />
        </div>
        <div className="col-start-9 col-span-1">
          <Image src="https://www.w3schools.com/howto/img_avatar.png" width={350} height="350" />
        </div>
        <div className="col-start-2 col-span-1">
          <Image src="https://www.w3schools.com/howto/img_avatar.png" width={350} height="350" />
        </div>
        <div className="col-start-4 col-span-1">
          <Image src="https://www.w3schools.com/howto/img_avatar.png" width={350} height="350" />
        </div>
        <div className="col-start-6 col-span-1">
          <Image src="https://www.w3schools.com/howto/img_avatar.png" width={350} height="350" />
        </div>
        <div className="col-start-8 col-span-1">
          <Image src="https://www.w3schools.com/howto/img_avatar.png" width={350} height="350" />
        </div>
      </div>
    </section>
  );
};

export default team;
