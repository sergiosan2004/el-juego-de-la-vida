const COLORES = [
  { valor: '#ff6b6b', suave: '#ffe8e6' },
  { valor: '#4ecdc4', suave: '#e2f8f6' },
  { valor: '#9b6bd6', suave: '#f0e8fb' },
  { valor: '#ffd166', suave: '#fff5dc' },
  { valor: '#22c55e', suave: '#e5f8ea' },
  { valor: '#4d96ff', suave: '#e6f0ff' }
];

const BEBES = [
  { nombre: 'Maya', genero: 'Niña', piel: '#f7d9c4', pelo: '#2b1b16', corte: 'liso', personalidad: 'Le encanta moverse.' },
  { nombre: 'Leo', genero: 'Niño', piel: '#e0ac69', pelo: '#3a2418', corte: 'rizado', personalidad: 'Va siempre con calma.' },
  { nombre: 'Ada', genero: 'Niña', piel: '#c68642', pelo: '#241611', corte: 'corto', personalidad: 'Aprende paso a paso.' },
  { nombre: 'Bruno', genero: 'Niño', piel: '#ffdbac', pelo: '#5a3a20', corte: 'liso', personalidad: 'Nunca pierde una oportunidad.' },
  { nombre: 'Nia', genero: 'Niña', piel: '#8d5524', pelo: '#201410', corte: 'trenzas', personalidad: 'Va cantando por la vida.' },
  { nombre: 'Diego', genero: 'Niño', piel: '#5c3317', pelo: '#18100c', corte: 'ondulado', personalidad: 'Sigue al grupo a todas partes.' }
];

const CUALIDADES = [
  'Vas saltando a la prueba',
  'Vas andando a la prueba',
  'Tienes una oportunidad más',
  'Tienes que ir a caballito',
  'Vas corriendo a la prueba',
  'Vas de puntillas a la prueba',
  'Vas gateando a la prueba',
  'Vas muy despacio y tienes un intento más si fallas',
  'Vas en fila detrás de tu equipo',
  'Vas de la mano de un compañero',
  'Vas cantando al equipo',
  'Vas dando palmas al compás',
  'Vas caminando hacia atrás a la prueba',
  'Vas con los brazos en cruz a la prueba',
  'Vas diciendo el nombre del equipo',
  'Vas dando un paso y una vuelta a la prueba',
  'Vas muy alto, como una jirafa, a la prueba'
];

const EDADES = [0, 2, 4, 6, 8, 10, 12, 15, 18, 22];

const TITULOS = [
  'Recién nacido',
  'Primeros pasos',
  'Pequeño explorador',
  'Saltarín',
  'Amigo del grupo',
  'Maestro de los aros',
  'Aventurero valiente',
  'Capitán de equipo',
  'Maestro del juego',
  'Leyenda de la vida'
];

const PREMIOS = [
  { indice: 1, nombre: 'Guardería' },
  { indice: 2, nombre: 'Infantil' },
  { indice: 3, nombre: 'Primaria' },
  { indice: 6, nombre: 'Secundaria' },
  { indice: 8, nombre: 'Bachillerato' },
  { indice: 9, nombre: 'Universidad' }
];

const ETAPAS = [
  { pose: 'recien', rx: 30, ry: 28, cy: 58, cuerpoY: 86, cuerpoH: 24, cuerpoW: 28 },
  { pose: 'pie', rx: 27, ry: 28, cy: 52, cuerpoY: 78, cuerpoH: 28, cuerpoW: 30, manoY: 108, pieY: 132, panal: true },
  { pose: 'pie', rx: 25, ry: 26, cy: 47, cuerpoY: 72, cuerpoH: 34, cuerpoW: 30, manoY: 109, pieY: 139, pantalon: true },
  { pose: 'pie', rx: 23, ry: 24, cy: 44, cuerpoY: 68, cuerpoH: 38, cuerpoW: 30, manoY: 110, pieY: 143, pantalon: true },
  { pose: 'pie', rx: 23, ry: 24, cy: 43, cuerpoY: 67, cuerpoH: 39, cuerpoW: 30, manoY: 110, pieY: 144, pantalon: true, mochila: true },
  { pose: 'pie', rx: 22, ry: 23, cy: 42, cuerpoY: 65, cuerpoH: 41, cuerpoW: 30, manoY: 111, pieY: 146, pantalon: true, mochila: true },
  { pose: 'pie', rx: 21, ry: 22, cy: 40, cuerpoY: 63, cuerpoH: 43, cuerpoW: 31, manoY: 112, pieY: 148, pantalon: true, mochila: true },
  { pose: 'pie', rx: 20, ry: 21, cy: 39, cuerpoY: 61, cuerpoH: 45, cuerpoW: 31, manoY: 113, pieY: 150, chaqueta: true, zapatos: true },
  { pose: 'pie', rx: 18, ry: 19, cy: 37, cuerpoY: 58, cuerpoH: 48, cuerpoW: 32, manoY: 114, pieY: 153, chaqueta: true, zapatos: true },
  { pose: 'pie', rx: 18, ry: 19, cy: 36, cuerpoY: 57, cuerpoH: 49, cuerpoW: 32, manoY: 115, pieY: 154, chaqueta: true, zapatos: true, gorro: true }
];

