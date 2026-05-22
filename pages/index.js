// Página que demuestra el valor de Antigravity en Next.js
import MainLayout from '../layouts/MainLayout';
import ProductCard from '../components/ProductCard';

export default function Home({ products }) {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">🚀 Antigravity en acción</h1>
      
      <section className="mt-6">
        <h2 className="text-2xl font-semibold">¿Qué acelera?</h2>
        <ul className="list-disc ml-6 mt-2 space-y-1">
          <li>✅ <strong>Componentes reutilizables</strong> – Ej: <code>ProductCard</code> generado en segundos.</li>
          <li>✅ <strong>Rutas dinámicas</strong> – La ruta <code>/products/[id]</code> ya está creada.</li>
          <li>✅ <strong>Layouts</strong> – Este layout principal con header/footer lo generó la IA.</li>
          <li>✅ <strong>API Routes</strong> – Endpoint <code>/api/products</code> listo para usar.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">📦 Productos (datos de ejemplo)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const products = [
    { id: 1, name: "Laptop Gamer", price: 1200 },
    { id: 2, name: "Mouse Inalámbrico", price: 35 },
    { id: 3, name: "Teclado Mecánico", price: 85 },
  ];
  return { props: { products } };
}