import * as React from "react";
import "./Modal.css";

interface ModalProps {
  show: boolean; // Indique si le modal doit être affiché
  onClose: () => void; // Fonction pour fermer le modal
  children?: React.ReactNode; // Contenu du modal (enfants)
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="button" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
