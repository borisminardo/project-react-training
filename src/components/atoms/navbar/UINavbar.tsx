import { Link } from "react-router-dom";
import image from "./../../../../public/immagini/fotocv.jpeg";

export default function UINavbar() {
  return (
    <nav>
      <nav className="ui--navbar">
        <ul className="ui--navbar-left">
          <Link to="/" className="ui--navbar-title-text-bold">
            NAVBAR
          </Link>
          <Link to="/form" className="ui--navbar-links">
            Form
          </Link>
          <Link to="/step-form" className="ui--navbar-links">
            Step form
          </Link>
          <Link to="/tabella" className="ui--navbar-links">
            Tabella
          </Link>
        </ul>
        <div className="ui--navbar-right ui--navbar-profile">
          <p>By. Boris Maria Minardo Incitti</p>
          <img className="header--img" src={image}></img>
        </div>
      </nav>
    </nav>
  );
}
