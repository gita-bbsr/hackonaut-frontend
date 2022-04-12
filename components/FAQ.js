const faqLists = [
  {
    id: 1,
    question: "What is the purpose of FAQs on your website?",
    answer:
      "If you spend a lot of your time answering emails or social media queries, an FAQ can be a real timesaver. It can also help prevent costly and time-consuming returns in your online store.",
  },
  {
    id: 2,
    question: "What is the purpose of FAQs on your website?",
    answer: "Google’s goal is to deliver answers to questions. If you put your text in a Q&A format, you’re doing half the work already.",
  },
  {
    id: 3,
    question: "What is the purpose of FAQs on your website?",
    answer: "Google’s goal is to deliver answers to questions. If you put your text in a Q&A format, you’re doing half the work already.",
  },
  {
    id: 4,
    question: "What is the purpose of FAQs on your website?",
    answer: "Google’s goal is to deliver answers to questions. If you put your text in a Q&A format, you’re doing half the work already.",
  },
];
const faq = () => {
  const faqData = faqLists.map((faqList) => <Faq key={faqList.id} data={faqList} />);

  return (
    <section id="faq" className="lg:p-28 sm:p-16 p-8">
      <div className="w-full border border-gray-400 rounded grid grid-cols-3 grid-flow-row md:px-10 md:py-20 px-5 py-10">
        <div className="md:col-span-1 col-span-3 w-full space-y-4">
          <h3 className="font-bold text-3xl">Frequently asked questions</h3>
          <p className="text-base">
            Can&rsquo;t find the answer you&rsquo;re looking for? <br /> Reach out to our <span className="font-bold text-indigo-600">customer support</span> team.
          </p>
        </div>
        {/* FAQ deck section */}
        <div className="md:col-span-2 col-span-3 md:p-0 py-10 flex flex-col gap-10">{faqData}</div>
      </div>
    </section>
  );
};

const Faq = (props) => {
  const { key, question, answer } = props.data;
  return (
    <div id={key} className="space-y-1">
      <div id="question" className="font-semibold">
        {question}
      </div>
      <div id="answer" className="text-gray-500">
        {answer}
      </div>
    </div>
  );
};

export default faq;
