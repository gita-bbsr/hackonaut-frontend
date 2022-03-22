import Image from "next/image";
const sponsors = () => {
  return (
    <section id="sponsors" className="md:p-28 text-center space-y-4 p-8">
      <h2>Our Sponsour</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere?</p>
      {/* sponsour list grid */}
      <div className="py-20 grid md:grid-cols-[repeat(4,minmax(150px,_1fr))] grid-cols-2 grid-flow-row gap-4 items-center">
        <div className="relative">
          <Image src="https://www.w3schools.com/howto/img_avatar.png" width={250} height={300} layout="intrinsic" alt="spon" />
        </div>
        <div className="relative">
          <Image src="https://www.w3schools.com/howto/img_avatar.png" width={400} height={200} layout="intrinsic" alt="spon" />
        </div>
        <div className="relative">
          <Image src="https://www.w3schools.com/howto/img_avatar.png" width={100} height={200} layout="intrinsic" alt="spon" />
        </div>
        <div className="relative">
          <Image src="https://www.w3schools.com/howto/img_avatar.png" width={400} height={270} layout="intrinsic" alt="spon" />
        </div>
      </div>
    </section>
  );
};

export default sponsors;
