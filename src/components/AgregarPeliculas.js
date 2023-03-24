import React from 'react'
import { GuardarEnLocalS } from '../helpers/GuardarEnLocalS';

export const AgregarPeliculas = ({ setListadoState }) => {

    const titleComponent = "Añadir película";

    const [movie, setMovie] = React.useState({
        title: '',
        description: ''
    });

    const { title, description } = movie;

    const getDataFrom = e => {
        e.preventDefault();

        //Conseguir datos del formulario

        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;

        //Crear objeto de pelicula a guardar
        let peli = {
            id: new Date().getTime(),
            title,
            description
        }

        //Guardar estado
        setMovie(peli);

        //Actualizar el estado de listado principal
        setListadoState(elementos => {
            return [...elementos, peli]
        })

        //Guardar en almacenamiento local
        GuardarEnLocalS("pelis", peli);
    }

    return (
        <div className="add">
            <h3 className="title">{titleComponent}</h3>

            <strong>
                {(title && description) && "Has creado la película: " + title}
            </strong>


            <form onSubmit={getDataFrom}>
                <input
                    type="text"
                    id='title'
                    name='title'
                    placeholder="Título"
                />

                <textarea
                    id='description'
                    name='description'
                    placeholder="Descripción">
                </textarea>

                <input
                    type="submit"
                    id='save'
                    value="Guardar"
                />
            </form>
        </div>
    )
}
