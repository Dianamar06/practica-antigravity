// Este componente fue generado automáticamente por Antigravity
// Instrucción: "Crea una tarjeta de producto con nombre, precio y botón de compra"

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-700">${product.price}</p>
      <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
        Comprar
      </button>
    </div>
  );
}
