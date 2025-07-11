export default function Navbar() {
  return (
    <div className="navbar py-7 flex items-center justify-between">
      <div className="logo">
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white">
          Darell.
        </h1>
      </div>
      <ul className="menu flex items-center gap-10 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 -top-10 opacity-0 md:opacity-100 md:top-0">
        <li>
          <a href="#" className="text-lg font-medium">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-lg font-medium">
            {" "}
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-lg font-medium">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="text-lg font-medium">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
