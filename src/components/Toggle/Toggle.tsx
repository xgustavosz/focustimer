import "./Toggle.css";

interface ToggleProps {
  handleChange: () => void;
  isChecked: boolean;
}

export const Toggle = ({ handleChange, isChecked }: ToggleProps) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">{isChecked ? "Dark" : "Light"} Mode</label>
    </div>
  );
};
