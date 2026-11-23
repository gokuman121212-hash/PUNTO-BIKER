const BANCO_FOTOS = {
  Superdeportivas: ["https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=85","https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=85"],
  Deportivas: ["https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=85","https://images.unsplash.com/photo-1622185135505-2d795003994a?w=800&q=85"],
  Adventure: ["https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=85","https://images.unsplash.com/photo-1625043484550-df60256f6ea5?w=800&q=85"],
  "Doble Propósito": ["https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=800&q=85","https://images.unsplash.com/photo-1558980664-312e3bf540d7?w=800&q=85"],
  Naked: ["https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=85","https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800&q=85"],
  Scooters: ["https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=85"],
  Custom: ["https://images.unsplash.com/photo-1558981033-0f0309284409?w=800&q=85"]
};

const CATALOGO_BASE = {
  Ducati: [["Superdeportivas","Panigale V4 R",998,218,44900,2026],["Superdeportivas","Panigale V4 S",1103,215,32500,2026],["Superdeportivas","Panigale V4",1103,215,26500,2025],["Superdeportivas","Superleggera V4",998,224,98000,2025],["Deportivas","Panigale V2",955,155,18900,2026],["Adventure","Multistrada V4 Rally",1158,170,29900,2026],["Doble Propósito","DesertX Rally",937,110,22900,2026],["Naked","Streetfighter V4 S",1103,208,27800,2026],["Custom","Diavel V4",1158,168,26900,2025]],
  BMW: [["Superdeportivas","M 1000 RR",999,212,36900,2026],["Superdeportivas","S 1000 RR",999,210,22400,2026],["Deportivas","G 310 RR",313,34,5900,2025],["Adventure","R 1300 GS",1300,145,21900,2026],["Doble Propósito","F 900 GS",895,105,14800,2026],["Naked","M 1000 R",999,210,25900,2026],["Scooters","C 400 GT",350,34,8900,2025],["Custom","R 18 Transcontinental",1802,91,25400,2025]],
  KTM: [["Superdeportivas","RC 8C",889,135,38900,2025],["Deportivas","RC 390",373,44,6300,2026],["Adventure","1290 Super Adventure R",1301,160,21800,2025],["Doble Propósito","690 Enduro R",693,74,12900,2026],["Naked","1390 Super Duke R Evo",1350,190,21500,2026],["Naked","390 Duke",398,45,6200,2026]],
  Yamaha: [["Superdeportivas","YZF-R1M",998,200,27400,2026],["Superdeportivas","YZF-R1",998,200,19200,2026],["Deportivas","YZF-R7",689,73,9800,2026],["Deportivas","YZF-R3",321,42,6100,2025],["Adventure","Tracer 9 GT",890,119,16400,2026],["Doble Propósito","Ténéré 700",689,73,12400,2026],["Naked","MT-10 SP",998,166,17400,2026],["Naked","MT-09 SP",890,119,12200,2026],["Scooters","TMAX 560",562,47,14200,2026]],
  Kawasaki: [["Superdeportivas","Ninja H2R",998,310,57500,2026],["Superdeportivas","Ninja ZX-10R",998,203,19800,2026],["Deportivas","Ninja ZX-6R",636,124,12400,2026],["Adventure","Versys 1000",1043,120,18900,2025],["Doble Propósito","KLR 650",652,40,7900,2025],["Naked","Z H2",998,200,21400,2026],["Naked","Z900",948,125,11400,2026],["Custom","Vulcan S",649,61,8400,2025]],
  Honda: [["Superdeportivas","CBR1000RR-R Fireblade SP",1000,215,28500,2026],["Deportivas","CBR600RR",599,121,12900,2026],["Adventure","CRF1100L Africa Twin",1084,101,19400,2026],["Doble Propósito","CRF300L Rally",286,27,6400,2025],["Naked","CB1000 Hornet",999,155,12800,2026],["Scooters","X-ADV",745,58,13800,2026],["Custom","Rebel 1100",1084,87,11800,2025]],
  Suzuki: [["Superdeportivas","Hayabusa",1340,190,19400,2026],["Superdeportivas","GSX-R1000R",999,202,18600,2025],["Adventure","V-Strom 1050DE",1037,107,16200,2026],["Doble Propósito","DR650S",644,43,7200,2025],["Naked","GSX-S1000",999,152,11900,2026],["Scooters","Burgman 400",400,29,8600,2025]],
  Aprilia: [["Superdeportivas","RSV4 Factory",1099,217,25900,2026],["Deportivas","RS 660",659,100,11600,2026],["Adventure","Tuareg 660",659,80,12200,2026],["Naked","Tuono V4",1077,175,16400,2025]],
  CFMoto: [["Superdeportivas","675SR-R",675,95,8900,2026],["Deportivas","450SR-S",449,50,6500,2026],["Adventure","800MT Explore",799,91,10600,2026],["Doble Propósito","450MT",449,44,6400,2026],["Naked","800NK",799,95,8700,2026]],
  Kove: [["Superdeportivas","450RR",443,70,6900,2026],["Adventure","800X Pro",799,95,9800,2026],["Doble Propósito","450 Rally",449,51,9200,2026]],
  Morbidelli: [["Superdeportivas","F352",349,41,5100,2026],["Adventure","T1002VX",997,88,9900,2026],["Naked","M502N",486,47,5600,2025]],
  Hero: [["Deportivas","Karizma XMR",210,25,3100,2026],["Doble Propósito","XPulse 200 4V",199,19,2550,2026],["Naked","Mavrick 440",440,27,3800,2026]],
  Italika: [["Deportivas","Vort-X 300R",292,27,2950,2026],["Doble Propósito","DM250X",250,17,2350,2025],["Naked","250Z",250,18,2100,2025]],
  ZXMoto: [["Superdeportivas","820RR",819,135,11200,2026],["Deportivas","500RR",499,82,7400,2026],["Adventure","820X",819,115,10400,2026],["Naked","820R",819,130,9900,2026]]
};

