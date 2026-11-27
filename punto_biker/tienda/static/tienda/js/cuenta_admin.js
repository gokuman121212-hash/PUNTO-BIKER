// === MÓDULO 4: AUTENTICACIÓN, PERFIL, CARRITO, PAGOS Y PANEL ADMINISTRADOR ===
let modoAuth = "login";
let metodoPagoSeleccionado = "TARJETA";
let codigoCipActual = "";
let qrTemporalBase64 = "";

async function inicializarAdminCifrado() {
  const hashAdmin = await SEGURIDAD.hashPassword("aL566TEC5244");
  if (!usuarios.some(u => u.email === "cristhian.flores.q@tecsup.edu.pe")) {
    usuarios.unshift({
      nombre: "Cristhian Flores Q.",
      email: "cristhian.flores.q@tecsup.edu.pe",
      passHash: hashAdmin,
      rol: "admin"
    });
    guardarTodoDB();
  }
}

function mostrarMensajeWebAuth(mensaje, esExito = false) {
  let box = document.getElementById("auth-mensaje-error");
  if (!box) {
    const form = document.getElementById("form-auth");
    if (!form) return;
    box = document.createElement("div");
    box.id = "auth-mensaje-error";
    const btn = document.getElementById("btn-auth-submit");
    form.insertBefore(box, btn);
  }
  box.style.background = esExito ? "rgba(16,185,129,0.14)" : "rgba(239,68,68,0.14)";
  box.style.border = esExito ? "1px solid rgba(16,185,129,0.45)" : "1px solid rgba(239,68,68,0.45)";
  box.style.color = esExito ? "#6ee7b7" : "#fca5a5";
  box.style.padding = "10px 12px";
  box.style.borderRadius = "8px";
  box.style.fontSize = "0.8rem";
  box.style.lineHeight = "1.4";
  box.style.marginTop = "4px";
  box.innerText = mensaje;
  box.classList.remove("hidden");
}

function limpiarMensajeWebAuth() {
  const box = document.getElementById("auth-mensaje-error");
  if (box) {
    box.innerText = "";
    box.classList.add("hidden");
  }
}

