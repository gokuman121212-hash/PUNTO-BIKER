const DATOS_INICIALES = [
  // 1. SUPERDEPORTIVAS (8 modelos)
  { id: 1, marca: "Ducati", categoria: "Superdeportivas", nombre: "Ducati Panigale V4 R", specs: "998cc • 218 HP • Desmosedici", precio: 44900, stock: 2, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80" },
  { id: 2, marca: "BMW", categoria: "Superdeportivas", nombre: "BMW M 1000 RR", specs: "999cc • 212 HP • Carbono", precio: 36900, stock: 2, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80" },
  { id: 3, marca: "Kawasaki", categoria: "Superdeportivas", nombre: "Kawasaki Ninja H2R / ZX-10R", specs: "998cc • 203 HP • KRT Edition", precio: 19800, stock: 3, img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80" },
  { id: 4, marca: "Yamaha", categoria: "Superdeportivas", nombre: "Yamaha YZF-R1M", specs: "998cc • 200 HP • Crossplane", precio: 27400, stock: 2, img: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80" },
  { id: 5, marca: "Aprilia", categoria: "Superdeportivas", nombre: "Aprilia RSV4 Factory 1100", specs: "1099cc • 217 HP • Öhlins", precio: 25900, stock: 2, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80" },
  { id: 6, marca: "Honda", categoria: "Superdeportivas", nombre: "Honda CBR1000RR-R Fireblade SP", specs: "1000cc • 215 HP • HRC", precio: 28500, stock: 2, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80" },
  { id: 7, marca: "Suzuki", categoria: "Superdeportivas", nombre: "Suzuki GSX-R1000R", specs: "999cc • 202 HP • MotoGP Tech", precio: 18600, stock: 3, img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80" },
  { id: 8, marca: "ZXMoto", categoria: "Superdeportivas", nombre: "ZXMoto 820RR Corsa", specs: "819cc • 135 HP • Tricilíndrica", precio: 11200, stock: 4, img: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80" },

  // 2. DEPORTIVAS (8 modelos)
  { id: 9, marca: "Aprilia", categoria: "Deportivas", nombre: "Aprilia RS 660 Extrema", specs: "659cc • 100 HP • Quickshifter", precio: 13400, stock: 4, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80" },
  { id: 10, marca: "Yamaha", categoria: "Deportivas", nombre: "Yamaha YZF-R7", specs: "689cc • 73 HP • CP2", precio: 9800, stock: 5, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80" },
  { id: 11, marca: "CFMoto", categoria: "Deportivas", nombre: "CFMoto 450SR-S", specs: "449cc • 50 HP • Monobrazo", precio: 6500, stock: 6, img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80" },
  { id: 12, marca: "Kawasaki", categoria: "Deportivas", nombre: "Kawasaki Ninja 500 SE", specs: "451cc • 45 HP • Embrague Antirrebote", precio: 6400, stock: 7, img: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80" },
  { id: 13, marca: "KTM", categoria: "Deportivas", nombre: "KTM RC 390 GP", specs: "373cc • 44 HP • WP APEX", precio: 6300, stock: 5, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80" },
  { id: 14, marca: "BMW", categoria: "Deportivas", nombre: "BMW G 310 RR", specs: "313cc • 34 HP • 4 Modos", precio: 5900, stock: 5, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80" },
  { id: 15, marca: "Hero", categoria: "Deportivas", nombre: "Hero Karizma XMR 210", specs: "210cc • 25.5 HP • DOHC", precio: 3100, stock: 9, img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80" },
  { id: 16, marca: "Italika", categoria: "Deportivas", nombre: "Italika Vort-X 300R", specs: "292cc • 27 HP • Carenada", precio: 2950, stock: 10, img: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80" },

  // 3. ADVENTURE (8 modelos)
  { id: 17, marca: "BMW", categoria: "Adventure", nombre: "BMW R 1300 GS Trophy", specs: "1300cc • 145 HP • Radar", precio: 24500, stock: 3, img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80" },
  { id: 18, marca: "Ducati", categoria: "Adventure", nombre: "Ducati Multistrada V4 Rally", specs: "1158cc • 170 HP • Tanque 30L", precio: 29900, stock: 2, img: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80" },
  { id: 19, marca: "KTM", categoria: "Adventure", nombre: "KTM 1290 Super Adventure R", specs: "1301cc • 160 HP • Off-Road", precio: 21800, stock: 3, img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80" },
  { id: 20, marca: "Honda", categoria: "Adventure", nombre: "Honda CRF1100L Africa Twin", specs: "1084cc • 101 HP • DCT", precio: 17900, stock: 4, img: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80" },
  { id: 21, marca: "CFMoto", categoria: "Adventure", nombre: "CFMoto 800MT Explore", specs: "799cc • 91 HP • Radar Trasero", precio: 10600, stock: 5, img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80" },
  { id: 22, marca: "Kove", categoria: "Adventure", nombre: "Kove 800X Pro Adventure", specs: "799cc • 95 HP • Solo 185 kg", precio: 9800, stock: 5, img: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80" },
  { id: 23, marca: "Suzuki", categoria: "Adventure", nombre: "Suzuki V-Strom 800DE", specs: "776cc • 84 HP • Rin 21''", precio: 11500, stock: 4, img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80" },
  { id: 24, marca: "Morbidelli", categoria: "Adventure", nombre: "Morbidelli T1002VX", specs: "997cc • 88 HP • Motor V-Twin", precio: 9900, stock: 4, img: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80" },

  // 4. DOBLE PROPÓSITO / RALLY (8 modelos)
  { id: 25, marca: "Kove", categoria: "Doble Propósito", nombre: "Kove 450 Rally Factory", specs: "449cc • 51 HP • Dakar Spec", precio: 9200, stock: 4, img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80" },
  { id: 26, marca: "Yamaha", categoria: "Doble Propósito", nombre: "Yamaha Ténéré 700 World Raid", specs: "689cc • 73 HP • Doble Tanque", precio: 12400, stock: 4, img: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80" },
  { id: 27, marca: "KTM", categoria: "Doble Propósito", nombre: "KTM 690 Enduro R", specs: "693cc • 74 HP • Monocilíndrica", precio: 12900, stock: 3, img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80" },
  { id: 28, marca: "Honda", categoria: "Doble Propósito", nombre: "Honda CRF300L Rally", specs: "286cc • 27 HP • Suspensión Larga", precio: 6400, stock: 6, img: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80" },
  { id: 29, marca: "Kawasaki", categoria: "Doble Propósito", nombre: "Kawasaki KLX 300", specs: "292cc • 29 HP • Enduro Dual", precio: 6100, stock: 6, img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80" },
  { id: 30, marca: "Hero", categoria: "Doble Propósito", nombre: "Hero XPulse 200 4V Rally", specs: "199cc • 19 HP • Kit Rally", precio: 2950, stock: 11, img: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80" },
  { id: 31, marca: "Italika", categoria: "Doble Propósito", nombre: "Italika DM250X", specs: "250cc • 17 HP • Todo Terreno", precio: 2350, stock: 12, img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80" },
  { id: 32, marca: "Suzuki", categoria: "Doble Propósito", nombre: "Suzuki DR650S", specs: "644cc • 43 HP • Clásica Indestructible", precio: 7200, stock: 5, img: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80" },

  // 5. NAKED (8 modelos)
  { id: 33, marca: "KTM", categoria: "Naked", nombre: "KTM 1390 Super Duke R Evo", specs: "1350cc • 190 HP • The Beast", precio: 21500, stock: 2, img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80" },
  { id: 34, marca: "Ducati", categoria: "Naked", nombre: "Ducati Streetfighter V4 S", specs: "1103cc • 208 HP • Alerones Biplano", precio: 27800, stock: 2, img: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80" },
  { id: 35, marca: "Yamaha", categoria: "Naked", nombre: "Yamaha MT-09 SP", specs: "890cc • 119 HP • Brembo Stylema", precio: 12200, stock: 4, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80" },
  { id: 36, marca: "Kawasaki", categoria: "Naked", nombre: "Kawasaki Z900 SE", specs: "948cc • 125 HP • Sugomi", precio: 11400, stock: 5, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80" },
  { id: 37, marca: "CFMoto", categoria: "Naked", nombre: "CFMoto 800NK Advanced", specs: "799cc • 95 HP • Pantalla 8''", precio: 8700, stock: 6, img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80" },
  { id: 38, marca: "Honda", categoria: "Naked", nombre: "Honda CB750 Hornet", specs: "755cc • 91 HP • Bicilíndrica", precio: 8500, stock: 5, img: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80" },
  { id: 39, marca: "Morbidelli", categoria: "Naked", nombre: "Morbidelli M502N", specs: "486cc • 47 HP • Estilo Italiano", precio: 5600, stock: 6, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80" },
  { id: 40, marca: "Hero", categoria: "Naked", nombre: "Hero Hunk 160R 4V", specs: "163cc • 16.9 HP • Horquilla Invertida", precio: 2450, stock: 14, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80" },

  // 6. SCOOTERS (8 modelos)
  { id: 41, marca: "Yamaha", categoria: "Scooters", nombre: "Yamaha TMAX 560 Tech Max", specs: "562cc • 47 HP • MaxiScooter", precio: 14200, stock: 3, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80" },
  { id: 42, marca: "Honda", categoria: "Scooters", nombre: "Honda X-ADV 750", specs: "745cc • 58 HP • Scooter SUV", precio: 13800, stock: 3, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80" },
  { id: 43, marca: "BMW", categoria: "Scooters", nombre: "BMW C 400 GT", specs: "350cc • 34 HP • Gran Turismo", precio: 8900, stock: 4, img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80" },
  { id: 44, marca: "Aprilia", categoria: "Scooters", nombre: "Aprilia SR GT 200", specs: "174cc • 17.4 HP • Urbano Sport", precio: 4600, stock: 6, img: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80" },
  { id: 45, marca: "Suzuki", categoria: "Scooters", nombre: "Suzuki Burgman Street 125EX", specs: "124cc • 8.6 HP • Eco Performance", precio: 2500, stock: 9, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80" },
  { id: 46, marca: "Yamaha", categoria: "Scooters", nombre: "Yamaha NMAX 155 Connected", specs: "155cc • 15 HP • ABS Doble Canal", precio: 4100, stock: 8, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80" },
  { id: 47, marca: "Hero", categoria: "Scooters", nombre: "Hero Dash 125 FI", specs: "124cc • 9 HP • Inyección", precio: 1850, stock: 12, img: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80" },
  { id: 48, marca: "Italika", categoria: "Scooters", nombre: "Italika Vitalia 150", specs: "149cc • 8.4 HP • Estilo Retro", precio: 1750, stock: 15, img: "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80" },

  // 7. CUSTOM / CRUISER (8 modelos)
  { id: 49, marca: "Ducati", categoria: "Custom", nombre: "Ducati Diavel V4", specs: "1158cc • 168 HP • Muscle Cruiser", precio: 26900, stock: 2, img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80" },
  { id: 50, marca: "BMW", categoria: "Custom", nombre: "BMW R 18 Transcontinental", specs: "1802cc • 91 HP • Big Boxer", precio: 25400, stock: 2, img: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80" },
  { id: 51, marca: "Honda", categoria: "Custom", nombre: "Honda Rebel 1100T DCT", specs: "1084cc • 87 HP • Bagger", precio: 11800, stock: 3, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80" },
  { id: 52, marca: "Kawasaki", categoria: "Custom", nombre: "Kawasaki Vulcan S 650", specs: "649cc • 61 HP • Ergo-Fit", precio: 8400, stock: 5, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80" },
  { id: 53, marca: "CFMoto", categoria: "Custom", nombre: "CFMoto 450CL-C Bobber", specs: "449cc • 40 HP • Correa Gates", precio: 6400, stock: 6, img: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80" },
  { id: 54, marca: "Morbidelli", categoria: "Custom", nombre: "Morbidelli C1002V", specs: "997cc • 88 HP • Cruiser V2", precio: 9600, stock: 4, img: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80" },
  { id: 55, marca: "Suzuki", categoria: "Custom", nombre: "Suzuki Boulevard M109R", specs: "1783cc • 128 HP • Power Cruiser", precio: 15800, stock: 2, img: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80" },
  { id: 56, marca: "Italika", categoria: "Custom", nombre: "Italika TC250", specs: "250cc • 17.8 HP • Chopper Clásica", precio: 2250, stock: 10, img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80" }
];

let productos = JSON.parse(localStorage.getItem("punto_biker_db_v5")) || DATOS_INICIALES;
let carrito = [];
let categoriaActiva = "Todas";

function guardarDB() {
  localStorage.setItem("punto_biker_db_v5", JSON.stringify(productos));
}

function inicializarFiltros() {
  const cats = ["Todas", ...new Set(productos.map(p => p.categoria))];
  const bar = document.getElementById("categorias-bar");
  bar.innerHTML = cats.map(c =>
    `<button class="${c === categoriaActiva ? 'active' : ''}" onclick="filtrarCategoria('${c}')">${c}</button>`
  ).join("");

  const marcas = [...new Set(productos.map(p => p.marca))].sort();
  const selectMarca = document.getElementById("filtro-marca");
  selectMarca.innerHTML = `<option value="Todas">Todas las Marcas (${marcas.length})</option>` +
    marcas.map(m => `<option value="${m}">${m}</option>`).join("");
}

function filtrarCategoria(cat) {
  categoriaActiva = cat;
  document.querySelectorAll("#categorias-bar button").forEach(btn => {
    btn.classList.toggle("active", btn.innerText === cat);
  });
  renderCatalogo();
}

function renderCatalogo() {
  const grid = document.getElementById("catalogo-grid");
  const texto = (document.getElementById("buscador")?.value || "").toLowerCase();
  const marcaSel = document.getElementById("filtro-marca")?.value || "Todas";

  const filtrados = productos.filter(p => {
    const matchCat = categoriaActiva === "Todas" || p.categoria === categoriaActiva;
    const matchMarca = marcaSel === "Todas" || p.marca === marcaSel;
    const matchTxt = p.nombre.toLowerCase().includes(texto) ||
                     p.marca.toLowerCase().includes(texto) ||
                     p.specs.toLowerCase().includes(texto) ||
                     p.categoria.toLowerCase().includes(texto);
    return matchCat && matchMarca && matchTxt;
  });

  if (filtrados.length === 0) {
    grid.innerHTML = "<p style='grid-column:1/-1;text-align:center;color:#94a3b8;padding:2rem;'>No se encontraron motocicletas con ese filtro.</p>";
    return;
  }

  grid.innerHTML = filtrados.map(p => `
    <article class="card">
      <img src="${p.img}" alt="${p.nombre}" />
      <div class="card-body">
        <div class="card-tags">
          <span class="marca-tag">${p.marca}</span>
          <span class="badge">${p.categoria}</span>
        </div>
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
      <td><strong>${p.marca}</strong></td>
      <td>${p.categoria}</td>
      <td>${p.nombre}</td>
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

inicializarFiltros();
renderCatalogo();
renderInventario();
actualizarCarritoUI();
