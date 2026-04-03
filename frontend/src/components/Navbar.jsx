export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 bg-black/80 backdrop-blur z-50 px-6 py-4 flex justify-between">
      <h1 className="font-bold text-xl">WDbarbearia</h1>
      <button className="bg-yellow-500 px-4 py-2 rounded-lg font-semibold">
        Agendar
      </button>
    </nav>
  );
}