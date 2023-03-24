import React from 'react'

export const BuscadorPeliculas = ({ listadoState, setListadoState }) => {

    const [busqueda, setBusqueda] = React.useState('');
    const [noEncontrado, setNoEcontrado] = React.useState(false);

    const buscarPeli = e => {
        //Crear estado y actualizarlo
        setBusqueda(e.target.value);

        //Filtrar para buscar coincidencias
        let pelis_encontradas = listadoState.filter(peli => {
            return peli.title.toLowerCase().includes(busqueda.toLowerCase());
        })

        if (busqueda.length <= 1 || pelis_encontradas <= 0) {
            pelis_encontradas = JSON.parse(localStorage.getItem("pelis"))
            setNoEcontrado(true);
        } else {
            setNoEcontrado(false)
        }

        setListadoState(pelis_encontradas);
    }


    return (
        <div className="search">
            <h3 className="title">Buscador</h3>
            {(noEncontrado == true && busqueda.length > 1) && (
                <span className='no-encontrado'>No se ha encontrado esa película</span>
            )}
            <form>
                <input
                    type="text"
                    placeholder="Busca una película.."
                    name='busqueda'
                    autoComplete='off'
                    value={busqueda}
                    onChange={buscarPeli}
                />
                <button>Buscar</button>
            </form>
        </div>
    )
}
