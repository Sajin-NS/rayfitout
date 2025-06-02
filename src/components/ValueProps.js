const values = [
  {
    title: "Complimentary Installation",
    desc: "Professional installation by our in-house technicians for flawless execution.",
  },
  {
    title: "Made-to-Measure Architecture",
    desc: "Precisely fabricated for its environment—no gaps, no compromises.",
  },
  {
    title: "Patented Designs",
    desc: "Systems designed to be embedded in the architecture, not added onto it.",
  },
];

export default function ValueProps() {
  return (
    <section className=" bg-white border-b border-gray-300 pb-20">
      <h1 className="text-header px-global_x uppercase border-b border-gray-300 w-full pb-6">
        About Our Products & Services
      </h1>
      <div className=" px-global_x grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-10">
        {values.map((val, idx) => (
          <div key={idx} className="bg-white py-6 text-center md:text-start">
            <h3 className="text-subHeader font-mont mb-2 uppercase">
              {val.title}
            </h3>
            <p className="text-small text-onWhiteGray font-mont">{val.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
