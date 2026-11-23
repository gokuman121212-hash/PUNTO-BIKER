const BANCO_FOTOS = {
  Superdeportivas: ["https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80","https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80"],
  Deportivas: ["https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80","https://images.unsplash.com/photo-1622185135505-2d795003994a?w=600&q=80"],
  Adventure: ["https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80","https://images.unsplash.com/photo-1625043484550-df60256f6ea5?w=600&q=80"],
  "Doble Propósito": ["https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80","https://images.unsplash.com/photo-1558980664-312e3bf540d7?w=600&q=80"],
  Naked: ["https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80","https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=600&q=80"],
  Scooters: ["https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80"],
  Custom: ["https://images.unsplash.com/photo-1558981033-0f0309284409?w=600&q=80"]
};

const CATALOGO_BASE = {
  Ducati: [["Superdeportivas","Panigale V4 R",998,218,44900],["Superdeportivas","Panigale V4 S",1103,215,32500],["Superdeportivas","Panigale V4",1103,215,26500],["Superdeportivas","Superleggera V4",998,224,98000],["Deportivas","Panigale V2",955,155,18900],["Adventure","Multistrada V4 Rally",1158,170,29900],["Doble Propósito","DesertX Rally",937,110,22900],["Naked","Streetfighter V4 S",1103,208,27800],["Custom","Diavel V4",1158,168,26900]],
  BMW: [["Superdeportivas","M 1000 RR",999,212,36900],["Superdeportivas","S 1000 RR",999,210,22400],["Deportivas","G 310 RR",313,34,5900],["Adventure","R 1300 GS",1300,145,21900],["Doble Propósito","F 900 GS",895,105,14800],["Naked","M 1000 R",999,210,25900],["Scooters","C 400 GT",350,34,8900],["Custom","R 18 Transcontinental",1802,91,25400]],
  KTM: [["Superdeportivas","RC 8C",889,135,38900],["Deportivas","RC 390",373,44,6300],["Adventure","1290 Super Adventure R",1301,160,21800],["Doble Propósito","690 Enduro R",693,74,12900],["Naked","1390 Super Duke R Evo",1350,190,21500],["Naked","390 Duke",398,45,6200]],
  Yamaha: [["Superdeportivas","YZF-R1M",998,200,27400],["Superdeportivas","YZF-R1",998,200,19200],["Deportivas","YZF-R7",689,73,9800],["Deportivas","YZF-R3",321,42,6100],["Adventure","Tracer 9 GT",890,119,16400],["Doble Propósito","Ténéré 700",689,73,12400],["Naked","MT-10 SP",998,166,17400],["Naked","MT-09 SP",890,119,12200],["Scooters","TMAX 560",562,47,14200]],
  Kawasaki: [["Superdeportivas","Ninja H2R",998,310,57500],["Superdeportivas","Ninja ZX-10R",998,203,19800],["Deportivas","Ninja ZX-6R",636,124,12400],["Adventure","Versys 1000",1043,120,18900],["Doble Propósito","KLR 650",652,40,7900],["Naked","Z H2",998,200,21400],["Naked","Z900",948,125,11400],["Custom","Vulcan S",649,61,8400]],
  Honda: [["Superdeportivas","CBR1000RR-R Fireblade SP",1000,215,28500],["Deportivas","CBR600RR",599,121,12900],["Adventure","CRF1100L Africa Twin",1084,101,19400],["Doble Propósito","CRF300L Rally",286,27,6400],["Naked","CB1000 Hornet",999,155,12800],["Scooters","X-ADV",745,58,13800],["Custom","Rebel 1100",1084,87,11800]],
  Suzuki: [["Superdeportivas","Hayabusa",1340,190,19400],["Superdeportivas","GSX-R1000R",999,202,18600],["Adventure","V-Strom 1050DE",1037,107,16200],["Doble Propósito","DR650S",644,43,7200],["Naked","GSX-S1000",999,152,11900],["Scooters","Burgman 400",400,29,8600]],
  Aprilia: [["Superdeportivas","RSV4 Factory",1099,217,25900],["Deportivas","RS 660",659,100,11600],["Adventure","Tuareg 660",659,80,12200],["Naked","Tuono V4",1077,175,16400]],
  CFMoto: [["Superdeportivas","675SR-R",675,95,8900],["Deportivas","450SR-S",449,50,6500],["Adventure","800MT Explore",799,91,10600],["Doble Propósito","450MT",449,44,6400],["Naked","800NK",799,95,8700]],
  Kove: [["Superdeportivas","450RR",443,70,6900],["Adventure","800X Pro",799,95,9800],["Doble Propósito","450 Rally",449,51,9200]],
  Morbidelli: [["Superdeportivas","F352",349,41,5100],["Adventure","T1002VX",997,88,9900],["Naked","M502N",486,47,5600]],
  Hero: [["Deportivas","Karizma XMR",210,25,3100],["Doble Propósito","XPulse 200 4V",199,19,2550],["Naked","Mavrick 440",440,27,3800]],
  Italika: [["Deportivas","Vort-X 300R",292,27,2950],["Doble Propósito","DM250X",250,17,2350],["Naked","250Z",250,18,2100]],
  ZXMoto: [["Superdeportivas","820RR",819,135,11200],["Deportivas","500RR",499,82,7400],["Adventure","820X",819,115,10400],["Naked","820R",819,130,9900]]
};

