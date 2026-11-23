const DATOS_INICIALES = [
  // Categoría 1: Deportivas
  { id: 1, categoria: "Deportivas", nombre: "Moto Deportiva R-300", precio: 6200, stock: 5, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80" },
  { id: 2, categoria: "Deportivas", nombre: "Moto Deportiva GP-400", precio: 6800, stock: 4, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80" },
  { id: 3, categoria: "Deportivas", nombre: "Moto Deportiva RS-500", precio: 7500, stock: 3, img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80" },
  { id: 4, categoria: "Deportivas", nombre: "Moto Deportiva Track-390", precio: 6500, stock: 6, img: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80" },

  // Categoría 2: Naked
  { id: 5, categoria: "Naked", nombre: "Moto Naked Street-300", precio: 5900, stock: 7, img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80" },
  { id: 6, categoria: "Naked", nombre: "Moto Naked Urban-390", precio: 6300, stock: 5, img: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80" },
  { id: 7, categoria: "Naked", nombre: "Moto Naked Fighter-400", precio: 6100, stock: 4, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80" },
  { id: 8, categoria: "Naked", nombre: "Moto Naked Neo-300", precio: 5400, stock: 8, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80" },

  // Categoría 3: Doble Propósito
  { id: 9, categoria: "Doble Propósito", nombre: "Moto Enduro Trail-190", precio: 3400, stock: 10, img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80" },
  { id: 10, categoria: "Doble Propósito", nombre: "Moto TodoTerreno XT-250", precio: 4800, stock: 6, img: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80" },
  { id: 11, categoria: "Doble Propósito", nombre: "Moto Rally Adventure-650", precio: 7900, stock: 3, img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80" },
  { id: 12, categoria: "Doble Propósito", nombre: "Moto Touring GS-310", precio: 7200, stock: 4, img: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80" },

  // Categoría 4: Scooters
  { id: 13, categoria: "Scooters", nombre: "Scooter Urbano Max-155", precio: 4100, stock: 9, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80" },
  { id: 14, categoria: "Scooters", nombre: "Scooter Ejecutivo City-160", precio: 4300, stock: 7, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80" },
  { id: 15, categoria: "Scooters", nombre: "Scooter Clásico Retro-150", precio: 5200, stock: 3, img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80" },
  { id: 16, categoria: "Scooters", nombre: "Scooter Compacto Lite-125", precio: 3100, stock: 8, img: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80" },

  // Categoría 5: Custom
  { id: 17, categoria: "Custom", nombre: "Moto Custom Classic-350", precio: 4900, stock: 5, img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80" },
  { id: 18, categoria: "Custom", nombre: "Moto Cruiser Bobber-500", precio: 7400, stock: 4, img: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80" },
  { id: 19, categoria: "Custom", nombre: "Moto Chopper Vulcan-650", precio: 8300, stock: 2, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80" },
  { id: 20, categoria: "Custom", nombre: "Moto Rutera Street-220", precio: 2900, stock: 11, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80" }
];

let productos = JSON.parse(localStorage.getItem("punto_biker_db")) || DATOS_INICIALES;
let carrito = [];
let categoriaActiva = "Todas";

function guardarDB() {
  localStorage.setItem("punto_biker_db", JSON.stringify(productos));
}

function renderCategorias() {
  const cats = ["Todas", ...new Set(productos.map(p => p.categoria))];
  const bar = document.getElementById("categorias-bar");
  bar.innerHTML = cats.map(c =>
    `<button class="${c === categoriaActiva ? 'active' : ''}" onclick="filtrarCategoria('${c}')">${c}</button>`
  ).join("");
}

function filtrarCategoria(cat) {
  categoriaActiva = cat;
  renderCategorias();
  renderCatalogo();
}

function renderCatalogo() {
  const grid = document.getElementById("catalogo-grid");
  const filtrados = categoriaActiva === "Todas" ? productos : productos.filter(p => p.categoria === categoriaActiva);
  grid.innerHTML = filtrados.map(p => `
    <article class="card">
      <img src="${p.img}" alt="${p.nombre}" />
      <div class="card-body">
        <span class="badge">${p.categoria}</span>
        <h3>${p.nombre}</h3>
        <div class="precio">$${p.precio.toLocaleString()} USD</div>
        <div class="stock ${p.stock === 0 ? 'agotado' : ''}">
          ${p.stock > 0 ? `Stock disponible: ${p.stock} unid.` : 'AGOTADO'}
        </div>
        <button ${p.stock === 0 ? 'disabled' : ''} onclick="agregarCarrito(${p.id})">
          ${p.stock > 0 ? 'Agregar al Carrito' : 'Sin Stock'}
        </button>
      </div>
    </article>
  `).join("");
}

function agregarCarrito(id) {
  const prod = productos.find(p => p.id === id);
  const enCarrito = carrito.find(item => item.id === id);
  if (enCarrito) {
    if (enCarrito.cantidad < prod.stock) enCarrito.cantidad++;
    else alert("No hay más stock disponible de este modelo.");
  } else {
    carrito.push({ ...prod, cantidad: 1 });
  }
  actualizarCarritoUI();
}

function actualizarCarritoUI() {
  document.getElementById("cart-count").innerText = carrito.reduce((acc, i) => acc + i.cantidad, 0);
  const body = document.getElementById("carrito-items");
  if (carrito.length === 0) {
    body.innerHTML = "<p style='color:#94a3b8'>El carrito está vacío.</p>";
    document.getElementById("carrito-total").innerText = "$0";
    return;
  }
  let total = 0;
  body.innerHTML = carrito.map(item => {
    total += item.precio * item.cantidad;
    return `
      <div class="item-carrito">
        <div>
          <strong>${item.nombre}</strong><br/>
          <small>$${item.precio.toLocaleString()} x ${item.cantidad}</small>
        </div>
        <button style="background:#dc2626;color:white;border:none;padding:4px 8px;border-radius:4px;cursor:pointer;" onclick="quitarCarrito(${item.id})">Quitar</button>
      </div>
    `;
  }).join("");
  document.getElementById("carrito-total").innerText = `$${total.toLocaleString()} USD`;
}

function quitarCarrito(id) {
  carrito = carrito.filter(i => i.id !== id);
  actualizarCarritoUI();
}

function finalizarCompra() {
  if (carrito.length === 0) return alert("Agrega al menos una moto al carrito.");
  carrito.forEach(item => {
    const prod = productos.find(p => p.id === item.id);
    if (prod) prod.stock = Math.max(0, prod.stock - item.cantidad);
  });
  guardarDB();
  carrito = [];
  actualizarCarritoUI();
  renderCatalogo();
  renderInventario();
  toggleCarrito();
  alert("¡Compra realizada con éxito! El inventario se ha actualizado.");
}

function renderInventario() {
  const tbody = document.getElementById("tabla-inventario");
  tbody.innerHTML = productos.map(p => `
    <tr>
      <td>#${p.id}</td>
      <td>${p.categoria}</td>
      <td><strong>${p.nombre}</strong></td>
      <td>$${p.precio.toLocaleString()}</td>
      <td><strong>${p.stock}</strong> unid.</td>
      <td>
        <button class="btn-stock btn-mas" onclick="ajustarStock(${p.id}, 1)">+1</button>
        <button class="btn-stock btn-menos" onclick="ajustarStock(${p.id}, -1)">-1</button>
      </td>
    </tr>
  `).join("");
}

function ajustarStock(id, delta) {
  const prod = productos.find(p => p.id === id);
  if (prod) {
    prod.stock = Math.max(0, prod.stock + delta);
    guardarDB();
    renderInventario();
    renderCatalogo();
  }
}

function resetearDatos() {
  productos = JSON.parse(JSON.stringify(DATOS_INICIALES));
  guardarDB();
  renderInventario();
  renderCatalogo();
}

function cambiarVista(vista) {
  document.getElementById("vista-tienda").classList.toggle("hidden", vista !== "tienda");
  document.getElementById("vista-inventario").classList.toggle("hidden", vista !== "inventario");
  document.getElementById("btn-tienda").classList.toggle("active", vista === "tienda");
  document.getElementById("btn-inventario").classList.toggle("active", vista === "inventario");
}

function toggleCarrito() {
  document.getElementById("modal-carrito").classList.toggle("hidden");
}

renderCategorias();
renderCatalogo();
renderInventario();
actualizarCarritoUI();
