const BANCO_FOTOS = {
  Superdeportivas: [
    "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80",
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80",
    "https://images.unsplash.com/photo-1615172282427-9a57ef2d142e?w=600&q=80",
    "https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?w=600&q=80"
  ],
  Deportivas: [
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80",
    "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80",
    "https://images.unsplash.com/photo-1622185135505-2d795003994a?w=600&q=80",
    "https://images.unsplash.com/photo-1580310614729-ccd69652491d?w=600&q=80"
  ],
  Adventure: [
    "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80",
    "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80",
    "https://images.unsplash.com/photo-1625043484550-df60256f6ea5?w=600&q=80",
    "https://images.unsplash.com/photo-1558980664-2506fca6bfc2?w=600&q=80"
  ],
  "Doble Propósito": [
    "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80",
    "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80",
    "https://images.unsplash.com/photo-1558980664-312e3bf540d7?w=600&q=80",
    "https://images.unsplash.com/photo-1515777315835-281b94c9589f?w=600&q=80"
  ],
  Naked: [
    "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80",
    "https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=600&q=80",
    "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80",
    "https://images.unsplash.com/photo-1614165936126-2ed18e471b3b?w=600&q=80"
  ],
  Scooters: [
    "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80",
    "https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=600&q=80",
    "https://images.unsplash.com/photo-1519750783826-e2420f4d687f?w=600&q=80",
    "https://images.unsplash.com/photo-1598546720078-8659863bc47d?w=600&q=80"
  ],
  Custom: [
    "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80",
    "https://images.unsplash.com/photo-1558981033-0f0309284409?w=600&q=80",
    "https://images.unsplash.com/photo-1558980394-4c7c9299fe96?w=600&q=80",
    "https://images.unsplash.com/photo-1558981408-db0ecd8a1ee4?w=600&q=80"
  ]
};

const COLORES_MARCA = {
  Ducati: "#dc2626", BMW: "#0284c7", KTM: "#ea580c", Yamaha: "#1d4ed8",
  Kawasaki: "#16a34a", Honda: "#dc2626", Suzuki: "#0369a1", Aprilia: "#b91c1c",
  CFMoto: "#0891b2", Kove: "#0d9488", Morbidelli: "#991b1b", Hero: "#e11d48",
  Italika: "#1e40af", ZXMoto: "#15803d"
};

