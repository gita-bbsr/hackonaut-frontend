const topicList = [
  {
    id: 1,
    topicName: "Fintech/Neobanking/kyc",
  },
  {
    id: 2,
    topicName: "AgriTech/EV",
  },
  {
    id: 3,
    topicName: "Data Storage / Security",
  },
  {
    id: 4,
    topicName: "Internet Of Things",
  },
  {
    id: 5,
    topicName: "Game /Sport Tech",
  },
  {
    id: 6,
    topicName: "Software As Service",
  },
  {
    id: 7,
    topicName: "EdTech",
  },
  {
    id: 8,
    topicName: "MediTech/HospiTech",
  },
];
const topic = () => {
  const topicItem = topicList.map((value) => <TopicBox key={value.id.toString()} values={value} />);
  return (
    <section id="topic" className="text-center p-28 bg-slate-100">
      <h2>Topics You Can Explore</h2>
      <p>we are Providing some of the area/domain in which you can bring your ideas.</p>
      <div className="p-40 grid grid-cols-12 row-auto gap-3">{topicItem}</div>
    </section>
  );
};

function TopicBox(props) {
  const value = props.values.topicName;
  const id = props.values.id;
  if (id !== 4)
    return (
      <div className="col-span-4 p-5 bg-white rounded-md">
        <h4>{value}</h4>
      </div>
    );
  else
    return (
      <div className="col-start-3 col-span-4 p-5 bg-white rounded-md">
        <h4>{value}</h4>
      </div>
    );
}

export default topic;
