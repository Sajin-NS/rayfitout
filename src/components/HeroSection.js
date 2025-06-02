import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100vh]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/HeroBackground.jpg"
          alt="Aluminum Systems"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-9xl mx-auto px-global_x pt-40 text-white h-full flex flex-col justify-end pb-30">
        {/* Breadcrumb */}
        <p className="text-small uppercase tracking-widest text-gray-300 font-mont mb-2">
          Services / Aluminium Systems
        </p>

        {/* Title */}
        <h1 className="text-title font-extralight font-mont mb-6 leading-tight">
          Aluminum Systems
        </h1>
        <p className="text-medium uppercase tracking-widest text-gray-300 font-mont mb-2">
          CONTEMPORARY SYSTEMS, SEAMLESS INTEGERATION
        </p>
        {/* CTA */}
        {/* <button className="mt-4 px-6 py-3 border border-white text-white uppercase font-mont tracking-widest text-xs hover:bg-white hover:text-black transition">
          View Projects
        </button> */}
      </div>
    </section>
  );
}