const CATALOGO_BASE = {
  Ducati: [
    ["Superdeportivas", "Panigale V4 R", 998, 218, 44900],
    ["Superdeportivas", "Panigale V4 S", 1103, 215, 32500],
    ["Superdeportivas", "Panigale V4", 1103, 215, 26500],
    ["Superdeportivas", "Superleggera V4", 998, 224, 98000],
    ["Deportivas", "Panigale V2", 955, 155, 18900],
    ["Deportivas", "Panigale V2 Bayliss", 955, 155, 21400],
    ["Deportivas", "SuperSport 950", 937, 110, 15600],
    ["Deportivas", "SuperSport 950 S", 937, 110, 17800],
    ["Adventure", "Multistrada V4 Rally", 1158, 170, 29900],
    ["Adventure", "Multistrada V4 Pikes Peak", 1158, 170, 31500],
    ["Adventure", "Multistrada V4 S", 1158, 170, 26800],
    ["Adventure", "Multistrada V2 S", 937, 113, 18400],
    ["Doble Propósito", "DesertX", 937, 110, 17900],
    ["Doble Propósito", "DesertX Rally", 937, 110, 22900],
    ["Doble Propósito", "Hypermotard 950 SP", 937, 114, 18500],
    ["Doble Propósito", "Hypermotard 698 Mono", 659, 77, 13900],
    ["Naked", "Streetfighter V4 S", 1103, 208, 27800],
    ["Naked", "Streetfighter V4 SP2", 1103, 208, 35500],
    ["Naked", "Streetfighter V2", 955, 153, 18200],
    ["Naked", "Monster SP", 937, 111, 15900],
    ["Naked", "Monster 937", 937, 111, 13400],
    ["Naked", "Scrambler Icon", 803, 73, 11200],
    ["Naked", "Scrambler Full Throttle", 803, 73, 12600],
    ["Custom", "Diavel V4", 1158, 168, 26900],
    ["Custom", "XDiavel Nera", 1262, 160, 29400],
    ["Custom", "Scrambler Nightshift", 803, 73, 12800]
  ],
  BMW: [
    ["Superdeportivas", "M 1000 RR", 999, 212, 36900],
    ["Superdeportivas", "S 1000 RR", 999, 210, 22400],
    ["Superdeportivas", "S 1000 RR M-Package", 999, 210, 26800],
    ["Superdeportivas", "HP4 Race", 999, 215, 78000],
    ["Deportivas", "F 900 XR", 895, 105, 13200],
    ["Deportivas", "S 1000 XR", 999, 170, 19800],
    ["Deportivas", "M 1000 XR", 999, 201, 28900],
    ["Deportivas", "G 310 RR", 313, 34, 5900],
    ["Adventure", "R 1300 GS", 1300, 145, 21900],
    ["Adventure", "R 1300 GS Trophy", 1300, 145, 24500],
    ["Adventure", "R 1300 GS Adventure", 1300, 145, 26400],
    ["Adventure", "F 900 GS Adventure", 895, 105, 15900],
    ["Adventure", "F 800 GS", 895, 87, 12400],
    ["Doble Propósito", "F 900 GS", 895, 105, 14800],
    ["Doble Propósito", "G 310 GS", 313, 34, 6400],
    ["Doble Propósito", "R nineT Urban G/S", 1170, 109, 15400],
    ["Naked", "M 1000 R", 999, 210, 25900],
    ["Naked", "S 1000 R", 999, 165, 17400],
    ["Naked", "F 900 R", 895, 105, 10800],
    ["Naked", "G 310 R", 313, 34, 5400],
    ["Naked", "R 12 nineT", 1170, 109, 17200],
    ["Scooters", "C 400 GT", 350, 34, 8900],
    ["Scooters", "C 400 X", 350, 34, 7900],
    ["Scooters", "CE 04", 0, 42, 12900],
    ["Custom", "R 18 Transcontinental", 1802, 91, 25400],
    ["Custom", "R 18 Bagger", 1802, 91, 22900]
  ],
  KTM: [
    ["Superdeportivas", "RC 8C", 889, 135, 38900],
    ["Superdeportivas", "1190 RC8 R", 1195, 175, 19500],
    ["Deportivas", "RC 390", 373, 44, 6300],
    ["Deportivas", "RC 390 GP", 373, 44, 6600],
    ["Deportivas", "RC 200", 199, 25, 4400],
    ["Deportivas", "RC 125", 124, 15, 4900],
    ["Adventure", "1290 Super Adventure R", 1301, 160, 21800],
    ["Adventure", "1290 Super Adventure S", 1301, 160, 21200],
    ["Adventure", "890 Adventure R", 889, 105, 15600],
    ["Adventure", "890 Adventure", 889, 105, 14200],
    ["Adventure", "790 Adventure", 799, 95, 11900],
    ["Adventure", "390 Adventure", 373, 44, 7600],
    ["Adventure", "250 Adventure", 248, 30, 5600],
    ["Doble Propósito", "690 Enduro R", 693, 74, 12900],
    ["Doble Propósito", "500 EXC-F", 510, 64, 12800],
    ["Doble Propósito", "350 EXC-F", 349, 52, 11600],
    ["Doble Propósito", "450 Rally", 449, 68, 29500],
    ["Doble Propósito", "690 SMC R", 693, 74, 12900],
    ["Naked", "1390 Super Duke R Evo", 1350, 190, 21500],
    ["Naked", "1390 Super Duke R", 1350, 190, 19800],
    ["Naked", "1290 Super Duke GT", 1301, 175, 20900],
    ["Naked", "990 Duke", 947, 123, 14900],
    ["Naked", "890 Duke R", 889, 115, 12800],
    ["Naked", "790 Duke", 799, 105, 10400],
    ["Naked", "390 Duke", 398, 45, 6200],
    ["Naked", "250 Duke", 249, 31, 4600]
  ],
  Yamaha: [
    ["Superdeportivas", "YZF-R1M", 998, 200, 27400],
    ["Superdeportivas", "YZF-R1", 998, 200, 19200],
    ["Superdeportivas", "YZF-R6", 599, 118, 14500],
    ["Deportivas", "YZF-R7", 689, 73, 9800],
    ["Deportivas", "YZF-R3", 321, 42, 6100],
    ["Deportivas", "YZF-R15", 155, 18, 4300],
    ["Deportivas", "YZF-R15M", 155, 18, 4650],
    ["Adventure", "XT1200Z Super Ténéré", 1199, 112, 16900],
    ["Adventure", "Tracer 9 GT", 890, 119, 16400],
    ["Adventure", "Tracer 700", 689, 73, 10600],
    ["Doble Propósito", "Ténéré 700", 689, 73, 12400],
    ["Doble Propósito", "Ténéré 700 World Raid", 689, 73, 13400],
    ["Doble Propósito", "WR450F", 450, 58, 10200],
    ["Doble Propósito", "WR250F", 250, 41, 8900],
    ["Doble Propósito", "XTZ 250", 249, 21, 4500],
    ["Doble Propósito", "XTZ 150", 149, 12, 3100],
    ["Naked", "MT-10 SP", 998, 166, 17400],
    ["Naked", "MT-10", 998, 166, 14600],
    ["Naked", "MT-09 SP", 890, 119, 12200],
    ["Naked", "MT-09", 890, 119, 10800],
    ["Naked", "MT-07", 689, 73, 8400],
    ["Naked", "MT-03", 321, 42, 5500],
    ["Naked", "XSR900", 890, 119, 13200],
    ["Scooters", "TMAX 560", 562, 47, 14200],
    ["Scooters", "XMAX 300", 292, 28, 6600],
    ["Scooters", "NMAX 155", 155, 15, 4100]
  ],
  Kawasaki: [
    ["Superdeportivas", "Ninja H2R", 998, 310, 57500],
    ["Superdeportivas", "Ninja H2", 998, 231, 34500],
    ["Superdeportivas", "Ninja ZX-10RR", 998, 204, 29800],
    ["Superdeportivas", "Ninja ZX-10R", 998, 203, 19800],
    ["Deportivas", "Ninja ZX-6R", 636, 124, 12400],
    ["Deportivas", "Ninja ZX-4RR", 399, 77, 9900],
    ["Deportivas", "Ninja 650", 649, 68, 8600],
    ["Deportivas", "Ninja 400", 399, 45, 6400],
    ["Adventure", "Versys 1000", 1043, 120, 18900],
    ["Adventure", "Versys 650", 649, 67, 9900],
    ["Adventure", "Versys-X 300", 296, 39, 6200],
    ["Doble Propósito", "KLR 650", 652, 40, 7900],
    ["Doble Propósito", "KLX 300", 292, 29, 6100],
    ["Doble Propósito", "KLX 250", 249, 22, 5400],
    ["Doble Propósito", "KLX 230", 233, 19, 4900],
    ["Naked", "Z H2", 998, 200, 21400],
    ["Naked", "Z900", 948, 125, 11400],
    ["Naked", "Z900RS", 948, 111, 12800],
    ["Naked", "Z650", 649, 68, 7900],
    ["Naked", "Z500", 451, 45, 5900],
    ["Naked", "Z400", 399, 45, 5500],
    ["Custom", "Vulcan 1700", 1700, 82, 18600],
    ["Custom", "Vulcan 900", 903, 50, 9800],
    ["Custom", "Vulcan S", 649, 61, 8400],
    ["Custom", "Eliminator 450", 451, 45, 6600],
    ["Custom", "W800", 773, 48, 10200]
  ],
  Honda: [
    ["Superdeportivas", "CBR1000RR-R Fireblade SP", 1000, 215, 28500],
    ["Superdeportivas", "CBR1000RR-R Fireblade", 1000, 215, 24200],
    ["Superdeportivas", "RC213V-S", 999, 215, 180000],
    ["Deportivas", "CBR600RR", 599, 121, 12900],
    ["Deportivas", "CBR650R", 649, 95, 9900],
    ["Deportivas", "CBR500R", 471, 47, 7400],
    ["Deportivas", "CBR250RR", 249, 41, 6200],
    ["Adventure", "CRF1100L Africa Twin", 1084, 101, 19400],
    ["Adventure", "CRF1000L Africa Twin", 998, 94, 16200],
    ["Adventure", "XL750 Transalp", 755, 91, 10900],
    ["Adventure", "NT1100", 1084, 101, 15400],
    ["Adventure", "CB500X", 471, 47, 7600],
    ["Doble Propósito", "CRF450L", 449, 45, 10200],
    ["Doble Propósito", "CRF300L Rally", 286, 27, 6400],
    ["Doble Propósito", "CRF300L", 286, 27, 5600],
    ["Doble Propósito", "XR190L", 184, 16, 3300],
    ["Naked", "CB1000 Hornet", 999, 155, 12800],
    ["Naked", "CB1000R", 998, 145, 13600],
    ["Naked", "CB750 Hornet", 755, 91, 8500],
    ["Naked", "CB650R", 649, 95, 9400],
    ["Naked", "CB300R", 286, 31, 5200],
    ["Scooters", "X-ADV", 745, 58, 13800],
    ["Scooters", "Forza 750", 745, 58, 12900],
    ["Scooters", "ADV 350", 330, 29, 6800],
    ["Scooters", "PCX 160", 157, 16, 3900],
    ["Custom", "Rebel 1100", 1084, 87, 11800]
  ],
  Suzuki: [
    ["Superdeportivas", "Hayabusa", 1340, 190, 19400],
    ["Superdeportivas", "GSX-R1000R", 999, 202, 18600],
    ["Superdeportivas", "GSX-R1000", 999, 202, 16400],
    ["Deportivas", "GSX-R750", 750, 148, 13200],
    ["Deportivas", "GSX-R600", 599, 125, 11900],
    ["Deportivas", "GSX-8R", 776, 83, 9600],
    ["Deportivas", "Gixxer SF 250", 249, 26, 3950],
    ["Adventure", "V-Strom 1050DE", 1037, 107, 16200],
    ["Adventure", "V-Strom 1050", 1037, 107, 15200],
    ["Adventure", "V-Strom 800DE", 776, 84, 11500],
    ["Adventure", "V-Strom 650XT", 645, 70, 9600],
    ["Adventure", "V-Strom 250SX", 249, 26, 4300],
    ["Doble Propósito", "DR650S", 644, 43, 7200],
    ["Doble Propósito", "DR-Z400S", 398, 39, 7100],
    ["Doble Propósito", "DR-Z400SM", 398, 39, 7800],
    ["Naked", "GSX-S1000", 999, 152, 11900],
    ["Naked", "Katana", 999, 152, 13600],
    ["Naked", "GSX-8S", 776, 83, 8900],
    ["Naked", "SV650", 645, 75, 7800],
    ["Naked", "Gixxer 250", 249, 26, 3650],
    ["Scooters", "Burgman 400", 400, 29, 8600],
    ["Scooters", "Burgman 125", 124, 9, 2500],
    ["Custom", "Boulevard M109R", 1783, 128, 15800],
    ["Custom", "Boulevard C50", 805, 53, 8900]
  ],
  Aprilia: [
    ["Superdeportivas", "RSV4 Factory", 1099, 217, 25900],
    ["Superdeportivas", "RSV4", 1099, 217, 19400],
    ["Deportivas", "RS 660", 659, 100, 11600],
    ["Deportivas", "RS 457", 457, 48, 6900],
    ["Deportivas", "RS 125", 124, 15, 5400],
    ["Adventure", "Tuareg 660", 659, 80, 12200],
    ["Adventure", "Caponord 1200", 1197, 125, 15800],
    ["Doble Propósito", "RX 125", 124, 15, 4200],
    ["Doble Propósito", "SX 125", 124, 15, 4300],
    ["Doble Propósito", "Dorsoduro 900", 896, 95, 11400],
    ["Naked", "Tuono V4", 1077, 175, 16400],
    ["Naked", "Tuono 660", 659, 95, 10400],
    ["Naked", "Shiver 900", 896, 95, 9800],
    ["Scooters", "SR GT 200", 174, 17, 4600],
    ["Scooters", "SR GT 125", 124, 15, 4100]
  ],
  CFMoto: [
    ["Superdeportivas", "675SR-R", 675, 95, 8900],
    ["Superdeportivas", "500SR Voom", 499, 78, 7600],
    ["Deportivas", "450SR-S", 449, 50, 6500],
    ["Deportivas", "450SR", 449, 47, 5900],
    ["Deportivas", "300SR", 292, 29, 4400],
    ["Deportivas", "250SR", 249, 27, 3800],
    ["Adventure", "800MT Explore", 799, 91, 10600],
    ["Adventure", "800MT Touring", 799, 91, 9900],
    ["Adventure", "700MT", 693, 67, 7400],
    ["Adventure", "650MT", 649, 60, 6600],
    ["Doble Propósito", "450MT", 449, 44, 6400],
    ["Doble Propósito", "800MT-X", 799, 95, 10200],
    ["Naked", "800NK", 799, 95, 8700],
    ["Naked", "675NK", 675, 95, 7800],
    ["Naked", "450NK", 449, 47, 5400],
    ["Naked", "300NK", 292, 28, 3900],
    ["Naked", "700CL-X", 693, 70, 7500],
    ["Scooters", "150SC", 149, 14, 2800],
    ["Custom", "450CL-C", 449, 40, 6400]
  ],
  Kove: [
    ["Superdeportivas", "450RR", 443, 70, 6900],
    ["Deportivas", "321RR", 322, 41, 4800],
    ["Deportivas", "250RR", 249, 32, 4100],
    ["Adventure", "800X Pro", 799, 95, 9800],
    ["Adventure", "800X Rally", 799, 95, 10400],
    ["Adventure", "510X", 498, 47, 6800],
    ["Doble Propósito", "450 Rally", 449, 51, 9200],
    ["Doble Propósito", "MX250", 249, 37, 6400],
    ["Naked", "321R", 322, 41, 4500],
    ["Naked", "500F", 471, 47, 5900]
  ],
  Morbidelli: [
    ["Superdeportivas", "F352", 349, 41, 5100],
    ["Deportivas", "F250", 249, 28, 3900],
    ["Adventure", "T1002VX", 997, 88, 9900],
    ["Adventure", "T502X", 486, 47, 6400],
    ["Doble Propósito", "T250X", 249, 24, 3600],
    ["Naked", "M502N", 486, 47, 5600],
    ["Naked", "N300", 298, 29, 4100],
    ["Scooters", "SC300", 278, 26, 4400],
    ["Custom", "C1002V", 997, 88, 9600]
  ],
  Hero: [
    ["Deportivas", "Karizma XMR", 210, 25, 3100],
    ["Deportivas", "Xtreme 200S", 199, 19, 2650],
    ["Adventure", "XPulse 200T", 199, 19, 2750],
    ["Doble Propósito", "XPulse 200 4V", 199, 19, 2550],
    ["Doble Propósito", "XPulse 200 Rally", 199, 19, 2950],
    ["Naked", "Mavrick 440", 440, 27, 3800],
    ["Naked", "Xtreme 160R", 163, 17, 2450],
    ["Naked", "Hunk 160R", 163, 15, 2250],
    ["Scooters", "Xoom 110", 110, 8, 1650],
    ["Scooters", "Destini 125", 124, 9, 1750]
  ],
  Italika: [
    ["Deportivas", "Vort-X 300R", 292, 27, 2950],
    ["Deportivas", "RT250", 250, 18, 2350],
    ["Deportivas", "RT200", 200, 15, 1950],
    ["Adventure", "VX250", 250, 24, 2850],
    ["Doble Propósito", "DM250X", 250, 17, 2350],
    ["Doble Propósito", "DM200", 200, 15, 1850],
    ["Naked", "Vort-X 300", 292, 27, 2750],
    ["Naked", "250Z", 250, 18, 2100],
    ["Naked", "Blackbird 250", 250, 19, 2400],
    ["Scooters", "Vitalia 150", 149, 8, 1750],
    ["Scooters", "Modena 175", 175, 10, 1950],
    ["Custom", "TC250", 250, 18, 2250]
  ],
  ZXMoto: [
    ["Superdeportivas", "820RR", 819, 135, 11200],
    ["Deportivas", "500RR", 499, 82, 7400],
    ["Deportivas", "450RR", 449, 52, 6200],
    ["Adventure", "820X", 819, 115, 10400],
    ["Doble Propósito", "450 Rally", 449, 50, 7900],
    ["Naked", "820R", 819, 130, 9900],
    ["Naked", "500R", 499, 78, 6600],
    ["Scooters", "350GT", 349, 32, 5200],
    ["Custom", "650C", 649, 62, 7200]
  ]
};