function crearObjetoMoto(id, marca, categoria, modelo, cc, hp, precio, stock, anio = 2026, customImg = "") {
  const esScooter = categoria === "Scooters";
  const esOffroad = categoria === "Doble Propósito" || categoria === "Adventure";
  const peso = esScooter ? 135 : cc > 800 ? 212 : cc > 350 ? 182 : 148;
  const torque = Math.round(cc * 0.105) || 35;
  const tanque = esScooter ? "11.5 L" : esOffroad ? "21.0 L" : "17.0 L";
  const pool = BANCO_FOTOS[categoria] || BANCO_FOTOS.Deportivas;

  return {
    id, marca, categoria, modeloCorto: modelo, nombre: `${marca} ${modelo}`, anio,
    cc, hp, torque, precio, stock, peso, tanque,
    cilindros: cc >= 800 ? "4 Cilindros en Línea / V4" : cc >= 400 ? "Bicilíndrico Paralelo DOHC" : "Monocilíndrico 4V",
    refrigeracion: cc >= 250 ? "Líquida con Electroventilador" : "Aire / Aceite",
    transmision: esScooter ? "Automática CVT" : cc >= 250 ? "Mecánica 6 Vel. + Quickshifter" : "Mecánica 5 Vel.",
    embrague: cc >= 300 ? "Multidisco Antirrebote (Slipper Clutch)" : "Multidisco Húmedo",
    frenosDel: hp >= 120 ? "Doble Disco 330mm Brembo Stylema ABS" : cc >= 250 ? "Disco Lobulado 320mm ABS" : "Disco 260mm CBS",
    frenosTras: cc >= 250 ? "Disco 245mm con ABS Desconectable" : "Disco / Tambor 130mm",
    frenos: hp >= 120 ? "Brembo Radial" : cc >= 250 ? "ABS Doble Canal" : "CBS / Tambor",
    suspensionDel: hp >= 130 ? "Horquilla Invertida Öhlins / WP Electrónica" : cc >= 250 ? "Horquilla Invertida USD 41mm" : "Telescópica Hidráulica",
    suspensionTras: hp >= 130 ? "Monoamortiguador TTX36 Regulable" : "Monoshock Pro-Link Ajustable",
    aros: esOffroad ? "Rayos Cruzados Tubeless 21'' / 18''" : esScooter ? "Aleación Urbana 14'' / 13''" : "Aleación Forjada 17''",
    alturaAsiento: esOffroad ? "865 mm" : esScooter ? "785 mm" : "825 mm",
    tablero: cc >= 300 || hp >= 40 ? "Pantalla TFT Full Color 5'' + Bluetooth" : "LCD Digital Multifunción",
    iluminacion: "Full LED con DRL Diurno",
    img: customImg || pool[id % pool.length]
  };
}

