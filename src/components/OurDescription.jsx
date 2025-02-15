export default function OurDescription({ title, description }) {
  return (
    <li>
      <div>
        <strong>{title}</strong>
      </div>
      <p style={{ whiteSpace: 'pre-line' }}>{description}</p>
    </li>
  );
}
