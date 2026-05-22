// Simulación de base de datos real (PostgreSQL, MySQL, MongoDB, etc.)
// Antigravity + MCP puede consultar el esquema real de tu BD

const mockUsers = [
  { id: 1, name: 'Ana García', email: 'ana@example.com', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Luis Pérez', email: 'luis@example.com', avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, name: 'Marta Díaz', email: 'marta@example.com', avatar: 'https://i.pravatar.cc/150?img=3' },
];

export async function getUsersFromDB() {
  // Aquí iría: SELECT * FROM users;
  return mockUsers;
}
