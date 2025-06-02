import Button from "./common/Button";

export default function Footer() {
  return (
    <footer className="bg-white text-black font-mont text-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-6 md:px-20 py-12 border-b border-gray-300 text-center md:text-left">
        <div>
          <h2 className="text-2xl md:text-title leading-snug mb-2">
            IDEAS COME TO LIFE
            <br />
            WITH CONVERSATION.
          </h2>
          <p className="text-[20px] md:text-[35px] font-light break-all">
            INFO@RAYFITOUT.COM
          </p>
        </div>
        <div className="w-full md:w-auto">
          <Button name={"DROP AN INQUIRY"} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 px-6 md:px-20 py-10 border-b border-gray-300">
        <div>
          <p className="text-[19px] mb-1 font-semibold">OFFICE</p>
        </div>
        <div>
          <p className="uppercase text-small">Dubai, UAE</p>
          <p className="text-small text-onWhiteGray">23, ST 35, AL QUSAIS 5</p>
          <p className="text-small text-onWhiteGray">+971 800 729 43</p>
        </div>
        <div>
          <p className="uppercase text-small">Riyadh, Saudi Arabia</p>
          <p className="text-small text-onWhiteGray">
            LEVEL 6, GATE D, AL AKARIA PLAZA
          </p>
          <p className="text-small text-onWhiteGray">RIYADH, SAUDI ARABIA</p>
          <p className="text-small text-onWhiteGray">+966 800 891 2050</p>
        </div>
        <div>
          <p className="uppercase text-small">Nairobi, Kenya</p>
          <p className="text-small text-onWhiteGray">
            OFFICE 2504, BRITAM TOWER
          </p>
          <p className="text-small text-onWhiteGray">
            HOSPITAL HILL ROAD, UPPERHILL, KENYA
          </p>
          <p className="text-small text-onWhiteGray">+254 2076 40228</p>
        </div>

        <div>
          <p className="text-[19px] mb-1 font-semibold">BUSINESS</p>
        </div>
        <div>
          <p className="uppercase text-small">Inquiries</p>
          <a
            href="mailto:info@rayfitout.com"
            className="text-small text-onWhiteGray underline break-all"
          >
            INFO@RAYFITOUT.COM
          </a>
        </div>
        <div>
          <p className="uppercase text-small">Career</p>
          <a
            href="mailto:hr@rayfitout.com"
            className="text-small text-onWhiteGray underline break-all"
          >
            HR@RAYFITOUT.COM
          </a>
        </div>
        <div>
          <p className="uppercase text-small">Suppliers</p>
          <a
            href="mailto:procurement@rayfitout.com"
            className="text-small text-onWhiteGray underline break-all"
          >
            PROCUREMENT@RAYFITOUT.COM
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-6 text-[12px] text-gray-500 gap-4 text-center md:text-left">
        <p>PRIVACY POLICY</p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-20">
          <a href="#" className="hover:underline">
            YOUTUBE
          </a>
          <a href="#" className="hover:underline">
            PINTEREST
          </a>
        </div>
        <p className="text-center md:text-right">&copy; 2025 RAYFITOUT</p>
      </div>
    </footer>
  );
}
