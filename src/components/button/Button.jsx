import "./button.css";

// eslint-disable-next-line react/prop-types
export default function Button({ button, onClick, isActive }) {
  return (
    <button onClick={onClick} className={isActive ? "button active" : "button"}>
      {button}
    </button>
  );
}
