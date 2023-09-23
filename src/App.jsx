import './App.css';
import React, {useState} from 'react';
import General from './Componentes/General';
import InfoClima from './Componentes/InfoClima';
import Pronostico from './Componentes/Pronostico';

function App() {
  const [ubicacion , setUbicacion] = useState ("x");

  const cambiarUbicacion = () => {
    setUbicacion ("y");
  }

  return (
    <div className="App">
      
      <div className="conteiner-general-pronostico">
        <div className='sub-conteiner-general-pronostico'><General ubicacion={ubicacion} cambiarUbicacion={cambiarUbicacion}/></div>
        <div className="sub-conteiner-general-pronostico"><Pronostico /></div>
      </div>

      {/* container principal */}
      <div className="container-InfoClima">
        {/*Primera Fila*/}
        <div className='sub-container'><InfoClima /></div>
        <div className='sub-container'><InfoClima /></div>
        <div className='sub-container'><InfoClima /></div>
        {/*Segunda Fila*/}
        <div className='sub-container'><InfoClima /></div>
        <div className='sub-container'><InfoClima /></div>
        <div className='sub-container'><InfoClima /></div>
      </div>
    </div>
  );
}

export default App;
