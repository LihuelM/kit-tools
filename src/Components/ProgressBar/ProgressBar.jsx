import React from 'react';
import './ProgressBar.css';
import Icon1 from './assets/clonesEncontrados.png';
import Icon2 from './assets/downloadDefault.png';
import Icon3 from './assets/checkDefault.png';

const ProgressBar = () => {
  return (
    <div className='container'>
      <h1>Barra de Progreso</h1>
      <span class="animation"></span>

      <div className="progress-container">
        <div className="progress-containerIcon">
          <div className='IconContainer'>
            <img src={Icon1} alt="Solicitar" />
          </div>
          <div className='IconContainer'>
            <img src={Icon2} alt="ConfirmarRUT" />
          </div>
          <div className='IconContainer'>
            <img src={Icon3} alt="Confirmación" />
          </div>
        </div>
        <div className="progress-containerText">
          <span className="text">Solicitar</span>
          <span className="text">Confirmar RUT</span>
          <span className="text">Confirmación</span>
        </div>
        <div className="progress">
          <div className="progress-bar" style={{ width: '5%' }}></div>
        </div>
      </div>
      <br></br>

      <div className="progress-container">
        <div className="progress-containerIcon">
        <div className='IconContainer'>
            <img src={Icon1} alt="Solicitar" />
          </div>
          <div className='IconContainer'>
            <img src={Icon2} alt="ConfirmarRUT" />
          </div>
          <div className='IconContainer'>
            <img src={Icon3} alt="Confirmación" />
          </div>
        </div>
        <div className="progress-containerText">
          <span className="text">Solicitar</span>
          <span className="text">Confirmar RUT</span>
          <span className="text">Confirmación</span>
        </div>
        <div className="progress">
          <div className="progress-bar" style={{ width: '50%' }}></div>
        </div>
      </div>
      <br></br>

      <div className="progress-container">
        <div className="progress-containerIcon">
        <div className='IconContainer'>
            <img src={Icon1} alt="Solicitar" />
          </div>
          <div className='IconContainer'>
            <img src={Icon2} alt="ConfirmarRUT" />
          </div>
          <div className='IconContainer'>
            <img src={Icon3} alt="Confirmación" />
          </div>
        </div>
        <div className="progress-containerText">
          <span className="text">Solicitar</span>
          <span className="text">Confirmar RUT</span>
          <span className="text">Confirmación</span>
        </div>
        <div className="progress">
          <div className="progress-bar" style={{ width: '100%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