function construirCatalogoCompleto() {
  const lista = [];
  let id = 1;
  Object.entries(CATALOGO_BASE).forEach(([marca, modelos]) => {
    modelos.forEach(([categoria, modelo, cc, hp, precio, anio]) => {
      lista.push(crearObjetoMoto(id++, marca, categoria, modelo, cc, hp, precio, (id % 6) + 2, anio || 2026));
    });
  });
  return lista;
}

// BASE DE DATOS PERSISTENTE
let productos = JSON.parse(localStorage.getItem("pb_db_productos_v4")) || construirCatalogoCompleto();
let usuarios = JSON.parse(localStorage.getItem("pb_db_usuarios_v4")) || [
  { nombre: "Cristhian Flores Q.", email: "cristhian.flores.q@tecsup.edu.pe", pass: "aL566TEC5244", rol: "admin" }
];
if (!usuarios.some(u => u.email === "cristhian.flores.q@tecsup.edu.pe")) {
  usuarios.unshift({ nombre: "Cristhian Flores Q.", email: "cristhian.flores.q@tecsup.edu.pe", pass: "aL566TEC5244", rol: "admin" });
}
let sesionActual = JSON.parse(localStorage.getItem("pb_db_sesion_v4")) || null;
let ventas = JSON.parse(localStorage.getItem("pb_db_ventas_v4")) || [];
let configPagos = JSON.parse(localStorage.getItem("pb_db_config_pagos")) || {
  titular: "", telefono: "", qrDataUrl: "", banco: "", cuenta: "", cci: "", cipEntidad: "PAGOEFECTIVO - PUNTO BIKER"
};
const cacheFotos = JSON.parse(localStorage.getItem("punto_biker_fotos_v5_clean") || "{}");

let carrito = [];
let moneda = "USD";
const TASA_PEN = 3.75;
let paginaActual = 1;
const POR_PAGINA = 20;
let modoAuth = "login";
let metodoPagoSeleccionado = "TARJETA";
let codigoCipActual = "";
let qrTemporalBase64 = "";

function guardarTodoDB() {
  localStorage.setItem("pb_db_productos_v4", JSON.stringify(productos));
  localStorage.setItem("pb_db_usuarios_v4", JSON.stringify(usuarios));
  localStorage.setItem("pb_db_sesion_v4", JSON.stringify(sesionActual));
  localStorage.setItem("pb_db_ventas_v4", JSON.stringify(ventas));
  localStorage.setItem("pb_db_config_pagos", JSON.stringify(configPagos));
}

function formatearPrecio(usd) {
  return moneda === "USD" ? `$${usd.toLocaleString()} USD` : `S/ ${Math.round(usd * TASA_PEN).toLocaleString()}`;
}

function formatearPrecioSecundario(usd) {
  return moneda === "USD" ? `≈ S/ ${Math.round(usd * TASA_PEN).toLocaleString()}` : `≈ $${usd.toLocaleString()} USD`;
}

// CAMBIO DE MONEDA GLOBAL
function cambiarMoneda(m) {
  moneda = m;
  document.getElementById("top-btn-usd")?.classList.toggle("active", m === "USD");
  document.getElementById("top-btn-pen")?.classList.toggle("active", m === "PEN");
  document.getElementById("moneda-actual-tag").innerText = m;
  actualizarPrecioFiltro();
  actualizarCarritoUI();
}

function actualizarPrecioFiltro() {
  const val = Number(document.getElementById("filtro-precio").value);
  document.getElementById("precio-max-label").innerText = formatearPrecio(val);
  resetPaginaYRender();
}

