const IMGS = {
  Superdeportivas: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80",
  Deportivas: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80",
  Adventure: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80",
  "Doble Propósito": "https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80",
  Naked: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80",
  Scooters: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&q=80",
  Custom: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600&q=80"
};

const CATALOGO_BASE = {
  Ducati: [
    ["Superdeportivas", "Panigale V4 R", "998cc • 218 HP", 44900],
    ["Superdeportivas", "Panigale V4 S", "1103cc • 215 HP", 32500],
    ["Superdeportivas", "Panigale V4", "1103cc • 215 HP", 26500],
    ["Superdeportivas", "Superleggera V4", "998cc • 224 HP", 98000],
    ["Deportivas", "Panigale V2", "955cc • 155 HP", 18900],
    ["Deportivas", "Panigale V2 Bayliss", "955cc • 155 HP", 21400],
    ["Deportivas", "SuperSport 950", "937cc • 110 HP", 15600],
    ["Deportivas", "SuperSport 950 S", "937cc • 110 HP", 17800],
    ["Adventure", "Multistrada V4 Rally", "1158cc • 170 HP", 29900],
    ["Adventure", "Multistrada V4 Pikes Peak", "1158cc • 170 HP", 31500],
    ["Adventure", "Multistrada V4 S", "1158cc • 170 HP", 26800],
    ["Adventure", "Multistrada V2 S", "937cc • 113 HP", 18400],
    ["Doble Propósito", "DesertX", "937cc • 110 HP", 17900],
    ["Doble Propósito", "DesertX Rally", "937cc • 110 HP", 22900],
    ["Doble Propósito", "Hypermotard 950 SP", "937cc • 114 HP", 18500],
    ["Doble Propósito", "Hypermotard 698 Mono", "659cc • 77.5 HP", 13900],
    ["Naked", "Streetfighter V4 S", "1103cc • 208 HP", 27800],
    ["Naked", "Streetfighter V4 SP2", "1103cc • 208 HP", 35500],
    ["Naked", "Streetfighter V2", "955cc • 153 HP", 18200],
    ["Naked", "Monster SP", "937cc • 111 HP", 15900],
    ["Naked", "Monster 937 Plus", "937cc • 111 HP", 13400],
    ["Naked", "Scrambler Icon 800", "803cc • 73 HP", 11200],
    ["Naked", "Scrambler Full Throttle", "803cc • 73 HP", 12600],
    ["Custom", "Diavel V4", "1158cc • 168 HP", 26900],
    ["Custom", "XDiavel Nera", "1262cc • 160 HP", 29400],
    ["Custom", "Scrambler Nightshift", "803cc • 73 HP", 12800]
  ],
  BMW: [
    ["Superdeportivas", "M 1000 RR", "999cc • 212 HP", 36900],
    ["Superdeportivas", "S 1000 RR", "999cc • 210 HP", 22400],
    ["Superdeportivas", "S 1000 RR M-Package", "999cc • 210 HP", 26800],
    ["Superdeportivas", "HP4 Race", "999cc • 215 HP", 78000],
    ["Deportivas", "F 900 XR", "895cc • 105 HP", 13200],
    ["Deportivas", "S 1000 XR", "999cc • 170 HP", 19800],
    ["Deportivas", "M 1000 XR", "999cc • 201 HP", 28900],
    ["Deportivas", "G 310 RR", "313cc • 34 HP", 5900],
    ["Adventure", "R 1300 GS", "1300cc • 145 HP", 21900],
    ["Adventure", "R 1300 GS Trophy", "1300cc • 145 HP", 24500],
    ["Adventure", "R 1300 GS Adventure", "1300cc • 145 HP", 26400],
    ["Adventure", "F 900 GS Adventure", "895cc • 105 HP", 15900],
    ["Adventure", "F 800 GS", "895cc • 87 HP", 12400],
    ["Doble Propósito", "F 900 GS Enduro Pro", "895cc • 105 HP", 14800],
    ["Doble Propósito", "G 310 GS", "313cc • 34 HP", 6400],
    ["Doble Propósito", "R nineT Urban G/S", "1170cc • 109 HP", 15400],
    ["Naked", "M 1000 R", "999cc • 210 HP", 25900],
    ["Naked", "S 1000 R", "999cc • 165 HP", 17400],
    ["Naked", "F 900 R", "895cc • 105 HP", 10800],
    ["Naked", "G 310 R", "313cc • 34 HP", 5400],
    ["Naked", "R 12 nineT", "1170cc • 109 HP", 17200],
    ["Scooters", "C 400 GT", "350cc • 34 HP", 8900],
    ["Scooters", "C 400 X", "350cc • 34 HP", 7900],
    ["Scooters", "CE 04 Electric", "Eléctrico • 42 HP", 12900],
    ["Custom", "R 18 Transcontinental", "1802cc • 91 HP", 25400],
    ["Custom", "R 18 Bagger", "1802cc • 91 HP", 22900]
  ],
  KTM: [
    ["Superdeportivas", "RC 8C Track", "889cc • 135 HP", 38900],
    ["Superdeportivas", "1190 RC8 R", "1195cc • 175 HP", 19500],
    ["Deportivas", "RC 390", "373cc • 44 HP", 6300],
    ["Deportivas", "RC 390 GP", "373cc • 44 HP", 6600],
    ["Deportivas", "RC 200", "199cc • 25 HP", 4400],
    ["Deportivas", "RC 125", "124cc • 15 HP", 4900],
    ["Adventure", "1290 Super Adventure R", "1301cc • 160 HP", 21800],
    ["Adventure", "1290 Super Adventure S", "1301cc • 160 HP", 21200],
    ["Adventure", "890 Adventure R", "889cc • 105 HP", 15600],
    ["Adventure", "890 Adventure", "889cc • 105 HP", 14200],
    ["Adventure", "790 Adventure", "799cc • 95 HP", 11900],
    ["Adventure", "390 Adventure SW", "373cc • 44 HP", 7600],
    ["Adventure", "250 Adventure", "248cc • 30 HP", 5600],
    ["Doble Propósito", "690 Enduro R", "693cc • 74 HP", 12900],
    ["Doble Propósito", "500 EXC-F Six Days", "510cc • 64 HP", 12800],
    ["Doble Propósito", "350 EXC-F", "349cc • 52 HP", 11600],
    ["Doble Propósito", "450 Rally Replica", "449cc • 68 HP", 29500],
    ["Doble Propósito", "690 SMC R Supermoto", "693cc • 74 HP", 12900],
    ["Naked", "1390 Super Duke R Evo", "1350cc • 190 HP", 21500],
    ["Naked", "1390 Super Duke R", "1350cc • 190 HP", 19800],
    ["Naked", "1290 Super Duke GT", "1301cc • 175 HP", 20900],
    ["Naked", "990 Duke", "947cc • 123 HP", 14900],
    ["Naked", "890 Duke GP", "889cc • 115 HP", 12800],
    ["Naked", "790 Duke", "799cc • 105 HP", 10400],
    ["Naked", "390 Duke Gen-3", "398cc • 45 HP", 6200],
    ["Naked", "250 Duke", "249cc • 31 HP", 4600]
  ],
  Yamaha: [
    ["Superdeportivas", "YZF-R1M", "998cc • 200 HP", 27400],
    ["Superdeportivas", "YZF-R1", "998cc • 200 HP", 19200],
    ["Superdeportivas", "YZF-R6 Race", "599cc • 118 HP", 14500],
    ["Deportivas", "YZF-R7", "689cc • 73 HP", 9800],
    ["Deportivas", "YZF-R3", "321cc • 42 HP", 6100],
    ["Deportivas", "YZF-R15 V4", "155cc • 18.4 HP", 4300],
    ["Deportivas", "YZF-R15M", "155cc • 18.4 HP", 4650],
    ["Adventure", "Super Ténéré 1200 ES", "1199cc • 112 HP", 16900],
    ["Adventure", "Tracer 9 GT+", "890cc • 119 HP", 16400],
    ["Adventure", "Tracer 7 GT", "689cc • 73 HP", 10600],
    ["Doble Propósito", "Ténéré 700 World Raid", "689cc • 73 HP", 12400],
    ["Doble Propósito", "Ténéré 700 Extreme", "689cc • 73 HP", 11800],
    ["Doble Propósito", "WR450F Enduro", "450cc • 58 HP", 10200],
    ["Doble Propósito", "WR250F", "250cc • 41 HP", 8900],
    ["Doble Propósito", "XTZ 250 Lander", "249cc • 20.7 HP", 4500],
    ["Doble Propósito", "XTZ 150", "149cc • 12.3 HP", 3100],
    ["Naked", "MT-10 SP", "998cc • 166 HP", 17400],
    ["Naked", "MT-10", "998cc • 166 HP", 14600],
    ["Naked", "MT-09 SP", "890cc • 119 HP", 12200],
    ["Naked", "MT-09", "890cc • 119 HP", 10800],
    ["Naked", "MT-07", "689cc • 73 HP", 8400],
    ["Naked", "MT-03", "321cc • 42 HP", 5500],
    ["Naked", "XSR900 GP", "890cc • 119 HP", 13200],
    ["Scooters", "TMAX 560 Tech Max", "562cc • 47 HP", 14200],
    ["Scooters", "XMAX 300", "292cc • 28 HP", 6600],
    ["Scooters", "NMAX 155 Connected", "155cc • 15 HP", 4100]
  ],
  Kawasaki: [
    ["Superdeportivas", "Ninja H2R", "998cc • 310 HP", 57500],
    ["Superdeportivas", "Ninja H2 Carbon", "998cc • 231 HP", 34500],
    ["Superdeportivas", "Ninja ZX-10RR", "998cc • 204 HP", 29800],
    ["Superdeportivas", "Ninja ZX-10R KRT", "998cc • 203 HP", 19800],
    ["Deportivas", "Ninja ZX-6R", "636cc • 124 HP", 12400],
    ["Deportivas", "Ninja ZX-4RR", "399cc • 77 HP", 9900],
    ["Deportivas", "Ninja 650 KRT", "649cc • 68 HP", 8600],
    ["Deportivas", "Ninja 500 SE", "451cc • 45 HP", 6400],
    ["Adventure", "Versys 1000 SE LT+", "1043cc • 120 HP", 18900],
    ["Adventure", "Versys 650 LT", "649cc • 67 HP", 9900],
    ["Adventure", "Versys-X 300 ABS", "296cc • 39 HP", 6200],
    ["Doble Propósito", "KLR 650 Adventure", "652cc • 40 HP", 7900],
    ["Doble Propósito", "KLX 300", "292cc • 29 HP", 6100],
    ["Doble Propósito", "KLX 300SM Supermoto", "292cc • 29 HP", 6400],
    ["Doble Propósito", "KLX 230 S", "233cc • 19 HP", 4900],
    ["Naked", "Z H2 SE Supercharged", "998cc • 200 HP", 21400],
    ["Naked", "Z900 SE", "948cc • 125 HP", 11400],
    ["Naked", "Z900RS Café", "948cc • 111 HP", 12800],
    ["Naked", "Z650", "649cc • 68 HP", 7900],
    ["Naked", "Z500", "451cc • 45 HP", 5900],
    ["Naked", "Z400", "399cc • 45 HP", 5500],
    ["Custom", "Vulcan 1700 Vaquero", "1700cc • 82 HP", 18600],
    ["Custom", "Vulcan 900 Custom", "903cc • 50 HP", 9800],
    ["Custom", "Vulcan S 650", "649cc • 61 HP", 8400],
    ["Custom", "Eliminator 450", "451cc • 45 HP", 6600],
    ["Custom", "W800 Classic", "773cc • 48 HP", 10200]
  ],
  Honda: [
    ["Superdeportivas", "CBR1000RR-R Fireblade SP", "1000cc • 215 HP", 28500],
    ["Superdeportivas", "CBR1000RR-R Fireblade", "1000cc • 215 HP", 24200],
    ["Superdeportivas", "RC213V-S Street", "999cc • 215 HP", 180000],
    ["Deportivas", "CBR600RR", "599cc • 121 HP", 12900],
    ["Deportivas", "CBR650R E-Clutch", "649cc • 95 HP", 9900],
    ["Deportivas", "CBR500R", "471cc • 47 HP", 7400],
    ["Deportivas", "CBR250RR", "249cc • 41 HP", 6200],
    ["Adventure", "CRF1100L Africa Twin Adventure Sports", "1084cc • 101 HP", 19400],
    ["Adventure", "CRF1100L Africa Twin", "1084cc • 101 HP", 16200],
    ["Adventure", "XL750 Transalp", "755cc • 91 HP", 10900],
    ["Adventure", "NT1100 Touring", "1084cc • 101 HP", 15400],
    ["Adventure", "NX500", "471cc • 47 HP", 7600],
    ["Doble Propósito", "CRF450RL", "449cc • 45 HP", 10200],
    ["Doble Propósito", "CRF300L Rally", "286cc • 27 HP", 6400],
    ["Doble Propósito", "CRF300L", "286cc • 27 HP", 5600],
    ["Doble Propósito", "XR190L", "184cc • 15.6 HP", 3300],
    ["Naked", "CB1000 Hornet SP", "999cc • 155 HP", 12800],
    ["Naked", "CB1000R Black Edition", "998cc • 145 HP", 13600],
    ["Naked", "CB750 Hornet", "755cc • 91 HP", 8500],
    ["Naked", "CB650R E-Clutch", "649cc • 95 HP", 9400],
    ["Naked", "CB300R Neo Sports", "286cc • 31 HP", 5200],
    ["Scooters", "X-ADV 750", "745cc • 58 HP", 13800],
    ["Scooters", "Forza 750", "745cc • 58 HP", 12900],
    ["Scooters", "ADV 350", "330cc • 29 HP", 6800],
    ["Scooters", "PCX 160", "157cc • 15.8 HP", 3900],
    ["Custom", "Rebel 1100T DCT", "1084cc • 87 HP", 11800]
  ],
  Suzuki: [
    ["Superdeportivas", "Hayabusa GSX1300R", "1340cc • 190 HP", 19400],
    ["Superdeportivas", "GSX-R1000R", "999cc • 202 HP", 18600],
    ["Superdeportivas", "GSX-R1000", "999cc • 202 HP", 16400],
    ["Deportivas", "GSX-R750", "750cc • 148 HP", 13200],
    ["Deportivas", "GSX-R600", "599cc • 125 HP", 11900],
    ["Deportivas", "GSX-8R", "776cc • 83 HP", 9600],
    ["Deportivas", "Gixxer SF 250", "249cc • 26.5 HP", 3950],
    ["Adventure", "V-Strom 1050DE", "1037cc • 107 HP", 16200],
    ["Adventure", "V-Strom 1050", "1037cc • 107 HP", 15200],
    ["Adventure", "V-Strom 800DE", "776cc • 84 HP", 11500],
    ["Adventure", "V-Strom 800 Touring", "776cc • 84 HP", 10400],
    ["Adventure", "V-Strom 650XT", "645cc • 70 HP", 9600],
    ["Adventure", "V-Strom 250SX", "249cc • 26.5 HP", 4300],
    ["Doble Propósito", "DR650S", "644cc • 43 HP", 7200],
    ["Doble Propósito", "DR-Z400S", "398cc • 39 HP", 7100],
    ["Doble Propósito", "DR-Z400SM", "398cc • 39 HP", 7800],
    ["Naked", "GSX-S1000GX+", "999cc • 152 HP", 18400],
    ["Naked", "GSX-S1000", "999cc • 152 HP", 11900],
    ["Naked", "Katana 1000", "999cc • 152 HP", 13600],
    ["Naked", "GSX-8S", "776cc • 83 HP", 8900],
    ["Naked", "SV650 ABS", "645cc • 75 HP", 7800],
    ["Naked", "Gixxer 250 Naked", "249cc • 26.5 HP", 3650],
    ["Scooters", "Burgman 400", "400cc • 29 HP", 8600],
    ["Scooters", "Burgman Street 125EX", "124cc • 8.6 HP", 2500],
    ["Custom", "Boulevard M109R B.O.S.S.", "1783cc • 128 HP", 15800],
    ["Custom", "Boulevard C50", "805cc • 53 HP", 8900]
  ],
  Aprilia: [
    ["Superdeportivas", "RSV4 Factory 1100", "1099cc • 217 HP", 25900],
    ["Superdeportivas", "RSV4 1100", "1099cc • 217 HP", 19400],
    ["Superdeportivas", "RSV4 XTrenta Track", "1099cc • 230 HP", 52000],
    ["Deportivas", "RS 660 Extrema", "659cc • 100 HP", 13400],
    ["Deportivas", "RS 660", "659cc • 100 HP", 11600],
    ["Deportivas", "RS 457", "457cc • 47.6 HP", 6900],
    ["Deportivas", "RS 125 GP Replica", "124cc • 15 HP", 5400],
    ["Adventure", "Tuareg 660", "659cc • 80 HP", 12200],
    ["Adventure", "Tuareg 660 Dakar Podium", "659cc • 80 HP", 13100],
    ["Adventure", "Caponord 1200 Rally", "1197cc • 125 HP", 15800],
    ["Doble Propósito", "RX 125 Enduro", "124cc • 15 HP", 4200],
    ["Doble Propósito", "SX 125 Supermoto", "124cc • 15 HP", 4300],
    ["Doble Propósito", "Dorsoduro 900", "896cc • 95 HP", 11400],
    ["Naked", "Tuono V4 Factory", "1077cc • 175 HP", 19800],
    ["Naked", "Tuono V4 1100", "1077cc • 175 HP", 16400],
    ["Naked", "Tuono 660 Factory", "659cc • 100 HP", 11200],
    ["Naked", "Tuono 660", "659cc • 95 HP", 10400],
    ["Naked", "Shiver 900", "896cc • 95 HP", 9800],
    ["Naked", "Tuono 125", "124cc • 15 HP", 4900],
    ["Scooters", "SR GT 200", "174cc • 17.4 HP", 4600],
    ["Scooters", "SR GT 200 Sport", "174cc • 17.4 HP", 4800],
    ["Scooters", "SR GT 125", "124cc • 14.7 HP", 4100],
    ["Scooters", "SXR 160", "160cc • 11 HP", 2900],
    ["Custom", "Moto Guzzi V7 Stone (Grupo Piaggio)", "853cc • 65 HP", 9400],
    ["Custom", "Moto Guzzi V9 Bobber", "853cc • 65 HP", 10600],
    ["Custom", "Moto Guzzi Audace 1400", "1380cc • 96 HP", 16200]
  ],
  CFMoto: [
    ["Superdeportivas", "675SR-R Tricilíndrica", "675cc • 95 HP", 8900],
    ["Superdeportivas", "500SR Voom 4-Cilindros", "499cc • 78 HP", 7600],
    ["Deportivas", "450SR-S", "449cc • 50 HP", 6500],
    ["Deportivas", "450SR", "449cc • 47 HP", 5900],
    ["Deportivas", "300SR", "292cc • 29 HP", 4400],
    ["Deportivas", "250SR Fun", "249cc • 27.5 HP", 3800],
    ["Adventure", "800MT Explore", "799cc • 91 HP", 10600],
    ["Adventure", "800MT Touring", "799cc • 91 HP", 9900],
    ["Adventure", "800MT Sport", "799cc • 91 HP", 8900],
    ["Adventure", "700MT", "693cc • 67 HP", 7400],
    ["Adventure", "650MT", "649cc • 60 HP", 6600],
    ["Doble Propósito", "450MT Rally", "449cc • 44 HP", 6400],
    ["Doble Propósito", "800MT-X Rally", "799cc • 95 HP", 10200],
    ["Naked", "800NK Advanced", "799cc • 95 HP", 8700],
    ["Naked", "800NK Sport", "799cc • 95 HP", 7900],
    ["Naked", "675NK", "675cc • 95 HP", 7800],
    ["Naked", "450NK", "449cc • 47 HP", 5400],
    ["Naked", "300NK", "292cc • 28 HP", 3900],
    ["Naked", "250NK", "249cc • 27 HP", 3400],
    ["Naked", "700CL-X Sport", "693cc • 70 HP", 7500],
    ["Naked", "700CL-X Heritage", "693cc • 70 HP", 7100],
    ["Naked", "125NK", "124cc • 14.5 HP", 2900],
    ["Scooters", "Zeeho AE8 S+ Electric", "Eléctrico • 17 HP", 4500],
    ["Scooters", "150SC Sport Scooter", "149cc • 14.3 HP", 2800],
    ["Custom", "450CL-C Bobber", "449cc • 40 HP", 6400],
    ["Custom", "450CL-C Cruiser", "449cc • 40 HP", 6600]
  ],
  Kove: [
    ["Superdeportivas", "450RR 4-Cilindros", "443cc • 70 HP", 6900],
    ["Superdeportivas", "450RR Pro", "443cc • 70 HP", 7500],
    ["Deportivas", "321RR-S Monobrazo", "322cc • 41.5 HP", 5200],
    ["Deportivas", "321RR", "322cc • 41.5 HP", 4800],
    ["Deportivas", "250RR", "249cc • 32 HP", 4100],
    ["Adventure", "800X Pro Adventure", "799cc • 95 HP", 9800],
    ["Adventure", "800X Rally", "799cc • 95 HP", 10400],
    ["Adventure", "800X Standard", "799cc • 95 HP", 8900],
    ["Adventure", "510X Adventure", "498cc • 47.6 HP", 6800],
    ["Adventure", "500X Classic", "471cc • 47 HP", 6200],
    ["Doble Propósito", "450 Rally Factory Edition", "449cc • 51 HP", 12900],
    ["Doble Propósito", "450 Rally Regular", "449cc • 51 HP", 9200],
    ["Doble Propósito", "MX250 Motocross", "249cc • 37 HP", 6400],
    ["Doble Propósito", "MX450", "449cc • 62 HP", 7600],
    ["Doble Propósito", "510F Scrambler", "498cc • 47.6 HP", 6500],
    ["Naked", "321R Naked", "322cc • 41.5 HP", 4500],
    ["Naked", "Cobra 321R", "322cc • 41.5 HP", 4600],
    ["Naked", "NK 125R", "124cc • 15 HP", 3200],
    ["Naked", "500F", "471cc • 47 HP", 5900],
    ["Custom", "Lancer 400 Bobber", "398cc • 38 HP", 5300]
  ],
  Morbidelli: [
    ["Superdeportivas", "F352 RR", "349cc • 41.5 HP", 5100],
    ["Deportivas", "F250 Sport", "249cc • 28 HP", 3900],
    ["Deportivas", "F125 Sport", "124cc • 14.5 HP", 3200],
    ["Adventure", "T1002VX V-Twin", "997cc • 88 HP", 9900],
    ["Adventure", "T1002V", "997cc • 88 HP", 9400],
    ["Adventure", "T502X Trail", "486cc • 47 HP", 6400],
    ["Adventure", "T352X", "349cc • 41 HP", 5300],
    ["Doble Propósito", "T250X Dual", "249cc • 24 HP", 3600],
    ["Doble Propósito", "T125X", "124cc • 14.2 HP", 2950],
    ["Naked", "M502N", "486cc • 47 HP", 5600],
    ["Naked", "N300", "298cc • 29.5 HP", 4100],
    ["Naked", "N125V", "124cc • 14.5 HP", 2850],
    ["Naked", "NR352", "349cc • 41 HP", 4700],
    ["Scooters", "SC300GT", "278cc • 26 HP", 4400],
    ["Scooters", "SC150RE", "149cc • 14 HP", 2700],
    ["Scooters", "SC125LX", "124cc • 11 HP", 2400],
    ["Custom", "C1002V Cruiser", "997cc • 88 HP", 9600],
    ["Custom", "C652V", "649cc • 56 HP", 7200],
    ["Custom", "C252V V-Twin", "249cc • 26 HP", 4200],
    ["Custom", "C125V", "124cc • 14 HP", 3100]
  ],
  Hero: [
    ["Deportivas", "Karizma XMR 210", "210cc • 25.5 HP", 3100],
    ["Deportivas", "Xtreme 200S 4V", "199cc • 19 HP", 2650],
    ["Deportivas", "Karizma CE", "210cc • 25.5 HP", 3300],
    ["Adventure", "XPulse 200T 4V", "199cc • 19 HP", 2750],
    ["Adventure", "XPulse 400 Adv", "421cc • 40 HP", 4900],
    ["Doble Propósito", "XPulse 200 4V Rally Edition", "199cc • 19 HP", 2950],
    ["Doble Propósito", "XPulse 200 4V Pro", "199cc • 19 HP", 2750],
    ["Doble Propósito", "XPulse 200 4V", "199cc • 19 HP", 2550],
    ["Naked", "Mavrick 440", "440cc • 27 HP", 3800],
    ["Naked", "Xtreme 160R 4V", "163cc • 16.9 HP", 2450],
    ["Naked", "Xtreme 125R", "124cc • 11.4 HP", 1950],
    ["Naked", "Hunk 160R", "163cc • 15 HP", 2250],
    ["Naked", "Hunk 150 XTEC", "149cc • 14.2 HP", 1990],
    ["Naked", "Ignitor 125 XTEC", "124cc • 10.7 HP", 1650],
    ["Naked", "Eco 150 TR", "149cc • 13.4 HP", 1550],
    ["Scooters", "Xoom 160 Maxi", "156cc • 14 HP", 2400],
    ["Scooters", "Xoom 110", "110cc • 8.1 HP", 1650],
    ["Scooters", "Destini 125 XTEC", "124cc • 9 HP", 1750],
    ["Scooters", "Dash 125 FI", "124cc • 9 HP", 1850],
    ["Scooters", "Pleasure+ XTEC", "110cc • 8 HP", 1550]
  ],
  Italika: [
    ["Deportivas", "Vort-X 300R", "292cc • 27 HP", 2950],
    ["Deportivas", "RT250 Sport", "250cc • 17.8 HP", 2350],
    ["Deportivas", "RT200 GP", "200cc • 15.4 HP", 1950],
    ["Adventure", "VX250 Adventure", "250cc • 24.5 HP", 2850],
    ["Adventure", "V200 Adventure", "200cc • 15 HP", 2150],
    ["Doble Propósito", "DM250X", "250cc • 17 HP", 2350],
    ["Doble Propósito", "DM250", "250cc • 16.2 HP", 2150],
    ["Doble Propósito", "DM200 Sport", "200cc • 14.8 HP", 1850],
    ["Doble Propósito", "DM150", "150cc • 12.5 HP", 1650],
    ["Naked", "Vort-X 300", "292cc • 26.8 HP", 2750],
    ["Naked", "Vort-X 250", "250cc • 20 HP", 2450],
    ["Naked", "250Z Grafito", "250cc • 17.9 HP", 2100],
    ["Naked", "200Z", "200cc • 15.5 HP", 1850],
    ["Naked", "150Z", "150cc • 14 HP", 1650],
    ["Naked", "Blackbird 250 Cafe Racer", "250cc • 19 HP", 2400],
    ["Naked", "SPTFire 250", "250cc • 16.2 HP", 1950],
    ["Scooters", "Vitalia 150", "149cc • 8.4 HP", 1750],
    ["Scooters", "Modena 175", "175cc • 10.2 HP", 1950],
    ["Scooters", "WS175 Sport", "175cc • 10.5 HP", 1850],
    ["Scooters", "D150", "150cc • 8.3 HP", 1450],
    ["Scooters", "Bit 150", "150cc • 8.5 HP", 1550],
    ["Custom", "TC250", "250cc • 17.8 HP", 2250],
    ["Custom", "TC200", "200cc • 14.5 HP", 1950],
    ["Custom", "RC200", "200cc • 15 HP", 1890]
  ],
  ZXMoto: [
    ["Superdeportivas", "820RR Corsa", "819cc • 135 HP", 11200],
    ["Superdeportivas", "820RR-S Carbon", "819cc • 140 HP", 12600],
    ["Superdeportivas", "1000RR V4 Prototype", "999cc • 195 HP", 16900],
    ["Deportivas", "500RR 4-Cilindros", "499cc • 82 HP", 7400],
    ["Deportivas", "450RR Track", "449cc • 52 HP", 6200],
    ["Deportivas", "300RR", "298cc • 34 HP", 4300],
    ["Adventure", "820X Adventure", "819cc • 115 HP", 10400],
    ["Adventure", "500X Touring", "499cc • 54 HP", 6800],
    ["Doble Propósito", "450 Rally Raid", "449cc • 50 HP", 7900],
    ["Doble Propósito", "250X Enduro", "249cc • 28 HP", 3900],
    ["Naked", "820R Streetfighter", "819cc • 130 HP", 9900],
    ["Naked", "500R HyperNaked", "499cc • 78 HP", 6600],
    ["Naked", "300R", "298cc • 34 HP", 3950],
    ["Naked", "150R Urban", "149cc • 17 HP", 2550],
    ["Scooters", "350GT MaxiScooter", "349cc • 32 HP", 5200],
    ["Scooters", "150 ADV Scooter", "149cc • 15 HP", 2950],
    ["Custom", "650C Cruiser", "649cc • 62 HP", 7200],
    ["Custom", "450C Bobber", "449cc • 44 HP", 5800]
  ]
};

