import React from 'react';
import './Inicio.css'; 
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div className="container">
      <h1>Inicio</h1>
      <span class="animation"></span>

      <div className="tools-container">
        <h2 className="tools-title">Herramientas</h2>

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
        </div>
      </div>

      <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div className="progress-bar" style={{ width: '50%' }}></div>
      </div>
    </div>
  );
}

export default Inicio;