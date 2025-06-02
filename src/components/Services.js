import Image from "next/image";

export default function Services() {
  const services = [
    { name: "INTERIOR FIT OUT", image: "/Services/INTERIOR_FIT_OUT.jpg" },
    { name: "INTERIOR DESIGN", image: "/Services/INTERIOR_DESIGN.jpg" },
    { name: "ARCHITECTURE DESIGN", image: "/Services/ARCHITECTURE_DESIGN.jpg" },
  ];

  return (
    <section className="px-global_x py-20 border-b border-gray-300">
      <h1 className="text-header">OUR ALUMINIUM SYSTEMS</h1>
      <section className="py-10 w-full">
        <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className="relative w-full aspect-[1/1] overflow-hidden shadow hover:shadow-md transition"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 430px"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-[24px] font-mont uppercase text-center px-4">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
