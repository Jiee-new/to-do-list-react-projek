import { useState } from 'react';
import './App.css'; // Pastikan CSS di-import

function App() {
  const [inputTugas, setInputTugas] = useState('');
  const [daftarTodo, setDaftarTodo] = useState([]);

  const tambahTugas = (e) => {
    e.preventDefault();
    if (inputTugas.trim() === '') return;
    setDaftarTodo([...daftarTodo, inputTugas]);
    setInputTugas('');
  };

  const hapusTugas = (indexTarget) => {
    setDaftarTodo(daftarTodo.filter((_, index) => index !== indexTarget));
  };

  return (
    <div id="center">
      <div className="todo-container">
        <h2>My Todo List</h2>
        
        <form onSubmit={tambahTugas} className="todo-form">
          <input
            type="text"
            placeholder="Tambah tugas baru..."
            value={inputTugas}
            onChange={(e) => setInputTugas(e.target.value)}
            className="todo-input"
          />
          <button type="submit" className="counter-btn">
            Tambah
          </button>
        </form>

        <ul className="todo-list">
          {daftarTodo.map((tugas, index) => (
            <li key={index} className="todo-item">
              <span className="todo-text">{tugas}</span>
              <button onClick={() => hapusTugas(index)} className="delete-btn">
                Hapus
              </button>
            </li>
          ))}
        </ul>

        {daftarTodo.length === 0 && (
          <p className="empty-msg">Belum ada tugas hari ini. Santai dulu!</p>
        )}
        
        {/* Pembatas dekoratif bawaan tema Vite */}
        <div className="ticks"></div>
      </div>
      <div id="spacer"></div>
    </div>
  );
}

export default App;
