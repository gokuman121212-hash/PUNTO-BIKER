// === MÓDULO 3: HERO SHOWCASE, CATÁLOGO, FILTROS Y FICHA TÉCNICA ===
function reproducirSonidoMotor(cc = 1000, btnEl = null) {
  if (btnEl) btnEl.classList.add("revving");
  const audioReal = new Audio("/static/tienda/audio/motor.mp3");
  audioReal.volume = 0.9;
  audioReal.play()
    .then(() => { audioReal.onended = () => btnEl?.classList.remove("revving"); })
    .catch(() => {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        const now = ctx.currentTime;
        const osc1 = ctx.createOscillator(), osc2 = ctx.createOscillator();
        const filter = ctx.createBiquadFilter(), gain = ctx.createGain();
        osc1.type = "sawtooth"; osc2.type = "triangle";
        const baseFreq = cc >= 800 ? 52 : cc >= 400 ? 44 : 38;
        const peakFreq = cc >= 800 ? 195 : cc >= 400 ? 155 : 125;

        [osc1, osc2].forEach((osc, idx) => {
          const mult = idx + 1;
          osc.frequency.setValueAtTime(baseFreq * mult, now);
          osc.frequency.exponentialRampToValueAtTime(peakFreq * mult, now + 0.45);
          osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.35 * mult, now + 0.72);
          osc.frequency.exponentialRampToValueAtTime(peakFreq * 1.15 * mult, now + 1.15);
          osc.frequency.exponentialRampToValueAtTime(baseFreq * mult, now + 1.85);
          osc.connect(filter);
          osc.start(now);
          osc.stop(now + 1.92);
        });

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(380, now);
        filter.frequency.linearRampToValueAtTime(1400, now + 1.15);
        gain.gain.setValueAtTime(0.01, now);
        gain.gain.linearRampToValueAtTime(0.24, now + 0.12);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 1.9);

        filter.connect(gain);
        gain.connect(ctx.destination);
        setTimeout(() => { btnEl?.classList.remove("revving"); ctx.close(); }, 1950);
      } catch (e) { btnEl?.classList.remove("revving"); }
    });
}

function recortarFondoMotoCanvas(imgEl) {
  if (!imgEl || imgEl.dataset.recortada === "1") return;
  try {
    const w = imgEl.naturalWidth, h = imgEl.naturalHeight;
    if (!w || !h) return;
    const canvas = document.createElement("canvas");
    canvas.width = w; canvas.height = h;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(imgEl, 0, 0);
    const imgData = ctx.getImageData(0, 0, w, h), d = imgData.data;
    const esquinas = [0, (w - 1) * 4, ((h - 1) * w) * 4, ((h * w) - 1) * 4];
    let bgR = 0, bgG = 0, bgB = 0;
    esquinas.forEach(idx => { bgR += d[idx]; bgG += d[idx + 1]; bgB += d[idx + 2]; });
    bgR /= 4; bgG /= 4; bgB /= 4;
    if (!(bgR > 195 && bgG > 195 && bgB > 195)) return;

    let minX = w, minY = h, maxX = 0, maxY = 0;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        const diff = Math.abs(d[i] - bgR) + Math.abs(d[i + 1] - bgG) + Math.abs(d[i + 2] - bgB);
        if (diff < 48) d[i + 3] = 0;
        else {
          if (x < minX) minX = x; if (x > maxX) maxX = x;
          if (y < minY) minY = y; if (y > maxY) maxY = y;
        }
      }
    }
    ctx.putImageData(imgData, 0, 0);
    if (maxX > minX && maxY > minY) {
      const cw = maxX - minX + 1, ch = maxY - minY + 1;
      const crop = document.createElement("canvas");
      crop.width = cw; crop.height = ch;
      crop.getContext("2d").drawImage(canvas, minX, minY, cw, ch, 0, 0, cw, ch);
      imgEl.dataset.recortada = "1";
      imgEl.src = crop.toDataURL("image/png");
    }
  } catch (e) {}
}