function construirCatalogoCompleto() {
  const lista = [];
  let id = 1;
  Object.entries(CATALOGO_BASE).forEach(([marca, modelos]) => {
    modelos.forEach(([categoria, modelo, cc, hp, precio]) => {
      const esElectrica = cc === 0;
      const esScooter = categoria === "Scooters";
      const esOffroad = categoria === "Doble Propósito" || categoria === "Adventure";
      const peso = esScooter ? 135 : cc > 800 ? 215 : cc > 350 ? 182 : 148;
      const pool = BANCO_FOTOS[categoria] || BANCO_FOTOS.Deportivas;

      lista.push({
        id: id++,
        marca,
        categoria,
        modeloCorto: modelo,
        nombre: `${marca} ${modelo}`,
        cc,
        hp,
        precio,
        stock: (id % 6) + 2,
        transmision: esScooter || esElectrica ? "Automática CVT" : cc >= 250 ? "Mecánica 6 Vel." : "Mecánica 5 Vel.",
        frenos: hp >= 120 ? "Brembo Radial" : cc >= 250 ? "ABS Doble Canal" : "CBS / Tambor",
        aros: esOffroad ? "Rayos 21''/18''" : esScooter ? "Urbano 12''-14''" : "Aleación 17''",
        suspension: hp >= 130 ? "Electrónica Öhlins/WP" : cc >= 250 ? "Invertida USD" : "Telescópica",
        combustible: esElectrica ? "Eléctrica" : cc >= 200 ? "Inyección Electrónica" : "Carburador",
        peso,
        dimCat: peso < 160 ? "Ligera (<160 kg)" : peso <= 205 ? "Media (160-205 kg)" : "Gran Porte (>205 kg)",
        tft: cc >= 300 || hp >= 40,
        img: pool[id % pool.length]
      });
    });
  });
  return lista;
}

