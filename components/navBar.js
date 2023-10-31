import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Tu Tienda</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Categoría 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Categoría 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Categoría 3</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
