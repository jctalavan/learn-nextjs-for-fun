export default function ParrafoWithTitle({ title, children }) {
  return (
    <>
      <h3>{title}</h3>
      <p>{children}</p>
    </>
  );
}
