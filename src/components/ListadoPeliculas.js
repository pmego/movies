import React from 'react'
import { EditarPelicula } from './EditarPelicula';

export const ListadoPeliculas = ({ listadoState, setListadoState }) => {

    // const [listState, setListState] = React.useState([]);
    const [editar, setEditar] = React.useState(0);

    React.useEffect(() => {
        conseguirPeliculas();
    }, [])

    const conseguirPeliculas = () => {
        //obtenemos las películas guardadas en el localStorage
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        //Las seteamos en el useState
        setListadoState(peliculas);

        return peliculas;
    }

    const borrarPeli = (id) => {
        //conseguir las peliculas almacenadas
        let pelis_almacenadas = conseguirPeliculas();

        //filtrar la pelicula por id para que se elimine, y se cree otro array sin esa peli
        let nuevo_array_pelis = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));

        //Actualizar la lista de estado
        setListadoState(nuevo_array_pelis);

        //Actualizar peliculas en el LocalStorage
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelis));
    }

    return (
        <>
            {listadoState != null
                ? listadoState.map(peli => {
                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.title}</h3>
                            <p className="description">{peli.description}</p>

                            <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
                            <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>

                            {/* Cuando le demos editar, aparecerá un formulario */}
                            {editar === peli.id && (
                                <EditarPelicula
                                    peli={peli}
                                    conseguirPeliculas={conseguirPeliculas}
                                    setEditar={setEditar}
                                    setListadoState={setListadoState}
                                />
                            )}

                        </article>
                    );
                })
                : <h2>No hay películas para mostrar</h2>
            }
        </>
    )
}