function crearObjetoMoto(id, marca, categoria, modelo, cc, hp, precio, stock, customImg = "") {
  const esScooter = categoria === "Scooters";
  const esOffroad = categoria === "Doble Propósito" || categoria === "Adventure";
  const pool = BANCO_FOTOS[categoria] || BANCO_FOTOS.Deportivas;
  return {
    id, marca, categoria, modeloCorto: modelo, nombre: `${marca} ${modelo}`, cc, hp, precio, stock,
    transmision: esScooter ? "Automática CVT" : cc >= 250 ? "Mecánica 6 Vel." : "Mecánica 5 Vel.",
    frenos: hp >= 120 ? "Brembo Radial" : cc >= 250 ? "ABS Doble Canal" : "CBS / Tambor",
    aros: esOffroad ? "Rayos 21''/18''" : esScooter ? "Urbano 12''-14''" : "Aleación 17''",
    tft: cc >= 300 || hp >= 40,
    img: customImg || pool[id % pool.length]
  };
}

function construirCatalogoCompleto() {
  const lista = [];
  let id = 1;
  Object.entries(CATALOGO_BASE).forEach(([marca, modelos]) => {
    modelos.forEach(([categoria, modelo, cc, hp, precio]) => {
      lista.push(crearObjetoMoto(id++, marca, categoria, modelo, cc, hp, precio, (id % 6) + 2));
    });
  });
  return lista;
}

// BASE DE DATOS Y CREDENCIALES
let productos = JSON.parse(localStorage.getItem("pb_db_productos_v3")) || construirCatalogoCompleto();
let usuarios = JSON.parse(localStorage.getItem("pb_db_usuarios_v3")) || [
  { nombre: "Cristhian Flores Q.", email: "cristhian.flores.q@tecsup.edu.pe", pass: "aL566TEC5244", rol: "admin" }
];
if (!usuarios.some(u => u.email === "cristhian.flores.q@tecsup.edu.pe")) {
  usuarios.unshift({ nombre: "Cristhian Flores Q.", email: "cristhian.flores.q@tecsup.edu.pe", pass: "aL566TEC5244", rol: "admin" });
}
let sesionActual = JSON.parse(localStorage.getItem("pb_db_sesion_v3")) || null;
let ventas = JSON.parse(localStorage.getItem("pb_db_ventas_v3")) || [];
let configPagos = JSON.parse(localStorage.getItem("pb_db_config_pagos")) || {
  titular: "", telefono: "", qrDataUrl: "", banco: "", cuenta: "", cci: "", cipEntidad: "PAGOEFECTIVO - PUNTO BIKER"
};
const cacheFotos = JSON.parse(localStorage.getItem("punto_biker_fotos_v3") || "{}");

let carrito = [];
let moneda = "USD";
const TASA_PEN = 3.75;
let paginaActual = 1;
const POR_PAGINA = 20;
let modoAuth = "login";
let metodoPagoSeleccionado = "TARJETA";
let codigoCipActual = "";
let qrTemporalBase64 = "";
let deferredPromptPWA = null;

// DETECCIÓN INTELIGENTE DE APP INSTALADA: OCULTA EL BOTÓN DE INSTALAR CUANDO YA SE DESCARGÓ
function esAppInstalada() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPromptPWA = e;
  const btn = document.getElementById("btn-install-pwa");
  if (btn && !esAppInstalada()) btn.classList.remove("hidden");
});

window.addEventListener("appinstalled", () => {
  deferredPromptPWA = null;
  const btn = document.getElementById("btn-install-pwa");
  if (btn) btn.classList.add("hidden");
});

async function instalarAppPWA() {
  if (!deferredPromptPWA) return;
  deferredPromptPWA.prompt();
  const { outcome } = await deferredPromptPWA.userChoice;
  if (outcome === "accepted") {
    document.getElementById("btn-install-pwa")?.classList.add("hidden");
  }
  deferredPromptPWA = null;
}

// RELOJ EN VIVO DEL DASHBOARD BENTO
function actualizarReloj() {
  const el = document.getElementById("live-clock");
  if (!el) return;
  const now = new Date();
  el.innerText = now.toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit" });
}
setInterval(actualizarReloj, 15000);
actualizarReloj();

