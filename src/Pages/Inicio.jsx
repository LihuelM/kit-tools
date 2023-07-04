import React from 'react';
import './Inicio.css'; 
import { Link } from 'react-router-dom';
import Icon1 from './Firefly Inpaint 20230623153750.png';

function Inicio() {
  return (
    <div className="container">
      <h1>Inicio</h1>
      <span class="animation"></span>

      <div className="tools-container">
        <div className='titleContainer'>
          {/* <h2 className="tools-title">Herramientas</h2> */}
          <img className='iconTools' src={Icon1} alt="iconTools" />
        </div>

        <div className="button-container">
          <button className='button'>
            <Link to={'../Validacion'}>Validación de Campos</Link>
          </button>

          <button className='button'>
            <Link to={'../DragAndDrop'}>Drag And Drop</Link>
          </button>

          <button className='button'>
            <Link to={'../CargarArchivos'}>Carga de Archivos</Link>
          </button>

          <button className='button'>
            <Link to={'../ProgressBar'}>Barra de Progreso</Link>
          </button>
        </div>
      </div>

    </div>
  );
}

export default Inicio;