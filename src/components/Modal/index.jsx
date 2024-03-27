import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { ModalContainer, ModalOverlay } from './Modal.styled';

const Modal = ({ children, open, onClose }) => {
  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  if (!open) return null;

  return createPortal(
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContainer>{children}</ModalContainer>
    </ModalOverlay>,
    document.getElementById('modal-portal')
  );
};

export default Modal;
