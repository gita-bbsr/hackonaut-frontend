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
  const topicItem = topicList.map((value) => <TopicBox key={value.id.toString()} data={value} />);
  return (
    <section id="topic" className="text-center lg:p-28 sm:p-16 p-8 bg-slate-100 space-y-6">
      <h2>Topics You Can Explore</h2>
      <p>we are Providing some of the area/domain in which you can bring your ideas.</p>
      <div className="xl:p-20 py-16 grid grid-cols-12 row-auto gap-3">{topicItem}</div>
    </section>
  );
};

function TopicBox(props) {
  const value = props.data.topicName;
  const id = props.data.id;
  if (id !== 4)
    return (
      <div className="lg:col-span-4 md:col-span-6 col-span-12 p-5 bg-white rounded-md">
        <h4>{value}</h4>
      </div>
    );
  else
    return (
      <div className="lg:col-start-3 lg:col-span-4 md:col-span-6 col-span-12 p-5 bg-white rounded-md">
        <h4>{value}</h4>
      </div>
    );
}

export default topic;