function guardarTodoDB() {
  localStorage.setItem("pb_db_productos_v3", JSON.stringify(productos));
  localStorage.setItem("pb_db_usuarios_v3", JSON.stringify(usuarios));
  localStorage.setItem("pb_db_sesion_v3", JSON.stringify(sesionActual));
  localStorage.setItem("pb_db_ventas_v3", JSON.stringify(ventas));
  localStorage.setItem("pb_db_config_pagos", JSON.stringify(configPagos));
}

function formatearPrecio(usd) {
  return moneda === "USD" ? `$${usd.toLocaleString()} USD` : `S/ ${Math.round(usd * TASA_PEN).toLocaleString()}`;
}

// ROLES Y SESIÓN
function actualizarUIUsuario() {
  const authZone = document.getElementById("auth-zone");
  const titleEl = document.getElementById("welcome-user-title");
  const mobLabel = document.getElementById("mob-cuenta-label");
  const adminBtns = document.querySelectorAll(".admin-only");
  const btnCompras = document.getElementById("btn-mis-compras");

  if (esAppInstalada()) {
    document.getElementById("btn-install-pwa")?.classList.add("hidden");
  }

  if (!sesionActual) {
    adminBtns.forEach(b => b.classList.add("hidden"));
    btnCompras.classList.add("hidden");
    titleEl.innerText = "PUNTO BIKER";
    if (mobLabel) mobLabel.innerText = "Ingresar";
    authZone.innerHTML = `<button class="btn-accent" onclick="abrirModalAuth('login')">Iniciar Sesión</button>`;
    return;
  }

  const esAdmin = sesionActual.rol === "admin";
  adminBtns.forEach(b => b.classList.toggle("hidden", !esAdmin));
  btnCompras.classList.remove("hidden");
  titleEl.innerText = `Hola, ${sesionActual.nombre.split(" ")[0]}`;
  if (mobLabel) mobLabel.innerText = "Boletas";

  authZone.innerHTML = `
    <div class="user-pill">
      <span class="role-badge ${esAdmin ? '' : 'client'}">${esAdmin ? 'ADMIN' : 'CLIENTE'}</span>
      <strong>${sesionActual.nombre.split(" ")[0]}</strong>
      <button class="btn-logout" onclick="cerrarSesion()">✕</button>
    </div>
  `;
}

function abrirModalAuth(modo = "login") {
  switchAuthTab(modo);
  document.getElementById("modal-auth").classList.remove("hidden");
}

function switchAuthTab(modo) {
  modoAuth = modo;
  document.getElementById("tab-login").classList.toggle("active", modo === "login");
  document.getElementById("tab-register").classList.toggle("active", modo === "register");
  document.getElementById("campo-nombre-wrap").classList.toggle("hidden", modo === "login");
  document.getElementById("auth-titulo").innerText = modo === "login" ? "ACCESO AL SISTEMA" : "REGISTRO DE CLIENTE";
  document.getElementById("btn-auth-submit").innerText = modo === "login" ? "INGRESAR" : "CREAR CUENTA";
}

function procesarAuth(e) {
  e.preventDefault();
  const email = document.getElementById("auth-email").value.trim().toLowerCase();
  const pass = document.getElementById("auth-pass").value.trim();
  const nombre = document.getElementById("auth-nombre").value.trim();

  if (modoAuth === "register") {
    if (usuarios.some(u => u.email === email)) return alert("Este correo ya está registrado.");
    const rol = email === "cristhian.flores.q@tecsup.edu.pe" ? "admin" : "cliente";
    const nuevo = { nombre: nombre || email.split("@")[0], email, pass, rol };
    usuarios.push(nuevo);
    sesionActual = nuevo;
    guardarTodoDB();
    actualizarUIUsuario();
    document.getElementById("modal-auth").classList.add("hidden");
  } else {
    const user = usuarios.find(u => u.email === email && u.pass === pass);
    if (!user) return alert("Credenciales incorrectas.");
    sesionActual = user;
    guardarTodoDB();
    actualizarUIUsuario();
    document.getElementById("modal-auth").classList.add("hidden");
  }
}

function cerrarSesion() {
  sesionActual = null;
  guardarTodoDB();
  actualizarUIUsuario();
  cambiarVista("tienda");
}

function cambiarVista(vista) {
  if (["inventario", "ventas", "usuarios", "config-pagos"].includes(vista) && sesionActual?.rol !== "admin") {
    return alert("Acceso restringido a Administradores.");
  }
  ["tienda", "compras", "inventario", "ventas", "usuarios", "config-pagos"].forEach(v => {
    document.getElementById(`vista-${v}`)?.classList.toggle("hidden", v !== vista);
  });
  document.querySelectorAll(".rail-btn").forEach(b => b.classList.remove("active"));
  const btnId = vista === "compras" ? "btn-mis-compras" : `btn-${vista}`;
  document.getElementById(btnId)?.classList.add("active");

  if (vista === "compras") renderBoletasCliente();
  if (vista === "inventario") renderInventario();
  if (vista === "ventas") renderVentasAdmin();
  if (vista === "usuarios") renderUsuariosAdmin();
  if (vista === "config-pagos") cargarFormularioConfigPagos();
}

