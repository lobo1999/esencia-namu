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

  const title = "Esencia Namú";

  return (
    <div>
      <div>{title}</div>
      <h1>Muy buenas a todos guapiisimos *-*</h1>
      <div className="links">
        <a href="/">Inicio</a>
        <a href="/destinations">Destinos</a>
      </div>
    </div>
  );
};

export default Navbar;
