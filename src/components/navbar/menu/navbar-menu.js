import './navbar-menu.scss';

function NavbarMenu() {
  return (
    <div class="navbar-menu">
      <a href="/" class="navbar-menu__item">All projects</a>
      <a href="/submit/" class="navbar-menu__item">Submit project</a>
      <a href="/about/" class="navbar-menu__item">About</a>
    </div>
  );
}

export default NavbarMenu;