// CATÁLOGO Y FOTOS
function inicializarSidebar() {
  document.getElementById("total-modelos-nav").innerText = productos.length;
  document.getElementById("total-modelos-inv").innerText = productos.length;
  const marcas = [...new Set(productos.map(p => p.marca))].sort();
  document.getElementById("filtro-marca-lista").innerHTML = marcas.map(m =>
    `<label><input type="checkbox" class="chk-marca" value="${m}" onchange="resetPaginaYRender()"> ${m}</label>`
  ).join("");
  const tipos = [...new Set(productos.map(p => p.categoria))];
  document.getElementById("filtro-tipo-lista").innerHTML = tipos.map(t =>
    `<label><input type="checkbox" class="chk-tipo" value="${t}" onchange="resetPaginaYRender()"> ${t}</label>`
  ).join("");
}

function cambiarMoneda(m) {
  moneda = m;
  document.getElementById("btn-usd").classList.toggle("active", m === "USD");
  document.getElementById("btn-pen").classList.toggle("active", m === "PEN");
  actualizarPrecioFiltro();
}

function actualizarPrecioFiltro() {
  const val = Number(document.getElementById("filtro-precio").value);
  document.getElementById("precio-max-label").innerText = formatearPrecio(val);
  resetPaginaYRender();
}

function limpiarFiltros() {
  document.getElementById("buscador").value = "";
  document.querySelectorAll(".chk-marca, .chk-tipo").forEach(c => c.checked = false);
  document.querySelectorAll("input[type='radio'][value='Todos']").forEach(r => r.checked = true);
  document.getElementById("filtro-stock").checked = false;
  document.getElementById("filtro-tft").checked = false;
  document.getElementById("filtro-precio").value = 180000;
  actualizarPrecioFiltro();
}

function resetPaginaYRender() { paginaActual = 1; renderCatalogo(); }

