import './navbar.scss';
import NavbarMenu from "./menu/navbar-menu";

function Navbar() {
  return (
    <div class="navbar">
      <div class="navbar__content-container">

        <div class="navbar__logo-container">
          <img class="navbar__logo-img" src="https://media.dash.org/wp-content/uploads/dash-logo.svg" alt=""/>
          <span>projects</span>
        </div>

        <NavbarMenu />
      </div>
    </div>
  );
}

export default Navbar;
