import React from 'react'

export const EditarPelicula = ({peli, conseguirPeliculas, setEditar, setListadoState}) => {

    const titulo_componente = "Editar Pelicula";

    const guardarEdicion = (e, id) => {
        e.preventDefault();

        //Conseguir el target del evento
        let target = e.target;

        //Buscar el indice del objeto de la pelicula a actualizar
        const pelis_almacenadas = conseguirPeliculas();
        const indice = pelis_almacenadas.findIndex(peli => peli.id === id);

        //Crear objeto actualizado con ese indice encontrado
        let peli_actualizada = {
            id,
            title: target.title.value,
            description: target.description.value,
        };

        console.log(peli_actualizada)

        //Actualizar el elemento con ese indice
        pelis_almacenadas[indice] = peli_actualizada;

        //Guardar el nuevo array de objeto en el locarstorage
        localStorage.setItem('pelis', JSON.stringify(pelis_almacenadas));

        //Actualizar estados
        setListadoState(pelis_almacenadas);
        setEditar(0);

    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{titulo_componente}</h3>
        <form onSubmit={e => guardarEdicion(e, peli.id)}>
            <input
                type= 'text'
                name='title'
                className='titulo_editado'
                defaultValue= {peli.title}
            />

            <textarea
                name='description'
                defaultValue={peli.description}
                className='descripcion_editada'
            />
            
            <input
                type= 'submit'
                className='editar'
                value='Actualizar'
            />
        </form>
    </div>
  )
}