async function buscarFotoReal(prod, imgEl) {
  if (prod.customPhoto || cacheFotos[prod.nombre]) {
    if (cacheFotos[prod.nombre]) imgEl.src = cacheFotos[prod.nombre];
    return;
  }
  try {
    const url = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(prod.marca + " " + prod.modeloCorto + " motorcycle")}&gsrlimit=2&prop=pageimages&pithumbsize=600&format=json&origin=*`;
    const res = await fetch(url);
    const data = await res.json();
    const pages = data?.query?.pages ? Object.values(data.query.pages) : [];
    for (const p of pages) {
      const src = p?.thumbnail?.source;
      if (src && !src.includes("No_image") && !src.includes("Flag_of") && !src.includes("Logo")) {
        cacheFotos[prod.nombre] = src;
        localStorage.setItem("punto_biker_fotos_v3", JSON.stringify(cacheFotos));
        imgEl.src = src;
        return;
      }
    }
  } catch (e) {}
}

function obtenerSrcFoto(p) { return p.customPhoto ? p.img : (cacheFotos[p.nombre] || p.img); }

function renderCatalogo() {
  const grid = document.getElementById("catalogo-grid");
  const info = document.getElementById("resultados-info");
  const pagBar = document.getElementById("paginacion-bar");

  const txt = document.getElementById("buscador").value.toLowerCase();
  const marcasSel = [...document.querySelectorAll(".chk-marca:checked")].map(c => c.value);
  const tiposSel = [...document.querySelectorAll(".chk-tipo:checked")].map(c => c.value);
  const maxPrecio = Number(document.getElementById("filtro-precio").value);
  const motorSel = document.querySelector("input[name='motor']:checked").value;
  const transSel = document.querySelector("input[name='transmision']:checked").value;
  const frenosSel = document.querySelector("input[name='frenos']:checked").value;
  const arosSel = document.querySelector("input[name='aros']:checked").value;
  const soloStock = document.getElementById("filtro-stock").checked;
  const soloTft = document.getElementById("filtro-tft").checked;
  const orden = document.getElementById("ordenar-por").value;

  let filtrados = productos.filter(p => {
    if (txt && !`${p.nombre} ${p.categoria} ${p.cc}cc`.toLowerCase().includes(txt)) return false;
    if (marcasSel.length && !marcasSel.includes(p.marca)) return false;
    if (tiposSel.length && !tiposSel.includes(p.categoria)) return false;
    if (p.precio > maxPrecio) return false;
    if (motorSel === "baja" && p.cc > 250) return false;
    if (motorSel === "media" && (p.cc <= 250 || p.cc > 750)) return false;
    if (motorSel === "alta" && p.cc <= 750) return false;
    if (transSel !== "Todos" && p.transmision !== transSel) return false;
    if (frenosSel !== "Todos" && p.frenos !== frenosSel) return false;
    if (arosSel !== "Todos" && p.aros !== arosSel) return false;
    if (soloStock && p.stock === 0) return false;
    if (soloTft && !p.tft) return false;
    return true;
  });

  if (orden === "precio-asc") filtrados.sort((a, b) => a.precio - b.precio);
  if (orden === "precio-desc") filtrados.sort((a, b) => b.precio - a.precio);
  if (orden === "hp-desc") filtrados.sort((a, b) => b.hp - a.hp);

  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / POR_PAGINA));
  if (paginaActual > totalPaginas) paginaActual = totalPaginas;
  const inicio = (paginaActual - 1) * POR_PAGINA;
  const visibles = filtrados.slice(inicio, inicio + POR_PAGINA);

  info.innerHTML = `<strong>${filtrados.length}</strong> unidades disponibles`;
  grid.innerHTML = visibles.map(p => `
    <article class="card">
      <div class="card-img-wrap" onclick="verFicha(${p.id})">
        <img id="img-moto-${p.id}" src="${obtenerSrcFoto(p)}" alt="${p.nombre}" />
      </div>
      <div class="card-body">
        <div class="card-tags">
          <span class="marca-tag">${p.marca}</span>
          <span class="badge">${p.categoria}</span>
        </div>
        <h3 onclick="verFicha(${p.id})">${p.nombre}</h3>
        <div class="specs">${p.cc}cc • ${p.hp} HP<br/>${p.frenos}</div>
        <div class="precio">${formatearPrecio(p.precio)}</div>
        <div class="stock ${p.stock === 0 ? 'agotado' : ''}">${p.stock > 0 ? `Stock: ${p.stock} unid.` : 'AGOTADO'}</div>
        <div class="card-actions">
          <button class="btn-glass" onclick="verFicha(${p.id})">Ficha</button>
          <button class="btn-accent" ${p.stock === 0 ? 'disabled' : ''} onclick="agregarCarrito(${p.id})">Agregar</button>
        </div>
      </div>
    </article>
  `).join("");

  visibles.forEach(p => {
    const el = document.getElementById(`img-moto-${p.id}`);
    if (el) buscarFotoReal(p, el);
  });

  pagBar.innerHTML = totalPaginas > 1 ? `
    <button ${paginaActual === 1 ? 'disabled' : ''} onclick="paginaActual--;renderCatalogo();window.scrollTo(0,0)">← Anterior</button>
    <span>${paginaActual} / ${totalPaginas}</span>
    <button ${paginaActual === totalPaginas ? 'disabled' : ''} onclick="paginaActual++;renderCatalogo();window.scrollTo(0,0)">Siguiente →</button>
  ` : "";
}

function verFicha(id) {
  const p = productos.find(m => m.id === id);
  if (!p) return;
  document.getElementById("ficha-contenido").innerHTML = `
    <img src="${obtenerSrcFoto(p)}" alt="${p.nombre}" />
    <div class="modal-info">
      <div class="flex-between">
        <span class="marca-tag">${p.marca} • ${p.categoria}</span>
        <button onclick="document.getElementById('modal-ficha').classList.add('hidden')" class="btn-close-x">✕</button>
      </div>
      <h2 style="margin-top:8px;">${p.nombre}</h2>
      <div class="precio">${formatearPrecio(p.precio)}</div>
      <div class="ficha-grid">
        <div><strong>Motor:</strong> ${p.cc} cc</div>
        <div><strong>Potencia:</strong> ${p.hp} HP</div>
        <div><strong>Transmisión:</strong> ${p.transmision}</div>
        <div><strong>Frenos:</strong> ${p.frenos}</div>
        <div><strong>Aros:</strong> ${p.aros}</div>
        <div><strong>Stock:</strong> ${p.stock} unid.</div>
      </div>
      <button class="btn-accent" style="width:100%;" ${p.stock === 0 ? 'disabled' : ''} onclick="agregarCarrito(${p.id});document.getElementById('modal-ficha').classList.add('hidden')">
        AGREGAR AL CARRITO
      </button>
    </div>
  `;
  document.getElementById("modal-ficha").classList.remove("hidden");
}

function cerrarModal(e, id) { if (e.target.id === id) document.getElementById(id).classList.add("hidden"); }

// CARRITO Y CHECKOUT
function agregarCarrito(id) {
  const prod = productos.find(p => p.id === id);
  const enCarrito = carrito.find(i => i.id === id);
  if (enCarrito) {
    if (enCarrito.cantidad < prod.stock) enCarrito.cantidad++;
    else alert("Sin más stock disponible.");
  } else {
    carrito.push({ ...prod, cantidad: 1 });
  }
  actualizarCarritoUI();
}

function actualizarCarritoUI() {
  const totalUnid = carrito.reduce((acc, i) => acc + i.cantidad, 0);
  document.getElementById("cart-count").innerText = totalUnid;
  const railCount = document.getElementById("cart-count-rail");
  if (railCount) railCount.innerText = totalUnid;
  const mobCount = document.getElementById("mob-cart-count");
  if (mobCount) mobCount.innerText = totalUnid;

  const body = document.getElementById("carrito-items");
  if (carrito.length === 0) {
    body.innerHTML = "<p style='color:var(--muted)'>Carrito vacío.</p>";
    document.getElementById("carrito-total").innerText = formatearPrecio(0);
    return;
  }
  let total = 0;
  body.innerHTML = carrito.map(i => {
    total += i.precio * i.cantidad;
    return `<div class="item-carrito"><div><strong>${i.nombre}</strong><br/><small>${formatearPrecio(i.precio)} x ${i.cantidad}</small></div><button class="btn-stock btn-del" onclick="quitarCarrito(${i.id})">✕</button></div>`;
  }).join("");
  document.getElementById("carrito-total").innerText = formatearPrecio(total);
}

function quitarCarrito(id) { carrito = carrito.filter(i => i.id !== id); actualizarCarritoUI(); }
function toggleCarrito() { document.getElementById("modal-carrito").classList.toggle("hidden"); }
function toggleFiltrosMovil() { document.querySelector(".sidebar-filtros")?.classList.toggle("abierto-movil"); }
function accionCuentaMovil() { sesionActual ? cambiarVista("compras") : abrirModalAuth("login"); }

function iniciarCheckout() {
  if (carrito.length === 0) return alert("Agrega una motocicleta primero.");
  if (!sesionActual) { toggleCarrito(); return abrirModalAuth("login"); }
  const totalUsd = carrito.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
  document.getElementById("pasarela-monto-total").innerText = `${formatearPrecio(totalUsd)} (S/ ${Math.round(totalUsd * TASA_PEN).toLocaleString()})`;
  codigoCipActual = Math.floor(100000000 + Math.random() * 900000000).toString();
  document.getElementById("codigo-cip-generado").innerText = codigoCipActual;
  document.getElementById("ref-yape").innerText = `PB-${Math.floor(1000 + Math.random() * 9000)}`;

  const qrSlot = document.getElementById("checkout-qr-slot");
  qrSlot.innerHTML = configPagos.qrDataUrl ? `<img src="${configPagos.qrDataUrl}" alt="QR" />` : `<span>ESPACIO QR</span>`;
  document.getElementById("chk-titular").innerText = configPagos.titular || "Por configurar";
  document.getElementById("chk-telefono").innerText = configPagos.telefono || "--";
  document.getElementById("chk-cip-entidad").innerText = configPagos.cipEntidad || "PAGOEFECTIVO CIP";
  document.getElementById("chk-banco").innerText = configPagos.banco || "--";
  document.getElementById("chk-cuenta").innerText = configPagos.cuenta || "--";
  document.getElementById("chk-cci").innerText = configPagos.cci || "--";
  document.getElementById("chk-titular-banco").innerText = configPagos.titular || "--";

  toggleCarrito();
  document.getElementById("modal-pasarela").classList.remove("hidden");
}

function seleccionarMetodoPago(tipo, btn) {
  document.querySelectorAll(".metodos-tabs button").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".panel-metodo").forEach(p => p.classList.add("hidden"));
  document.getElementById(`panel-pago-${tipo}`).classList.remove("hidden");
  metodoPagoSeleccionado = btn.innerText;
}

function confirmarPagoFinal() {
  const ahora = new Date();
  const totalUsd = carrito.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
  const nroBoleta = `B001-${String(ventas.length + 1).padStart(6, "0")}`;

  carrito.forEach(item => {
    const prod = productos.find(p => p.id === item.id);
    if (prod) prod.stock = Math.max(0, prod.stock - item.cantidad);
  });

  ventas.unshift({
    boleta: nroBoleta, cip: codigoCipActual,
    fecha: ahora.toLocaleDateString("es-PE"), hora: ahora.toLocaleTimeString("es-PE"),
    clienteNombre: sesionActual.nombre, clienteEmail: sesionActual.email,
    metodoPago: metodoPagoSeleccionado, totalUsd, totalPen: Math.round(totalUsd * TASA_PEN),
    items: carrito.map(i => ({ nombre: i.nombre, cantidad: i.cantidad, precio: i.precio }))
  });

  carrito = [];
  guardarTodoDB();
  actualizarCarritoUI();
  renderCatalogo();
  document.getElementById("modal-pasarela").classList.add("hidden");
  cambiarVista("compras");
}

// BOLETAS, VENTAS, USUARIOS, INVENTARIO Y QR
function renderBoletasCliente() {
  const cont = document.getElementById("lista-boletas-cliente");
  if (!sesionActual) return;
  document.getElementById("compras-usuario-sub").innerText = `${sesionActual.nombre} (${sesionActual.email})`;
  const mis = ventas.filter(v => v.clienteEmail === sesionActual.email);
  cont.innerHTML = mis.length ? mis.map(v => `
    <div class="boleta-card">
      <div class="boleta-head"><div><strong>${v.boleta}</strong><br/><small>CIP: ${v.cip}</small></div><div>${v.fecha} • ${v.hora}</div></div>
      <div class="boleta-items">${v.items.map(i => `• ${i.cantidad}x ${i.nombre}`).join("<br/>")}</div>
      <div class="boleta-foot"><span class="marca-tag">${v.metodoPago}</span><strong>$${v.totalUsd.toLocaleString()} USD</strong></div>
    </div>
  `).join("") : "<p style='color:var(--muted)'>Sin compras registradas.</p>";
}

function renderVentasAdmin() {
  const tbody = document.getElementById("tabla-ventas-admin");
  document.getElementById("kpi-ventas-count").innerText = ventas.length;
  document.getElementById("kpi-ventas-total").innerText = `$${ventas.reduce((a, v) => a + v.totalUsd, 0).toLocaleString()}`;
  tbody.innerHTML = ventas.length ? ventas.map(v => `
    <tr>
      <td><strong>${v.boleta}</strong><br/><small>${v.cip}</small></td>
      <td>${v.fecha} ${v.hora}</td>
      <td>${v.clienteNombre}<br/><small>${v.clienteEmail}</small></td>
      <td>${v.items.map(i => `${i.cantidad}x ${i.nombre}`).join(", ")}</td>
      <td><span class="marca-tag">${v.metodoPago}</span></td>
      <td><strong>$${v.totalUsd.toLocaleString()}</strong></td>
    </tr>
  `).join("") : "<tr><td colspan='6'>Sin ventas registradas.</td></tr>";
}

function renderUsuariosAdmin() {
  document.getElementById("tabla-usuarios-admin").innerHTML = usuarios.map(u => {
    const esPrincipal = u.email === "cristhian.flores.q@tecsup.edu.pe";
    const esAdmin = u.rol === "admin";
    return `
      <tr>
        <td><strong>${u.nombre}</strong></td>
        <td>${u.email}</td>
        <td><span class="role-badge ${esAdmin ? '' : 'client'}">${esAdmin ? 'ADMIN' : 'CLIENTE'}</span></td>
        <td>${esPrincipal ? '<small>Principal</small>' : `<button class="btn-stock" onclick="cambiarRolUsuario('${u.email}')">${esAdmin ? 'Quitar Admin' : 'Hacer Admin'}</button>`}</td>
      </tr>
    `;
  }).join("");
}

function cambiarRolUsuario(email) {
  const u = usuarios.find(x => x.email === email);
  if (u && email !== "cristhian.flores.q@tecsup.edu.pe") {
    u.rol = u.rol === "admin" ? "cliente" : "admin";
    guardarTodoDB();
    renderUsuariosAdmin();
  }
}

function renderInventario() {
  const filtro = (document.getElementById("buscador-inv")?.value || "").toLowerCase();
  const lista = productos.filter(p => `${p.nombre} ${p.categoria}`.toLowerCase().includes(filtro));
  document.getElementById("total-modelos-nav").innerText = productos.length;
  document.getElementById("total-modelos-inv").innerText = productos.length;
  document.getElementById("tabla-inventario").innerHTML = lista.map(p => `
    <tr>
      <td>#${p.id}</td>
      <td><img src="${obtenerSrcFoto(p)}" class="thumb-inv" /></td>
      <td><strong>${p.marca}</strong></td>
      <td>${p.categoria}</td>
      <td>${p.nombre}</td>
      <td>${p.cc}cc | ${p.hp}HP</td>
      <td>$${p.precio.toLocaleString()}</td>
      <td><strong>${p.stock}</strong></td>
      <td>
        <button class="btn-stock" onclick="ajustarStock(${p.id},1)">+1</button>
        <button class="btn-stock" onclick="ajustarStock(${p.id},-1)">-1</button>
        <button class="btn-stock" onclick="abrirModalProducto(${p.id})">Editar</button>
        <button class="btn-stock btn-del" onclick="eliminarProducto(${p.id})">✕</button>
      </td>
    </tr>
  `).join("");
}

function abrirModalProducto(id = null) {
  document.getElementById("form-producto").reset();
  if (id) {
    const p = productos.find(m => m.id === id);
    document.getElementById("prod-modal-titulo").innerText = `EDITAR #${p.id}`;
    document.getElementById("prod-id").value = p.id;
    document.getElementById("prod-marca").value = p.marca;
    document.getElementById("prod-categoria").value = p.categoria;
    document.getElementById("prod-modelo").value = p.modeloCorto;
    document.getElementById("prod-cc").value = p.cc;
    document.getElementById("prod-hp").value = p.hp;
    document.getElementById("prod-stock").value = p.stock;
    document.getElementById("prod-precio").value = p.precio;
    document.getElementById("prod-img").value = p.customPhoto ? p.img : "";
  } else {
    document.getElementById("prod-modal-titulo").innerText = "NUEVA MOTOCICLETA";
    document.getElementById("prod-id").value = "";
  }
  document.getElementById("modal-producto").classList.remove("hidden");
}

