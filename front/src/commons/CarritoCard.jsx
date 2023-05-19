export default function CarritoCard({ product }) {
  return (
    <div>
      <img src={product.image[0].url} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </div>
  );
}
