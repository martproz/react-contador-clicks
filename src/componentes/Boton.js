import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton({texto, esBotonDeClic, manejarClic}) { //desestructuración: aquí iría props y abajo, donde dice "texto", iría props.texto. Agregamos las llaves y llamamos directamente a texto. 
  return (
    <button //¿Es botón de clic? Si true retorna "boton clic". Si false retorna el valor "boton reiniciar".
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
      //tenemos dsps que decidir qué pasa cuando se hace clic sobre el botón
      //la función del event listener onclic se recibirá como un prop, "manejar clic"
      //la función manejarClic viene del componente que renderice al botón
      onClick={manejarClic}> 
        {texto}
    </button>
  );
}

export default Boton;