function guardarProductoAdmin(e) {
  e.preventDefault();
  const idEx = document.getElementById("prod-id").value;
  const marca = document.getElementById("prod-marca").value.trim();
  const cat = document.getElementById("prod-categoria").value;
  const mod = document.getElementById("prod-modelo").value.trim();
  const cc = Number(document.getElementById("prod-cc").value);
  const hp = Number(document.getElementById("prod-hp").value);
  const stock = Number(document.getElementById("prod-stock").value);
  const precio = Number(document.getElementById("prod-precio").value);
  const img = document.getElementById("prod-img").value.trim();

  if (idEx) {
    const idx = productos.findIndex(p => p.id === Number(idEx));
    if (idx !== -1) {
      productos[idx] = crearObjetoMoto(Number(idEx), marca, cat, mod, cc, hp, precio, stock, img);
      if (img) productos[idx].customPhoto = true;
    }
  } else {
    const newId = productos.length ? Math.max(...productos.map(p => p.id)) + 1 : 1;
    const nuevo = crearObjetoMoto(newId, marca, cat, mod, cc, hp, precio, stock, img);
    if (img) nuevo.customPhoto = true;
    productos.unshift(nuevo);
  }
  guardarTodoDB(); inicializarSidebar(); renderInventario(); renderCatalogo();
  document.getElementById("modal-producto").classList.add("hidden");
}

