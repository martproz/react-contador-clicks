import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
import { useState } from 'react'; //useState es un hook

function App() {

  //definimos la función en el componente 3:18:18
  //la función flecha no tendrá ningún parámetro y retornará lo que está entre paréntesis
  
  const [numClics, setNumClics] = useState(0) //0 es el valor inicial del número de clics
  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt= 'Logo de freeCodeCamp' 
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
        <Boton 
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} //estamos diciendo que se asigne la función manejarClic entre llaves al prop manejarClic seguido de igual. Luego, como el prop MC tiene el valor {MC}, lo recibirá el botón onclick de Boton.js
          /> 
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
          />
      </div>
    </div>
  );
}

export default App;
