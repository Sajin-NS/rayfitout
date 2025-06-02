import Image from "next/image";
import Button from "./common/Button";

export default function MaterialsSection() {
  return (
    <div className="w-full h-auto bg-white">
      <div className="min-h-[70vh] grid grid-cols-1 md:grid-cols-2 md:pl-12 pl-4">
        <div className="py-6 flex flex-col justify-between max-w-lg">
          <div className="text-[16px] sm:text-[18px] text-gray-500 uppercase mb-2">
            Materials
          </div>
          <p className="text-[22px] sm:text-[28px] md:text-[32px] uppercase font-light mb-4 leading-snug">
            Unlike plastics,{" "}
            <span className="font-semibold text-[22px] sm:text-[28px] md:text-[32px] uppercase">
              aluminum is 100% recyclable
            </span>
            . Moreover, approximately
            <span className="text-gray-400 text-[22px] sm:text-[28px] md:text-[32px] uppercase">
              {" "}
              70% of it produced
            </span>{" "}
            is
            <span className="font-semibold text-[22px] sm:text-[28px] md:text-[32px] uppercase">
              {" "}
              still in use.
            </span>
          </p>
          <div className="mt-4">
            <Button name={"VIEW PROJECTS"} />
          </div>
        </div>

        <div className="relative h-64 md:h-auto grayscale">
          <Image
            src="/MaterialsSection.png"
            alt="Machinery"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 px-6 py-12 md:p-20 mx-4 sm:mx-10 my-20">
        <h2 className="text-[26px] sm:text-[32px] md:text-[40px] font-light text-center md:text-left">
          HAVE A PROJECT IN MIND ?
        </h2>
        <div className="w-fit">
          <Button name={"DROP AN INQUIRY "} />
        </div>
      </div>
    </div>
  );
}