function eliminarProducto(id) {
  if (!confirm("¿Retirar producto?")) return;
  productos = productos.filter(p => p.id !== id);
  guardarTodoDB(); inicializarSidebar(); renderInventario(); renderCatalogo();
}

function ajustarStock(id, d) {
  const p = productos.find(x => x.id === id);
  if (p) { p.stock = Math.max(0, p.stock + d); guardarTodoDB(); renderInventario(); renderCatalogo(); }
}

function resetearDatos() {
  if (!confirm("¿Restaurar catálogo base?")) return;
  productos = construirCatalogoCompleto();
  guardarTodoDB(); inicializarSidebar(); renderInventario(); renderCatalogo();
}

function cargarFormularioConfigPagos() {
  document.getElementById("cfg-titular").value = configPagos.titular || "";
  document.getElementById("cfg-telefono").value = configPagos.telefono || "";
  document.getElementById("cfg-qr-url").value = configPagos.qrDataUrl && !configPagos.qrDataUrl.startsWith("data:") ? configPagos.qrDataUrl : "";
  document.getElementById("cfg-banco").value = configPagos.banco || "";
  document.getElementById("cfg-cuenta").value = configPagos.cuenta || "";
  document.getElementById("cfg-cci").value = configPagos.cci || "";
  document.getElementById("cfg-cip-entidad").value = configPagos.cipEntidad || "";
  qrTemporalBase64 = configPagos.qrDataUrl || "";
  actualizarPreviewQR();
}

