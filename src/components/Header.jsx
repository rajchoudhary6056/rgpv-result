import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <div className="page">

      <header className="header">

        <div className="logo-section">
          <img src={logo} alt="RGPV Logo" />
        </div>

        <div className="title-section">

          <h1>
            Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal
          </h1>

          <h2>Results</h2>

        </div>

        <div className="portal">
          RGPV Portal
        </div>

      </header>

      <div className="red-line"></div>

      <div className="back">
        <a href="/">Back</a>
      </div>

    </div>
  );
}