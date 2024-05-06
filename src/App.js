import './App.css';
import React, { useState } from 'react';
import Modal from './Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleChange = (e) => setName(e.target.value);

  return (
    <div>
      <h1>Hello, {name}</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} closeModal={closeModal} handleChange={handleChange} />
    </div>
  );
}

export default App;