// ROLES, AUTENTICACIÓN, TÉRMINOS Y RECUPERAR CONTRASEÑA
function actualizarUIUsuario() {
  const authZone = document.getElementById("auth-zone");
  const titleEl = document.getElementById("welcome-user-title");
  const mobLabel = document.getElementById("mob-cuenta-label");
  const adminBtns = document.querySelectorAll(".admin-only");
  const btnCompras = document.getElementById("btn-mis-compras");

  if (!sesionActual) {
    adminBtns.forEach(b => b.classList.add("hidden"));
    btnCompras.classList.add("hidden");
    titleEl.innerText = "PUNTO BIKER";
    if (mobLabel) mobLabel.innerText = "Ingresar";
    authZone.innerHTML = `<button class="btn-amber" onclick="abrirModalAuth('login')">Iniciar Sesión</button>`;
    return;
  }

  const esAdmin = sesionActual.rol === "admin";
  adminBtns.forEach(b => b.classList.toggle("hidden", !esAdmin));
  btnCompras.classList.remove("hidden");
  titleEl.innerText = `PUNTO BIKER • ${sesionActual.nombre.split(" ")[0].toUpperCase()}`;
  if (mobLabel) mobLabel.innerText = "Boletas";

  authZone.innerHTML = `
    <div class="user-pill">
      <span class="role-badge ${esAdmin ? '' : 'client'}">${esAdmin ? 'ADMIN' : 'CLIENTE'}</span>
      <strong>${sesionActual.nombre.split(" ")[0]}</strong>
      <button class="btn-logout" onclick="cerrarSesion()" title="Cerrar sesión">✕</button>
    </div>
  `;
}

function abrirModalAuth(modo = "login") {
  switchAuthTab(modo);
  document.getElementById("modal-auth").classList.remove("hidden");
}

function switchAuthTab(modo) {
  modoAuth = modo;
  document.getElementById("form-recover").classList.add("hidden");
  document.getElementById("form-auth").classList.remove("hidden");
  document.getElementById("auth-tabs-bar").classList.remove("hidden");

  document.getElementById("tab-login").classList.toggle("active", modo === "login");
  document.getElementById("tab-register").classList.toggle("active", modo === "register");
  document.getElementById("campo-nombre-wrap").classList.toggle("hidden", modo === "login");
  document.getElementById("login-extra-links").classList.toggle("hidden", modo !== "login");
  document.getElementById("register-legal-check").classList.toggle("hidden", modo !== "register");
  document.getElementById("auth-titulo").innerText = modo === "login" ? "ACCESO AL SISTEMA" : "REGISTRO DE CLIENTE";
  document.getElementById("btn-auth-submit").innerText = modo === "login" ? "INGRESAR" : "CREAR CUENTA";
}

function mostrarRecuperarPass() {
  document.getElementById("form-auth").classList.add("hidden");
  document.getElementById("auth-tabs-bar").classList.add("hidden");
  document.getElementById("form-recover").classList.remove("hidden");
  document.getElementById("auth-titulo").innerText = "RECUPERAR CONTRASEÑA";
}

function procesarRecuperarPass(e) {
  e.preventDefault();
  const email = document.getElementById("rec-email").value.trim().toLowerCase();
  const nuevaPass = document.getElementById("rec-new-pass").value.trim();
  const user = usuarios.find(u => u.email === email);
  if (!user) return alert("No existe ninguna cuenta registrada con ese correo electrónico.");
  user.pass = nuevaPass;
  guardarTodoDB();
  alert("Contraseña actualizada correctamente. Ya puedes iniciar sesión con tu nueva clave.");
  switchAuthTab("login");
}

function procesarAuth(e) {
  e.preventDefault();
  const email = document.getElementById("auth-email").value.trim().toLowerCase();
  const pass = document.getElementById("auth-pass").value.trim();
  const nombre = document.getElementById("auth-nombre").value.trim();

  if (modoAuth === "register") {
    const acepto = document.getElementById("chk-acepto-terminos").checked;
    if (!acepto) return alert("Debes aceptar los Términos y Condiciones y el Aviso de Privacidad para registrarte.");
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
    if (!user) return alert("Correo o contraseña incorrectos. Si olvidaste tu clave usa '¿Olvidaste tu contraseña?'.");
    sesionActual = user;
    guardarTodoDB();
    actualizarUIUsuario();
    document.getElementById("modal-auth").classList.add("hidden");
  }
}

