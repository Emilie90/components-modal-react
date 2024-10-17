import * as React from "react";
import "./Modal.css"; // Importation du fichier CSS pour styliser le modal

// Interface pour les propriétés du composant Modal
interface ModalProps {
  show: boolean; // Indique si le modal doit être affiché ou non
  onClose: () => void; // Fonction appelée lorsqu'on ferme le modal
  children?: React.ReactNode; // Contenu affiché à l'intérieur du modal (optionnel)
}

// Composant Modal, typé avec React.FC (Functional Component) et prenant ModalProps en paramètres
const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
  // Si la prop `show` est false, on ne retourne rien (le modal n'est pas affiché)
  if (!show) return null;

  // Si `show` est true, on retourne le code JSX du modal
  return (
    // Le div avec la classe "modal-overlay" sert d'arrière-plan (overlay) pour le modal
    // Un clic sur cet overlay appelle la fonction `onClose` pour fermer le modal
    <div className="modal-overlay" onClick={onClose}>
      {/* Le div "modal-content" contient le contenu principal du modal */}
      {/* L'événement `stopPropagation()` empêche le clic à l'intérieur du modal de fermer ce dernier */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Bouton pour fermer le modal. Il déclenche la fonction `onClose` quand on clique dessus */}
        <button className="button" onClick={onClose}>
          Close
        </button>
        {/* Affichage du contenu du modal passé via la prop `children` */}
        {children}
      </div>
    </div>
  );
};

// Exportation du composant Modal pour pouvoir l'importer et l'utiliser dans d'autres fichiers
export default Modal;
