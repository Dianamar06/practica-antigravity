// Ruta dinámica creada por Antigravity
// Instrucción: "Crea una página /products/[id] que muestre el detalle de un producto"

import MainLayout from '../../layouts/MainLayout';

export default function ProductDetail({ product }) {
  if (!product) return <MainLayout><p>Producto no encontrado</p></MainLayout>;

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-xl text-green-600">${product.price}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Agregar al carrito
      </button>
    </MainLayout>
  );
}

export async function getServerSideProps({ params }) {
  const products = [
    { id: 1, name: "Laptop Gamer", price: 1200 },
    { id: 2, name: "Mouse Inalámbrico", price: 35 },
    { id: 3, name: "Teclado Mecánico", price: 85 },
  ];
  const product = products.find(p => p.id === parseInt(params.id));
  return { props: { product } };
}