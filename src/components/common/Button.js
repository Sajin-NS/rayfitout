import { ChevronDown, ArrowUpRight } from "lucide-react";

export default function Button({ name }) {
  return (
    <button className="border px-6 py-2 text-medium hover:bg-black hover:text-white transition cursor-pointer flex justify-center items-center gap-2">
      {name} <ArrowUpRight size={30} />
    </button>
  );
}