const PRUEBAS = [
  { titulo: 'Aros sin bordes', descripcion: 'El animador sujetará un aro y cada niño deberá pasar a través de él dos veces sin tocar sus bordes.' },
  { titulo: 'Saltos en los aros', descripcion: 'Se colocarán un mínimo de 8 aros en el suelo, uno detrás de otro. Cada niño deberá saltar dentro de cada aro con los dos pies juntos, sin pisar fuera de ellos ni los bordes, hasta llegar al final del recorrido.' },
  { titulo: 'A ciegas', descripcion: 'Los niños se organizarán por parejas. Uno de ellos llevará los ojos vendados y tendrá que realizar un recorrido en zigzag entre las columnas, mientras su compañero le guía.' },
  { titulo: '¿Mata pollos?', descripcion: 'Los niños se colocarán en fila, mientras el animador se sitúa delante con un balón. Este deberá lanzar el balón hacia ellos y los niños tendrán que esquivarlo evitando que les golpee.' },
  { titulo: 'Gol desde lejos', descripcion: 'El animador marcará una distancia desde la que los niños deberán intentar marcar un gol. Cada niño tendrá que chutar el balón desde la posición indicada e intentar introducirlo en la portería.' },
  { titulo: 'Cadena de matemáticas', descripcion: 'Los niños se colocarán en fila. El animador irá diciendo diferentes operaciones matemáticas y, por turnos, cada niño tendrá que resolver una operación en voz alta. El objetivo es conseguir resolver correctamente las operaciones propuestas.' },
  { titulo: 'Carrera de gusanos', descripcion: 'Los niños se colocarán en fila, separados entre sí y con las piernas abiertas. El último de la fila tendrá que pasar por debajo de las piernas de sus compañeros hasta llegar al principio. Se repetirá el proceso hasta que todos hayan pasado dos veces.' },
  { titulo: 'Por arriba y por abajo', descripcion: 'Los niños formarán una fila india y tendrán que pasarse un balón desde el primero hasta el último. El primer niño lo pasará por encima de su cabeza, el siguiente por debajo de sus piernas y así sucesivamente, alternando los movimientos hasta que el balón llegue al final de la fila.' },
  { titulo: 'Bolos humanos', descripcion: 'Se colocarán varias botellas o conos a modo de bolos, formando un triángulo. Los niños deberán situarse detrás de una línea marcada y lanzar un balón rodando por el suelo para intentar derribar todos los objetos posibles.' },
  { titulo: 'Globo VA', descripcion: 'Los niños tendrán que mantener un globo en el aire durante 30 segundos sin dejar que toque el suelo. Podrán golpearlo con las manos para evitar que caiga y tendrán que colaborar para mantenerlo flotando.' },
  { titulo: 'Bota Bota', descripcion: 'El niño tendrá que lanzar una pelota contra una pared. Antes de comenzar, el animador indicará cuántos botes debe dar la pelota antes de tocar la pared. El grupo tendrá que conseguir realizar correctamente el reto tres veces para superar la prueba.' },
  { titulo: 'Cadena de palabras', descripcion: 'Los niños se colocarán en círculo o en fila. El primero dirá una palabra y el siguiente tendrá que decir otra que comience por la última sílaba de la palabra anterior. Se continuará siguiendo esta regla hasta que todos hayan participado, intentando no repetir palabras.' },
  { titulo: 'Tierra, aire y mar', descripcion: 'Los niños tendrán que superar durante un minuto la prueba de tierra, aire y mar.' },
  { titulo: 'Palabra', descripcion: 'El animador dirá una palabra y los niños tendrán que representarla utilizando sus cuerpos.' },
  { titulo: 'Física', descripcion: 'Los niños tendrán que elegir una columna de la tabla periódica y tendrán que construir palabras.' }
];

const INICIOS = [2, 5, 7, 1, 8, 3];
const TOTAL_PRUEBAS = 10;
const TOTAL_INTENTOS = PRUEBAS.length;
const TRAZO = 'stroke="#33425e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';

function anterior(numero, pasos) {
  return ((numero - 1 - pasos + CUALIDADES.length) % CUALIDADES.length) + 1;
}

function secuenciaEquipo(inicio) {
  const salta = new Set([anterior(inicio, 1), anterior(inicio, 2)]);
  const resultado = [];
  for (let i = 0; i < CUALIDADES.length; i++) {
    const numero = ((inicio - 1 + i) % CUALIDADES.length) + 1;
    if (!salta.has(numero)) resultado.push(numero);
  }
  return resultado;
}

const SECUENCIAS = INICIOS.map(secuenciaEquipo);
const PASOS_PRUEBA = [1, 2, 4, 7, 8, 11, 13, 14];

function ordenesValidas(lista) {
  for (const orden of lista) {
    if (new Set(orden).size !== TOTAL_INTENTOS) return false;
  }
  for (let r = 0; r < TOTAL_INTENTOS; r++) {
    const conteo = new Map();
    for (const orden of lista) {
      const id = orden[r];
      const cantidad = (conteo.get(id) || 0) + 1;
      if (cantidad > 2) return false;
      conteo.set(id, cantidad);
    }
  }
  return true;
}