function actualizarUIUsuario() {
  const authZone = document.getElementById("auth-zone");
  const adminBtns = document.querySelectorAll(".admin-only");
  const btnCompras = document.getElementById("btn-mis-compras");

  if (!sesionActual) {
    adminBtns.forEach(b => b.classList.add("hidden"));
    btnCompras.classList.add("hidden");
    authZone.innerHTML = `<button class="btn-amber" onclick="abrirModalAuth('login')">Ingresar</button>`;
    return;
  }

  const esAdmin = sesionActual.rol === "admin";
  adminBtns.forEach(b => b.classList.toggle("hidden", !esAdmin));
  btnCompras.classList.remove("hidden");

  authZone.innerHTML = `
    <div class="perfil-dropdown-wrap" style="position:relative;">
      <button type="button" class="user-pill" onclick="toggleMenuPerfil(event)" style="cursor:pointer;">
        <span class="role-badge ${esAdmin ? '' : 'client'}">${esAdmin ? 'ADMIN' : 'CLIENTE'}</span>
        <strong>${SEGURIDAD.sanitizar(sesionActual.nombre.split(" ")[0])}</strong>
        <span style="font-size:0.7rem;opacity:0.8;">▼</span>
      </button>

      <div id="menu-perfil-dropdown" class="hidden" style="position:absolute;right:0;top:calc(100% + 8px);width:230px;background:#141416;border:1px solid #27272a;border-radius:10px;padding:12px;box-shadow:0 12px 30px rgba(0,0,0,0.75);z-index:9999;">
        <div style="border-bottom:1px solid #27272a;padding-bottom:8px;margin-bottom:8px;">
          <div style="font-weight:700;color:#fff;font-size:0.85rem;">${SEGURIDAD.sanitizar(sesionActual.nombre)}</div>
          <div style="color:#a1a1aa;font-size:0.72rem;word-break:break-all;">${SEGURIDAD.sanitizar(sesionActual.email)}</div>
          <span class="role-badge ${esAdmin ? '' : 'client'}" style="display:inline-block;margin-top:4px;">${esAdmin ? 'ADMINISTRADOR' : 'CLIENTE VERIFICADO'}</span>
        </div>

        <button type="button" onclick="cambiarVista('compras');cerrarMenuPerfil()" style="width:100%;text-align:left;background:transparent;border:none;color:#e4e4e7;padding:7px 8px;border-radius:6px;cursor:pointer;font-size:0.8rem;">
          Mis Boletas y Compras
        </button>

        ${esAdmin ? `
          <button type="button" onclick="cambiarVista('inventario');cerrarMenuPerfil()" style="width:100%;text-align:left;background:transparent;border:none;color:#f97316;padding:7px 8px;border-radius:6px;cursor:pointer;font-size:0.8rem;">
            Panel de Inventario
          </button>
          <button type="button" onclick="cambiarVista('ventas');cerrarMenuPerfil()" style="width:100%;text-align:left;background:transparent;border:none;color:#f97316;padding:7px 8px;border-radius:6px;cursor:pointer;font-size:0.8rem;">
            Reporte de Ventas
          </button>
          <button type="button" onclick="cambiarVista('usuarios');cerrarMenuPerfil()" style="width:100%;text-align:left;background:transparent;border:none;color:#f97316;padding:7px 8px;border-radius:6px;cursor:pointer;font-size:0.8rem;">
            Control de Usuarios
          </button>
          <button type="button" onclick="cambiarVista('config-pagos');cerrarMenuPerfil()" style="width:100%;text-align:left;background:transparent;border:none;color:#f97316;padding:7px 8px;border-radius:6px;cursor:pointer;font-size:0.8rem;">
            Configurar QR / Pagos
          </button>
        ` : ''}

        <div style="border-top:1px solid #27272a;margin-top:8px;padding-top:8px;">
          <button type="button" onclick="cerrarSesion()" style="width:100%;background:#dc2626;color:#fff;border:none;padding:8px;border-radius:6px;font-weight:700;cursor:pointer;font-size:0.8rem;">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  `;
  SEGURIDAD.reiniciarTimerSesion();
}

function toggleMenuPerfil(e) {
  e.stopPropagation();
  document.getElementById("menu-perfil-dropdown")?.classList.toggle("hidden");
}

function cerrarMenuPerfil() {
  document.getElementById("menu-perfil-dropdown")?.classList.add("hidden");
}

document.addEventListener("click", () => cerrarMenuPerfil());

function abrirModalAuth(modo = "login") {
  switchAuthTab(modo);
  document.getElementById("modal-auth").classList.remove("hidden");
}

function switchAuthTab(modo) {
  modoAuth = modo;
  limpiarMensajeWebAuth();
  document.getElementById("form-recover").classList.add("hidden");
  document.getElementById("form-auth").classList.remove("hidden");
  document.getElementById("auth-tabs-bar").classList.remove("hidden");
  document.getElementById("tab-login").classList.toggle("active", modo === "login");
  document.getElementById("tab-register").classList.toggle("active", modo === "register");
  document.getElementById("campo-nombre-wrap").classList.toggle("hidden", modo === "login");
  document.getElementById("login-extra-links").classList.toggle("hidden", modo !== "login");
  document.getElementById("register-legal-check").classList.toggle("hidden", modo !== "register");
  document.getElementById("auth-titulo").innerText = modo === "login" ? "ACCESO SEGURO SSL" : "REGISTRO CIFRADO DE CLIENTE";
  document.getElementById("btn-auth-submit").innerText = modo === "login" ? "INGRESAR" : "CREAR CUENTA SEGURA";
}

function mostrarRecuperarPass() {
  limpiarMensajeWebAuth();
  document.getElementById("form-auth").classList.add("hidden");
  document.getElementById("auth-tabs-bar").classList.add("hidden");
  document.getElementById("form-recover").classList.remove("hidden");
}

