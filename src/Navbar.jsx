import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" />
          </li>
          <li>Categories</li>
          <li>Website Builders</li>
          <li>Today's Deal</li>
        </ul>
      </nav>
    </>
  );
}