function generarOrdenes() {
  for (let intento = 0; intento < 400; intento++) {
    const inicios = [];
    const usosInicio = new Map();
    while (inicios.length < COLORES.length) {
      const inicio = Math.floor(Math.random() * TOTAL_INTENTOS);
      const cantidad = usosInicio.get(inicio) || 0;
      if (cantidad < 2) {
        usosInicio.set(inicio, cantidad + 1);
        inicios.push(inicio);
      }
    }
    const lista = inicios.map(inicio => {
      const paso = PASOS_PRUEBA[Math.floor(Math.random() * PASOS_PRUEBA.length)];
      return PRUEBAS.map((_, r) => (inicio + r * paso) % TOTAL_INTENTOS);
    });
    if (ordenesValidas(lista)) return lista;
  }
  return [0, 0, 1, 1, 2, 2].map(inicio => PRUEBAS.map((_, r) => (inicio + r) % TOTAL_INTENTOS));
}

function cantidadEnCurso(id, excluir) {
  return pruebas.reduce((total, actual, equipo) => total + (equipo !== excluir && actual === id ? 1 : 0), 0);
}

function elegirSiguientePrueba(equipo) {
  const orden = ordenes[equipo];
  const yaUsadas = usadas[equipo];
  const actual = pruebas[equipo];
  const desde = Math.max(0, orden.indexOf(actual) + 1);
  let mejor = null;
  let mejorCuenta = Infinity;

  for (let i = desde; i < orden.length; i++) {
    const id = orden[i];
    if (yaUsadas.has(id)) continue;
    const cuenta = cantidadEnCurso(id, equipo);
    if (cuenta >= 2) continue;
    if (cuenta < mejorCuenta) {
      mejorCuenta = cuenta;
      mejor = id;
    }
    if (cuenta === 0) break;
  }

  if (mejor === null) {
    for (const id of orden) {
      if (yaUsadas.has(id)) continue;
      const cuenta = cantidadEnCurso(id, equipo);
      if (cuenta < mejorCuenta) {
        mejorCuenta = cuenta;
        mejor = id;
      }
    }
  }

  return mejor;
}

function liberarPrueba(id, equipo, visitados) {
  if (visitados.has(id)) return false;
  visitados.add(id);
  for (let otro = 0; otro < pruebas.length; otro++) {
    if (otro === equipo || pruebas[otro] !== id) continue;
    const alternativa = elegirSiguientePrueba(otro);
    if (alternativa === null || alternativa === id) continue;
    if (cantidadEnCurso(alternativa, otro) >= 2) {
      if (!liberarPrueba(alternativa, otro, visitados)) continue;
    }
    pruebas[otro] = alternativa;
    usadas[otro].add(alternativa);
    return true;
  }
  return false;
}

function candidatosSiguientes(equipo) {
  const preferido = elegirSiguientePrueba(equipo);
  const candidatos = ordenes[equipo]
    .filter(id => !usadas[equipo].has(id))
    .map(id => ({
      id,
      cuenta: cantidadEnCurso(id, equipo),
      finalizados: pruebas.reduce((total, actual, otro) => total + (otro !== equipo && actual === id && edades[otro] >= EDADES.length - 1 ? 1 : 0), 0)
    }))
    .filter(opcion => opcion.cuenta < 2)
    .sort((a, b) => a.cuenta - b.cuenta || a.finalizados - b.finalizados || (a.id === preferido ? -1 : 0) - (b.id === preferido ? -1 : 0))
    .map(opcion => opcion.id);

  if (candidatos.length) return candidatos;
  return PRUEBAS.map((_, id) => id)
    .filter(id => !usadas[equipo].has(id) && cantidadEnCurso(id, equipo) < 2);
}

function moverPrueba(equipo) {
  const candidatos = candidatosSiguientes(equipo);
  for (const siguiente of candidatos) {
    while (cantidadEnCurso(siguiente, equipo) >= 2) {
      if (!liberarPrueba(siguiente, equipo, new Set())) break;
    }
    if (cantidadEnCurso(siguiente, equipo) >= 2) continue;
    pruebas[equipo] = siguiente;
    usadas[equipo].add(siguiente);
    return true;
  }
  return false;
}

let repartido = false;
let asignaciones = [];
let ordenes = [];
let usadas = [];
let pruebas = [0, 0, 0, 0, 0, 0];
let edades = [0, 0, 0, 0, 0, 0];

function redondear(valor) {
  return Math.round(valor * 10) / 10;
}

function miembro(d, grosor) {
  return `<path d="${d}" fill="none" stroke="#33425e" stroke-width="${redondear(grosor + 4)}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="var(--piel)" stroke-width="${redondear(grosor)}" stroke-linecap="round" stroke-linejoin="round"/>`;
}

