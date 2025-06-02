export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm font-mont">
        <div>
          <p className="mb-2 font-bold">Dubai, UAE</p>
          <p>23, ST 35, AL QUSAIS 5</p>
          <p>+971 800 729 43</p>
        </div>
        <div>
          <p className="mb-2 font-bold">Riyadh, Saudi Arabia</p>
          <p>LEVEL 6, GATE D, AL AKARIA PLAZA</p>
          <p>+966 800 891 2050</p>
        </div>
        <div>
          <p className="mb-2 font-bold">Nairobi, Kenya</p>
          <p>OFFICE 2504, BRITAM TOWER</p>
          <p>+254 2076 40228</p>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-gray-400">
        <p>&copy; 2025 Rayfitout. All rights reserved.</p>
      </div>
    </footer>
  );
}
