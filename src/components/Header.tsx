import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="My Blog Logo" className="logo" />

        <div className="header-text">
          <h1>My Blog</h1>
          <p>Sharing ideas, tutorials and inspiration.</p>
        </div>
      </div>
    </header>
  );
}

export default Header;