function peloSVG(corte, rx, ry, cy) {
  const x = 70;
  const top = cy - ry;

  if (corte === 'rizado') {
    return [-0.72, -0.36, 0, 0.36, 0.72].map((offset, i) => {
      const cx = redondear(x + offset * rx);
      const yy = redondear(top + ry * (i % 2 === 0 ? 0.34 : 0.24));
      return `<ellipse cx="${cx}" cy="${yy}" rx="${redondear(rx * 0.3)}" ry="${redondear(ry * 0.32)}" fill="var(--pelo)" ${TRAZO}/>`;
    }).join('') + `<path d="M ${redondear(x - rx * 0.7)} ${redondear(top + ry * 0.5)} Q ${x} ${redondear(top + ry * 0.2)} ${redondear(x + rx * 0.7)} ${redondear(top + ry * 0.5)}" fill="none" stroke="var(--pelo)" stroke-width="4" stroke-linecap="round"/>`;
  }

  if (corte === 'corto') {
    return `<path d="M ${redondear(x - rx)} ${redondear(cy - ry * 0.05)} Q ${redondear(x - rx)} ${redondear(top - 5)} ${x} ${redondear(top - 3)} Q ${redondear(x + rx)} ${redondear(top - 5)} ${redondear(x + rx)} ${redondear(cy - ry * 0.05)} Q ${redondear(x + rx * 0.6)} ${redondear(top + ry * 0.45)} ${x} ${redondear(top + ry * 0.45)} Q ${redondear(x - rx * 0.6)} ${redondear(top + ry * 0.45)} ${redondear(x - rx)} ${redondear(cy - ry * 0.05)} Z" fill="var(--pelo)" ${TRAZO}/><path d="M ${redondear(x - rx * 0.5)} ${redondear(top + ry * 0.1)} Q ${x} ${redondear(top - 1)} ${redondear(x + rx * 0.5)} ${redondear(top + ry * 0.12)}" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.25" stroke-linecap="round"/>`;
  }

  if (corte === 'trenzas') {
    return `<path d="M ${redondear(x - rx)} ${redondear(cy - ry * 0.05)} Q ${redondear(x - rx)} ${redondear(top - 6)} ${x} ${redondear(top - 4)} Q ${redondear(x + rx)} ${redondear(top - 6)} ${redondear(x + rx)} ${redondear(cy - ry * 0.05)} Q ${redondear(x + rx * 0.65)} ${redondear(top + ry * 0.42)} ${x} ${redondear(top + ry * 0.42)} Q ${redondear(x - rx * 0.65)} ${redondear(top + ry * 0.42)} ${redondear(x - rx)} ${redondear(cy - ry * 0.05)} Z" fill="var(--pelo)" ${TRAZO}/><ellipse cx="${redondear(x - rx - 2)}" cy="${redondear(cy + ry * 0.18)}" rx="${redondear(rx * 0.26)}" ry="${redondear(ry * 0.34)}" fill="var(--pelo)" ${TRAZO}/><ellipse cx="${redondear(x + rx + 2)}" cy="${redondear(cy + ry * 0.18)}" rx="${redondear(rx * 0.26)}" ry="${redondear(ry * 0.34)}" fill="var(--pelo)" ${TRAZO}/><path d="M ${redondear(x - rx - 5)} ${redondear(cy + ry * 0.36)} L ${redondear(x - rx + 1)} ${redondear(cy + ry * 0.4)} M ${redondear(x + rx - 1)} ${redondear(cy + ry * 0.4)} L ${redondear(x + rx + 5)} ${redondear(cy + ry * 0.36)}" stroke="#f5b942" stroke-width="3" stroke-linecap="round"/>`;
  }

  if (corte === 'ondulado') {
    return `<path d="M ${redondear(x - rx)} ${redondear(cy - ry * 0.05)} Q ${redondear(x - rx)} ${redondear(top - 5)} ${redondear(x - rx * 0.45)} ${redondear(top - 3)} Q ${x} ${redondear(top - 7)} ${redondear(x + rx * 0.45)} ${redondear(top - 2)} Q ${redondear(x + rx)} ${redondear(top - 4)} ${redondear(x + rx)} ${redondear(cy - ry * 0.05)} Q ${redondear(x + rx * 0.8)} ${redondear(top + ry * 0.3)} ${redondear(x + rx * 0.5)} ${redondear(top + ry * 0.48)} Q ${x} ${redondear(top + ry * 0.25)} ${redondear(x - rx * 0.5)} ${redondear(top + ry * 0.48)} Q ${redondear(x - rx * 0.8)} ${redondear(top + ry * 0.3)} ${redondear(x - rx)} ${redondear(cy - ry * 0.05)} Z" fill="var(--pelo)" ${TRAZO}/>`;
  }

  return `<path d="M ${redondear(x - rx)} ${redondear(cy - ry * 0.05)} Q ${redondear(x - rx + 1)} ${redondear(top - 7)} ${x} ${redondear(top - 5)} Q ${redondear(x + rx - 1)} ${redondear(top - 7)} ${redondear(x + rx)} ${redondear(cy - ry * 0.05)} Q ${redondear(x + rx * 0.68)} ${redondear(top + ry * 0.4)} ${x} ${redondear(top + ry * 0.4)} Q ${redondear(x - rx * 0.68)} ${redondear(top + ry * 0.4)} ${redondear(x - rx)} ${redondear(cy - ry * 0.05)} Z" fill="var(--pelo)" ${TRAZO}/><path d="M ${redondear(x - rx * 0.55)} ${redondear(top + ry * 0.1)} Q ${x} ${redondear(top - 2)} ${redondear(x + rx * 0.55)} ${redondear(top + ry * 0.12)}" fill="none" stroke="#ffffff" stroke-width="2" opacity="0.24" stroke-linecap="round"/>`;
}

