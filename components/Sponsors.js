import Image from "next/image";
const sponsors = () => {
  return (
    <section id="sponsors" className="p-28 text-center space-y-4">
      <h2>Our Sponsour</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere?</p>
      {/* sponsour list grid */}
      <div className="py-20 grid grid-cols-[repeat(4,minmax(150px,_1fr))] grid-flow-row gap-4">
        <Image src="https://www.w3schools.com/howto/img_avatar.png" width={100} height={300} />
        <Image src="https://www.w3schools.com/howto/img_avatar.png" width={100} height={100} />
        <Image src="https://www.w3schools.com/howto/img_avatar.png" width={100} height={100} />
        <Image src="https://www.w3schools.com/howto/img_avatar.png" width={100} height={100} />
        {/* hegiht will vary there size */}
        <Image src="https://www.w3schools.com/howto/img_avatar.png" width={100} height={300} />
      </div>
    </section>
  );
};

export default sponsors;
