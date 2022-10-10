import React, { useState } from 'react';
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';


export const Crear = ({setListadoState}) => {
  
  const tituloComponente = 'Añadir película';

  const [ peliculaState, setPeliculaState ] = useState({
    titulo: '',
    descripcion: ''
  });

  // desestructuración del objeto del estado;
  const { titulo, descripcion } = peliculaState;

  const conseguirDatosFormulario = e => {
    e.preventDefault();

    // Conseguir datos del formulario
    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    // Crear objeto de la pelicula a guardar

    let pelicula = {
      id: new Date().getTime(),
      titulo,
      descripcion
    }

    // Guardar estado (objeto de pelicula)
    setPeliculaState(pelicula);

    // Actualizar el estado del listado principal
    setListadoState(elementos => {
      return [...elementos, pelicula];
    })

    // llamo al helper para el localStorage, pasándole la clave del storage y el item
    GuardarEnStorage('peliculas', pelicula);

  }

  return (
    <div className='add'>
      <h3>{tituloComponente}</h3>
      <strong>  
        {(titulo && descripcion) && `Has creado la película ${titulo}`}
      </strong>
      <form onSubmit={conseguirDatosFormulario}>
        <input 
          type='text' 
          name='titulo' 
          id='titulo' 
          placeholder='Título' />
        <textarea
          id='descripcion'
          name='descripcion'
          placeholder="Descripción">
        </textarea>
        <input 
          type='submit'
          id='save' 
          value='Guardar' />
      </form>
    </div>
  )
}