function abrirLegal(tipo) {
  const titulo = document.getElementById("legal-modal-titulo");
  const texto = document.getElementById("legal-modal-texto");
  if (tipo === "privacidad") {
    titulo.innerText = "AVISO DE PRIVACIDAD Y PROTECCIÓN DE DATOS";
    texto.innerHTML = `<p><strong>PUNTO BIKER MOTORSPORT S.A.C.</strong> garantiza la confidencialidad y seguridad de los datos personales proporcionados por nuestros clientes conforme a la Ley de Protección de Datos Personales.</p><br/><p>Los datos recopilados (nombre, correo electrónico e historial de compras) se emplean exclusivamente para la emisión de comprobantes electrónicos, gestión de garantías vehiculares y validación de operaciones de pago.</p>`;
  } else if (tipo === "terminos") {
    titulo.innerText = "TÉRMINOS Y CONDICIONES DE USO";
    texto.innerHTML = `<p>Al registrarse y operar en la plataforma <strong>PUNTO BIKER</strong>, el usuario acepta que los precios mostrados en Dólares Americanos (USD) o Soles Peruanos (PEN) corresponden al valor de lista del vehículo.</p><br/><p>La emisión de códigos CIP de PagoEfectivo y órdenes por QR tienen vigencia de reserva sujeta a disponibilidad de stock en almacén.</p>`;
  } else {
    titulo.innerText = "POLÍTICA DE GARANTÍA Y ENTREGA";
    texto.innerHTML = `<p>Todas las motocicletas nuevas (años 2025 y 2026) cuentan con garantía oficial de fábrica de 24 meses o 20,000 km, entrega con tarjeta de propiedad, placa y SOAT gestionados.</p>`;
  }
  document.getElementById("modal-legal").classList.remove("hidden");
}

function cerrarSesion() {
  sesionActual = null;
  guardarTodoDB();
  actualizarUIUsuario();
  cambiarVista("tienda");
}

// NAVEGACIÓN ENTRE VISTAS SPA
function cambiarVista(vista) {
  if (["inventario", "ventas", "usuarios", "config-pagos"].includes(vista) && sesionActual?.rol !== "admin") {
    return alert("Acceso restringido a Administradores.");
  }
  ["tienda", "detalle-moto", "compras", "inventario", "ventas", "usuarios", "config-pagos"].forEach(v => {
    document.getElementById(`vista-${v}`)?.classList.toggle("hidden", v !== vista);
  });
  document.querySelectorAll(".rail-btn").forEach(b => b.classList.remove("active"));
  const btnId = vista === "compras" ? "btn-mis-compras" : vista === "detalle-moto" ? "btn-tienda" : `btn-${vista}`;
  document.getElementById(btnId)?.classList.add("active");

  if (vista === "compras") renderBoletasCliente();
  if (vista === "inventario") renderInventario();
  if (vista === "ventas") renderVentasAdmin();
  if (vista === "usuarios") renderUsuariosAdmin();
  if (vista === "config-pagos") cargarFormularioConfigPagos();
  window.scrollTo(0, 0);
}

