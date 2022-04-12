const faq = () => {
  return (
    <section id="faq" className=" lg:p-28 sm:p-16 p-8 ">
      <div className="w-full border-2 border-black rounded grid grid-cols-4 grid-flow-row p-10">
        <div className="col-span-1 w-full">
          <h4 className="font-bold">Frequently Asked Questions</h4>
          <p className="text-xs">
            Can't find the answer you're looking for? <br /> Reach out to our <span className="font-bold text-indigo-600">customer support</span> team.
          </p>
        </div>
        {/* FAQ deck section */}
        <div className="col-span-3 px-10 flex flex-col gap-8">
          {/* 1 */}
          <div id="1" className="space-y-1">
            <div id="question" className="font-semibold">
              What is the purpose of FAQs on your website?
            </div>
            <div id="answer" className="text-gray-500">
              If you spend a lot of your time answering emails or social media queries, an FAQ can be a real timesaver. It can also help prevent costly and time-consuming returns
              in your online store.
            </div>
          </div>
          {/* 2 */}
          <div id="1" className="space-y-1">
            <div id="question" className="font-semibold">
              What is the purpose of FAQs on your website?
            </div>
            <div id="answer" className="text-gray-500">
              Google’s goal is to deliver answers to questions. If you put your text in a Q&A format, you’re doing half the work already.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default faq;
