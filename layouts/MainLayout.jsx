// Layout principal generado por Antigravity
// Instrucción: "Crea un layout con header, main y footer"

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl">Mi App Next.js con Antigravity</h1>
      </header>
      <main className="flex-grow p-6">{children}</main>
      <footer className="bg-gray-200 p-4 text-center">
        © 2025 - Demostración Antigravity
      </footer>
    </div>
  );
}
