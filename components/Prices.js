const priceLists = [
  { id: 1, position: "No. 1 Leading Team", reward: "$7000", lists: ["ba", "ha", "ak", "sd", "ert"] },
  { id: 2, position: "No. 1 Leading Team", reward: "$5000", lists: ["ba", "ha", "ak", "sd", "ert"] },
  { id: 3, position: "No. 1 Leading Team", reward: "$3000", lists: ["ba", "ha", "ak", "sd", "ert"] },
];

const price = () => {
  const priceDeck = priceLists.map((priceList) => <PriceBox key={priceList.id} data={priceList} />);
  return (
    <section id="prices" className="text-center py-28 px-8">
      <h2>Prices</h2>
      <p>The Top will be reawarded with awesome prices</p>
      {/* price deck section */}
      <div className="flex flex-col sm:flex-row justify-around items-center gap-5 ">{priceDeck}</div>
    </section>
  );
};

const PriceBox = (props) => {
  const { position, reward, lists } = props.data;
  const listName = lists.map((list) => <List key={list} data={list} />);
  return (
    <div className="w-80 border py-5">
      <h4>{position}</h4>
      <h3>{reward}</h3>
      <br />
      <p>Perks</p>
      <ul>{listName}</ul>
    </div>
  );
};

const List = (props) => {
  return <li>{props.data}</li>;
};

export default price;