function renderHeroDestacada() {
  const heroCont = document.getElementById("hero-moto-destacada");
  if (!heroCont || !productos.length) return;
  const topMotos = productos.filter(m => m.stock > 0).sort((a, b) => b.precio - a.precio).slice(0, 5);
  const listaHero = topMotos.length ? topMotos : productos.slice(0, 5);
  if (heroIndex >= listaHero.length) heroIndex = 0;
  const estrella = listaHero[heroIndex];
  const codigoModelo = estrella.nombre.replace(estrella.marca, "").trim() || estrella.nombre;
  const precioPrincipal = moneda === "USD" ? `USD $ ${estrella.precio.toLocaleString()}` : `S/ ${Math.round(estrella.precio * TASA_PEN).toLocaleString()}`;
  const precioSecundario = moneda === "USD" ? `S/ ${Math.round(estrella.precio * TASA_PEN).toLocaleString()} *` : `USD $ ${estrella.precio.toLocaleString()} *`;
  const msgWa = encodeURIComponent(`Hola PUNTO BIKER, me interesa la ${estrella.nombre} (${estrella.anio}).`);

  heroCont.innerHTML = `
    <div class="sm-hero-stage">
      <div class="sm-hero-radial"></div>
      <div class="sm-hero-container">
        <div class="sm-hero-toprow">
          <div class="sm-hero-breadcrumb">Catálogo / ${estrella.categoria} / <strong>${estrella.marca}</strong></div>
          <div class="sm-hero-toolboxes">
            <button type="button" class="sm-tool-sq" onclick="cambiarHeroMoto(-1)">‹</button>
            <button type="button" class="sm-tool-sq" onclick="cambiarHeroMoto(1)">›</button>
            <button type="button" class="sm-tool-sq" onclick="verDetalleMoto(${estrella.id})" title="Ver Ficha">📄</button>
          </div>
        </div>
        <div class="sm-hero-grid">
          <div class="sm-hero-left">
            <span class="sm-hero-brand-sub">${estrella.marca.toUpperCase()}</span>
            <h1 class="sm-hero-display">${codigoModelo}</h1>
          </div>
          <div class="sm-hero-center" onclick="verDetalleMoto(${estrella.id})">
            <img id="hero-img-estrella" crossorigin="anonymous" onload="recortarFondoMotoCanvas(this)" src="${obtenerSrcFoto(estrella)}" alt="${estrella.nombre}" />
          </div>
          <div class="sm-hero-right">
            <div class="sm-hero-right-head"><small>${estrella.marca.toUpperCase()}</small><strong>${codigoModelo}</strong><span>${estrella.anio}</span></div>
            <p class="sm-hero-copy">Esta ${estrella.categoria.toLowerCase()} cuenta con motor ${estrella.cilindros.toLowerCase()} de ${estrella.cc}cc y ${estrella.hp} HP, torque de ${estrella.torque} Nm y frenos ${estrella.frenos.toLowerCase()}.</p>
            <div class="sm-hero-pricing">
              <small class="sm-price-valid">PRECIO REFERENCIAL (VÁLIDO HOY ${new Date().toLocaleDateString("es-PE")})</small>
              <div class="sm-price-usd">${precioPrincipal}</div>
              <div class="sm-price-pen">${precioSecundario} <span>T/C ${TASA_PEN}</span></div>
            </div>
            <div class="sm-hero-cta">
              <button type="button" class="sm-cta-btn" onclick="agregarCarrito(${estrella.id});toggleCarrito()">QUIERO ESTA MOTO</button>
              <a href="https://wa.me/51963213014?text=${msgWa}" target="_blank" class="sm-cta-wa">WA</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sm-subbar-controls">
      <div class="sm-subbar-inner">
        <button type="button" class="sm-motor-btn" onclick="reproducirSonidoMotor(${estrella.cc}, this)">🔊 <span>MOTOR</span></button>
        <div class="sm-colors-bar"><span>COLORES: <strong>Único (Original)</strong></span></div>
      </div>
    </div>
    <div class="sm-pillars-strip">
      <div class="sm-pillars-inner">
        <div class="sm-pillar-item"><div class="sm-pillar-text"><small>POSICIÓN DE MANEJO</small><strong>${estrella.posicionManejo}</strong></div></div>
        <div class="sm-pillar-item"><div class="sm-pillar-text"><small>CILINDRADA</small><strong>${estrella.cc} <span>cc</span></strong></div></div>
        <div class="sm-pillar-item"><div class="sm-pillar-text"><small>RENDIMIENTO POR GALÓN</small><strong>${estrella.rendimientoKm} <span>km</span></strong></div></div>
        <div class="sm-pillar-item"><div class="sm-pillar-text"><small>GARANTÍA*</small><strong>24 <span>MESES</span></strong><em>O 20 MIL KM</em></div></div>
      </div>
    </div>
  `;
  const heroImgEl = document.getElementById("hero-img-estrella");
  if (heroImgEl) buscarFotoReal(estrella, heroImgEl);
}

