import Image from "next/image";

export default function InquirySection() {
  return (
    <>
      <section className="relative w-full h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="/EnquiryBackground.jpg"
            alt="Bespoke Systems"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>

        <div className="relative z-10 h-full max-w-[1455px] mx-auto px-4 md:px-global_x flex flex-col md:flex-row justify-between items-start md:items-center pb-20 pt-20">
          <div className="text-white max-w-xl mb-10 md:mb-0">
            <p className="text-sm md:text-base uppercase text-gray-300 font-mont mb-2 tracking-widest">
              Seamless Integration
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-mont leading-tight uppercase">
              Bespoke Systems,
              <br />
              <span className="font-light">Custom Made For Your Space</span>
            </h2>
          </div>

          <div className="w-full md:w-auto">
            <button className="w-full md:w-auto border border-white text-white px-6 py-3 uppercase font-mont text-sm md:text-base tracking-widest hover:bg-white hover:text-black transition">
              Drop an Inquiry →
            </button>
          </div>
        </div>
      </section>

      <section className="relative w-full h-screen overflow-hidden py-global_y border-b border-gray-300">
        <div className="relative z-20 flex flex-col md:flex-row gap-6 w-full h-full">
          <video
            className="w-full md:w-[40%] h-1/2 md:h-full object-cover grayscale-50"
            src="/EnquiryVideo01.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <video
            className="w-full md:w-[60%] h-1/2 md:h-full object-cover grayscale-50"
            src="/EnquiryVideo02.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>
    </>
  );
}
