// === MÓDULO 2: BASE DE DATOS, CATÁLOGO BASE Y UTILIDADES ===
const BANCO_FOTOS = {
  Superdeportivas: ["https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=900&q=85","https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=900&q=85"],
  Deportivas: ["https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=900&q=85","https://images.unsplash.com/photo-1622185135505-2d795003994a?w=900&q=85"],
  Adventure: ["https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=900&q=85","https://images.unsplash.com/photo-1625043484550-df60256f6ea5?w=900&q=85"],
  "Doble Propósito": ["https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=900&q=85","https://images.unsplash.com/photo-1558980664-312e3bf540d7?w=900&q=85"],
  Naked: ["https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=900&q=85","https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=900&q=85"],
  Scooters: ["https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=900&q=85"],
  Custom: ["https://images.unsplash.com/photo-1558981033-0f0309284409?w=900&q=85"]
};

const ESTILOS_MARCAS = {
  CFMoto: { bg: "#ffffff", color: "#0f172a", logo: "https://upload.wikimedia.org/wikipedia/commons/4/41/CFMOTO_Logo.svg" },
  Ducati: { bg: "#ffffff", color: "#cc0000", logo: "https://upload.wikimedia.org/wikipedia/commons/6/66/Ducati_red_logo.PNG" },
  BMW: { bg: "#ffffff", color: "#18181b", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" },
  KTM: { bg: "#ff6600", color: "#111111", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/KTM-Logo.svg" },
  Yamaha: { bg: "#ffffff", color: "#0033a0", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Yamaha_Motor_Logo_%28full%29.svg" },
  Kawasaki: { bg: "#111111", color: "#69be28", logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Kawasaki_Logo_vert.svg" },
  Honda: { bg: "#ffffff", color: "#e40521", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Honda_Logo.svg" },
  Suzuki: { bg: "#ffffff", color: "#003399", logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Suzuki_logo_2.svg" },
  Aprilia: { bg: "#111111", color: "#ef4444", logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Aprilia-logo.svg" },
  Kove: { bg: "#064e3b", color: "#34d399", logo: "" },
  Morbidelli: { bg: "#1e1b4b", color: "#f8fafc", logo: "" },
  Hero: { bg: "#ffffff", color: "#991b1b", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Hero_MotoCorp_Logo.svg" },
  Italika: { bg: "#ffffff", color: "#047857", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Logo_ITALIKA_RACING.png" },
  ZXMoto: { bg: "#27272a", color: "#f97316", logo: "" }
};

const CATALOGO_BASE = {
  CFMoto: [
    ["Superdeportivas","675SR-R",675,95,8900,2026],["Superdeportivas","500SR Voom",499,78,7600,2026],
    ["Deportivas","450SR-S",449,50,6500,2026],["Deportivas","450SR",449,50,5900,2025],
    ["Deportivas","300SR",292,29,4300,2025],["Adventure","800MT Explore",799,91,10600,2026],
    ["Adventure","800MT Touring",799,91,9800,2025],["Adventure","700MT",693,67,7800,2026],
    ["Doble Propósito","450MT",449,44,6400,2026],["Naked","800NK",799,95,8700,2026],
    ["Naked","675NK",675,95,7900,2026],["Naked","450NK",449,50,5600,2026],
    ["Naked","300NK",292,27,3900,2025],["Custom","450CL-C",449,40,5800,2026]
  ],
  Ducati: [
    ["Superdeportivas","Panigale V4 R",998,218,44900,2026],["Superdeportivas","Panigale V4 S",1103,215,32500,2026],
    ["Superdeportivas","Panigale V4",1103,215,26500,2025],["Superdeportivas","Superleggera V4",998,224,98000,2025],
    ["Deportivas","Panigale V2",955,155,18900,2026],["Deportivas","SuperSport 950 S",937,110,16800,2025],
    ["Adventure","Multistrada V4 Rally",1158,170,29900,2026],["Adventure","Multistrada V4 S",1158,170,27200,2026],
    ["Doble Propósito","DesertX Rally",937,110,22900,2026],["Naked","Streetfighter V4 S",1103,208,27800,2026],
    ["Naked","Monster SP",937,111,15600,2026],["Custom","Diavel V4",1158,168,26900,2025]
  ],
  BMW: [
    ["Superdeportivas","M 1000 RR",999,212,36900,2026],["Superdeportivas","S 1000 RR",999,210,22400,2026],
    ["Deportivas","G 310 RR",313,34,5900,2025],["Adventure","R 1300 GS Adventure",1300,145,24900,2026],
    ["Adventure","R 1300 GS",1300,145,21900,2026],["Doble Propósito","F 900 GS",895,105,14800,2026],
    ["Doble Propósito","G 310 GS",313,34,6400,2025],["Naked","M 1000 R",999,210,25900,2026],
    ["Naked","S 1000 R",999,165,17900,2026],["Naked","F 900 R",895,105,11200,2026],
    ["Scooters","C 400 GT",350,34,8900,2025],["Custom","R 18 Transcontinental",1802,91,25400,2025]
  ],
  KTM: [
    ["Superdeportivas","RC 8C",889,135,38900,2025],["Deportivas","RC 390",373,44,6300,2026],
    ["Adventure","1290 Super Adventure R",1301,160,21800,2025],["Adventure","890 Adventure R",889,105,15900,2026],
    ["Doble Propósito","690 Enduro R",693,74,12900,2026],["Doble Propósito","390 Adventure",373,44,7400,2026],
    ["Naked","1390 Super Duke R Evo",1350,190,21500,2026],["Naked","990 Duke",947,123,14900,2026],
    ["Naked","390 Duke",398,45,6200,2026],["Naked","250 Duke",249,31,4800,2026]
  ],
  Yamaha: [
    ["Superdeportivas","YZF-R1M",998,200,27400,2026],["Superdeportivas","YZF-R1",998,200,19200,2026],
    ["Deportivas","YZF-R9",890,119,13500,2026],["Deportivas","YZF-R7",689,73,9800,2026],
    ["Deportivas","YZF-R3",321,42,6100,2025],["Adventure","Tracer 9 GT+",890,119,17900,2026],
    ["Doble Propósito","Ténéré 700 Extreme",689,73,13400,2026],["Doble Propósito","XTZ 250",249,21,4600,2026],
    ["Naked","MT-10 SP",998,166,17400,2026],["Naked","MT-09 SP",890,119,12200,2026],
    ["Naked","MT-07",689,73,8800,2026],["Naked","MT-03",321,42,5600,2026],
    ["Scooters","TMAX 560",562,47,14200,2026],["Scooters","XMAX 300",292,28,6800,2026]
  ],
  Kawasaki: [
    ["Superdeportivas","Ninja H2R",998,310,57500,2026],["Superdeportivas","Ninja ZX-10R",998,203,19800,2026],
    ["Deportivas","Ninja ZX-6R",636,124,12400,2026],["Deportivas","Ninja ZX-4RR",399,77,9900,2026],
    ["Deportivas","Ninja 500 SE",451,45,6400,2026],["Adventure","Versys 1100 SE",1099,135,19400,2026],
    ["Doble Propósito","KLR 650 Adventure",652,40,8300,2025],["Naked","Z H2",998,200,21400,2026],
    ["Naked","Z900",948,125,11400,2026],["Naked","Z500",451,45,5900,2026],["Custom","Vulcan S",649,61,8400,2025]
  ],
  Honda: [
    ["Superdeportivas","CBR1000RR-R Fireblade SP",1000,215,28500,2026],["Deportivas","CBR600RR",599,121,12900,2026],
    ["Deportivas","CBR650R E-Clutch",649,95,10400,2026],["Adventure","CRF1100L Africa Twin",1084,101,19400,2026],
    ["Adventure","XL750 Transalp",755,91,11200,2026],["Doble Propósito","CRF300L Rally",286,27,6400,2025],
    ["Naked","CB1000 Hornet SP",999,155,13400,2026],["Naked","CB750 Hornet",755,91,8900,2026],
    ["Scooters","X-ADV",745,58,13800,2026],["Custom","Rebel 1100",1084,87,11800,2025]
  ],
  Suzuki: [
    ["Superdeportivas","Hayabusa",1340,190,19400,2026],["Superdeportivas","GSX-R1000R",999,202,18600,2025],
    ["Deportivas","GSX-8R",776,83,9900,2026],["Adventure","V-Strom 1050DE",1037,107,16200,2026],
    ["Adventure","V-Strom 800DE",776,84,11900,2026],["Doble Propósito","DR650S",644,43,7200,2025],
    ["Naked","GSX-S1000",999,152,11900,2026],["Naked","GSX-8S",776,83,9200,2026],["Scooters","Burgman 400",400,29,8600,2025]
  ],
  Aprilia: [
    ["Superdeportivas","RSV4 Factory",1099,217,25900,2026],["Deportivas","RS 660",659,100,11600,2026],
    ["Deportivas","RS 457",457,48,6900,2026],["Adventure","Tuareg 660",659,80,12200,2026],
    ["Naked","Tuono V4 Factory",1077,175,18900,2026],["Naked","Tuono 660",659,95,10800,2025]
  ],
  Kove: [
    ["Superdeportivas","450RR",443,70,6900,2026],["Adventure","800X Pro",799,95,9800,2026],
    ["Adventure","510X",498,48,7400,2026],["Doble Propósito","450 Rally",449,51,9200,2026]
  ],
  Morbidelli: [
    ["Superdeportivas","F352",349,41,5100,2026],["Adventure","T1002VX",997,88,9900,2026],
    ["Adventure","T502X",486,47,6300,2026],["Naked","M502N",486,47,5600,2025]
  ],
  Hero: [
    ["Deportivas","Karizma XMR",210,25,3100,2026],["Doble Propósito","XPulse 200 4V",199,19,2550,2026],
    ["Naked","Mavrick 440",440,27,3800,2026],["Naked","Hunk 160R 4V",163,17,2250,2026]
  ],
  Italika: [
    ["Deportivas","Vort-X 300R",292,27,2950,2026],["Deportivas","RT 250",250,18,2450,2025],
    ["Doble Propósito","DM250X",250,17,2350,2025],["Naked","250Z",250,18,2100,2025]
  ],
  ZXMoto: [
    ["Superdeportivas","820RR",819,135,11200,2026],["Deportivas","500RR",499,82,7400,2026],
    ["Adventure","820X",819,115,10400,2026],["Naked","820R",819,130,9900,2026]
  ]
};

function crearObjetoMoto(id, marca, categoria, modelo, cc, hp, precio, stock, anio = 2026, customImg = "") {
  const esScooter = categoria === "Scooters";
  const esOffroad = categoria === "Doble Propósito" || categoria === "Adventure";
  const esDeportiva = categoria === "Superdeportivas" || categoria === "Deportivas";
  const peso = esScooter ? 135 : cc > 800 ? 212 : cc > 350 ? 182 : 148;
  const torque = Math.round(cc * 0.105) || 35;
  const tanque = esScooter ? "11.5 L" : esOffroad ? "21.0 L" : "17.0 L";
  const rendimientoKm = esScooter ? 145 : cc <= 250 ? 135 : cc <= 500 ? 105 : cc <= 800 ? 82 : 65;
  const posicionManejo = esDeportiva ? "Deportiva" : esOffroad ? "Adventure / Erguida" : esScooter ? "Urbana / Confort" : "Recta / Street";
  const pool = BANCO_FOTOS[categoria] || BANCO_FOTOS.Deportivas;

  return {
    id, marca, categoria, modeloCorto: modelo, nombre: `${marca} ${modelo}`, anio,
    cc, hp, torque, precio, stock, peso, tanque, rendimientoKm, posicionManejo,
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

// ESTADO GLOBAL DE LA APLICACIÓN
let productos = JSON.parse(localStorage.getItem("pb_db_productos_v5_full")) || construirCatalogoCompleto();
let usuarios = JSON.parse(localStorage.getItem("pb_db_usuarios_sec_v5")) || [];
let sesionActual = JSON.parse(sessionStorage.getItem("pb_sec_sesion_activa")) || null;
let ventas = JSON.parse(localStorage.getItem("pb_db_ventas_v4")) || [];
let configPagos = JSON.parse(localStorage.getItem("pb_db_config_pagos")) || {
  titular: "", telefono: "", qrDataUrl: "", banco: "", cuenta: "", cci: "", cipEntidad: "PAGOEFECTIVO - PUNTO BIKER"
};
const cacheFotos = JSON.parse(localStorage.getItem("punto_biker_fotos_v6_clean") || "{}");

let carrito = [];
let moneda = "USD";
const TASA_PEN = 3.75;
let paginaActual = 1;
const POR_PAGINA = 20;
let heroIndex = 0;

function guardarTodoDB() {
  localStorage.setItem("pb_db_productos_v5_full", JSON.stringify(productos));
  localStorage.setItem("pb_db_usuarios_sec_v5", JSON.stringify(usuarios));
  if (sesionActual) sessionStorage.setItem("pb_sec_sesion_activa", JSON.stringify(sesionActual));
  else sessionStorage.removeItem("pb_sec_sesion_activa");
  localStorage.setItem("pb_db_ventas_v4", JSON.stringify(ventas));
  localStorage.setItem("pb_db_config_pagos", JSON.stringify(configPagos));
}

function formatearPrecio(usd) {
  return moneda === "USD" ? `$${usd.toLocaleString()} USD` : `S/ ${Math.round(usd * TASA_PEN).toLocaleString()}`;
}

function formatearPrecioSecundario(usd) {
  return moneda === "USD" ? `≈ S/ ${Math.round(usd * TASA_PEN).toLocaleString()}` : `≈ $${usd.toLocaleString()} USD`;
}

function obtenerSrcFoto(p) {
  return p.customPhoto ? p.img : (cacheFotos[p.nombre] || p.img);
}

async function buscarFotoReal(prod, imgEl) {
  if (prod.customPhoto || cacheFotos[prod.nombre]) {
    imgEl.src = obtenerSrcFoto(prod);
    return;
  }
  try {
    const query = encodeURIComponent(`${prod.marca} ${prod.modeloCorto} motorcycle`);
    const url = `https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=filetype:bitmap+${query}&gsrnamespace=6&gsrlimit=6&prop=imageinfo&iiprop=url|size&iiurlwidth=900&format=json&origin=*`;
    const res = await fetch(url);
    const data = await res.json();
    const pages = data?.query?.pages ? Object.values(data.query.pages) : [];
    for (const p of pages) {
      const title = (p.title || "").toLowerCase();
      const info = p.imageinfo?.[0];
      const src = info?.thumburl || info?.url;
      if (!src || /\.(svg|gif)$/i.test(src)) continue;
      if (/(logo|emblem|badge|crest|shield|flag|icon|map|diagram|drawing|vector|atelier|painting)/i.test(title)) continue;
      if (info.width && info.height && info.width < info.height * 0.8) continue;
      cacheFotos[prod.nombre] = src;
      localStorage.setItem("punto_biker_fotos_v6_clean", JSON.stringify(cacheFotos));
      imgEl.src = src;
      return;
    }
  } catch (e) {}
}