import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="py-4 border-b-2 border-b-gray-300 drop-shadow-md fixed top-0 inset-x-0 bg-white">
      <h1 className="font-bold text-3xl uppercase text-center">
        <Link to={"/"}>Tech Blogs</Link>
      </h1>
    </header>
  );
}
