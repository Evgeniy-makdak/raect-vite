import "./button.css";

// eslint-disable-next-line react/prop-types
export default function Button({ button, onClick }) {
  return (
    <button onClick={onClick} className="button active">
      {button}
    </button>
  );
}