function caraSVG(rx, ry, cy, indice) {
  const x = 70;
  const ojoX = redondear(rx * 0.34);
  const ojoY = redondear(cy + ry * 0.06);
  const bocaY = redondear(cy + ry * 0.38);

  if (indice === 0) {
    return `<ellipse cx="${redondear(x - rx * 0.62)}" cy="${redondear(cy + ry * 0.32)}" rx="${redondear(rx * 0.2)}" ry="${redondear(ry * 0.12)}" fill="#ef8a9a" opacity="0.4"/><ellipse cx="${redondear(x + rx * 0.62)}" cy="${redondear(cy + ry * 0.32)}" rx="${redondear(rx * 0.2)}" ry="${redondear(ry * 0.12)}" fill="#ef8a9a" opacity="0.4"/><path d="M ${redondear(x - ojoX - 3)} ${ojoY} Q ${redondear(x - ojoX)} ${ojoY + 3} ${redondear(x - ojoX + 3)} ${ojoY}" fill="none" stroke="#253044" stroke-width="2" stroke-linecap="round"/><path d="M ${redondear(x + ojoX - 3)} ${ojoY} Q ${redondear(x + ojoX)} ${ojoY + 3} ${redondear(x + ojoX + 3)} ${ojoY}" fill="none" stroke="#253044" stroke-width="2" stroke-linecap="round"/><path d="M ${redondear(x - rx * 0.16)} ${bocaY} Q ${x} ${redondear(bocaY + ry * 0.16)} ${redondear(x + rx * 0.16)} ${bocaY}" fill="none" stroke="#8a4d4d" stroke-width="2" stroke-linecap="round"/>`;
  }

  const ojoRx = redondear(rx * 0.13);
  const ojoRy = redondear(ry * 0.15);
  return `<ellipse cx="${redondear(x - rx * 0.62)}" cy="${redondear(cy + ry * 0.34)}" rx="${redondear(rx * 0.2)}" ry="${redondear(ry * 0.12)}" fill="#ef8a9a" opacity="0.38"/><ellipse cx="${redondear(x + rx * 0.62)}" cy="${redondear(cy + ry * 0.34)}" rx="${redondear(rx * 0.2)}" ry="${redondear(ry * 0.12)}" fill="#ef8a9a" opacity="0.38"/><ellipse cx="${redondear(x - ojoX)}" cy="${ojoY}" rx="${ojoRx}" ry="${ojoRy}" fill="#ffffff" ${TRAZO}/><ellipse cx="${redondear(x + ojoX)}" cy="${ojoY}" rx="${ojoRx}" ry="${ojoRy}" fill="#ffffff" ${TRAZO}/><circle cx="${redondear(x - ojoX)}" cy="${redondear(ojoY + 1)}" r="${redondear(rx * 0.07)}" fill="#253044"/><circle cx="${redondear(x + ojoX)}" cy="${redondear(ojoY + 1)}" r="${redondear(rx * 0.07)}" fill="#253044"/><circle cx="${redondear(x - ojoX - rx * 0.03)}" cy="${redondear(ojoY - ry * 0.03)}" r="${redondear(rx * 0.025)}" fill="#ffffff"/><circle cx="${redondear(x + ojoX - rx * 0.03)}" cy="${redondear(ojoY - ry * 0.03)}" r="${redondear(rx * 0.025)}" fill="#ffffff"/><path d="M ${redondear(x - ojoX - rx * 0.12)} ${redondear(ojoY - ry * 0.25)} Q ${redondear(x - ojoX)} ${redondear(ojoY - ry * 0.34)} ${redondear(x - ojoX + rx * 0.12)} ${redondear(ojoY - ry * 0.25)}" fill="none" stroke="var(--pelo)" stroke-width="2" stroke-linecap="round"/><path d="M ${redondear(x + ojoX - rx * 0.12)} ${redondear(ojoY - ry * 0.25)} Q ${redondear(x + ojoX)} ${redondear(ojoY - ry * 0.34)} ${redondear(x + ojoX + rx * 0.12)} ${redondear(ojoY - ry * 0.25)}" fill="none" stroke="var(--pelo)" stroke-width="2" stroke-linecap="round"/><path d="M ${x} ${redondear(cy + ry * 0.2)} Q ${redondear(x + rx * 0.08)} ${redondear(cy + ry * 0.3)} ${x} ${redondear(cy + ry * 0.33)}" fill="none" stroke="#b17878" stroke-width="1.8" stroke-linecap="round"/><path d="M ${redondear(x - rx * 0.22)} ${bocaY} Q ${x} ${redondear(bocaY + ry * 0.2)} ${redondear(x + rx * 0.22)} ${bocaY}" fill="none" stroke="#8a4d4d" stroke-width="2.2" stroke-linecap="round"/>`;
}

