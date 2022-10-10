import React, { useState } from 'react';

export const Buscador = ({ listadoState, setListadoState }) => {

  const [ busqueda, setBusqueda ] = useState('');
  const [ noEncontrado, setNoEncontrado ] = useState(false);
  
  const buscarPelicula = e => {
    e.preventDefault();
    // Crear estado y actualizarlo
    setBusqueda(e.target.value);
    // console.log(busqueda)

    // Filtrar para buscar coincidencias
    let peliculasEncontradas = listadoState.filter( pelicula => pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase()));

    if(busqueda.length < 1 || peliculasEncontradas <= 0){
      peliculasEncontradas = JSON.parse(localStorage.getItem("peliculas"));
      setNoEncontrado(true);
    } else setNoEncontrado(false);

    console.log(peliculasEncontradas);

    // Actualizar estado del listado principal con el resultado del filtro aplicado
    setListadoState(peliculasEncontradas);


  }

  return (
    <div className="search">
      <h3 className="title">Buscador:</h3>
      <form>
        <input type = "text" 
               name = "busqueda" 
               id = "campo_busqueda"
               autoComplete = "off"
               onChange = { buscarPelicula }
        />
        {(noEncontrado && busqueda.length > 1) && (
          <p className="no-encontrado">Sin resultado</p>
        )}
      </form>
    </div>
  )
}
