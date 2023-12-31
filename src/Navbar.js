import { Link } from "react-router-dom";
import logo from "../src/image/Logo.png";

function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <img className="navbar-logo" alt="" src={logo} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="/">Service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="">Our Values</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="">Case Studies</a>
            </li>
            <li class="nav-item">
              <a className="nav-link " aria-current="page" href="">Blog</a>
            </li>
            <li class="nav-item">
              <a className="nav-link" aria-current="page" href="" >Inner Pages</a>
            </li>

 

          </ul>

        </div>
      </div>
    </nav>

  );
}
export default Navbar;