const DATOS_INICIALES = construirCatalogoCompleto();
let productos = JSON.parse(localStorage.getItem("punto_biker_v8")) || DATOS_INICIALES;
let carrito = [];
let moneda = "USD";
const TASA_PEN = 3.75;
let paginaActual = 1;
const POR_PAGINA = 21;
const cacheFotos = JSON.parse(localStorage.getItem("punto_biker_fotos_v3") || "{}");

function guardarDB() {
  localStorage.setItem("punto_biker_v8", JSON.stringify(productos));
}

function formatearPrecio(usd) {
  if (moneda === "USD") return `$${usd.toLocaleString()} USD`;
  return `S/ ${Math.round(usd * TASA_PEN).toLocaleString()}`;
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
    () => buscarEnWikipedia("es", `${prod.marca} ${baseModelo}`),
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
    info.innerText = "0 motocicletas encontradas con esos filtros";
    pagBar.innerHTML = "";
    grid.innerHTML = "<p style='grid-column:1/-1;text-align:center;color:#94a3b8;padding:3rem;'>No hay motocicletas que coincidan con tu búsqueda.</p>";
    return;
  }

  const totalPaginas = Math.ceil(filtrados.length / POR_PAGINA);
  if (paginaActual > totalPaginas) paginaActual = totalPaginas;
  const inicio = (paginaActual - 1) * POR_PAGINA;
  const visibles = filtrados.slice(inicio, inicio + POR_PAGINA);

  info.innerHTML = `Mostrando <strong>${inicio + 1}-${Math.min(inicio + POR_PAGINA, filtrados.length)}</strong> de <strong>${filtrados.length}</strong> motocicletas`;

  grid.innerHTML = visibles.map(p => {
    const colorMarca = COLORES_MARCA[p.marca] || "#dc2626";
    const tieneFotoReal = Boolean(cacheFotos[p.nombre]);
    return `
      <article class="card">
        <div class="card-img-wrap" onclick="verFicha(${p.id})" >
          <img id="img-moto-${p.id}" src="${cacheFotos[p.nombre] || p.img}" alt="${p.nombre}" />
          <span id="badge-foto-${p.id}" style="position:absolute;bottom:6px;right:6px;background:rgba(7,11,20,0.82);color:#cbd5e1;font-size:0.68rem;padding:2px 7px;border-radius:4px;">
            ${tieneFotoReal ? "✓ Foto Real" : p.categoria}
          </span>
        </div>
        <div class="card-body">
          <div class="card-tags">
            <span class="marca-tag" >${p.marca}</span>
            <span class="badge">${p.categoria}</span>
          </div>
          <h3 onclick="verFicha(${p.id})">${p.nombre}</h3>
          <div class="specs">
            ${p.cc > 0 ? p.cc + 'cc' : 'Eléctrica'}  | ${p.hp} HP<br/>
            ${p.frenos}  | ${p.transmision}
          </div>
          <div class="precio">${formatearPrecio(p.precio)}</div>
          <div class="stock ${p.stock === 0 ? 'agotado' : ''}">
            ${p.stock > 0 ? `Stock: ${p.stock} unid.` : 'AGOTADO'}
          </div>
          <div class="card-actions">
            <button class="btn-ficha" onclick="verFicha(${p.id})">Ficha Técnica</button>
            <button class="btn-add" ${p.stock === 0 ? 'disabled' : ''} onclick="agregarCarrito(${p.id})">
              ${p.stock > 0 ? 'Cotizar' : 'Sin Stock'}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  visibles.forEach(p => {
    const el = document.getElementById(`img-moto-${p.id}`);
    const bg = document.getElementById(`badge-foto-${p.id}`);
    if (el && !cacheFotos[p.nombre]) cargarFotoRealMoto(p, el, bg);
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
  const colorMarca = COLORES_MARCA[p.marca] || "#dc2626";
  const box = document.getElementById("ficha-contenido");
  box.innerHTML = `
    <img src="${cacheFotos[p.nombre] || p.img}" alt="${p.nombre}" />
    <div class="modal-info">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span class="marca-tag" >${p.marca} • ${p.categoria}</span>
        <button onclick="document.getElementById('modal-ficha').classList.add('hidden')" style="background:none;border:none;color:#fff;font-size:1.3rem;cursor:pointer;">✕</button>
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
        Agregar al Carrito (${p.stock} disponibles)
      </button>
    </div>
  `;
  document.getElementById("modal-ficha").classList.remove("hidden");
}

function cerrarFicha(e) {
  if (e.target.id === "modal-ficha") document.getElementById("modal-ficha").classList.add("hidden");
}

function agregarCarrito(id) {
  const prod = productos.find(p => p.id === id);
  const enCarrito = carrito.find(item => item.id === id);
  if (enCarrito) {
    if (enCarrito.cantidad < prod.stock) enCarrito.cantidad++;
    else alert("No hay más stock disponible.");
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
          <small>${formatearPrecio(item.precio)} x ${item.cantidad}</small>
        </div>
        <button style="background:#dc2626;color:white;border:none;padding:4px 8px;border-radius:4px;cursor:pointer;" onclick="quitarCarrito(${item.id})">Quitar</button>
      </div>
    `;
  }).join("");
  document.getElementById("carrito-total").innerText = formatearPrecio(total);
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