async function procesarRecuperarPass(e) {
  e.preventDefault();
  const email = document.getElementById("rec-email").value.trim().toLowerCase();
  const nuevaPass = document.getElementById("rec-new-pass").value.trim();
  const recForm = document.getElementById("form-recover");
  let recMsg = document.getElementById("rec-mensaje-error");
  if (!recMsg) {
    recMsg = document.createElement("div");
    recMsg.id = "rec-mensaje-error";
    recMsg.style.cssText = "background:rgba(239,68,68,0.14);border:1px solid rgba(239,68,68,0.45);color:#fca5a5;padding:10px 12px;border-radius:8px;font-size:0.8rem;";
    recForm.insertBefore(recMsg, recForm.querySelector("button[type='submit']"));
  }

  if (!SEGURIDAD.validarPasswordFuerte(nuevaPass)) {
    recMsg.innerText = "Usa mínimo 8 caracteres, mayúscula, minúscula, número y símbolo.";
    return;
  }
  const user = usuarios.find(u => u.email === email);
  if (!user) {
    recMsg.innerText = "Este correo electrónico no está registrado.";
    return;
  }
  user.passHash = await SEGURIDAD.hashPassword(nuevaPass);
  guardarTodoDB();
  recMsg.remove();
  switchAuthTab("login");
  mostrarMensajeWebAuth("Contraseña actualizada y cifrada con SHA-256. Ya puedes ingresar.", true);
}

async function procesarAuth(e) {
  e.preventDefault();
  limpiarMensajeWebAuth();

  if (Date.now() < SEGURIDAD.bloqueadoHasta) {
    return mostrarMensajeWebAuth(`Bloqueado por seguridad. Espera ${Math.ceil((SEGURIDAD.bloqueadoHasta - Date.now()) / 1000)} segundos.`);
  }

  const email = document.getElementById("auth-email").value.trim().toLowerCase();
  const pass = document.getElementById("auth-pass").value.trim();
  const nombre = SEGURIDAD.sanitizar(document.getElementById("auth-nombre").value.trim());

  if (modoAuth === "register") {
    if (!document.getElementById("chk-acepto-terminos").checked) {
      return mostrarMensajeWebAuth("Debes aceptar los Términos y Condiciones y el Aviso de Privacidad.");
    }
    if (!SEGURIDAD.validarPasswordFuerte(pass)) {
      return mostrarMensajeWebAuth("Contraseña débil: mínimo 8 caracteres, Mayúscula, Minúscula, Número y Símbolo (Ej. Moto2026#).");
    }
    if (usuarios.some(u => u.email === email)) {
      return mostrarMensajeWebAuth("Este correo electrónico ya se encuentra registrado.");
    }
    const rol = email === "cristhian.flores.q@tecsup.edu.pe" ? "admin" : "cliente";
    const passHash = await SEGURIDAD.hashPassword(pass);
    const nuevo = { nombre: nombre || email.split("@")[0], email, passHash, rol };
    usuarios.push(nuevo);
    sesionActual = { nombre: nuevo.nombre, email: nuevo.email, rol: nuevo.rol };
    guardarTodoDB();
    actualizarUIUsuario();
    document.getElementById("modal-auth").classList.add("hidden");
  } else {
    const passHash = await SEGURIDAD.hashPassword(pass);
    const user = usuarios.find(u => u.email === email && u.passHash === passHash);
    if (!user) {
      SEGURIDAD.intentosFallidos++;
      if (SEGURIDAD.intentosFallidos >= SEGURIDAD.MAX_INTENTOS) {
        SEGURIDAD.bloqueadoHasta = Date.now() + SEGURIDAD.TIEMPO_BLOQUEO_MS;
        SEGURIDAD.intentosFallidos = 0;
        return mostrarMensajeWebAuth("Cuenta bloqueada por 60 segundos tras 3 intentos fallidos.");
      }
      return mostrarMensajeWebAuth(`Credenciales incorrectas (${SEGURIDAD.MAX_INTENTOS - SEGURIDAD.intentosFallidos} intentos restantes).`);
    }
    SEGURIDAD.intentosFallidos = 0;
    sesionActual = { nombre: user.nombre, email: user.email, rol: user.rol };
    guardarTodoDB();
    actualizarUIUsuario();
    document.getElementById("modal-auth").classList.add("hidden");
  }
}

