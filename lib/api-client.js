// Cliente para APIs externas (REST o GraphQL)
// Antigravity + MCP puede analizar endpoints y generar este código

export async function fetchPostsFromAPI() {
  // Simulación de llamada a https://jsonplaceholder.typicode.com/posts
  const mockPosts = [
    { id: 1, title: 'MCP permite conectar IA con APIs reales', body: 'Contenido del post...' },
    { id: 2, title: 'Next.js + Antigravity + MCP = flujo superpotente', body: 'Más contenido...' },
  ];
  return mockPosts;
}