function cambiarFotoManual(id) {
  const prod = productos.find(p => p.id === id);
  if (!prod) return;
  const nuevaUrl = prompt(`Pega la URL de la foto para ${prod.nombre}:`, cacheFotos[prod.nombre] || prod.img);
  if (nuevaUrl && nuevaUrl.startsWith("http")) {
    cacheFotos[prod.nombre] = nuevaUrl.trim();
    localStorage.setItem("punto_biker_fotos_v3", JSON.stringify(cacheFotos));
    renderInventario();
    renderCatalogo();
  }
}

function renderInventario() {
  const tbody = document.getElementById("tabla-inventario");
  const filtro = (document.getElementById("buscador-inv")?.value || "").toLowerCase();
  const lista = productos.filter(p => `${p.nombre} ${p.categoria}`.toLowerCase().includes(filtro));
  tbody.innerHTML = lista.map(p => {
    const verificada = Boolean(cacheFotos[p.nombre]);
    return `
      <tr>
        <td>#${p.id}</td>
        <td><strong>${p.marca}</strong></td>
        <td>${p.categoria}</td>
        <td>${p.nombre}</td>
        <td>${p.cc}cc • ${p.hp} HP</td>
        <td>$${p.precio.toLocaleString()}</td>
        <td><strong>${p.stock}</strong> unid.</td>
        <td>
          <button class="btn-stock btn-mas" onclick="ajustarStock(${p.id}, 1)">+1</button>
          <button class="btn-stock btn-menos" onclick="ajustarStock(${p.id}, -1)">-1</button>
          <button class="btn-stock" style="background:#27272a;color:#e4e4e7;" onclick="cambiarFotoManual(${p.id})">${verificada ? "✓ Foto" : "Foto URL"}</button>
        </td>
      </tr>
    `;
  }).join("");
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
  productos = construirCatalogoCompleto();
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

inicializarSidebar();
renderCatalogo();
renderInventario();
actualizarCarritoUI();

