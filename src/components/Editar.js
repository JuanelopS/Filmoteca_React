export const Editar = ({pelicula, conseguirPeliculas, setEditar, setListadoState}) => {

  const tituloComponente = "Editar película";

  const guardarEdicion = (e, id) => {
    e.preventDefault();
    
    // Conseguir el target del evento
    let target = e.target;

    // Buscar el índice del objeto de la película a actualizar
    const peliculasAlmacenadas = conseguirPeliculas();
    // console.log(peliculasAlmacenadas);

    // findIndex() devuelve el primer elemento del array que cumpla la condición pasada como callback (-1 si no hay coincidencia)
    const indice = peliculasAlmacenadas.findIndex(pelicula => pelicula.id === id);
    // console.log(indice);

    // Crear objeto con los datos nuevos
    let peliculaActualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value
    }

    // console.log(indice, pelicula);

    // Actualizar el elemento con ese índice
    peliculasAlmacenadas[indice] = peliculaActualizada;

    // Guardar los cambios en el localStorage y actualizar estados (props)
    localStorage.setItem("peliculas", JSON.stringify(peliculasAlmacenadas));

    setListadoState(peliculasAlmacenadas);
    setEditar(0);

  }

  return (
    <div className="edit-form">
      <h3 className="title">{tituloComponente}</h3>
      <form onSubmit={e => guardarEdicion(e, pelicula.id)}>
        <input type="text"
               name="titulo"
               defaultValue={pelicula.titulo}
        />
        <textarea name="descripcion"
                  defaultValue={pelicula.descripcion}
                  className="Descripción editada"
        />
        <input type="submit"
               className="editar"
               value="Actualizar"
        />
      </form>
    </div>
  )
}
