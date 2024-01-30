import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="flex flex-row justify-center gap-6 p-4 text-2xl text-white bg-gray-900 text-bold">
      <Link className="p-2 rounded hover:bg-gray-700" to="/">
        Home
      </Link>
      <Link className="p-2 rounded hover:bg-gray-700" to="/users">
        Users
      </Link>
      <Link className="p-2 rounded hover:bg-gray-700" to="/adduser">
        Add user
      </Link>
    </nav>
  );
}

export default Header;