function construirCatalogoCompleto() {
  const lista = [];
  let id = 1;
  Object.entries(CATALOGO_BASE).forEach(([marca, modelos]) => {
    modelos.forEach(([categoria, modelo, specs, precio]) => {
      lista.push({
        id: id++,
        marca,
        categoria,
        nombre: `${marca} ${modelo}`,
        specs,
        precio,
        stock: (id % 7) + 2,
        img: IMGS[categoria] || IMGS.Deportivas
      });
    });
  });
  return lista;
}

const DATOS_INICIALES = construirCatalogoCompleto();
let productos = JSON.parse(localStorage.getItem("punto_biker_db_364")) || DATOS_INICIALES;
let carrito = [];
let categoriaActiva = "Todas";
let paginaActual = 1;
const POR_PAGINA = 24;

function guardarDB() {
  localStorage.setItem("punto_biker_db_364", JSON.stringify(productos));
}

function inicializarFiltros() {
  document.getElementById("total-modelos-nav").innerText = productos.length;
  document.getElementById("total-modelos-inv").innerText = productos.length;

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

function resetPaginaYRender() {
  paginaActual = 1;
  renderCatalogo();
}

function filtrarCategoria(cat) {
  categoriaActiva = cat;
  paginaActual = 1;
  document.querySelectorAll("#categorias-bar button").forEach(btn => {
    btn.classList.toggle("active", btn.innerText === cat);
  });
  renderCatalogo();
}

function cambiarPagina(delta) {
  paginaActual += delta;
  renderCatalogo();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCatalogo() {
  const grid = document.getElementById("catalogo-grid");
  const info = document.getElementById("resultados-info");
  const pagBar = document.getElementById("paginacion-bar");
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
    info.innerText = "0 motocicletas encontradas";
    pagBar.innerHTML = "";
    grid.innerHTML = "<p style='grid-column:1/-1;text-align:center;color:#94a3b8;padding:2rem;'>No se encontraron motocicletas con ese criterio.</p>";
    return;
  }

  const totalPaginas = Math.ceil(filtrados.length / POR_PAGINA);
  if (paginaActual > totalPaginas) paginaActual = totalPaginas;
  const inicio = (paginaActual - 1) * POR_PAGINA;
  const visibles = filtrados.slice(inicio, inicio + POR_PAGINA);

  info.innerText = `Mostrando ${inicio + 1} - ${Math.min(inicio + POR_PAGINA, filtrados.length)} de ${filtrados.length} motocicletas disponibles`;

  grid.innerHTML = visibles.map(p => `
    <article class="card">
      <img src="${p.img}" alt="${p.nombre}" loading="lazy" />
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

  pagBar.innerHTML = totalPaginas > 1 ? `
    <button ${paginaActual === 1 ? 'disabled' : ''} onclick="cambiarPagina(-1)">← Anterior</button>
    <span>Página <strong>${paginaActual}</strong> de <strong>${totalPaginas}</strong></span>
    <button ${paginaActual === totalPaginas ? 'disabled' : ''} onclick="cambiarPagina(1)">Siguiente →</button>
  ` : "";
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
  const filtro = (document.getElementById("buscador-inv")?.value || "").toLowerCase();
  const lista = productos.filter(p =>
    p.nombre.toLowerCase().includes(filtro) ||
    p.marca.toLowerCase().includes(filtro) ||
    p.categoria.toLowerCase().includes(filtro)
  );

  tbody.innerHTML = lista.map(p => `
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

inicializarFiltros();
renderCatalogo();
renderInventario();
actualizarCarritoUI();
