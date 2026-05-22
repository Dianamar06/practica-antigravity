cat > pages/api/products.js << 'EOF'
// API Route creada automáticamente por Antigravity
// Instrucción: "Crea un endpoint GET /api/products que devuelva lista de productos"

export default function handler(req, res) {
  const products = [
    { id: 1, name: "Laptop Gamer", price: 1200 },
    { id: 2, name: "Mouse Inalámbrico", price: 35 },
    { id: 3, name: "Teclado Mecánico", price: 85 },
  ];
  res.status(200).json(products);
}
EOF