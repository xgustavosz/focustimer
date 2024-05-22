import "./Modal.css";

import { IoMdClose } from "react-icons/io";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: SettingsModalProps) => {
  if (isOpen) {
    return (
      <div className="backgroundModalDiv" onClick={onClose}>
        <div
          className="modalStyle"
          onClick={(event) => event.stopPropagation()}
        >
          <button className="closeModalButton" onClick={onClose}>
            <IoMdClose className="closeModalIcon" />
          </button>
          {children}
        </div>
      </div>
    );
  }

  return null;
};
