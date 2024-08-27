import React, { useState } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const TestModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
      <button onClick={toggleModal}>
        { isOpen ? 'Close Modal' : 'Open Modal' }
      </button>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        className="flyer-modal"
        overlayClassName="flyer-overlay"
      >
        <button className="close-modal-button" onClick={toggleModal}>Close</button>
        <img src="https://via.placeholder.com/600" alt="test" className="modal-flyer-image" />
      </ReactModal>
    </div>
  );
};

export default TestModal;