function cabezaSVG(bebe, rx, ry, cy, indice, conGorro) {
  const x = 70;
  const gorro = conGorro
    ? `<path d="M ${redondear(x - rx * 1.45)} ${redondear(cy - ry * 0.42)} L ${x} ${redondear(cy - ry * 1.35)} L ${redondear(x + rx * 1.45)} ${redondear(cy - ry * 0.42)} L ${x} ${redondear(cy - ry * 0.02)} Z" fill="#233049" ${TRAZO}/><path d="M ${x} ${redondear(cy - ry * 0.05)} L ${x} ${redondear(cy + ry * 0.8)}" stroke="#f5b942" stroke-width="2.5" stroke-linecap="round"/>`
    : '';
  return `<ellipse cx="${redondear(x - rx - 1)}" cy="${redondear(cy + ry * 0.12)}" rx="${redondear(rx * 0.17)}" ry="${redondear(ry * 0.23)}" fill="var(--piel)" ${TRAZO}/><ellipse cx="${redondear(x + rx + 1)}" cy="${redondear(cy + ry * 0.12)}" rx="${redondear(rx * 0.17)}" ry="${redondear(ry * 0.23)}" fill="var(--piel)" ${TRAZO}/><ellipse cx="${x}" cy="${redondear(cy)}" rx="${redondear(rx)}" ry="${redondear(ry)}" fill="var(--piel)" ${TRAZO}/><ellipse cx="${redondear(x - rx * 0.3)}" cy="${redondear(cy - ry * 0.4)}" rx="${redondear(rx * 0.45)}" ry="${redondear(ry * 0.28)}" fill="#ffffff" opacity="0.13"/>${peloSVG(bebe.corte, rx, ry, cy)}${caraSVG(rx, ry, cy, indice)}${gorro}`;
}

function figuraRecien(bebe, color, indice) {
  const etapa = ETAPAS[indice];
  const sombra = `<ellipse cx="70" cy="158" rx="34" ry="5" fill="#243047" opacity="0.1"/>`;
  const manta = `<path d="M 43 96 Q 70 108 97 96 L 94 116 Q 70 126 46 116 Z" fill="${color}" opacity="0.28"/>`;
  const cuerpo = `<rect x="56" y="${etapa.cuerpoY}" width="${etapa.cuerpoW}" height="${etapa.cuerpoH}" rx="13" fill="#ffffff" ${TRAZO}/><path d="M 56 100 Q 70 108 84 100" fill="none" stroke="#b9cadc" stroke-width="2"/>`;
  const brazos = miembro('M 58 90 Q 45 85 49 72', 7) + miembro('M 82 90 Q 95 85 91 72', 7);
  const piernas = miembro('M 63 108 Q 52 116 60 124', 8) + miembro('M 77 108 Q 88 116 80 124', 8);
  const manos = `<circle cx="49" cy="72" r="5" fill="var(--piel)" ${TRAZO}/><circle cx="91" cy="72" r="5" fill="var(--piel)" ${TRAZO}/><ellipse cx="60" cy="125" rx="6" ry="4" fill="var(--piel)" ${TRAZO}/><ellipse cx="80" cy="125" rx="6" ry="4" fill="var(--piel)" ${TRAZO}/>`;
  return `${sombra}${manta}${brazos}${piernas}${manos}${cuerpo}${cabezaSVG(bebe, etapa.rx, etapa.ry, etapa.cy, indice, false)}`;
}

