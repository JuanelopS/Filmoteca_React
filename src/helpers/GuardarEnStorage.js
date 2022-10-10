export const GuardarEnStorage = (key, item) => {

  // conseguir los elementos del localStorage y convertir a objeto de js
  let elementos = JSON.parse(localStorage.getItem('peliculas'));
  
  // comprobar si es un array
  if(Array.isArray(elementos)){
    // añadir un elemento nuevo al array
    elementos = [...elementos, item];
  } else{
    // crear un array con una peli nueva
    elementos = [item];
  }

  // Guardar en localStorage
  localStorage.setItem(key, JSON.stringify(elementos));

  // Devolver objeto
  return item;

}