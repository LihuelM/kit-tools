import React, { useState, useRef } from 'react';
import './ArrastrarYSoltar.css';

function ExcelFileUploader() {
  const [excelFile, setExcelFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (
      file.type === 'application/vnd.ms-excel' ||
      file.type ===
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ) {
      setExcelFile(file);
    } else {
      alert('Por favor, seleccione un archivo de Excel válido.');
    }
  };

  const handleTextClick = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (
      file.type === 'application/vnd.ms-excel' ||
      file.type ===
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    ) {
      setExcelFile(file);
    } else {
      alert('Por favor, seleccione un archivo de Excel válido.');
    }
  };

  return (
    <div className='container' >
      <h1>Carga de Archivos</h1>
      <span className="animation"></span>

      <div className="file-uploader" onDragOver={handleDragOver} onDrop={handleDrop} >
        <p>
          Haga clic en el siguiente enlace para seleccionar un archivo de Excel o arrastre y suelte el archivo aquí:
        </p>
        <p>
          <a href="#" onClick={handleTextClick}>
            Seleccionar archivo
          </a>
        </p>
        <input
          type="file"
          accept=".xls, .xlsx"
          ref={fileInputRef}
          onChange={handleFileInputChange}
        />
        {excelFile && <p>Archivo seleccionado: {excelFile.name}</p>}
      </div>
    </div>
  );
}

export default ExcelFileUploader;