function figuraPie(bebe, color, indice) {
  const etapa = ETAPAS[indice];
  const x = 70;
  const izq = x - etapa.cuerpoW / 2;
  const der = x + etapa.cuerpoW / 2;
  const brazoY = etapa.cuerpoY + 7;
  const piernaY = etapa.cuerpoY + etapa.cuerpoH - 2;
  const manoIzqX = redondear(izq - 12);
  const manoDerX = redondear(der + 12);
  const pieIzqX = x - 8;
  const pieDerX = x + 8;
  const grosor = redondear(Math.max(7, etapa.rx * 0.3));
  const sombra = `<ellipse cx="70" cy="160" rx="${redondear(16 + indice)}" ry="5" fill="#243047" opacity="0.1"/>`;
  const mochila = etapa.mochila ? `<rect x="${redondear(der - 2)}" y="${redondear(etapa.cuerpoY + 3)}" width="13" height="${redondear(etapa.cuerpoH * 0.62)}" rx="6" fill="#f5b942" ${TRAZO}/><path d="M ${redondear(izq + 5)} ${redondear(etapa.cuerpoY + 2)} L ${redondear(der - 4)} ${redondear(etapa.cuerpoY + 18)}" stroke="#f5b942" stroke-width="3" fill="none" stroke-linecap="round"/>` : '';
  const brazos = miembro(`M ${redondear(izq + 2)} ${redondear(brazoY)} Q ${redondear(manoIzqX - 2)} ${redondear(brazoY + 16)} ${manoIzqX} ${etapa.manoY}`, grosor) + miembro(`M ${redondear(der - 2)} ${redondear(brazoY)} Q ${redondear(manoDerX + 2)} ${redondear(brazoY + 16)} ${manoDerX} ${etapa.manoY}`, grosor);
  const piernas = miembro(`M ${x - 6} ${redondear(piernaY)} L ${pieIzqX} ${etapa.pieY}`, redondear(grosor + 2)) + miembro(`M ${x + 6} ${redondear(piernaY)} L ${pieDerX} ${etapa.pieY}`, redondear(grosor + 2));
  const manos = `<circle cx="${manoIzqX}" cy="${etapa.manoY}" r="${redondear(grosor * 0.55)}" fill="var(--piel)" ${TRAZO}/><circle cx="${manoDerX}" cy="${etapa.manoY}" r="${redondear(grosor * 0.55)}" fill="var(--piel)" ${TRAZO}/>`;
  const pies = etapa.zapatos
    ? `<ellipse cx="${pieIzqX}" cy="${etapa.pieY + 2}" rx="7" ry="4.5" fill="#34495e" ${TRAZO}/><ellipse cx="${pieDerX}" cy="${etapa.pieY + 2}" rx="7" ry="4.5" fill="#34495e" ${TRAZO}/>`
    : `<ellipse cx="${pieIzqX}" cy="${etapa.pieY + 2}" rx="${redondear(etapa.rx * 0.26)}" ry="${redondear(etapa.ry * 0.16)}" fill="var(--piel)" ${TRAZO}/><ellipse cx="${pieDerX}" cy="${etapa.pieY + 2}" rx="${redondear(etapa.rx * 0.26)}" ry="${redondear(etapa.ry * 0.16)}" fill="var(--piel)" ${TRAZO}/>`;
  const ropa = etapa.panal ? '#ffffff' : color;
  const torso = `<rect x="${redondear(izq)}" y="${redondear(etapa.cuerpoY)}" width="${redondear(etapa.cuerpoW)}" height="${redondear(etapa.cuerpoH)}" rx="12" fill="${ropa}" ${TRAZO}/><circle cx="${redondear(izq + 1)}" cy="${redondear(brazoY + 2)}" r="${redondear(grosor * 0.75)}" fill="${ropa}" ${TRAZO}/><circle cx="${redondear(der - 1)}" cy="${redondear(brazoY + 2)}" r="${redondear(grosor * 0.75)}" fill="${ropa}" ${TRAZO}/><path d="M ${redondear(x - 7)} ${redondear(etapa.cuerpoY + 2)} L ${x} ${redondear(etapa.cuerpoY + 11)} L ${redondear(x + 7)} ${redondear(etapa.cuerpoY + 2)}" fill="none" stroke="#ffffff" stroke-width="2.5" opacity="0.85" stroke-linecap="round"/>`;
  const panal = etapa.panal ? `<path d="M ${redondear(izq - 1)} ${redondear(etapa.cuerpoY + etapa.cuerpoH - 8)} Q 70 ${redondear(etapa.cuerpoY + etapa.cuerpoH + 5)} ${redondear(der + 1)} ${redondear(etapa.cuerpoY + etapa.cuerpoH - 8)} L ${redondear(der)} ${redondear(etapa.cuerpoY + etapa.cuerpoH + 2)} Q 70 ${redondear(etapa.cuerpoY + etapa.cuerpoH + 10)} ${redondear(izq)} ${redondear(etapa.cuerpoY + etapa.cuerpoH + 2)} Z" fill="#ffffff" ${TRAZO}/>` : '';
  const pantalon = etapa.pantalon ? `<path d="M ${redondear(izq)} ${redondear(etapa.cuerpoY + etapa.cuerpoH - 9)} L ${redondear(der)} ${redondear(etapa.cuerpoY + etapa.cuerpoH - 9)} L ${redondear(der - 1)} ${redondear(etapa.cuerpoY + etapa.cuerpoH + 6)} L 64 ${redondear(etapa.cuerpoY + etapa.cuerpoH + 2)} L 60 ${redondear(etapa.cuerpoY + etapa.cuerpoH + 2)} L ${redondear(izq + 1)} ${redondear(etapa.cuerpoY + etapa.cuerpoH + 6)} Z" fill="#34506f" ${TRAZO}/>` : '';
  const chaqueta = etapa.chaqueta ? `<path d="M ${redondear(izq)} ${redondear(etapa.cuerpoY + 1)} L 70 ${redondear(etapa.cuerpoY + 18)} L ${redondear(der)} ${redondear(etapa.cuerpoY + 1)} L ${redondear(der)} ${redondear(etapa.cuerpoY + etapa.cuerpoH - 4)} L ${redondear(izq)} ${redondear(etapa.cuerpoY + etapa.cuerpoH - 4)} Z" fill="#3c5a78" ${TRAZO}/><path d="M 70 ${redondear(etapa.cuerpoY + 18)} L 70 ${redondear(etapa.cuerpoY + etapa.cuerpoH - 6)}" stroke="#dbe7f3" stroke-width="2"/>` : '';
  return `${sombra}${mochila}${brazos}${piernas}${pies}${manos}${torso}${panal}${pantalon}${chaqueta}${cabezaSVG(bebe, etapa.rx, etapa.ry, etapa.cy, indice, Boolean(etapa.gorro))}`;
}

function babySvg(bebe, indice, color) {
  const indiceGrafico = Math.min(indice, ETAPAS.length - 1);
  const contenido = ETAPAS[indiceGrafico].pose === 'recien'
    ? figuraRecien(bebe, color, indiceGrafico)
    : figuraPie(bebe, color, indiceGrafico);
  return `<svg class="bebe-svg" viewBox="0 0 140 170" style="--piel:${bebe.piel};--pelo:${bebe.pelo}" role="img" aria-label="${bebe.nombre}, ${EDADES[indice]} años">${contenido}</svg>`;
}

function puntosProgreso(paso) {
  return EDADES.map((_, i) => {
    const clase = i < paso ? 'hecho' : (i === paso ? 'actual' : '');
    return `<span class="punto ${clase}"></span>`;
  }).join('');
}

