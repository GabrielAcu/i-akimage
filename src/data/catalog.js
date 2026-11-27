import heroBroadcastImg from '../assets/hero-broadcast.jpg'
import gearCamerasImg from '../assets/gear-cameras.jpg'
import streamingIglesiasImg from '../assets/streaming-iglesias.jpg'

export { heroBroadcastImg, gearCamerasImg, streamingIglesiasImg }

export const WHATSAPP_NUMBER = '5491128292015'
export const WHATSAPP_DISPLAY = '11 2829-2015'
export const ALT_PHONE_DISPLAY = '11 6179-0441'
export const INSTAGRAM_URL = 'https://www.instagram.com/inakimage_'
export const TIKTOK_URL = 'https://www.tiktok.com/@inakimage_'

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const BRANDS = [
  'SONY',
  'BLACKMAGIC DESIGN',
  'PANASONIC',
  'NIKON',
  'MANFROTTO',
]

export const EQUIPMENT_ITEMS = [
  {
    id: 'blackmagic-tv-uhd',
    name: 'Blackmagic TV Ultra HD',
    category: 'Venta & Rental',
    filterKeys: ['venta', 'rental'],
    badge: '4K BROADCAST',
    highlight: 'Ideal TV, recitales y streaming pro',
    image: heroBroadcastImg,
    specs: ['Sensor Ultra HD 4K', 'Entradas/Salidas SDI', 'Control de estudio y trípode fluido'],
    note: 'Consultanos por combos con lentes, cables o monitores.',
  },
  {
    id: 'sony-hxr-mc2500',
    name: 'Sony HXR-MC2500',
    category: 'Venta · Financiación Iglesias',
    filterKeys: ['venta', 'combos'],
    badge: 'MADE IN JAPAN',
    highlight: 'Camcorder de hombro Full HD',
    image: gearCamerasImg,
    specs: ['Full HD 1080p Exmor R CMOS', 'Gran angular 26.8mm + Luz LED', 'Memoria 32GB + SD · Wi-Fi/NFC'],
    note: 'Ideal para iglesias, conferencias, eventos y cobertura social.',
  },
  {
    id: 'sony-a7-iii',
    name: 'Sony A7 III 4K c/ Grip',
    category: 'Venta & Rental',
    filterKeys: ['venta', 'rental'],
    badge: 'FULL FRAME 4K',
    highlight: 'Calidad cinematográfica en vivo',
    image: gearCamerasImg,
    specs: ['Sensor Full Frame 4K', 'Grip vertical para jornadas largas', 'Compatible con lentes intercambiables'],
    note: 'Disponible para compra o alquiler por jornada.',
  },
  {
    id: 'combo-iglesias',
    name: 'Combo Streaming Iglesias Pro',
    category: 'Financiación Disponible',
    filterKeys: ['venta', 'combos'],
    badge: 'CUOTAS BAJA TASA',
    highlight: 'Llave en mano para tu comunidad',
    image: streamingIglesiasImg,
    specs: ['Cámaras HD/4K + Trípodes', 'Switcher de video + Monitoreo', 'Asesoramiento e instalación'],
    note: 'Financiación en cuotas accesibles exclusiva para iglesias.',
  },
  {
    id: 'combo-streaming-set',
    name: 'Kit Streaming Kick / YouTube',
    category: 'Rental Low Cost & Venta',
    filterKeys: ['rental', 'combos'],
    badge: 'LISTO PARA SALIR',
    highlight: 'Estudios, podcasts y programas en vivo',
    image: gearCamerasImg,
    specs: ['Cámaras profesionales + Lentes', 'Micrófonos broadcast y sonido', 'Iluminación LED y accesorios'],
    note: 'Armamos el setup exacto según tu espacio y presupuesto.',
  },
  {
    id: 'gruas-tripodes',
    name: 'Grúas, Trípodes y Accesorios',
    category: 'Rental Low Cost',
    filterKeys: ['rental'],
    badge: 'LOW COST',
    highlight: 'Soportes, movimiento y señal',
    image: heroBroadcastImg,
    specs: ['Grúas para shows y eventos', 'Trípodes Manfrotto cabezal fluido', 'Monitores, cables SDI/HDMI y baterías'],
    note: 'Alquiler a precio low cost con retiro a coordinar.',
  },
]

export const SHOWS_AND_CLIENTS = [
  {
    name: 'Ni Fu Ni Fa',
    handle: '@nifunifa.okk',
    type: 'Programa de Streaming · Kick',
    detail: 'Equipamiento de cámaras, trípodes y soporte visual para transmisiones en vivo.',
  },
  {
    name: 'La Juntada del Folclore',
    handle: 'Transmisión en Vivo',
    type: 'Show Musical & Cultura',
    detail: 'Acompañamiento técnico y transmisión de streaming para llevar la música a todo el país.',
  },
  {
    name: 'El Fogón de la Cumbia',
    handle: '@elfogondelacumbia',
    type: 'Producción Musical en Vivo',
    detail: 'Captura multicámara y soluciones audiovisuales en formato broadcast.',
  },
  {
    name: 'La Ultimita Folk',
    handle: '@laultimitafolk',
    type: 'Sesiones & Artistas',
    detail: 'Cobertura visual y equipamiento profesional para sesiones musicales.',
  },
  {
    name: 'Orquesta Kaluqueña',
    handle: 'Show en Vivo',
    type: 'Evento & Cobertura',
    detail: 'Equipamiento audiovisual y soporte técnico para presentaciones en vivo.',
  },
  {
    name: 'Iglesias y Empresas',
    handle: 'Todo el país',
    type: 'Equipamiento & Financiación',
    detail: 'Sistemas de streaming completos con cuotas accesibles y asesoramiento real.',
  },
]
