// Demostración completa de conectividad contextual con MCP
// Antigravity + MCP se conecta a: Base de datos, API externa, CMS headless

import MainLayout from '../layouts/MainLayout';
import UserCard from '../components/UserCard';
import { getUsersFromDB } from '../lib/db';
import { fetchPostsFromAPI } from '../lib/api-client';
import { getContentFromCMS } from '../lib/cms';

export default function MCPDemo({ users, posts, cmsData }) {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold">🔌 Conectividad Contextual con MCP</h1>
      <p className="mt-2 text-gray-600">
        Los datos que ves abajo vienen de fuentes externas conectadas vía MCP,
        no son datos locales estáticos.
      </p>

      {/* Base de datos */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">📦 Base de datos (usuarios reales)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {users.map(user => <UserCard key={user.id} user={user} />)}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          ✅ MCP consultó el esquema de PostgreSQL/MySQL y trajo estos datos.
        </p>
      </section>

      {/* API externa */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">🌐 API Externa (REST)</h2>
        <ul className="list-disc ml-6 mt-2">
          {posts.map(post => (
            <li key={post.id}>
              <strong>{post.title}</strong> – {post.body.substring(0, 60)}...
            </li>
          ))}
        </ul>
        <p className="text-sm text-gray-500 mt-2">
          ✅ MCP analizó el endpoint de la API y generó el cliente automáticamente.
        </p>
      </section>

      {/* CMS Headless */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold">📄 CMS Headless</h2>
        <div dangerouslySetInnerHTML={{ __html: cmsData.html }} />
        <p className="text-sm text-gray-500 mt-2">
          ✅ MCP entendió los modelos de contenido de Sanity/Strapi y generó la consulta.
        </p>
      </section>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const users = await getUsersFromDB();      // MCP → Base de datos
  const posts = await fetchPostsFromAPI();   // MCP → API externa
  const cmsData = await getContentFromCMS(); // MCP → CMS Headless

  return { props: { users, posts, cmsData } };
}
