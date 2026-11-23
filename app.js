const BANCO_FOTOS = {
  Superdeportivas: [
    "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80",
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80",
    "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?w=600&q=80"
  ],
  Deportivas: [
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80",
    "https://images.unsplash.com/photo-1622185135505-2d795003994a?w=600&q=80",
    "https://images.unsplash.com/photo-1580310614729-ccd69652491d?w=600&q=80"
  ],
  Adventure: [
    "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80",
    "https://images.unsplash.com/photo-1625043484550-df60256f6ea5?w=600&q=80"
  ],
  "Doble Propósito": [
    "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80",
    "https://images.unsplash.com/photo-1558980664-312e3bf540d7?w=600&q=80"
  ],
  Naked: [
    "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80",
    "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=600&q=80"
  ],
  Scooters: [
    "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80",
    "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=600&q=80"
  ],
  Custom: [
    "https://images.unsplash.com/photo-1558981033-0f0309284409?w=600&q=80",
    "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?w=600&q=80"
  ]
};

const CATALOGO_BASE = {
  Ducati: [
    ["Superdeportivas", "Panigale V4 R", 998, 218, 44900],
    ["Superdeportivas", "Panigale V4 S", 1103, 215, 32500],
    ["Superdeportivas", "Panigale V4", 1103, 215, 26500],
    ["Superdeportivas", "Superleggera V4", 998, 224, 98000],
    ["Deportivas", "Panigale V2", 955, 155, 18900],
    ["Deportivas", "SuperSport 950 S", 937, 110, 17800],
    ["Adventure", "Multistrada V4 Rally", 1158, 170, 29900],
    ["Adventure", "Multistrada V4 Pikes Peak", 1158, 170, 31500],
    ["Doble Propósito", "DesertX Rally", 937, 110, 22900],
    ["Doble Propósito", "Hypermotard 950 SP", 937, 114, 18500],
    ["Naked", "Streetfighter V4 S", 1103, 208, 27800],
    ["Naked", "Monster SP", 937, 111, 15900],
    ["Custom", "Diavel V4", 1158, 168, 26900]
  ],
  BMW: [
    ["Superdeportivas", "M 1000 RR", 999, 212, 36900],
    ["Superdeportivas", "S 1000 RR", 999, 210, 22400],
    ["Deportivas", "M 1000 XR", 999, 201, 28900],
    ["Deportivas", "G 310 RR", 313, 34, 5900],
    ["Adventure", "R 1300 GS", 1300, 145, 21900],
    ["Adventure", "R 1300 GS Adventure", 1300, 145, 26400],
    ["Doble Propósito", "F 900 GS", 895, 105, 14800],
    ["Doble Propósito", "G 310 GS", 313, 34, 6400],
    ["Naked", "M 1000 R", 999, 210, 25900],
    ["Naked", "S 1000 R", 999, 165, 17400],
    ["Scooters", "C 400 GT", 350, 34, 8900],
    ["Scooters", "CE 04", 0, 42, 12900],
    ["Custom", "R 18 Transcontinental", 1802, 91, 25400]
  ],
  KTM: [
    ["Superdeportivas", "RC 8C", 889, 135, 38900],
    ["Deportivas", "RC 390", 373, 44, 6300],
    ["Adventure", "1290 Super Adventure R", 1301, 160, 21800],
    ["Adventure", "890 Adventure R", 889, 105, 15600],
    ["Adventure", "390 Adventure", 373, 44, 7600],
    ["Doble Propósito", "690 Enduro R", 693, 74, 12900],
    ["Doble Propósito", "450 Rally", 449, 68, 29500],
    ["Naked", "1390 Super Duke R Evo", 1350, 190, 21500],
    ["Naked", "990 Duke", 947, 123, 14900],
    ["Naked", "390 Duke", 398, 45, 6200]
  ],
  Yamaha: [
    ["Superdeportivas", "YZF-R1M", 998, 200, 27400],
    ["Superdeportivas", "YZF-R1", 998, 200, 19200],
    ["Deportivas", "YZF-R7", 689, 73, 9800],
    ["Deportivas", "YZF-R3", 321, 42, 6100],
    ["Deportivas", "YZF-R15M", 155, 18, 4650],
    ["Adventure", "Tracer 9 GT", 890, 119, 16400],
    ["Doble Propósito", "Ténéré 700", 689, 73, 12400],
    ["Doble Propósito", "XTZ 250", 249, 21, 4500],
    ["Naked", "MT-10 SP", 998, 166, 17400],
    ["Naked", "MT-09 SP", 890, 119, 12200],
    ["Naked", "MT-07", 689, 73, 8400],
    ["Scooters", "TMAX 560", 562, 47, 14200],
    ["Scooters", "NMAX 155", 155, 15, 4100]
  ],
  Kawasaki: [
    ["Superdeportivas", "Ninja H2R", 998, 310, 57500],
    ["Superdeportivas", "Ninja ZX-10R", 998, 203, 19800],
    ["Deportivas", "Ninja ZX-6R", 636, 124, 12400],
    ["Deportivas", "Ninja 400", 399, 45, 6400],
    ["Adventure", "Versys 1000", 1043, 120, 18900],
    ["Doble Propósito", "KLR 650", 652, 40, 7900],
    ["Naked", "Z H2", 998, 200, 21400],
    ["Naked", "Z900", 948, 125, 11400],
    ["Custom", "Vulcan S", 649, 61, 8400]
  ],
  Honda: [
    ["Superdeportivas", "CBR1000RR-R Fireblade SP", 1000, 215, 28500],
    ["Deportivas", "CBR600RR", 599, 121, 12900],
    ["Deportivas", "CBR650R", 649, 95, 9900],
    ["Adventure", "CRF1100L Africa Twin", 1084, 101, 19400],
    ["Adventure", "XL750 Transalp", 755, 91, 10900],
    ["Doble Propósito", "CRF300L Rally", 286, 27, 6400],
    ["Naked", "CB1000 Hornet", 999, 155, 12800],
    ["Naked", "CB650R", 649, 95, 9400],
    ["Scooters", "X-ADV", 745, 58, 13800],
    ["Custom", "Rebel 1100", 1084, 87, 11800]
  ],
  Suzuki: [
    ["Superdeportivas", "Hayabusa", 1340, 190, 19400],
    ["Superdeportivas", "GSX-R1000R", 999, 202, 18600],
    ["Deportivas", "GSX-8R", 776, 83, 9600],
    ["Adventure", "V-Strom 1050DE", 1037, 107, 16200],
    ["Adventure", "V-Strom 800DE", 776, 84, 11500],
    ["Doble Propósito", "DR650S", 644, 43, 7200],
    ["Naked", "GSX-S1000", 999, 152, 11900],
    ["Scooters", "Burgman 400", 400, 29, 8600],
    ["Custom", "Boulevard M109R", 1783, 128, 15800]
  ],
  Aprilia: [
    ["Superdeportivas", "RSV4 Factory", 1099, 217, 25900],
    ["Deportivas", "RS 660", 659, 100, 11600],
    ["Deportivas", "RS 457", 457, 48, 6900],
    ["Adventure", "Tuareg 660", 659, 80, 12200],
    ["Naked", "Tuono V4", 1077, 175, 16400],
    ["Scooters", "SR GT 200", 174, 17, 4600]
  ],
  CFMoto: [
    ["Superdeportivas", "675SR-R", 675, 95, 8900],
    ["Deportivas", "450SR-S", 449, 50, 6500],
    ["Adventure", "800MT Explore", 799, 91, 10600],
    ["Doble Propósito", "450MT", 449, 44, 6400],
    ["Naked", "800NK", 799, 95, 8700],
    ["Custom", "450CL-C", 449, 40, 6400]
  ],
  Kove: [
    ["Superdeportivas", "450RR", 443, 70, 6900],
    ["Adventure", "800X Pro", 799, 95, 9800],
    ["Doble Propósito", "450 Rally", 449, 51, 9200],
    ["Naked", "500F", 471, 47, 5900]
  ],
  Morbidelli: [
    ["Superdeportivas", "F352", 349, 41, 5100],
    ["Adventure", "T1002VX", 997, 88, 9900],
    ["Naked", "M502N", 486, 47, 5600],
    ["Custom", "C1002V", 997, 88, 9600]
  ],
  Hero: [
    ["Deportivas", "Karizma XMR", 210, 25, 3100],
    ["Doble Propósito", "XPulse 200 4V", 199, 19, 2550],
    ["Naked", "Mavrick 440", 440, 27, 3800],
    ["Scooters", "Xoom 110", 110, 8, 1650]
  ],
  Italika: [
    ["Deportivas", "Vort-X 300R", 292, 27, 2950],
    ["Doble Propósito", "DM250X", 250, 17, 2350],
    ["Naked", "250Z", 250, 18, 2100],
    ["Scooters", "Vitalia 150", 149, 8, 1750]
  ],
  ZXMoto: [
    ["Superdeportivas", "820RR", 819, 135, 11200],
    ["Deportivas", "500RR", 499, 82, 7400],
    ["Adventure", "820X", 819, 115, 10400],
    ["Doble Propósito", "450 Rally", 449, 50, 7900],
    ["Naked", "820R", 819, 130, 9900]
  ]
};