function procesarImagenQR(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => { qrTemporalBase64 = ev.target.result; actualizarPreviewQR(); };
  reader.readAsDataURL(file);
}

function actualizarPreviewQR() {
  const src = document.getElementById("cfg-qr-url").value.trim() || qrTemporalBase64;
  document.getElementById("preview-qr-container").innerHTML = src ? `<img src="${src}" />` : `<span>ESPACIO RESERVADO PARA TU QR</span>`;
  document.getElementById("prev-titular").innerText = document.getElementById("cfg-titular").value || "Sin configurar";
  document.getElementById("prev-telefono").innerText = document.getElementById("cfg-telefono").value || "Sin configurar";
  document.getElementById("prev-banco").innerText = document.getElementById("cfg-banco").value || "Sin configurar";
  document.getElementById("prev-cuenta").innerText = document.getElementById("cfg-cuenta").value || "Sin configurar";
  document.getElementById("prev-cci").innerText = document.getElementById("cfg-cci").value || "Sin configurar";
}

function guardarConfigPagos(e) {
  e.preventDefault();
  configPagos = {
    titular: document.getElementById("cfg-titular").value.trim(),
    telefono: document.getElementById("cfg-telefono").value.trim(),
    qrDataUrl: document.getElementById("cfg-qr-url").value.trim() || qrTemporalBase64,
    banco: document.getElementById("cfg-banco").value.trim(),
    cuenta: document.getElementById("cfg-cuenta").value.trim(),
    cci: document.getElementById("cfg-cci").value.trim(),
    cipEntidad: document.getElementById("cfg-cip-entidad").value.trim()
  };
  guardarTodoDB(); actualizarPreviewQR();
  alert("Configuración de QR y cuentas guardada.");
}

actualizarUIUsuario();
inicializarSidebar();
renderCatalogo();
actualizarCarritoUI();
