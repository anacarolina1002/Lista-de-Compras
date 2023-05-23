import React, { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState([]);

  const adicionarItem = (e) => {
    e.preventDefault();
    if (item.trim() !== '') {
      setLista((prevLista) => [...prevLista, item]);
      setItem('');
    }
  };

  return (
    <div className="container">
      <h1>Lista de Compras</h1>
      <form className="form-add-item" onSubmit={adicionarItem}>
        <div className="form-group">
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            placeholder="Digite o item"
          />
        </div>
        <button type='submit'>Adicionar</button>
      </form>
      <div className="lista">
        {lista.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