function premiosConseguidos(pasoEdad) {
  return PREMIOS.filter(premio => premio.indice <= pasoEdad).map(premio => premio.nombre);
}

function contenidoBebe(bebe, equipo) {
  const idPrueba = pruebas[equipo];
  const numeroPrueba = usadas[equipo].size;
  const pasoEdad = edades[equipo];
  const edad = EDADES[pasoEdad];
  const titulo = TITULOS[pasoEdad];
  const premios = premiosConseguidos(pasoEdad);
  const premio = premios[premios.length - 1];
  const cualidad = CUALIDADES[SECUENCIAS[equipo][numeroPrueba - 1] - 1];
  const datos = `<div class="datos"><div><strong class="nombre">${bebe.nombre}</strong><span class="genero">${bebe.genero}</span><span class="titulo">${titulo} · ${pasoEdad + 1}/${TITULOS.length}</span></div><span class="edad">${edad} años</span></div>`;
  const lineaPremios = premio ? `<p class="premios">Has conseguido: ${premio}</p>` : '';

  const terminado = edades[equipo] >= EDADES.length - 1 || numeroPrueba >= TOTAL_INTENTOS;
  if (terminado) {
    const mensaje = edades[equipo] >= EDADES.length - 1
      ? `¡Terminó las ${TOTAL_PRUEBAS} pruebas!`
      : `Se acabaron las pruebas. Superó ${edades[equipo]} de ${TOTAL_PRUEBAS}.`;
    return `${datos}${lineaPremios}<div class="final">${mensaje} Edad final: ${edad} años. Título final: ${titulo}. Premios: ${premios.join(', ')}.</div><div class="progreso">${puntosProgreso(pasoEdad)}</div>`;
  }

  const prueba = PRUEBAS[idPrueba];
  return `${datos}${lineaPremios}
    <div class="cualidades">
      <span class="rotulo">Ahora vas…</span>
      <span class="chips"><span>${cualidad}</span></span>
    </div>
    <div class="prueba">
      <strong>Intento ${numeroPrueba} · ${prueba.titulo}</strong>
      <div class="botones-prueba">
        <button class="hecho" data-accion="pasar" data-equipo="${equipo}">Prueba hecha · crece</button>
        <button class="fallo" data-accion="fallar" data-equipo="${equipo}">No pasó · siguiente prueba</button>
      </div>
    </div>
    <div class="progreso">${puntosProgreso(pasoEdad)}</div>`;
}

function render() {
  const tablero = document.getElementById('tablero');
  tablero.innerHTML = '';

  COLORES.forEach((color, equipo) => {
    const columna = document.createElement('section');
    columna.className = 'equipo';
    columna.style.setProperty('--color', color.valor);
    columna.style.setProperty('--suave', color.suave);
    columna.innerHTML = `<span class="grupo">GRUPO ${equipo + 1}</span><div class="figura"></div><div class="contenido"></div>`;
    tablero.appendChild(columna);

    const figura = columna.querySelector('.figura');
    const contenido = columna.querySelector('.contenido');

    if (!repartido) {
      figura.innerHTML = babySvg(BEBES[equipo], 0, color.valor);
      contenido.innerHTML = '<div class="espera">Pulsa <strong>Repartir al azar</strong> para conocer a tu bebé.</div>';
      return;
    }

    const bebe = asignaciones[equipo];
    figura.innerHTML = babySvg(bebe, edades[equipo], color.valor);
    contenido.innerHTML = contenidoBebe(bebe, equipo);
    contenido.querySelectorAll('button[data-accion]').forEach(boton => {
      boton.addEventListener('click', () => {
        const equipoBoton = Number(boton.dataset.equipo);
        if (boton.dataset.accion === 'pasar') avanzar(equipoBoton);
        else noPasar(equipoBoton);
      });
    });
  });
}

function repartir() {
  const orden = BEBES.map((_, i) => i);
  for (let i = orden.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [orden[i], orden[j]] = [orden[j], orden[i]];
  }
  asignaciones = orden.map(i => BEBES[i]);
  ordenes = generarOrdenes();
  usadas = ordenes.map(orden => new Set([orden[0]]));
  pruebas = ordenes.map(orden => orden[0]);
  edades = [0, 0, 0, 0, 0, 0];
  repartido = true;
  render();
}

function reiniciar() {
  repartido = false;
  asignaciones = [];
  ordenes = [];
  usadas = [];
  pruebas = [0, 0, 0, 0, 0, 0];
  edades = [0, 0, 0, 0, 0, 0];
  render();
}

function avanzar(equipo) {
  if (!repartido || edades[equipo] >= EDADES.length - 1 || usadas[equipo].size >= TOTAL_INTENTOS) return;
  edades[equipo] = Math.min(edades[equipo] + 1, EDADES.length - 1);
  if (edades[equipo] < EDADES.length - 1) moverPrueba(equipo);
  render();
}

function noPasar(equipo) {
  if (!repartido || edades[equipo] >= EDADES.length - 1 || usadas[equipo].size >= TOTAL_INTENTOS) return;
  moverPrueba(equipo);
  render();
}

document.getElementById('repartir').addEventListener('click', repartir);
document.getElementById('reiniciar').addEventListener('click', reiniciar);
reiniciar();
