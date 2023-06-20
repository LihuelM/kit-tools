import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Inicio from './Pages/Inicio';
import { Validacion } from './Components/ValidacionesDeCampos/Validacion';
import { DragAndDrop } from './Components/DragAndDrop/DragAndDrop';
import ExcelFileUploader from './Components/ArrastrarYSoltar/ArrastrarYSoltar';

function App() {
  return (
    <BrowserRouter>

          <Routes>
            <Route exact path='/' element={<Inicio />} />
            <Route exact path='/Validacion' element={<Validacion />} />
            <Route exact path='/DragAndDrop' element={<DragAndDrop />} />
            <Route exact path='/CargarArchivos' element={<ExcelFileUploader />} />
            
          </Routes>

    </BrowserRouter>
  );
}

export default App;
