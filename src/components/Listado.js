/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

export const Listado = ({listadoState, setListadoState}) => {
  
  useEffect(() => {
    conseguirPeliculas();
  }, [])
  
  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem('peliculas'));  
    setListadoState(peliculas);

    return peliculas;
  }

  const borrarPelicula = (id) => {
    // conseguir peliculas almacenadas
    let peliculasAlmacenadas = conseguirPeliculas();

    // filtrar esas peliculas para eliminar las que no quiero
    let nuevoListadoPeliculas = peliculasAlmacenadas.filter( peliculas => peliculas.id !== parseInt(id) );

    // actualizar estado del listado
    setListadoState(nuevoListadoPeliculas);

    // actualizar localStorage
    localStorage.setItem('peliculas', JSON.stringify(nuevoListadoPeliculas));
  }

  return (
    <>
      {
        listadoState !== [] ? listadoState.map(pelicula => {
          return(
            <article key={pelicula.id} className="item">
            <h3 className="title">{pelicula.titulo}</h3>
            <p className="description">{pelicula.descripcion}</p>
            <button className="edit">Editar</button>
            <button className="delete" onClick={() => borrarPelicula(pelicula.id)}>Borrar</button>

            {/* aparece el formulario de editar */}
          </article>
          )})
        : <h2>No hay peliculas para mostrar</h2>
      }
    </>
  )
}
