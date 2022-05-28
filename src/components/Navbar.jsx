import React from "react";

const Navbar = () => {
  /*
    En esta parte (antes de el return) podemos declarar contantes, hooks o lo que sea que vayamos
    a utilizar dentro de nuestro componente y de esta manera evitar poner valores
    'quemados' directamente.

    Nota: los componentes en React son los que tienen terminación .jsx y en ellos
    uno escribe el código HTML y JavaScript por lo tanto en el mismo
    componente vamos a encontrar el diseño y la lógica de los componentes.
    
    XoXo Luis Lobo
    */


  return (
    <nav className="nav--principal glass blur">
      <div className="navbar--container">
        <a href="###">
          <span><i className="icon-namu"></i></span>
        </a>
        <div className="menu">
          <a href="/">Inicio</a>
          <a href="/destinations">Destinos</a>
          <a href="/about">Quiénes Somos</a>
        </div>
        <button className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );

  // eslint-disable-next-line no-unreachable
  const hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function () {
    this.hamburger.toggle("is-active");
  });
};

export default Navbar;
