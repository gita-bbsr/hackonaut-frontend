const price = () => {
  return (
    <section id="prices" className="text-center">
      <h2>Prices</h2>
      <p>The Top will be reawarded with awesome prices</p>
      {/* price deck section */}
      <div className="p-20 grid grid-cols-3 grid-flow-row">
        <div className="border py-5">
          <h4>No. 1 Leading Team</h4>
          <h3>$5000</h3>
          <br />
          <p>Perks</p>
          <ul>
            <li>bals</li>
            <li>bals</li>
            <li>bals</li>
            <li>bals</li>
            <li>bals</li>
            <li>bals</li>
            <li>bals</li>
            <li>bals</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default price;
