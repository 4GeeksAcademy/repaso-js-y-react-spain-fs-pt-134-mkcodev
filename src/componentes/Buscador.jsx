import React, { useState } from 'react'

const Buscador = () => {

  let nombres = ['Juan', 'María', 'Pedro', 'Ana', 'Luis'];

  const [termino, setTermino] = useState('');
  const [resultados, setResultados] = useState(nombres);

  const handleInputChange = (e) => {
    setTermino(e.target.value);
  };

  const filtrarResultados = () => {
    const resultadosFiltrados = nombres.filter((nombre) =>
      nombre.toLowerCase().includes(termino.toLowerCase())
    );
    setResultados(resultadosFiltrados);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      filtrarResultados();
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Buscar..." aria-label="Buscar..." aria-describedby="button-addon2" onChange={handleInputChange} onKeyDown={handleKeyDown} value={termino}/>
              <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={filtrarResultados}>Buscar</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <ul className="list-group">
              {resultados.map((resultado, index) => (
                <li key={index} className="list-group-item">
                  {resultado}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Buscador
