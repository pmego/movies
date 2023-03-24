import React from "react";
import { AgregarPeliculas } from "./components/AgregarPeliculas";
import { BuscadorPeliculas } from "./components/BuscadorPeliculas";
import { ListadoPeliculas } from "./components/ListadoPeliculas";

function App() {

  const [listState, setListState] = React.useState([]);

  return (
    <div className="layout">
      {/* Cabecera */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>

        </div>
        <h1>MisPelis</h1>
      </header>
      {/* Barra de Navegación */}
      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>
      {/* Contenido Principal */}
      <section className="content">
        {/* Aquí va el listado de películas */}
        <ListadoPeliculas
          listadoState={listState}
          setListadoState={setListState}
        />
      </section>

      {/* Barra Lateral */}
      <aside className="lateral">
        {/* Botón de busqueda de peliculas */}
        <BuscadorPeliculas
          listadoState={listState}
          setListadoState={setListState}
        />

        {/* Botón de agregar películas */}
        <AgregarPeliculas
          setListadoState={setListState}
        />

      </aside>
      {/* Pie de página */}
      <footer className="footer">
        &copy; Mis Pelis
      </footer>
    </div>
  );
}

export default App;
