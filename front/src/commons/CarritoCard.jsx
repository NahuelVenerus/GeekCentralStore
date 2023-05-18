export default function CarritoCard({ product }) {
  return (
    <div>
      <img src={product.imagen[0].url} alt={product.nombre} />
      <h3>{product.nombre}</h3>
      <p>{product.precio}</p>
    </div>
  );
}