function cambiarHeroMoto(delta) { heroIndex = (heroIndex + delta + 5) % 5; renderHeroDestacada(); }
function irACatalogo() { cambiarVista("tienda"); setTimeout(() => document.getElementById("vista-tienda")?.scrollIntoView({ behavior: "smooth" }), 60); }
function irASedes() { document.getElementById("footer-sedes")?.scrollIntoView({ behavior: "smooth" }); }

function filtrarPorCategoriaNav(cat) {
  cambiarVista("tienda");
  document.querySelectorAll('#filtro-tipo-lista input[type="checkbox"]').forEach(cb => { cb.checked = (cb.value === cat); });
  resetPaginaYRender();
  setTimeout(() => document.getElementById("vista-tienda")?.scrollIntoView({ behavior: "smooth" }), 60);
}

function renderCarruselMarcas() {
  const track = document.getElementById("marcas-carousel-track");
  if (!track || !productos.length) return;
  const marcas = [...new Set(productos.map(p => p.marca))];
  track.innerHTML = [...marcas, ...marcas].map(marca => {
    const est = ESTILOS_MARCAS[marca] || { bg: "#18181b", color: "#f97316", logo: "" };
    const cont = est.logo ? `<img src="${est.logo}" alt="${marca}" onerror="this.outerHTML='<span class=\\'marca-circle-texto\\'>${marca}</span>'" />` : `<span class="marca-circle-texto">${marca}</span>`;
    return `<div class="marca-circle-item" style="background:${est.bg};color:${est.color};" onclick="filtrarPorMarcaCarrusel('${marca}')">${cont}</div>`;
  }).join("");
}

function filtrarPorMarcaCarrusel(marca) {
  cambiarVista("tienda");
  document.querySelectorAll('#filtro-marca-lista input[type="checkbox"]').forEach(cb => { cb.checked = (cb.value === marca); });
  resetPaginaYRender();
}

function cambiarMoneda(m) {
  moneda = m;
  document.getElementById("top-btn-usd")?.classList.toggle("active", m === "USD");
  document.getElementById("top-btn-pen")?.classList.toggle("active", m === "PEN");
  document.getElementById("moneda-actual-tag").innerText = m;
  actualizarPrecioFiltro();
  actualizarCarritoUI();
  renderHeroDestacada();
}

function actualizarPrecioFiltro() {
  const val = Number(document.getElementById("filtro-precio").value);
  document.getElementById("precio-max-label").innerText = formatearPrecio(val);
  resetPaginaYRender();
}

