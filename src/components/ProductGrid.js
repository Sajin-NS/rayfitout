import Image from "next/image";

export default function ProductGrid() {
  const products = [
    {
      name: "Doors",
      image: "/ProductCard/Doors.jpg",
    },
    {
      name: "Windows",
      image: "/ProductCard/Windows.png",
    },
    {
      name: "Partitions",
      image: "/ProductCard/Partitions.png",
    },
    {
      name: "Pergolas",
      image: "/ProductCard/Pergolas.png",
    },
    {
      name: "Curtain Walls & Facades",
      image: "/ProductCard/CurtainWalls.png",
    },
    {
      name: "Bullet Resistant Windows",
      image: "/ProductCard/BulletResistant.png",
    },
  ];

  return (
    <section className="bg-white py-global_y px-global_x w-full border-b border-gray-300">
      <div className="text-start w-full">
        <div className="pb-10">
          <h1 className="text-header">OUR ALUMINIUM SYSTEMS</h1>
          <p className="text-small text-onWhiteGray">
            Expert craftsmanship in aluminium systems, offering fit your unique
            space.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mont uppercase tracking-wide">
          {products.map((product, idx) => (
            <div key={idx} className="w-full">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover grayscale-[75%]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="py-4 px-2 text-subHeader">{product.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
