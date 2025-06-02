export default function Button({ name }) {
  return (
    <button className="border px-6 py-2 text-medium hover:bg-black hover:text-white transition cursor-pointer">
      {name} ↗
    </button>
  );
}