function crearObjetoMoto(id, marca, categoria, modelo, cc, hp, precio, stock, customImg = "") {
  const esElectrica = cc === 0;
  const esScooter = categoria === "Scooters";
  const esOffroad = categoria === "Doble Propósito" || categoria === "Adventure";
  const peso = esScooter ? 135 : cc > 800 ? 215 : cc > 350 ? 182 : 148;
  const pool = BANCO_FOTOS[categoria] || BANCO_FOTOS.Deportivas;

  return {
    id, marca, categoria, modeloCorto: modelo, nombre: `${marca} ${modelo}`,
    cc, hp, precio, stock,
    transmision: esScooter || esElectrica ? "Automática CVT" : cc >= 250 ? "Mecánica 6 Vel." : "Mecánica 5 Vel.",
    frenos: hp >= 120 ? "Brembo Radial" : cc >= 250 ? "ABS Doble Canal" : "CBS / Tambor",
    aros: esOffroad ? "Rayos 21''/18''" : esScooter ? "Urbano 12''-14''" : "Aleación 17''",
    suspension: hp >= 130 ? "Electrónica Öhlins/WP" : cc >= 250 ? "Invertida USD" : "Telescópica",
    combustible: esElectrica ? "Eléctrica" : cc >= 200 ? "Inyección Electrónica" : "Carburador",
    peso,
    dimCat: peso < 160 ? "Ligera (<160 kg)" : peso <= 205 ? "Media (160-205 kg)" : "Gran Porte (>205 kg)",
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

// ================= BASE DE DATOS PERSISTENTE (LOCALSTORAGE) =================
const CORREOS_ADMIN_PERMITIDOS = ["cristhian.flores.q@tecsup.edu.pe"];
const DOMINIOS_ADMIN = ["@puntobiker.com", "@tecsup.edu.pe"];

let productos = JSON.parse(localStorage.getItem("pb_db_productos_v3")) || construirCatalogoCompleto();
let usuarios = JSON.parse(localStorage.getItem("pb_db_usuarios_v3")) || [
  { nombre: "Cristhian Flores Q.", email: "cristhian.flores.q@tecsup.edu.pe", pass: "aL566TEC5244", rol: "admin" }
];
// Garantizar que la cuenta principal del administrador siempre exista
if (!usuarios.some(u => u.email === "cristhian.flores.q@tecsup.edu.pe")) {
  usuarios.unshift({ nombre: "Cristhian Flores Q.", email: "cristhian.flores.q@tecsup.edu.pe", pass: "aL566TEC5244", rol: "admin" });
}

let sesionActual = JSON.parse(localStorage.getItem("pb_db_sesion_v3")) || null;
let ventas = JSON.parse(localStorage.getItem("pb_db_ventas_v3")) || [];
let configPagos = JSON.parse(localStorage.getItem("pb_db_config_pagos")) || {
  titular: "",
  telefono: "",
  qrDataUrl: "",
  banco: "",
  cuenta: "",
  cci: "",
  cipEntidad: "PAGOEFECTIVO - RECAUDACIÓN PUNTO BIKER"
};

const cacheFotos = JSON.parse(localStorage.getItem("punto_biker_fotos_v3") || "{}");
let carrito = [];
let moneda = "USD";
const TASA_PEN = 3.75;
let paginaActual = 1;
const POR_PAGINA = 21;
let modoAuth = "login";
let metodoPagoSeleccionado = "TARJETA CRÉDITO / DÉBITO";
let codigoCipActual = "";
let qrTemporalBase64 = "";

function guardarTodoDB() {
  localStorage.setItem("pb_db_productos_v3", JSON.stringify(productos));
  localStorage.setItem("pb_db_usuarios_v3", JSON.stringify(usuarios));
  localStorage.setItem("pb_db_sesion_v3", JSON.stringify(sesionActual));
  localStorage.setItem("pb_db_ventas_v3", JSON.stringify(ventas));
  localStorage.setItem("pb_db_config_pagos", JSON.stringify(configPagos));
}

function esCorreoAdmin(email) {
  return CORREOS_ADMIN_PERMITIDOS.includes(email) || DOMINIOS_ADMIN.some(d => email.endsWith(d));
}

function formatearPrecio(usd) {
  if (moneda === "USD") return `$${usd.toLocaleString()} USD`;
  return `S/ ${Math.round(usd * TASA_PEN).toLocaleString()}`;
}

// ================= SISTEMA DE CUENTAS Y ROLES =================
function actualizarUIUsuario() {
  const authZone = document.getElementById("auth-zone");
  const btnInv = document.getElementById("btn-inventario");
  const btnVentas = document.getElementById("btn-ventas");
  const btnCfg = document.getElementById("btn-config-pagos");
  const btnMisCompras = document.getElementById("btn-mis-compras");

  if (!sesionActual) {
    btnInv.classList.add("hidden");
    btnVentas.classList.add("hidden");
    btnCfg.classList.add("hidden");
    btnMisCompras.classList.add("hidden");
    authZone.innerHTML = `<button class="btn-login-nav" onclick="abrirModalAuth('login')">INICIAR SESIÓN / REGISTRO</button>`;
    return;
  }

  const esAdmin = sesionActual.rol === "admin";
  btnInv.classList.toggle("hidden", !esAdmin);
  btnVentas.classList.toggle("hidden", !esAdmin);
  btnCfg.classList.toggle("hidden", !esAdmin);
  btnMisCompras.classList.remove("hidden");

  authZone.innerHTML = `
    <div class="user-pill">
      <span class="role-badge ${esAdmin ? '' : 'client'}">${esAdmin ? 'ADMIN' : 'CLIENTE'}</span>
      <strong>${sesionActual.nombre.split(" ")[0]}</strong>
      <button class="btn-logout" onclick="cerrarSesion()" title="Cerrar Sesión">Salir</button>
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
  document.getElementById("auth-titulo").innerText = modo === "login" ? "ACCESO AL SISTEMA" : "CREAR CUENTA DE CLIENTE";
  document.getElementById("btn-auth-submit").innerText = modo === "login" ? "INGRESAR A LA PLATAFORMA" : "REGISTRAR Y GUARDAR CUENTA";
}

function procesarAuth(e) {
  e.preventDefault();
  const email = document.getElementById("auth-email").value.trim().toLowerCase();
  const pass = document.getElementById("auth-pass").value.trim();
  const nombre = document.getElementById("auth-nombre").value.trim();

  if (modoAuth === "register") {
    if (usuarios.some(u => u.email === email)) {
      return alert("Este correo ya se encuentra registrado. Inicia sesión.");
    }
    const rol = esCorreoAdmin(email) ? "admin" : "cliente";
    const nuevoUsuario = { nombre: nombre || email.split("@")[0], email, pass, rol };
    usuarios.push(nuevoUsuario);
    sesionActual = nuevoUsuario;
    guardarTodoDB();
    actualizarUIUsuario();
    document.getElementById("modal-auth").classList.add("hidden");
    alert(`Cuenta creada con éxito (${rol.toUpperCase()}). Bienvenido, ${nuevoUsuario.nombre}.`);
  } else {
    const user = usuarios.find(u => u.email === email && u.pass === pass);
    if (!user) {
      return alert("Credenciales incorrectas. Verifica tu correo y contraseña o regístrate como cliente.");
    }
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

// ================= NAVEGACIÓN SPA =================
function cambiarVista(vista) {
  if (["inventario", "ventas", "config-pagos"].includes(vista) && sesionActual?.rol !== "admin") {
    return alert("Acceso restringido: Solo cuentas de Administrador.");
  }
  ["tienda", "compras", "inventario", "ventas", "config-pagos"].forEach(v => {
    const sec = document.getElementById(`vista-${v}`);
    if (sec) sec.classList.toggle("hidden", v !== vista);
  });

  ["tienda", "mis-compras", "inventario", "ventas", "config-pagos"].forEach(id => {
    const el = document.getElementById(`btn-${id}`);
    if (el) el.classList.remove("active");
  });
  const activo = document.getElementById(vista === "compras" ? "btn-mis-compras" : `btn-${vista}`);
  if (activo) activo.classList.add("active");

  if (vista === "compras") renderBoletasCliente();
  if (vista === "inventario") renderInventario();
  if (vista === "ventas") renderVentasAdmin();
  if (vista === "config-pagos") cargarFormularioConfigPagos();
}

// ================= CONFIGURACIÓN DE QR Y PAGOS (ADMIN) =================
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
  reader.onload = function(evt) {
    qrTemporalBase64 = evt.target.result;
    actualizarPreviewQR();
  };
  reader.readAsDataURL(file);
}

function actualizarPreviewQR() {
  const urlInput = document.getElementById("cfg-qr-url").value.trim();
  const srcFinal = urlInput || qrTemporalBase64;
  const box = document.getElementById("preview-qr-container");
  if (srcFinal) {
    box.innerHTML = `<img src="${srcFinal}" alt="QR Configurado" />`;
  } else {
    box.innerHTML = `<span>ESPACIO RESERVADO PARA TU QR</span>`;
  }
  document.getElementById("prev-titular").innerText = document.getElementById("cfg-titular").value || "Sin configurar";
  document.getElementById("prev-telefono").innerText = document.getElementById("cfg-telefono").value || "Sin configurar";
  document.getElementById("prev-banco").innerText = document.getElementById("cfg-banco").value || "Sin configurar";
  document.getElementById("prev-cuenta").innerText = document.getElementById("cfg-cuenta").value || "Sin configurar";
  document.getElementById("prev-cci").innerText = document.getElementById("cfg-cci").value || "Sin configurar";
}

function guardarConfigPagos(e) {
  e.preventDefault();
  const urlInput = document.getElementById("cfg-qr-url").value.trim();
  configPagos = {
    titular: document.getElementById("cfg-titular").value.trim(),
    telefono: document.getElementById("cfg-telefono").value.trim(),
    qrDataUrl: urlInput || qrTemporalBase64,
    banco: document.getElementById("cfg-banco").value.trim(),
    cuenta: document.getElementById("cfg-cuenta").value.trim(),
    cci: document.getElementById("cfg-cci").value.trim(),
    cipEntidad: document.getElementById("cfg-cip-entidad").value.trim() || "PAGOEFECTIVO - RECAUDACIÓN PUNTO BIKER"
  };
  guardarTodoDB();
  actualizarPreviewQR();
  alert("¡Datos de cobro y código QR guardados correctamente! Los clientes ya los verán en la pasarela.");
}

// ================= CATÁLOGO Y FILTROS =================
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

function limpiarFiltros() {
  document.getElementById("buscador").value = "";
  document.querySelectorAll(".chk-marca, .chk-tipo").forEach(c => c.checked = false);
  document.querySelectorAll("input[type='radio'][value='Todos']").forEach(r => r.checked = true);
  document.getElementById("filtro-stock").checked = false;
  document.getElementById("filtro-tft").checked = false;
  document.getElementById("filtro-precio").value = 180000;
  actualizarPrecioFiltro();
}

function resetPaginaYRender() {
  paginaActual = 1;
  renderCatalogo();
}

async function buscarEnWikipedia(lang, termino) {
  const url = `https://${lang}.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(termino)}&gsrlimit=2&prop=pageimages&pithumbsize=600&format=json&origin=*`;
  const res = await fetch(url);
  const data = await res.json();
  const pages = data?.query?.pages ? Object.values(data.query.pages) : [];
  for (const p of pages) {
    const src = p?.thumbnail?.source;
    if (src && !src.includes("No_image") && !src.includes("Flag_of") && !src.includes("Logo")) return src;
  }
  return null;
}

async function buscarEnCommons(termino) {
  const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=filetype:bitmap+${encodeURIComponent(termino)}&gsrnamespace=6&gsrlimit=3&prop=imageinfo&iiprop=url&iiurlwidth=600&format=json&origin=*`;
  const res = await fetch(url);
  const data = await res.json();
  const pages = data?.query?.pages ? Object.values(data.query.pages) : [];
  for (const p of pages) {
    const src = p?.imageinfo?.[0]?.thumburl;
    if (src && !src.toLowerCase().includes("logo") && !src.toLowerCase().includes("flag")) return src;
  }
  return null;
}

async function cargarFotoRealMoto(prod, imgElement, badgeElement) {
  if (prod.customPhoto) return;
  if (cacheFotos[prod.nombre]) {
    imgElement.src = cacheFotos[prod.nombre];
    if (badgeElement) badgeElement.innerText = "✓ Foto Real";
    return;
  }
  const baseModelo = prod.modeloCorto.replace(/\b(R|S|RR|SP|Pro|Trophy|Rally|Edition|Factory|Track|GP|SE|GT|Explore|Touring)\b/g, "").trim();
  const intentos = [
    () => buscarEnWikipedia("en", `${prod.marca} ${prod.modeloCorto} motorcycle`),
    () => buscarEnCommons(`${prod.marca} ${prod.modeloCorto}`),
    () => buscarEnCommons(`${prod.marca} ${baseModelo}`),
    () => buscarEnCommons(`${prod.marca} motorcycle`)
  ];
  for (const fn of intentos) {
    try {
      const url = await fn();
      if (url) {
        cacheFotos[prod.nombre] = url;
        localStorage.setItem("punto_biker_fotos_v3", JSON.stringify(cacheFotos));
        imgElement.src = url;
        if (badgeElement) badgeElement.innerText = "✓ Foto Real";
        return;
      }
    } catch (e) {}
  }
}

function obtenerSrcFoto(p) {
  if (p.customPhoto) return p.img;
  return cacheFotos[p.nombre] || p.img;
}

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
  const suspSel = document.querySelector("input[name='suspension']:checked").value;
  const combSel = document.querySelector("input[name='combustible']:checked").value;
  const dimSel = document.querySelector("input[name='dimensiones']:checked").value;
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
    if (suspSel !== "Todos" && p.suspension !== suspSel) return false;
    if (combSel !== "Todos" && p.combustible !== combSel) return false;
    if (dimSel !== "Todos" && p.dimCat !== dimSel) return false;
    if (soloStock && p.stock === 0) return false;
    if (soloTft && !p.tft) return false;
    return true;
  });

  if (orden === "precio-asc") filtrados.sort((a, b) => a.precio - b.precio);
  if (orden === "precio-desc") filtrados.sort((a, b) => b.precio - a.precio);
  if (orden === "hp-desc") filtrados.sort((a, b) => b.hp - a.hp);

  if (filtrados.length === 0) {
    info.innerText = "0 motocicletas encontradas";
    pagBar.innerHTML = "";
    grid.innerHTML = "<p style='grid-column:1/-1;text-align:center;color:#a1a1aa;padding:3rem;'>No hay unidades que coincidan con los filtros seleccionados.</p>";
    return;
  }

  const totalPaginas = Math.ceil(filtrados.length / POR_PAGINA);
  if (paginaActual > totalPaginas) paginaActual = totalPaginas;
  const inicio = (paginaActual - 1) * POR_PAGINA;
  const visibles = filtrados.slice(inicio, inicio + POR_PAGINA);

  info.innerHTML = `Mostrando <strong>${inicio + 1}-${Math.min(inicio + POR_PAGINA, filtrados.length)}</strong> de <strong>${filtrados.length}</strong> unidades en catálogo`;

  grid.innerHTML = visibles.map(p => `
    <article class="card">
      <div class="card-img-wrap" onclick="verFicha(${p.id})">
        <img id="img-moto-${p.id}" src="${obtenerSrcFoto(p)}" alt="${p.nombre}" />
        <span id="badge-foto-${p.id}" style="position:absolute;bottom:6px;right:6px;background:rgba(9,9,11,0.85);color:#d4d4d8;font-size:0.68rem;padding:2px 7px;border-radius:3px;">
          ${p.customPhoto || cacheFotos[p.nombre] ? "✓ Foto Real" : p.categoria}
        </span>
      </div>
      <div class="card-body">
        <div class="card-tags">
          <span class="marca-tag">${p.marca}</span>
          <span class="badge">${p.categoria}</span>
        </div>
        <h3 onclick="verFicha(${p.id})">${p.nombre}</h3>
        <div class="specs">
          ${p.cc > 0 ? p.cc + 'cc' : 'Eléctrica'} | ${p.hp} HP<br/>
          ${p.frenos} | ${p.transmision}
        </div>
        <div class="precio">${formatearPrecio(p.precio)}</div>
        <div class="stock ${p.stock === 0 ? 'agotado' : ''}">
          ${p.stock > 0 ? `Disponibilidad: ${p.stock} unid.` : 'AGOTADO'}
        </div>
        <div class="card-actions">
          <button class="btn-ficha" onclick="verFicha(${p.id})">Ficha Técnica</button>
          <button class="btn-add" ${p.stock === 0 ? 'disabled' : ''} onclick="agregarCarrito(${p.id})">
            ${p.stock > 0 ? 'Agregar' : 'Sin Stock'}
          </button>
        </div>
      </div>
    </article>
  `).join("");

  visibles.forEach(p => {
    const el = document.getElementById(`img-moto-${p.id}`);
    const bg = document.getElementById(`badge-foto-${p.id}`);
    if (el && !p.customPhoto && !cacheFotos[p.nombre]) cargarFotoRealMoto(p, el, bg);
  });

  pagBar.innerHTML = totalPaginas > 1 ? `
    <button ${paginaActual === 1 ? 'disabled' : ''} onclick="paginaActual--;renderCatalogo();window.scrollTo(0,0)">← Anterior</button>
    <span>Página <strong>${paginaActual}</strong> de <strong>${totalPaginas}</strong></span>
    <button ${paginaActual === totalPaginas ? 'disabled' : ''} onclick="paginaActual++;renderCatalogo();window.scrollTo(0,0)">Siguiente →</button>
  ` : "";
}

function verFicha(id) {
  const p = productos.find(m => m.id === id);
  if (!p) return;
  document.getElementById("ficha-contenido").innerHTML = `
    <img src="${obtenerSrcFoto(p)}" alt="${p.nombre}" />
    <div class="modal-info">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span class="marca-tag">${p.marca} • ${p.categoria}</span>
        <button onclick="document.getElementById('modal-ficha').classList.add('hidden')" class="btn-close-x">✕</button>
      </div>
      <h2 style="margin-top:8px;">${p.nombre}</h2>
      <div class="precio" style="margin-top:4px;">${formatearPrecio(p.precio)}</div>
      <div class="ficha-grid">
        <div><strong>Motor:</strong> ${p.cc > 0 ? p.cc + ' cc' : 'Motor Eléctrico'}</div>
        <div><strong>Potencia:</strong> ${p.hp} HP</div>
        <div><strong>Transmisión:</strong> ${p.transmision}</div>
        <div><strong>Frenos:</strong> ${p.frenos}</div>
        <div><strong>Aros y Llantas:</strong> ${p.aros}</div>
        <div><strong>Suspensión:</strong> ${p.suspension}</div>
        <div><strong>Combustible:</strong> ${p.combustible}</div>
        <div><strong>Peso / Dimensión:</strong> ${p.peso} kg (${p.dimCat})</div>
      </div>
      <button class="btn-add" style="width:100%;padding:12px;" ${p.stock === 0 ? 'disabled' : ''} onclick="agregarCarrito(${p.id});document.getElementById('modal-ficha').classList.add('hidden')">
        AGREGAR A ORDEN DE COMPRA (${p.stock} DISPONIBLES)
      </button>
    </div>
  `;
  document.getElementById("modal-ficha").classList.remove("hidden");
}

function cerrarModal(e, id) {
  if (e.target.id === id) document.getElementById(id).classList.add("hidden");
}

// ================= CARRITO Y PASARELA DE PAGOS =================
function agregarCarrito(id) {
  const prod = productos.find(p => p.id === id);
  const enCarrito = carrito.find(item => item.id === id);
  if (enCarrito) {
    if (enCarrito.cantidad < prod.stock) enCarrito.cantidad++;
    else alert("No hay más stock disponible en almacén.");
  } else {
    carrito.push({ ...prod, cantidad: 1 });
  }
  actualizarCarritoUI();
}

function actualizarCarritoUI() {
  document.getElementById("cart-count").innerText = carrito.reduce((acc, i) => acc + i.cantidad, 0);
  const body = document.getElementById("carrito-items");
  if (carrito.length === 0) {
    body.innerHTML = "<p style='color:#a1a1aa'>No hay unidades seleccionadas.</p>";
    document.getElementById("carrito-total").innerText = formatearPrecio(0);
    return;
  }
  let total = 0;
  body.innerHTML = carrito.map(item => {
    total += item.precio * item.cantidad;
    return `
      <div class="item-carrito">
        <div>
          <strong>${item.nombre}</strong><br/>
          <small style="color:#a1a1aa;">${formatearPrecio(item.precio)} x ${item.cantidad}</small>
        </div>
        <button class="btn-stock btn-del" onclick="quitarCarrito(${item.id})">Quitar</button>
      </div>
    `;
  }).join("");
  document.getElementById("carrito-total").innerText = formatearPrecio(total);
}

function quitarCarrito(id) {
  carrito = carrito.filter(i => i.id !== id);
  actualizarCarritoUI();
}

function toggleCarrito() {
  document.getElementById("modal-carrito").classList.toggle("hidden");
}

function iniciarCheckout() {
  if (carrito.length === 0) return alert("Agrega al menos una motocicleta al carrito.");
  if (!sesionActual) {
    toggleCarrito();
    alert("Por favor inicia sesión o regístrate para emitir tu boleta electrónica y guardar tu compra.");
    return abrirModalAuth("login");
  }
  const totalUsd = carrito.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
  document.getElementById("pasarela-monto-total").innerText = `${formatearPrecio(totalUsd)} (S/ ${Math.round(totalUsd * TASA_PEN).toLocaleString()})`;

  codigoCipActual = Math.floor(100000000 + Math.random() * 900000000).toString();
  document.getElementById("codigo-cip-generado").innerText = codigoCipActual;
  const ref = `PB-${Math.floor(1000 + Math.random() * 9000)}`;
  document.getElementById("ref-yape").innerText = ref;

  // Cargar datos de QR y cuentas configuradas por el Administrador
  const qrSlot = document.getElementById("checkout-qr-slot");
  if (configPagos.qrDataUrl) {
    qrSlot.innerHTML = `<img src="${configPagos.qrDataUrl}" alt="QR Oficial" />`;
  } else {
    qrSlot.innerHTML = `<span>ESPACIO PARA QR<br/>(Configurar en Admin)</span>`;
  }
  document.getElementById("chk-titular").innerText = configPagos.titular || "Por configurar en Admin";
  document.getElementById("chk-telefono").innerText = configPagos.telefono || "--";
  document.getElementById("chk-cip-entidad").innerText = configPagos.cipEntidad || "PAGOEFECTIVO - DEPÓSITO EN EFECTIVO O BANCA MÓVIL";
  document.getElementById("chk-banco").innerText = configPagos.banco || "Por configurar en Admin";
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
  const fechaStr = ahora.toLocaleDateString("es-PE", { year: "numeric", month: "2-digit", day: "2-digit" });
  const horaStr = ahora.toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const totalUsd = carrito.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
  const nroBoleta = `B001-${String(ventas.length + 1).padStart(6, "0")}`;

  carrito.forEach(item => {
    const prod = productos.find(p => p.id === item.id);
    if (prod) prod.stock = Math.max(0, prod.stock - item.cantidad);
  });

  const nuevaVenta = {
    boleta: nroBoleta,
    cip: codigoCipActual,
    fecha: fechaStr,
    hora: horaStr,
    clienteNombre: sesionActual.nombre,
    clienteEmail: sesionActual.email,
    metodoPago: metodoPagoSeleccionado,
    totalUsd,
    totalPen: Math.round(totalUsd * TASA_PEN),
    items: carrito.map(i => ({ nombre: i.nombre, cantidad: i.cantidad, precio: i.precio }))
  };

  ventas.unshift(nuevaVenta);
  carrito = [];
  guardarTodoDB();
  actualizarCarritoUI();
  renderCatalogo();
  document.getElementById("modal-pasarela").classList.add("hidden");

  alert(`¡Pago procesado correctamente!\nBoleta Electrónica: ${nroBoleta}\nFecha y Hora: ${fechaStr} ${horaStr}`);
  cambiarVista("compras");
}

// ================= BOLETAS DEL CLIENTE Y REPORTE DE VENTAS ADMIN =================
function renderBoletasCliente() {
  const contenedor = document.getElementById("lista-boletas-cliente");
  if (!sesionActual) return;
  document.getElementById("compras-usuario-sub").innerText = `Titular: ${sesionActual.nombre} (${sesionActual.email})`;

  const misVentas = ventas.filter(v => v.clienteEmail === sesionActual.email);
  if (misVentas.length === 0) {
    contenedor.innerHTML = "<p style='color:#a1a1aa;'>Aún no tienes compras registradas en tu cuenta.</p>";
    return;
  }

  contenedor.innerHTML = misVentas.map(v => `
    <div class="boleta-card">
      <div class="boleta-head">
        <div>
          <strong style="color:#fff;">BOLETA ELECTRÓNICA ${v.boleta}</strong><br/>
          <span style="color:#a1a1aa;">CIP / Ref: ${v.cip}</span>
        </div>
        <div style="text-align:right;color:#a1a1aa;">
          ${v.fecha}<br/>${v.hora}
        </div>
      </div>
      <div class="boleta-items">
        ${v.items.map(i => `• ${i.cantidad}x <strong>${i.nombre}</strong> ($${i.precio.toLocaleString()} c/u)`).join("<br/>")}
      </div>
      <div class="boleta-foot">
        <span class="marca-tag">${v.metodoPago}</span>
        <strong style="font-size:1.1rem;color:#22c55e;">$${v.totalUsd.toLocaleString()} USD / S/ ${v.totalPen.toLocaleString()}</strong>
      </div>
    </div>
  `).join("");
}

function renderVentasAdmin() {
  const tbody = document.getElementById("tabla-ventas-admin");
  document.getElementById("kpi-ventas-count").innerText = ventas.length;
  const sumaTotal = ventas.reduce((acc, v) => acc + v.totalUsd, 0);
  document.getElementById("kpi-ventas-total").innerText = `$${sumaTotal.toLocaleString()} USD`;

  if (ventas.length === 0) {
    tbody.innerHTML = "<tr><td colspan='6' style='text-align:center;color:#a1a1aa;padding:2rem;'>Aún no se han registrado ventas en la plataforma.</td></tr>";
    return;
  }

  tbody.innerHTML = ventas.map(v => `
    <tr>
      <td><strong>${v.boleta}</strong><br/><small style="color:#a1a1aa;">CIP: ${v.cip}</small></td>
      <td>${v.fecha}<br/><small style="color:#a1a1aa;">${v.hora}</small></td>
      <td><strong>${v.clienteNombre}</strong><br/><small style="color:#a1a1aa;">${v.clienteEmail}</small></td>
      <td>${v.items.map(i => `${i.cantidad}x ${i.nombre}`).join(", ")}</td>
      <td><span class="marca-tag">${v.metodoPago}</span></td>
      <td><strong style="color:#22c55e;">$${v.totalUsd.toLocaleString()} USD</strong><br/><small>S/ ${v.totalPen.toLocaleString()}</small></td>
    </tr>
  `).join("");
}

// ================= CRUD COMPLETO DE INVENTARIO (SOLO ADMIN) =================
function renderInventario() {
  const tbody = document.getElementById("tabla-inventario");
  const filtro = (document.getElementById("buscador-inv")?.value || "").toLowerCase();
  const lista = productos.filter(p => `${p.nombre} ${p.categoria}`.toLowerCase().includes(filtro));

  document.getElementById("total-modelos-nav").innerText = productos.length;
  document.getElementById("total-modelos-inv").innerText = productos.length;

  tbody.innerHTML = lista.map(p => `
    <tr>
      <td>#${p.id}</td>
      <td><img src="${obtenerSrcFoto(p)}" class="thumb-inv" alt="${p.nombre}" /></td>
      <td><strong>${p.marca}</strong></td>
      <td>${p.categoria}</td>
      <td>${p.nombre}</td>
      <td>${p.cc}cc | ${p.hp} HP</td>
      <td>$${p.precio.toLocaleString()}</td>
      <td><strong>${p.stock}</strong> unid.</td>
      <td>
        <button class="btn-stock" onclick="ajustarStock(${p.id}, 1)">+1</button>
        <button class="btn-stock" onclick="ajustarStock(${p.id}, -1)">-1</button>
        <button class="btn-stock" onclick="abrirModalProducto(${p.id})">Editar</button>
        <button class="btn-stock btn-del" onclick="eliminarProducto(${p.id})">Retirar</button>
      </td>
    </tr>
  `).join("");
}

function abrirModalProducto(id = null) {
  const form = document.getElementById("form-producto");
  form.reset();
  if (id) {
    const p = productos.find(m => m.id === id);
    document.getElementById("prod-modal-titulo").innerText = `EDITAR MOTOCICLETA #${p.id}`;
    document.getElementById("prod-id").value = p.id;
    document.getElementById("prod-marca").value = p.marca;
    document.getElementById("prod-categoria").value = p.categoria;
    document.getElementById("prod-modelo").value = p.modeloCorto;
    document.getElementById("prod-cc").value = p.cc;
    document.getElementById("prod-hp").value = p.hp;
    document.getElementById("prod-stock").value = p.stock;
    document.getElementById("prod-precio").value = p.precio;
    document.getElementById("prod-img").value = p.customPhoto ? p.img : (cacheFotos[p.nombre] || "");
  } else {
    document.getElementById("prod-modal-titulo").innerText = "AGREGAR NUEVA MOTOCICLETA AL CATÁLOGO";
    document.getElementById("prod-id").value = "";
  }
  document.getElementById("modal-producto").classList.remove("hidden");
}

function guardarProductoAdmin(e) {
  e.preventDefault();
  const idExistente = document.getElementById("prod-id").value;
  const marca = document.getElementById("prod-marca").value.trim();
  const categoria = document.getElementById("prod-categoria").value;
  const modelo = document.getElementById("prod-modelo").value.trim();
  const cc = Number(document.getElementById("prod-cc").value);
  const hp = Number(document.getElementById("prod-hp").value);
  const stock = Number(document.getElementById("prod-stock").value);
  const precio = Number(document.getElementById("prod-precio").value);
  const imgUrl = document.getElementById("prod-img").value.trim();

  if (idExistente) {
    const idx = productos.findIndex(p => p.id === Number(idExistente));
    if (idx !== -1) {
      const actualizado = crearObjetoMoto(Number(idExistente), marca, categoria, modelo, cc, hp, precio, stock, imgUrl);
      if (imgUrl) {
        actualizado.customPhoto = true;
        cacheFotos[actualizado.nombre] = imgUrl;
        localStorage.setItem("punto_biker_fotos_v3", JSON.stringify(cacheFotos));
      }
      productos[idx] = actualizado;
    }
  } else {
    const nuevoId = productos.length ? Math.max(...productos.map(p => p.id)) + 1 : 1;
    const nuevoProd = crearObjetoMoto(nuevoId, marca, categoria, modelo, cc, hp, precio, stock, imgUrl);
    if (imgUrl) {
      nuevoProd.customPhoto = true;
      cacheFotos[nuevoProd.nombre] = imgUrl;
      localStorage.setItem("punto_biker_fotos_v3", JSON.stringify(cacheFotos));
    }
    productos.unshift(nuevoProd);
  }

  guardarTodoDB();
  inicializarSidebar();
  renderInventario();
  renderCatalogo();
  document.getElementById("modal-producto").classList.add("hidden");
}

function eliminarProducto(id) {
  if (!confirm("¿Seguro que deseas retirar esta motocicleta del catálogo?")) return;
  productos = productos.filter(p => p.id !== id);
  guardarTodoDB();
  inicializarSidebar();
  renderInventario();
  renderCatalogo();
}

function ajustarStock(id, delta) {
  const prod = productos.find(p => p.id === id);
  if (prod) {
    prod.stock = Math.max(0, prod.stock + delta);
    guardarTodoDB();
    renderInventario();
    renderCatalogo();
  }
}

function resetearDatos() {
  if (!confirm("¿Restaurar todo el catálogo y stock a los valores originales de fábrica?")) return;
  productos = construirCatalogoCompleto();
  guardarTodoDB();
  inicializarSidebar();
  renderInventario();
  renderCatalogo();
}

// INICIALIZACIÓN
actualizarUIUsuario();
inicializarSidebar();
renderCatalogo();
actualizarCarritoUI();

// ================= FUNCIONES DE INTERFAZ MÓVIL Y TABLET =================
function toggleFiltrosMovil() {
  const sidebar = document.querySelector(".sidebar-filtros");
  if (sidebar) sidebar.classList.toggle("abierto-movil");
}

function accionCuentaMovil() {
  if (!sesionActual) {
    abrirModalAuth("login");
  } else {
    cambiarVista("compras");
  }
}

const _origActualizarCarritoUI = actualizarCarritoUI;
actualizarCarritoUI = function() {
  _origActualizarCarritoUI();
  const mobCount = document.getElementById("mob-cart-count");
  if (mobCount) mobCount.innerText = carrito.reduce((acc, i) => acc + i.cantidad, 0);
};

const _origActualizarUIUsuario = actualizarUIUsuario;
actualizarUIUsuario = function() {
  _origActualizarUIUsuario();
  const mobLabel = document.getElementById("mob-cuenta-label");
  if (mobLabel) {
    mobLabel.innerText = sesionActual ? "BOLETAS" : "INGRESAR";
  }
};

actualizarUIUsuario();
actualizarCarritoUI();

// ================= GESTIÓN DE USUARIOS Y ROLES (EXCLUSIVO ADMIN) =================
const _origActualizarUIUsuario2 = actualizarUIUsuario;
actualizarUIUsuario = function() {
  _origActualizarUIUsuario2();
  const btnUsr = document.getElementById("btn-usuarios");
  if (btnUsr) {
    btnUsr.classList.toggle("hidden", sesionActual?.rol !== "admin");
  }
};

const _origCambiarVista2 = cambiarVista;
cambiarVista = function(vista) {
  if (vista === "usuarios" && sesionActual?.rol !== "admin") {
    return alert("Acceso restringido: Solo cuentas de Administrador.");
  }
  const secUsr = document.getElementById("vista-usuarios");
  if (secUsr) secUsr.classList.toggle("hidden", vista !== "usuarios");
  _origCambiarVista2(vista);
  if (vista === "usuarios") {
    if (secUsr) secUsr.classList.remove("hidden");
    const btnUsr = document.getElementById("btn-usuarios");
    if (btnUsr) btnUsr.classList.add("active");
    renderUsuariosAdmin();
  }
};

function renderUsuariosAdmin() {
  const tbody = document.getElementById("tabla-usuarios-admin");
  if (!tbody) return;
  tbody.innerHTML = usuarios.map(u => {
    const esPrincipal = u.email === "cristhian.flores.q@tecsup.edu.pe";
    const esAdmin = u.rol === "admin";
    return `
      <tr>
        <td><strong>${u.nombre}</strong></td>
        <td>${u.email}</td>
        <td><span class="role-badge ${esAdmin ? '' : 'client'}">${esAdmin ? 'ADMINISTRADOR' : 'CLIENTE'}</span></td>
        <td>
          ${esPrincipal
            ? '<span style="color:#a1a1aa;font-size:0.78rem;">Administrador Principal (Protegido)</span>'
            : `<button class="btn-stock" onclick="cambiarRolUsuario('${u.email}')">
                 ${esAdmin ? 'Quitar Permiso Admin (Volver Cliente)' : 'Dar Permiso de Administrador'}
               </button>`
          }
        </td>
      </tr>
    `;
  }).join("");
}

function cambiarRolUsuario(email) {
  if (email === "cristhian.flores.q@tecsup.edu.pe") return;
  const user = usuarios.find(u => u.email === email);
  if (!user) return;
  user.rol = user.rol === "admin" ? "cliente" : "admin";
  guardarTodoDB();
  renderUsuariosAdmin();
  alert(`Permisos actualizados: ${user.nombre} (${user.email}) ahora tiene rol de ${user.rol.toUpperCase()}.`);
}

actualizarUIUsuario();