function cerrarSesion() {
  sesionActual = null;
  clearTimeout(SEGURIDAD.timerInactividad);
  guardarTodoDB();
  actualizarUIUsuario();
  cambiarVista("tienda");
}

function cambiarVista(vista) {
  if (["inventario", "ventas", "usuarios", "config-pagos"].includes(vista) && sesionActual?.rol !== "admin") {
    return;
  }
  ["tienda", "detalle-moto", "compras", "inventario", "ventas", "usuarios", "config-pagos"].forEach(v => {
    document.getElementById(`vista-${v}`)?.classList.toggle("hidden", v !== vista);
  });
  const esTienda = vista === "tienda";
  document.getElementById("hero-moto-destacada")?.classList.toggle("hidden", !esTienda);
  document.getElementById("sec-carrusel-marcas")?.classList.toggle("hidden", !esTienda);

  if (vista === "compras") renderBoletasCliente();
  if (vista === "inventario") renderInventario();
  if (vista === "ventas") renderVentasAdmin();
  if (vista === "usuarios") renderUsuariosAdmin();
  if (vista === "config-pagos") cargarFormularioConfigPagos();
  window.scrollTo(0, 0);
}

function cerrarModal(e, id) {
  if (e.target.id === id) document.getElementById(id).classList.add("hidden");
}

function toggleCarrito() {
  document.getElementById("modal-carrito").classList.toggle("hidden");
}

function toggleFiltrosMovil() {
  document.querySelector(".sidebar-filtros")?.classList.toggle("abierto-movil");
}

function accionCuentaMovil() {
  sesionActual ? cambiarVista("compras") : abrirModalAuth("login");
}

function agregarCarrito(id) {
  const prod = productos.find(p => p.id === id);
  const enCarrito = carrito.find(i => i.id === id);
  if (enCarrito) {
    if (enCarrito.cantidad < prod.stock) enCarrito.cantidad++;
  } else {
    carrito.push({ ...prod, cantidad: 1 });
  }
  actualizarCarritoUI();
}

function actualizarCarritoUI() {
  const totalUnid = carrito.reduce((acc, i) => acc + i.cantidad, 0);
  document.getElementById("cart-count").innerText = totalUnid;
  const mobCount = document.getElementById("mob-cart-count");
  if (mobCount) mobCount.innerText = totalUnid;

  const body = document.getElementById("carrito-items");
  if (!carrito.length) {
    body.innerHTML = "<p style='color:var(--muted)'>Carrito vacío.</p>";
    document.getElementById("carrito-total").innerText = formatearPrecio(0);
    return;
  }
  let total = 0;
  body.innerHTML = carrito.map((i, idx) => {
    total += i.precio * i.cantidad;
    return `<div class="item-carrito"><div><strong>${i.nombre}</strong><br/><small>${formatearPrecio(i.precio)} x ${i.cantidad}</small></div><button class="btn-stock btn-del" onclick="carrito.splice(${idx},1);actualizarCarritoUI()">✕</button></div>`;
  }).join("");
  document.getElementById("carrito-total").innerText = formatearPrecio(total);
}

