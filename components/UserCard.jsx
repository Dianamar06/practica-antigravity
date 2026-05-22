// Componente generado por Antigravity para mostrar usuarios desde DB
export default function UserCard({ user }) {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full mx-auto" />
      <h2 className="text-xl font-bold text-center mt-2">{user.name}</h2>
      <p className="text-gray-600 text-center">{user.email}</p>
    </div>
  );
}
