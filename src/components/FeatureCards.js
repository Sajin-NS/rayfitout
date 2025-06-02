import Image from "next/image";

const features = [
  { title: "MODERN PROFILES", image: "/FeatureCard/Modern.jpg" },
  { title: "INTEGERATION", image: "/FeatureCard/Integeration.jpg" },
  { title: "MODULARITY", image: "/FeatureCard/modularity.jpg" },
];

export default function FeatureCards() {
  return (
    <section className="py-global_y px-6 md:px-global_x w-full">
      <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item, index) => (
          <div
            key={index}
            className="relative w-full aspect-[3/4] overflow-hidden shadow hover:shadow-md transition"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 430px"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-white text-[22px] font-mont uppercase text-center px-4">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
