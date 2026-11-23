const DATOS_INICIALES = [
  // Categoría 1: Deportivas (6 modelos)
  { id: 1, categoria: "Deportivas", nombre: "Superbike V4-1000 RR", specs: "998cc • 205 HP", precio: 18500, stock: 3, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80" },
  { id: 2, categoria: "Deportivas", nombre: "Supersport R-600 Factory", specs: "599cc • 120 HP", precio: 11800, stock: 4, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80" },
  { id: 3, categoria: "Deportivas", nombre: "Deportiva RS-457 Racing", specs: "457cc • 48 HP", precio: 7400, stock: 6, img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80" },
  { id: 4, categoria: "Deportivas", nombre: "Deportiva Ninja-400 Pro", specs: "399cc • 45 HP", precio: 6600, stock: 5, img: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80" },
  { id: 5, categoria: "Deportivas", nombre: "Deportiva RC-390 Track", specs: "373cc • 44 HP", precio: 6400, stock: 5, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80" },
  { id: 6, categoria: "Deportivas", nombre: "Deportiva GT-250R Sport", specs: "249cc • 28 HP", precio: 3900, stock: 8, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80" },

  // Categoría 2: Naked (6 modelos)
  { id: 7, categoria: "Naked", nombre: "HyperNaked SuperDuke-1290", specs: "1301cc • 180 HP", precio: 17900, stock: 2, img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80" },
  { id: 8, categoria: "Naked", nombre: "Naked MT-09 HyperTorque", specs: "890cc • 119 HP", precio: 11200, stock: 4, img: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80" },
  { id: 9, categoria: "Naked", nombre: "Streetfighter NK-800", specs: "799cc • 95 HP", precio: 8900, stock: 5, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80" },
  { id: 10, categoria: "Naked", nombre: "Naked Hornet CB-750", specs: "755cc • 91 HP", precio: 8600, stock: 4, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80" },
  { id: 11, categoria: "Naked", nombre: "Naked Z-400 Street", specs: "399cc • 45 HP", precio: 5800, stock: 7, img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80" },
  { id: 12, categoria: "Naked", nombre: "Naked Hunk-160R Urban", specs: "163cc • 15 HP", precio: 2450, stock: 12, img: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80" },

  // Categoría 3: Doble Propósito (6 modelos)
  { id: 13, categoria: "Doble Propósito", nombre: "MaxiTrail GS-1300 Trophy", specs: "1300cc • 145 HP", precio: 21500, stock: 2, img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80" },
  { id: 14, categoria: "Doble Propósito", nombre: "Adventure 800-MT Touring", specs: "799cc • 91 HP", precio: 10400, stock: 4, img: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80" },
  { id: 15, categoria: "Doble Propósito", nombre: "Rally 450-Desert Raid", specs: "449cc • 51 HP", precio: 8800, stock: 5, img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80" },
  { id: 16, categoria: "Doble Propósito", nombre: "Enduro CRF-300L Rally", specs: "286cc • 27 HP", precio: 6200, stock: 6, img: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80" },
  { id: 17, categoria: "Doble Propósito", nombre: "Trail X-Pulse 200 4V", specs: "199cc • 19 HP", precio: 2950, stock: 10, img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80" },
  { id: 18, categoria: "Doble Propósito", nombre: "Doble Propósito DM-250X", specs: "250cc • 21 HP", precio: 2600, stock: 9, img: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80" },

  // Categoría 4: Scooters (6 modelos)
  { id: 19, categoria: "Scooters", nombre: "MaxiScooter T-Max 560", specs: "562cc • 47 HP", precio: 12900, stock: 3, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80" },
  { id: 20, categoria: "Scooters", nombre: "Scooter Adventure ADV-350", specs: "330cc • 29 HP", precio: 6700, stock: 5, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80" },
  { id: 21, categoria: "Scooters", nombre: "Scooter Burgman-200 Exec", specs: "200cc • 18 HP", precio: 4500, stock: 6, img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80" },
  { id: 22, categoria: "Scooters", nombre: "Scooter Urbano N-Max 155", specs: "155cc • 15 HP", precio: 4100, stock: 8, img: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80" },
  { id: 23, categoria: "Scooters", nombre: "Scooter Clásico Retro-150", specs: "150cc • 12 HP", precio: 2800, stock: 7, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80" },
  { id: 24, categoria: "Scooters", nombre: "Scooter City Vitalia-125", specs: "125cc • 9 HP", precio: 1950, stock: 11, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80" },

  // Categoría 5: Custom (6 modelos)
  { id: 25, categoria: "Custom", nombre: "Cruiser Diavel-1260 S", specs: "1262cc • 162 HP", precio: 19800, stock: 2, img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80" },
  { id: 26, categoria: "Custom", nombre: "Cruiser Rebel-1100 DCT", specs: "1084cc • 87 HP", precio: 11400, stock: 3, img: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80" },
  { id: 27, categoria: "Custom", nombre: "Custom Vulcan-650 S", specs: "649cc • 61 HP", precio: 8300, stock: 4, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80" },
  { id: 28, categoria: "Custom", nombre: "Bobber CLC-450 Heritage", specs: "449cc • 40 HP", precio: 6500, stock: 5, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80" },
  { id: 29, categoria: "Custom", nombre: "Custom Classic-350 Dark", specs: "349cc • 20 HP", precio: 4800, stock: 6, img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80" },
  { id: 30, categoria: "Custom", nombre: "Chopper Blackbird-250", specs: "250cc • 18 HP", precio: 2750, stock: 9, img: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80" }
];

let productos = JSON.parse(localStorage.getItem("punto_biker_db_v3")) || DATOS_INICIALES;
let carrito = [];
let categoriaActiva = "Todas";

function guardarDB() {
  localStorage.setItem("punto_biker_db_v3", JSON.stringify(productos));
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
  const texto = (document.getElementById("buscador")?.value || "").toLowerCase();
  const filtrados = productos.filter(p => {
    const matchCat = categoriaActiva === "Todas" || p.categoria === categoriaActiva;
    const matchTxt = p.nombre.toLowerCase().includes(texto) || p.specs.toLowerCase().includes(texto) || p.categoria.toLowerCase().includes(texto);
    return matchCat && matchTxt;
  });

  if (filtrados.length === 0) {
    grid.innerHTML = "<p style='grid-column:1/-1;text-align:center;color:#94a3b8;padding:2rem;'>No se encontraron motocicletas con ese criterio.</p>";
    return;
  }

  grid.innerHTML = filtrados.map(p => `
    <article class="card">
      <img src="${p.img}" alt="${p.nombre}" />
      <div class="card-body">
        <span class="badge">${p.categoria}</span>
        <h3>${p.nombre}</h3>
        <div class="specs">${p.specs}</div>
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
      <td>${p.specs}</td>
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
