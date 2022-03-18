const about = () => {
  return (
    <section id="about" className="p-40">
      {/* FIXME: remove ml-auto and w-1/2 when image added */}
      <div className="ml-auto w-1/2 space-y-6">
        <h3>We Belive, "The Last Keys Pressued at pressure gives life to your idea.</h3>
        <div className="flex ">
          <div className="space-y-3">
            <h3>72+</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sed inventore laborum minima distinctio reiciendis suscipit dolor, nulla ipsum sit.</p>
          </div>
          <div className="space-y-3">
            <h3>20+</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto saepe tempora, officia perspiciatis nobis dicta.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default about;
