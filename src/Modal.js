import React from 'react';

function Modal({ isOpen, closeModal, handleChange }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Enter Your Name</h2>
        <input type="text" onChange={handleChange} />
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