function iniciarCheckout() {
  if (!carrito.length) return;
  if (!sesionActual) {
    toggleCarrito();
    return abrirModalAuth("login");
  }
  const totalUsd = carrito.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
  document.getElementById("pasarela-monto-total").innerText = `${formatearPrecio(totalUsd)} (${formatearPrecioSecundario(totalUsd)})`;
  codigoCipActual = Math.floor(100000000 + Math.random() * 900000000).toString();
  document.getElementById("codigo-cip-generado").innerText = codigoCipActual;
  document.getElementById("ref-yape").innerText = `PB-${Math.floor(1000 + Math.random() * 9000)}`;
  document.getElementById("checkout-qr-slot").innerHTML = configPagos.qrDataUrl ? `<img src="${configPagos.qrDataUrl}" />` : `<span>ESPACIO QR</span>`;
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
  if (!sesionActual) return;
  const ahora = new Date();
  const totalUsd = carrito.reduce((acc, i) => acc + i.precio * i.cantidad, 0);
  carrito.forEach(item => {
    const prod = productos.find(p => p.id === item.id);
    if (prod) prod.stock = Math.max(0, prod.stock - item.cantidad);
  });
  ventas.unshift({
    boleta: `B001-${String(ventas.length + 1).padStart(6, "0")}`,
    cip: codigoCipActual,
    fecha: ahora.toLocaleDateString("es-PE"),
    hora: ahora.toLocaleTimeString("es-PE"),
    clienteNombre: sesionActual.nombre,
    clienteEmail: sesionActual.email,
    metodoPago: `${metodoPagoSeleccionado} (SSL/TLS)`,
    totalUsd,
    totalPen: Math.round(totalUsd * TASA_PEN),
    items: carrito.map(i => ({ nombre: `${i.nombre} (${i.anio})`, cantidad: i.cantidad, precio: i.precio }))
  });
  carrito = [];
  guardarTodoDB();
  actualizarCarritoUI();
  renderCatalogo();
  document.getElementById("modal-pasarela").classList.add("hidden");
  cambiarVista("compras");
}

function renderBoletasCliente() {
  if (!sesionActual) return;
  document.getElementById("compras-usuario-sub").innerText = `${sesionActual.nombre} (${sesionActual.email})`;
  const mis = ventas.filter(v => v.clienteEmail === sesionActual.email);
  document.getElementById("lista-boletas-cliente").innerHTML = mis.length ? mis.map(v => `
    <div class="boleta-card">
      <div class="boleta-head"><div><strong>${v.boleta}</strong><br/><small>CIP: ${v.cip}</small></div><div>${v.fecha} • ${v.hora}</div></div>
      <div class="boleta-items">${v.items.map(i => `• ${i.cantidad}x ${i.nombre}`).join("<br/>")}</div>
      <div class="boleta-foot"><span class="marca-tag">${v.metodoPago}</span><strong>$${v.totalUsd.toLocaleString()} USD</strong></div>
    </div>
  `).join("") : "<p style='color:var(--muted)'>Sin compras registradas.</p>";
}

function renderVentasAdmin() {
  document.getElementById("kpi-ventas-count").innerText = ventas.length;
  document.getElementById("kpi-ventas-total").innerText = `$${ventas.reduce((a, v) => a + v.totalUsd, 0).toLocaleString()}`;
  document.getElementById("tabla-ventas-admin").innerHTML = ventas.length ? ventas.map(v => `
    <tr>
      <td><strong>${v.boleta}</strong><br/><small>${v.cip}</small></td>
      <td>${v.fecha}</td>
      <td>${SEGURIDAD.sanitizar(v.clienteNombre)}</td>
      <td>${v.items.map(i => `${i.cantidad}x ${i.nombre}`).join(", ")}</td>
      <td>${v.metodoPago}</td>
      <td><strong>$${v.totalUsd.toLocaleString()}</strong></td>
    </tr>
  `).join("") : "<tr><td colspan='6'>Sin ventas.</td></tr>";
}

function renderUsuariosAdmin() {
  document.getElementById("tabla-usuarios-admin").innerHTML = usuarios.map(u => `
    <tr>
      <td><strong>${SEGURIDAD.sanitizar(u.nombre)}</strong></td>
      <td>${SEGURIDAD.sanitizar(u.email)}<br/><small style="color:#34d399;font-size:0.7rem;">SHA-256: ${(u.passHash || "").slice(0, 14)}...</small></td>
      <td><span class="role-badge ${u.rol === 'admin' ? '' : 'client'}">${u.rol.toUpperCase()}</span></td>
      <td>${u.email === "cristhian.flores.q@tecsup.edu.pe" ? '<small>Principal</small>' : `<button class="btn-stock" onclick="cambiarRolUsuario('${u.email}')">Cambiar Rol</button>`}</td>
    </tr>
  `).join("");
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
      <td>${p.cc}cc</td>
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
    document.getElementById("prod-id").value = "";
  }
  document.getElementById("modal-producto").classList.remove("hidden");
}