// PÁGINA DEDICADA POR MOTOCICLETA (FICHA TÉCNICA COMPLETA TIPO COSMOS MOTO)
function verDetalleMoto(id) {
  const p = productos.find(m => m.id === id);
  if (!p) return;
  const cont = document.getElementById("detalle-moto-contenido");
  cont.innerHTML = `
    <div style="margin-bottom:1rem;">
      <button class="btn-dark-outline" onclick="cambiarVista('tienda')">← Volver al Catálogo</button>
    </div>

    <div class="detalle-hero-grid">
      <div class="detalle-galeria">
        <img src="${obtenerSrcFoto(p)}" alt="${p.nombre}" />
      </div>

      <div class="detalle-compra-box panel-dark">
        <div style="display:flex;gap:8px;align-items:center;margin-bottom:8px;">
          <span class="marca-tag">${p.marca}</span>
          <span class="marca-tag" style="background:#27272a;color:#fff;border-color:#3f3f46;">AÑO ${p.anio}</span>
          <span class="badge">${p.categoria}</span>
        </div>
        <h1 style="font-size:1.85rem;margin-bottom:6px;">${p.nombre}</h1>
        <p class="sub-muted">Unidad 0 km • Homologación Internacional • Entrega Inmediata</p>

        <div class="detalle-precio-dual">
          <div>
            <span>PRECIO EN DÓLARES</span>
            <strong>$${p.precio.toLocaleString()} USD</strong>
          </div>
          <div style="border-left:1px solid var(--border);padding-left:12px;">
            <span>PRECIO EN SOLES</span>
            <strong style="color:var(--amber);">S/ ${Math.round(p.precio * TASA_PEN).toLocaleString()}</strong>
          </div>
        </div>

        <div class="stock ${p.stock === 0 ? 'agotado' : ''}" style="font-size:0.88rem;margin-bottom:14px;">
          ${p.stock > 0 ? `● Stock disponible en tienda: ${p.stock} unidades` : '● Unidad temporalmente agotada'}
        </div>

        <button class="btn-amber" style="width:100%;padding:13px;font-size:0.92rem;" ${p.stock === 0 ? 'disabled' : ''} onclick="agregarCarrito(${p.id});toggleCarrito()">
          ${p.stock > 0 ? 'COMPRAR / RESERVAR ESTA MOTOCICLETA' : 'SIN STOCK DISPONIBLE'}
        </button>
      </div>
    </div>

    <div class="ficha-completa-grid">
      <div class="ficha-bloque panel-dark">
        <h3>1. Motor y Transmisión</h3>
        <div class="ficha-linea"><span>Año de Modelo</span><strong>${p.anio}</strong></div>
        <div class="ficha-linea"><span>Cilindrada Exacta</span><strong>${p.cc} cc</strong></div>
        <div class="ficha-linea"><span>Arquitectura</span><strong>${p.cilindros}</strong></div>
        <div class="ficha-linea"><span>Potencia Máxima</span><strong>${p.hp} HP</strong></div>
        <div class="ficha-linea"><span>Torque Máximo</span><strong>${p.torque} Nm</strong></div>
        <div class="ficha-linea"><span>Refrigeración</span><strong>${p.refrigeracion}</strong></div>
        <div class="ficha-linea"><span>Caja de Cambios</span><strong>${p.transmision}</strong></div>
        <div class="ficha-linea"><span>Embrague</span><strong>${p.embrague}</strong></div>
      </div>

      <div class="ficha-bloque panel-dark">
        <h3>2. Chasis, Frenos y Suspensión</h3>
        <div class="ficha-linea"><span>Suspensión Delantera</span><strong>${p.suspensionDel}</strong></div>
        <div class="ficha-linea"><span>Suspensión Trasera</span><strong>${p.suspensionTras}</strong></div>
        <div class="ficha-linea"><span>Freno Delantero</span><strong>${p.frenosDel}</strong></div>
        <div class="ficha-linea"><span>Freno Trasero</span><strong>${p.frenosTras}</strong></div>
        <div class="ficha-linea"><span>Aros y Neumáticos</span><strong>${p.aros}</strong></div>
      </div>

      <div class="ficha-bloque panel-dark">
        <h3>3. Dimensiones y Electrónica</h3>
        <div class="ficha-linea"><span>Peso en Orden de Marcha</span><strong>${p.peso} kg</strong></div>
        <div class="ficha-linea"><span>Altura del Asiento</span><strong>${p.alturaAsiento}</strong></div>
        <div class="ficha-linea"><span>Capacidad de Tanque</span><strong>${p.tanque}</strong></div>
        <div class="ficha-linea"><span>Instrumental</span><strong>${p.tablero}</strong></div>
        <div class="ficha-linea"><span>Sistema de Luces</span><strong>${p.iluminacion}</strong></div>
      </div>
    </div>
  `;
  cambiarVista("detalle-moto");
}

