import React from 'react';
import { ClassState } from './ClassState';
import { UseState } from './UseState';
import './Validcion.css';

export const Validacion = () => {
  return (
    <div className='container'>
      <h1> Vaidaciones con UseState vs ClassState </h1>
      <span class="animation"></span>

      <div className='state-container'>
        <UseState name="UseState" />
        <br/>
        <ClassState name="ClassState" />
      </div>
      
    </div>
  );
}

// export default Validacion;