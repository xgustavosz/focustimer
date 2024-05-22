import "./SettingsModal.css";

import { IoMdTimer } from "react-icons/io";

import { Input } from "../Input/Input";
import { Modal } from "../Modal/Modal";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsModal = ({ isOpen, onClose }: SettingsModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="mainSettingsDiv">
        <div className="settingTitle">
          <IoMdTimer className="iconSettingTitle" />
          <h2>Cronômetro</h2>
        </div>
        <div className="mainInputsDiv">
          <h3>Tempo (minutos)</h3>
          <div className="inputSettingsDiv">
            <Input name="pomodoro" type="number" label="Pomodoro" />
            <Input name="shortBreak" type="number" label="Pausa Curta" />
            <Input name="longBreak" type="number" label="Pausa Longa" />
          </div>
        </div>
      </div>
      <div className="saveBtnDiv">
        <button>Salvar</button>
      </div>
    </Modal>
  );
};