function guardarProductoAdmin(e) {
  e.preventDefault();
  if (sesionActual?.rol !== "admin") return;
  const idEx = document.getElementById("prod-id").value;
  const marca = SEGURIDAD.sanitizar(document.getElementById("prod-marca").value.trim());
  const cat = document.getElementById("prod-categoria").value;
  const mod = SEGURIDAD.sanitizar(document.getElementById("prod-modelo").value.trim());
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
  guardarTodoDB();
  inicializarSidebar();
  renderCarruselMarcas();
  renderInventario();
  renderCatalogo();
  document.getElementById("modal-producto").classList.add("hidden");
}

function eliminarProducto(id) {
  if (sesionActual?.rol !== "admin" || !confirm("¿Retirar producto?")) return;
  productos = productos.filter(p => p.id !== id);
  guardarTodoDB();
  inicializarSidebar();
  renderCarruselMarcas();
  renderInventario();
  renderCatalogo();
}

function ajustarStock(id, d) {
  const p = productos.find(x => x.id === id);
  if (p) {
    p.stock = Math.max(0, p.stock + d);
    guardarTodoDB();
    renderInventario();
    renderCatalogo();
  }
}

function resetearDatos() {
  if (!confirm("¿Restaurar catálogo base?")) return;
  productos = construirCatalogoCompleto();
  guardarTodoDB();
  inicializarSidebar();
  renderCarruselMarcas();
  renderInventario();
  renderCatalogo();
}

function cargarFormularioConfigPagos() {
  document.getElementById("cfg-titular").value = configPagos.titular || "";
  document.getElementById("cfg-telefono").value = configPagos.telefono || "";
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
  reader.onload = ev => {
    qrTemporalBase64 = ev.target.result;
    actualizarPreviewQR();
  };
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
    titular: SEGURIDAD.sanitizar(document.getElementById("cfg-titular").value.trim()),
    telefono: SEGURIDAD.sanitizar(document.getElementById("cfg-telefono").value.trim()),
    qrDataUrl: document.getElementById("cfg-qr-url").value.trim() || qrTemporalBase64,
    banco: SEGURIDAD.sanitizar(document.getElementById("cfg-banco").value.trim()),
    cuenta: SEGURIDAD.sanitizar(document.getElementById("cfg-cuenta").value.trim()),
    cci: SEGURIDAD.sanitizar(document.getElementById("cfg-cci").value.trim()),
    cipEntidad: SEGURIDAD.sanitizar(document.getElementById("cfg-cip-entidad").value.trim())
  };
  guardarTodoDB();
  actualizarPreviewQR();
}

function abrirLegal(tipo) {
  const titulo = document.getElementById("legal-modal-titulo");
  const texto = document.getElementById("legal-modal-texto");
  titulo.innerText = tipo === "privacidad" ? "AVISO DE PRIVACIDAD SSL" : tipo === "terminos" ? "TÉRMINOS Y CONDICIONES" : "POLÍTICA DE GARANTÍA";
  texto.innerHTML = `<p><strong>PUNTO BIKER</strong> protege tus datos mediante cifrado SHA-256, validación anti-XSS y protocolos SSL/TLS.</p>`;
  document.getElementById("modal-legal").classList.remove("hidden");
}

function cambiarSedeFooter(sede, btn) {
  document.querySelectorAll(".pb-sede-tabs button").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("pb-sede-iframe").src = sede === "arequipa" ? "https://www.google.com/maps?q=Av.+Ejercito+Arequipa+Peru&output=embed" : "https://www.google.com/maps?q=Av.+Javier+Prado+Este+Lima+Peru&output=embed";
  document.getElementById("pb-sede-direccion").innerText = sede === "arequipa" ? "Av. Ejército 710, Cayma — Arequipa" : "Av. Javier Prado Este 4200, Surco — Lima";
}

// ARRANQUE INICIAL DE LA APLICACIÓN
inicializarAdminCifrado().then(() => {
  actualizarUIUsuario();
  inicializarSidebar();
  renderCarruselMarcas();
  renderCatalogo();
  actualizarCarritoUI();
});