// CATÁLOGO Y FOTOS
function inicializarSidebar() {
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
  document.getElementById("filtro-precio").value = 180000;
  actualizarPrecioFiltro();
}

function resetPaginaYRender() { paginaActual = 1; renderCatalogo(); }

async function buscarFotoReal(prod, imgEl) {
  if (prod.customPhoto) {
    imgEl.src = prod.img;
    return;
  }
  if (cacheFotos[prod.nombre]) {
    imgEl.src = cacheFotos[prod.nombre];
    return;
  }
  try {
    const query = encodeURIComponent(`${prod.marca} ${prod.modeloCorto} motorcycle`);
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=filetype:bitmap+${query}&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url|size&iiurlwidth=800&format=json&origin=*`;
    const res = await fetch(url);
    const data = await res.json();
    const pages = data?.query?.pages ? Object.values(data.query.pages) : [];

    for (const p of pages) {
      const title = (p.title || "").toLowerCase();
      const info = p.imageinfo?.[0];
      const src = info?.thumburl || info?.url;
      if (!src) continue;
      // Descartar estrictamente logos, escudos, banderas, íconos o ilustraciones
      if (/\.(svg|gif)$/i.test(src)) continue;
      if (/(logo|emblem|badge|crest|shield|flag|icon|map|diagram|drawing|vector)/i.test(title)) continue;
      if (info.width && info.height && info.width < info.height * 0.75) continue;

      cacheFotos[prod.nombre] = src;
      localStorage.setItem("punto_biker_fotos_v5_clean", JSON.stringify(cacheFotos));
      imgEl.src = src;
      return;
    }
  } catch (e) {}
}

function obtenerSrcFoto(p) { return p.customPhoto ? p.img : (cacheFotos[p.nombre] || p.img); }

function renderCatalogo() {
  const grid = document.getElementById("catalogo-grid");
  const info = document.getElementById("resultados-info");
  const pagBar = document.getElementById("paginacion-bar");

  const txt = document.getElementById("buscador").value.toLowerCase();
  const anioSel = document.querySelector("input[name='anio']:checked").value;
  const marcasSel = [...document.querySelectorAll(".chk-marca:checked")].map(c => c.value);
  const tiposSel = [...document.querySelectorAll(".chk-tipo:checked")].map(c => c.value);
  const maxPrecio = Number(document.getElementById("filtro-precio").value);
  const motorSel = document.querySelector("input[name='motor']:checked").value;
  const transSel = document.querySelector("input[name='transmision']:checked").value;
  const frenosSel = document.querySelector("input[name='frenos']:checked").value;
  const soloStock = document.getElementById("filtro-stock").checked;
  const orden = document.getElementById("ordenar-por").value;

  let filtrados = productos.filter(p => {
    if (txt && !`${p.nombre} ${p.categoria} ${p.cc}cc ${p.anio}`.toLowerCase().includes(txt)) return false;
    if (anioSel !== "Todos" && String(p.anio) !== anioSel) return false;
    if (marcasSel.length && !marcasSel.includes(p.marca)) return false;
    if (tiposSel.length && !tiposSel.includes(p.categoria)) return false;
    if (p.precio > maxPrecio) return false;
    if (motorSel === "baja" && p.cc > 250) return false;
    if (motorSel === "media" && (p.cc <= 250 || p.cc > 750)) return false;
    if (motorSel === "alta" && p.cc <= 750) return false;
    if (transSel !== "Todos" && !p.transmision.includes(transSel.replace("Mecánica ", ""))) return false;
    if (frenosSel !== "Todos" && p.frenos !== frenosSel) return false;
    if (soloStock && p.stock === 0) return false;
    return true;
  });

  if (orden === "anio-desc") filtrados.sort((a, b) => b.anio - a.anio);
  if (orden === "precio-asc") filtrados.sort((a, b) => a.precio - b.precio);
  if (orden === "precio-desc") filtrados.sort((a, b) => b.precio - a.precio);
  if (orden === "hp-desc") filtrados.sort((a, b) => b.hp - a.hp);

  const totalPaginas = Math.max(1, Math.ceil(filtrados.length / POR_PAGINA));
  if (paginaActual > totalPaginas) paginaActual = totalPaginas;
  const inicio = (paginaActual - 1) * POR_PAGINA;
  const visibles = filtrados.slice(inicio, inicio + POR_PAGINA);

  info.innerHTML = `<strong>${filtrados.length}</strong> motocicletas en catálogo`;
  grid.innerHTML = visibles.map(p => `
    <article class="card">
      <div class="card-img-wrap" onclick="verDetalleMoto(${p.id})">
        <span class="year-pill">${p.anio}</span>
        <img id="img-moto-${p.id}" src="${obtenerSrcFoto(p)}" alt="${p.nombre}" />
      </div>
      <div class="card-body">
        <div class="card-tags">
          <span class="marca-tag">${p.marca}</span>
          <span class="badge">${p.categoria}</span>
        </div>
        <h3 onclick="verDetalleMoto(${p.id})">${p.nombre}</h3>
        <div class="specs">${p.cc}cc • ${p.hp} HP • Año ${p.anio}<br/>${p.frenos}</div>
        <div class="precio">${formatearPrecio(p.precio)}</div>
        <div class="precio-alt">${formatearPrecioSecundario(p.precio)}</div>
        <div class="stock ${p.stock === 0 ? 'agotado' : ''}">${p.stock > 0 ? `Stock: ${p.stock} unid.` : 'AGOTADO'}</div>
        <div class="card-actions">
          <button class="btn-dark-outline" onclick="verDetalleMoto(${p.id})">Ver Ficha</button>
          <button class="btn-amber" ${p.stock === 0 ? 'disabled' : ''} onclick="agregarCarrito(${p.id})">Agregar</button>
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
    return `<div class="item-carrito"><div><strong>${i.nombre} (${i.anio})</strong><br/><small>${formatearPrecio(i.precio)} x ${i.cantidad}</small></div><button class="btn-stock btn-del" onclick="quitarCarrito(${i.id})">✕</button></div>`;
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
  document.getElementById("pasarela-monto-total").innerText = `${formatearPrecio(totalUsd)} (${formatearPrecioSecundario(totalUsd)})`;
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
    items: carrito.map(i => ({ nombre: `${i.nombre} (${i.anio})`, cantidad: i.cantidad, precio: i.precio }))
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
      <div class="boleta-foot"><span class="marca-tag">${v.metodoPago}</span><strong>$${v.totalUsd.toLocaleString()} USD / S/ ${v.totalPen.toLocaleString()}</strong></div>
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
  const lista = productos.filter(p => `${p.nombre} ${p.categoria} ${p.anio}`.toLowerCase().includes(filtro));
  document.getElementById("total-modelos-inv").innerText = productos.length;
  document.getElementById("tabla-inventario").innerHTML = lista.map(p => `
    <tr>
      <td>#${p.id}</td>
      <td><img src="${obtenerSrcFoto(p)}" class="thumb-inv" /></td>
      <td><strong>${p.marca}</strong></td>
      <td>${p.nombre}</td>
      <td>${p.anio}</td>
      <td>${p.cc}cc | ${p.hp}HP</td>
      <td>$${p.precio.toLocaleString()} / S/${Math.round(p.precio * TASA_PEN).toLocaleString()}</td>
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
    document.getElementById("prod-anio").value = p.anio || 2026;
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
  const anio = Number(document.getElementById("prod-anio").value);
  const cc = Number(document.getElementById("prod-cc").value);
  const hp = Number(document.getElementById("prod-hp").value);
  const stock = Number(document.getElementById("prod-stock").value);
  const precio = Number(document.getElementById("prod-precio").value);
  const img = document.getElementById("prod-img").value.trim();

  if (idEx) {
    const idx = productos.findIndex(p => p.id === Number(idEx));
    if (idx !== -1) {
      productos[idx] = crearObjetoMoto(Number(idEx), marca, cat, mod, cc, hp, precio, stock, anio, img);
      if (img) productos[idx].customPhoto = true;
    }
  } else {
    const newId = productos.length ? Math.max(...productos.map(p => p.id)) + 1 : 1;
    const nuevo = crearObjetoMoto(newId, marca, cat, mod, cc, hp, precio, stock, anio, img);
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