function inicializarSidebar() {
  document.getElementById("total-modelos-inv").innerText = productos.length;
  const marcas = [...new Set(productos.map(p => p.marca))].sort();
  document.getElementById("filtro-marca-lista").innerHTML = marcas.map(m => `<label><input type="checkbox" class="chk-marca" value="${m}" onchange="resetPaginaYRender()"> ${m}</label>`).join("");
  const tipos = [...new Set(productos.map(p => p.categoria))];
  document.getElementById("filtro-tipo-lista").innerHTML = tipos.map(t => `<label><input type="checkbox" class="chk-tipo" value="${t}" onchange="resetPaginaYRender()"> ${t}</label>`).join("");
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

function renderCatalogo() {
  renderHeroDestacada();
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
        <div class="card-tags"><span class="marca-tag">${p.marca}</span><span class="badge">${p.categoria}</span></div>
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

  visibles.forEach(p => { const el = document.getElementById(`img-moto-${p.id}`); if (el) buscarFotoReal(p, el); });
  pagBar.innerHTML = totalPaginas > 1 ? `<button ${paginaActual === 1 ? 'disabled' : ''} onclick="paginaActual--;renderCatalogo();window.scrollTo(0,0)">← Anterior</button><span>${paginaActual} / ${totalPaginas}</span><button ${paginaActual === totalPaginas ? 'disabled' : ''} onclick="paginaActual++;renderCatalogo();window.scrollTo(0,0)">Siguiente →</button>` : "";
}

function verDetalleMoto(id) {
  const p = productos.find(m => m.id === id);
  if (!p) return;
  const inicialUsd = Math.round(p.precio * 0.30);
  const cuota24Usd = Math.round((p.precio - inicialUsd) / 24);
  const msgWa = encodeURIComponent(`Hola PUNTO BIKER, me interesa la ${p.nombre} (${p.anio}).`);
  const similares = productos.filter(m => m.categoria === p.categoria && m.id !== p.id).slice(0, 4);

  document.getElementById("detalle-moto-contenido").innerHTML = `
    <div class="det-topbar">
      <button class="btn-dark-outline" onclick="cambiarVista('tienda')">← Volver al Catálogo</button>
      <span class="det-breadcrumb">Catálogo / ${p.categoria} / <strong>${p.nombre}</strong></span>
    </div>
    <div class="det-hero-card">
      <div class="det-gallery"><span class="det-year-badge">MODELO ${p.anio}</span><img src="${obtenerSrcFoto(p)}" alt="${p.nombre}" /></div>
      <div class="det-summary">
        <div class="det-badges">
          <span class="marca-tag">${p.marca}</span><span class="badge">${p.categoria}</span>
          <span class="det-stock-pill ${p.stock === 0 ? 'out' : ''}">${p.stock > 0 ? `En Stock (${p.stock} unid.)` : 'Agotado'}</span>
        </div>
        <h1 class="det-title">${p.nombre}</h1>
        <p class="det-subtitle">Motocicleta ${p.categoria.toLowerCase()} con motor ${p.cilindros.toLowerCase()} de ${p.cc}cc, transmisión ${p.transmision.toLowerCase()} y frenos ${p.frenos}.</p>
        <div class="det-price-card">
          <div><small>PRECIO CONTADO (USD)</small><div class="det-price-main">$${p.precio.toLocaleString()} <span>USD</span></div></div>
          <div class="det-price-divider"></div>
          <div><small>EQUIVALENTE EN SOLES</small><div class="det-price-pen">S/ ${Math.round(p.precio * TASA_PEN).toLocaleString()}</div></div>
        </div>
        <div class="det-finance-box">
          <div class="det-finance-head"><span>Financiamiento Referencial</span><strong>30% Inicial ($${inicialUsd.toLocaleString()})</strong></div>
          <div class="det-finance-values"><span>24 cuotas de: <strong>$${cuota24Usd.toLocaleString()}/mes</strong></span><span>Entrega inmediata</span></div>
        </div>
        <div class="det-quick-kpis">
          <div><span>Cilindrada</span><strong>${p.cc} cc</strong></div>
          <div><span>Potencia</span><strong>${p.hp} HP</strong></div>
          <div><span>Torque</span><strong>${p.torque} Nm</strong></div>
          <div><span>Peso</span><strong>${p.peso} kg</strong></div>
        </div>
        <div class="det-cta-row">
          <button class="btn-amber" style="flex:1;padding:14px;" ${p.stock === 0 ? 'disabled' : ''} onclick="agregarCarrito(${p.id});toggleCarrito()">${p.stock > 0 ? 'Agregar al Carrito y Reservar' : 'Sin Stock'}</button>
          <a href="https://wa.me/51963213014?text=${msgWa}" target="_blank" class="btn-wa-cotizar">Cotizar por WhatsApp</a>
        </div>
      </div>
    </div>
    <div class="det-specs-section">
      <div class="det-tabs-bar">
        <button type="button" class="det-tab active" onclick="cambiarTabFicha('motor', this)">1. Motor y Transmisión</button>
        <button type="button" class="det-tab" onclick="cambiarTabFicha('chasis', this)">2. Chasis y Frenos</button>
        <button type="button" class="det-tab" onclick="cambiarTabFicha('dimensiones', this)">3. Dimensiones</button>
      </div>
      <div id="tab-ficha-motor" class="det-tab-content"><div class="det-spec-grid">
        <div class="det-spec-item"><span>Año</span><strong>${p.anio}</strong></div>
        <div class="det-spec-item"><span>Cilindrada</span><strong>${p.cc} cc</strong></div>
        <div class="det-spec-item"><span>Motor</span><strong>${p.cilindros}</strong></div>
        <div class="det-spec-item"><span>Potencia</span><strong>${p.hp} HP</strong></div>
        <div class="det-spec-item"><span>Torque</span><strong>${p.torque} Nm</strong></div>
        <div class="det-spec-item"><span>Transmisión</span><strong>${p.transmision}</strong></div>
      </div></div>
      <div id="tab-ficha-chasis" class="det-tab-content hidden"><div class="det-spec-grid">
        <div class="det-spec-item"><span>Suspensión Del.</span><strong>${p.suspensionDel}</strong></div>
        <div class="det-spec-item"><span>Suspensión Tras.</span><strong>${p.suspensionTras}</strong></div>
        <div class="det-spec-item"><span>Freno Del.</span><strong>${p.frenosDel}</strong></div>
        <div class="det-spec-item"><span>Freno Tras.</span><strong>${p.frenosTras}</strong></div>
      </div></div>
      <div id="tab-ficha-dimensiones" class="det-tab-content hidden"><div class="det-spec-grid">
        <div class="det-spec-item"><span>Peso</span><strong>${p.peso} kg</strong></div>
        <div class="det-spec-item"><span>Altura Asiento</span><strong>${p.alturaAsiento}</strong></div>
        <div class="det-spec-item"><span>Tanque</span><strong>${p.tanque}</strong></div>
        <div class="det-spec-item"><span>Tablero</span><strong>${p.tablero}</strong></div>
      </div></div>
    </div>
    ${similares.length ? `<div class="det-related-box"><h3>Otras ${p.categoria}</h3><div class="det-related-grid">${similares.map(s => `<div class="det-related-card" onclick="verDetalleMoto(${s.id})"><img src="${obtenerSrcFoto(s)}" /><div><small>${s.marca} • ${s.anio}</small><strong>${s.nombre}</strong><span>$${s.precio.toLocaleString()} USD</span></div></div>`).join("")}</div></div>` : ""}
  `;
  cambiarVista("detalle-moto");
}

function cambiarTabFicha(tab, btn) {
  document.querySelectorAll(".det-tab").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll(".det-tab-content").forEach(c => c.classList.add("hidden"));
  document.getElementById(`tab-ficha-${tab}`).classList.remove("hidden");
}