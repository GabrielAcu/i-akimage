import { useState } from 'react'
import {
  Video,
  CreditCard,
  Clapperboard,
  Radio,
  ArrowUpRight,
  CheckCircle2,
  Truck,
  MapPin,
  Instagram,
  MessageCircle,
  Phone,
  Sparkles,
  Church,
  Building2,
  Tv,
  SlidersHorizontal,
  Menu,
  X,
  ShieldCheck,
} from 'lucide-react'
import {
  BRANDS,
  EQUIPMENT_ITEMS,
  SHOWS_AND_CLIENTS,
  WHATSAPP_DISPLAY,
  ALT_PHONE_DISPLAY,
  INSTAGRAM_URL,
  TIKTOK_URL,
  buildWhatsAppUrl,
  heroBroadcastImg,
  gearCamerasImg,
  streamingIglesiasImg,
} from './data/catalog'

const FILTERS = [
  { id: 'all', label: 'Todos los equipos' },
  { id: 'venta', label: 'Venta' },
  { id: 'rental', label: 'Rental Low Cost' },
  { id: 'combos', label: 'Combos Streaming' },
]

const PROFILE_OPTIONS = [
  { id: 'Iglesia', label: 'Iglesia', icon: Church, desc: 'Financiación especial en cuotas' },
  { id: 'Empresa / Productora', label: 'Empresa', icon: Building2, desc: 'Equipamiento corporativo y eventos' },
  { id: 'Canal de Streaming / Creador', label: 'Streaming / Show', icon: Tv, desc: 'Kick, YouTube, Twitch o podcast' },
]

const MODALITY_OPTIONS = [
  'Comprar con financiación',
  'Rental / Alquiler Low Cost',
  'Armar combo a medida',
  'Transmisión en vivo',
]

export default function App() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProfile, setSelectedProfile] = useState('Iglesia')
  const [selectedModality, setSelectedModality] = useState('Comprar con financiación')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const filteredEquipment =
    activeFilter === 'all'
      ? EQUIPMENT_ITEMS
      : EQUIPMENT_ITEMS.filter((item) => item.filterKeys.includes(activeFilter))

  const customConsultationUrl = buildWhatsAppUrl(
    `¡Hola IÑAKIMAGE! Soy de ${selectedProfile} y me gustaría consultar por: ${selectedModality}. ¿Me asesorás con las opciones disponibles?`
  )

  return (
    <div className="min-h-screen bg-[#08080A] text-[#F5F5F7]">
      {/* Top Broadcast Announcement Bar */}
      <div className="border-b border-white/10 bg-[#0D0D11] px-4 py-2 text-center text-xs text-zinc-300">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1">
          <span className="inline-flex items-center gap-2 font-mono-tech uppercase tracking-wider text-zinc-200">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-tally" />
            Financiación disponible para Iglesias y Empresas
          </span>
          <span className="hidden text-zinc-600 sm:inline">|</span>
          <span className="inline-flex items-center gap-1.5 text-zinc-400">
            <Truck className="h-3.5 w-3.5 text-red-500" />
            Envíos a todo el país · Retiro a coordinar en Buenos Aires
          </span>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08080A]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <a href="#inicio" className="group flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-brand text-xl font-bold tracking-[0.18em] text-white transition-colors group-hover:text-red-500 sm:text-2xl">
                IÑAK<span className="text-red-600">IMAGE</span>
              </span>
              <span className="font-mono-tech text-[10px] uppercase tracking-[0.26em] text-zinc-400">
                Equipos · Streaming · Rental
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-300 md:flex">
            <a href="#servicios" className="transition-colors hover:text-white">
              Servicios
            </a>
            <a href="#equipos" className="transition-colors hover:text-white">
              Equipos
            </a>
            <a href="#financiacion" className="transition-colors hover:text-white">
              Financiación
            </a>
            <a href="#trabajos" className="transition-colors hover:text-white">
              Trabajos
            </a>
            <a href="#contacto" className="transition-colors hover:text-white">
              Contacto
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de IÑAKIMAGE"
              className="rounded-full border border-white/15 p-2.5 text-zinc-300 transition-colors hover:border-red-500/60 hover:text-white"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={buildWhatsAppUrl('¡Hola IÑAKIMAGE! Quiero consultar por equipamiento audiovisual.')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-red-500 crimson-glow"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-lg border border-white/15 p-2 text-zinc-300 md:hidden"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-white/10 bg-[#0D0D11] px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm font-medium text-zinc-200">
              {[
                { href: '#servicios', label: 'Servicios' },
                { href: '#equipos', label: 'Equipos y Combos' },
                { href: '#financiacion', label: 'Financiación' },
                { href: '#trabajos', label: 'Trabajos y Shows' },
                { href: '#contacto', label: 'Contacto' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 transition-colors hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={buildWhatsAppUrl('¡Hola IÑAKIMAGE! Quiero consultar por equipamiento audiovisual.')}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                Escribinos por WhatsApp ({WHATSAPP_DISPLAY})
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative overflow-hidden border-b border-white/10">
        {/* Background Image + Cinematic Vignette */}
        <div className="absolute inset-0">
          <img
            src={heroBroadcastImg}
            alt="Cámara broadcast 4K en estudio profesional de IÑAKIMAGE"
            className="h-full w-full object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08080A] via-[#08080A]/85 to-[#08080A]/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-transparent to-[#08080A]/60" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pb-28 lg:pt-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-red-500/30 bg-red-950/40 px-4 py-1.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-tally" />
              <span className="font-mono-tech text-xs font-medium uppercase tracking-widest text-red-200">
                Subite al profesionalismo · Buenos Aires
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[64px]">
              Equipamiento de{' '}
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-amber-300 bg-clip-text text-transparent">
                streaming y video
              </span>{' '}
              para llevar tu proyecto al siguiente nivel.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 sm:text-xl">
              Venta de cámaras y equipos profesionales con{' '}
              <strong className="font-semibold text-white">financiación para iglesias y empresas</strong>,{' '}
              <strong className="font-semibold text-white">rental a precio low cost</strong> y producción en vivo.
              Porque hoy, la diferencia está en cómo te ven.
            </p>

            {/* Primary CTAs */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={buildWhatsAppUrl(
                  '¡Hola IÑAKIMAGE! Vi la web y quiero asesoramiento para equipar mi proyecto.'
                )}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-red-600 px-7 py-4 text-base font-bold text-white transition-all hover:bg-red-500 crimson-glow"
              >
                <MessageCircle className="h-5 w-5" />
                Pedí tu presupuesto por WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#equipos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/10"
              >
                Ver catálogo de equipos
              </a>
            </div>

            {/* Quick Value Metrics */}
            <div className="mt-12 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
              <div>
                <p className="font-mono-tech text-xs uppercase tracking-wider text-red-400">Financiación</p>
                <p className="mt-1 text-base font-bold text-white">Cuotas y baja tasa</p>
              </div>
              <div>
                <p className="font-mono-tech text-xs uppercase tracking-wider text-red-400">Rental</p>
                <p className="mt-1 text-base font-bold text-white">Precio Low Cost</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-mono-tech text-xs uppercase tracking-wider text-red-400">Cobertura</p>
                <p className="mt-1 text-base font-bold text-white">Envíos a todo el país</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRANDS STRIP */}
      <section className="border-b border-white/10 bg-[#0D0D11] py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <span className="font-mono-tech text-xs uppercase tracking-[0.2em] text-zinc-500">
            Trabajamos con marcas líderes
          </span>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {BRANDS.map((brand) => (
              <span
                key={brand}
                className="font-mono-tech text-sm font-semibold tracking-[0.18em] text-zinc-300/80 transition-colors hover:text-white"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS (4 PILARES) */}
      <section id="servicios" className="relative bg-studio-grid py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="font-mono-tech text-xs font-semibold uppercase tracking-[0.22em] text-red-500">
              Soluciones Audiovisuales
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Comprá, financiá o alquilá según lo que necesites.
            </h2>
            <p className="mt-4 text-base text-zinc-400">
              Te acompañamos con asesoramiento real y equipos probados para que tu transmisión o producción salga con
              calidad profesional desde el primer día.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Video,
                tag: 'VENTA',
                title: 'Equipamiento Audiovisual',
                desc: 'Cámaras profesionales, filmadoras de hombro, lentes, iluminación LED, micrófonos, cables y monitores listos para usar.',
              },
              {
                icon: CreditCard,
                tag: 'FINANCIACIÓN',
                title: 'Cuotas para Iglesias y Empresas',
                desc: 'Planes en cuotas accesibles y baja tasa de interés para que equiparte sea posible hoy, no mañana.',
              },
              {
                icon: Clapperboard,
                tag: 'RENTAL LOW COST',
                title: 'Alquiler a Precio Accesible',
                desc: 'Alquiler de cámaras, trípodes fluidos, grúas y combos completos de streaming por jornada o evento.',
              },
              {
                icon: Radio,
                tag: 'EN VIVO',
                title: 'Producción & Streaming',
                desc: 'Acompañamiento técnico y transmisión en vivo para shows musicales, programas de Kick/YouTube y eventos.',
              },
            ].map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#111115]/90 p-7 transition-all hover:-translate-y-1 hover:border-red-500/40"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-500/30 bg-red-950/40 text-red-500">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-mono-tech text-[11px] font-semibold tracking-widest text-zinc-500">
                        {service.tag}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">{service.desc}</p>
                  </div>
                  <a
                    href={buildWhatsAppUrl(`¡Hola IÑAKIMAGE! Quiero consultar sobre ${service.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-red-400 transition-colors group-hover:text-red-300"
                  >
                    Consultar ahora
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CATÁLOGO INTERACTIVO DE EQUIPOS */}
      <section id="equipos" className="border-t border-white/10 bg-[#0B0B0E] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="font-mono-tech text-xs font-semibold uppercase tracking-[0.22em] text-red-500">
                Catálogo Destacado
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Equipos reales, listos para grabar y transmitir.
              </h2>
              <p className="mt-3 text-base text-zinc-400">
                Filtrá por modalidad y consultanos directo por WhatsApp para recibir cotización actualizada o armar un
                combo con lentes, cables y monitores.
              </p>
            </div>

            {/* Interactive Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <SlidersHorizontal className="mr-1 hidden h-4 w-4 text-zinc-500 sm:block" />
              {FILTERS.map((filter) => {
                const isActive = activeFilter === filter.id
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveFilter(filter.id)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-red-600 text-white crimson-glow'
                        : 'border border-white/10 bg-[#14141A] text-zinc-300 hover:border-white/25 hover:text-white'
                    }`}
                  >
                    {filter.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Equipment Cards Grid */}
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredEquipment.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111115] transition-all hover:border-red-500/40"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111115] via-transparent to-black/30" />
                  <span className="font-mono-tech absolute left-4 top-4 rounded-full border border-red-500/40 bg-black/75 px-3 py-1 text-[11px] font-semibold tracking-wider text-red-300 backdrop-blur-md">
                    {item.badge}
                  </span>
                  <span className="absolute bottom-3 left-4 text-xs font-medium text-zinc-300">
                    {item.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <p className="mt-1 text-sm font-medium text-red-400">{item.highlight}</p>

                    <ul className="mt-4 space-y-2">
                      {item.specs.map((spec) => (
                        <li key={spec} className="flex items-start gap-2 text-sm text-zinc-300">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-4 border-t border-white/10 pt-3 text-xs text-zinc-400">{item.note}</p>
                  </div>

                  <a
                    href={buildWhatsAppUrl(
                      `¡Hola IÑAKIMAGE! Me interesa consultar precio y disponibilidad de: ${item.name} (${item.category}).`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/40 bg-red-600/15 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-red-600"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Consultar este equipo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINANCIACIÓN + ASESOR INTERACTIVO */}
      <section id="financiacion" className="relative border-t border-white/10 bg-[#08080A] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left Copy & Visual */}
            <div className="lg:col-span-6">
              <span className="font-mono-tech inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-400">
                <Sparkles className="h-3.5 w-3.5" />
                Financiación & Asesoramiento Personalizado
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Que equiparte sea posible <span className="text-red-500">hoy, no mañana.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-300">
                Sabemos lo que cuesta dar el salto técnico en una iglesia, empresa o canal de streaming. Por eso
                ofrecemos <strong className="text-white">financiación en cuotas accesibles con baja tasa</strong> y
                armamos combos exactos sin que gastes de más.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={streamingIglesiasImg}
                  alt="Cabina de transmisión de streaming profesional para iglesias y auditorios"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-[#111115] p-4">
                  <ShieldCheck className="h-5 w-5 text-red-500" />
                  <p className="mt-2 text-sm font-bold text-white">Equipos garantizados</p>
                  <p className="mt-1 text-xs text-zinc-400">Fotos reales, probados y listos para salir al aire.</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#111115] p-4">
                  <Truck className="h-5 w-5 text-red-500" />
                  <p className="mt-2 text-sm font-bold text-white">Llegamos a todo el país</p>
                  <p className="mt-1 text-xs text-zinc-400">Envíos seguros a toda Argentina o retiro en Buenos Aires.</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Configurator Card */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-red-500/30 bg-gradient-to-b from-[#14141A] to-[#0E0E13] p-7 shadow-2xl sm:p-9">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <span className="font-mono-tech text-xs uppercase tracking-widest text-red-400">
                      Armá tu consulta en 10 segundos
                    </span>
                    <h3 className="mt-1 text-2xl font-bold text-white">Te armamos la mejor opción</h3>
                  </div>
                  <span className="h-3 w-3 rounded-full bg-red-500 animate-tally" />
                </div>

                {/* Step 1: Profile */}
                <div className="mt-6">
                  <p className="text-sm font-semibold text-zinc-200">1. ¿Para qué proyecto buscás equipamiento?</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {PROFILE_OPTIONS.map((option) => {
                      const Icon = option.icon
                      const active = selectedProfile === option.id
                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setSelectedProfile(option.id)}
                          className={`flex flex-col items-start rounded-xl border p-3.5 text-left transition-all ${
                            active
                              ? 'border-red-500 bg-red-950/40 text-white'
                              : 'border-white/10 bg-[#111115] text-zinc-400 hover:border-white/25 hover:text-zinc-200'
                          }`}
                        >
                          <Icon className={`h-5 w-5 ${active ? 'text-red-400' : 'text-zinc-500'}`} />
                          <span className="mt-2.5 text-sm font-bold">{option.label}</span>
                          <span className="mt-0.5 text-[11px] leading-snug opacity-80">{option.desc}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Step 2: Modality */}
                <div className="mt-6">
                  <p className="text-sm font-semibold text-zinc-200">2. ¿Qué modalidad te interesa?</p>
                  <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {MODALITY_OPTIONS.map((modality) => {
                      const active = selectedModality === modality
                      return (
                        <button
                          key={modality}
                          type="button"
                          onClick={() => setSelectedModality(modality)}
                          className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold transition-all ${
                            active
                              ? 'border-red-500 bg-red-600/20 text-white'
                              : 'border-white/10 bg-[#111115] text-zinc-300 hover:border-white/25'
                          }`}
                        >
                          {modality}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Summary Preview */}
                <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-4">
                  <p className="font-mono-tech text-[11px] uppercase tracking-wider text-zinc-500">
                    Tu consulta lista para enviar:
                  </p>
                  <p className="mt-1.5 text-sm text-zinc-200">
                    “¡Hola IÑAKIMAGE! Soy de <strong className="text-white">{selectedProfile}</strong> y me gustaría
                    consultar por: <strong className="text-red-400">{selectedModality}</strong>.”
                  </p>
                </div>

                <a
                  href={customConsultationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-red-600 px-6 py-4 text-base font-bold text-white transition-all hover:bg-red-500 crimson-glow"
                >
                  <MessageCircle className="h-5 w-5" />
                  Enviar consulta por WhatsApp
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <p className="mt-3 text-center text-xs text-zinc-500">
                  Atención directa por WhatsApp al {WHATSAPP_DISPLAY} · Respuesta rápida y sin compromiso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RENTAL LOW COST HIGHLIGHT BANNER */}
      <section className="border-t border-white/10 bg-[#0D0D11] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#111115] lg:grid lg:grid-cols-12">
            <div className="p-8 sm:p-12 lg:col-span-6 lg:flex lg:flex-col lg:justify-center">
              <span className="font-mono-tech text-xs font-semibold uppercase tracking-[0.22em] text-red-500">
                Rental a Precio Low Cost
              </span>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
                ¿Necesitás equipo solo para un evento o grabación?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-300">
                Contamos con servicio de alquiler de cámaras 4K, lentes, trípodes fluidos, grúas, micrófonos e
                iluminación a <strong className="text-white">precios accesibles</strong>. Todo revisado y listo para
                rodar.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={buildWhatsAppUrl('¡Hola IÑAKIMAGE! Quiero consultar tarifas de Rental Low Cost.')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition-all hover:bg-zinc-200"
                >
                  Pedir lista de Rental Low Cost
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="relative min-h-[280px] lg:col-span-6">
              <img
                src={gearCamerasImg}
                alt="Equipamiento audiovisual y cámaras profesionales de IÑAKIMAGE Rental"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111115] via-transparent to-transparent lg:w-28" />
            </div>
          </div>
        </div>
      </section>

      {/* TRABAJOS Y SHOWS (SOCIAL PROOF) */}
      <section id="trabajos" className="border-t border-white/10 bg-[#08080A] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="font-mono-tech text-xs font-semibold uppercase tracking-[0.22em] text-red-500">
                En el Aire · Comunidad IÑAKIMAGE
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Shows, artistas y proyectos que eligen nuestra calidad.
              </h2>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 transition-colors hover:text-red-300"
            >
              <Instagram className="h-4 w-4" />
              Ver reels en @inakimage_
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SHOWS_AND_CLIENTS.map((client) => (
              <div
                key={client.name}
                className="rounded-2xl border border-white/10 bg-[#111115] p-6 transition-colors hover:border-red-500/35"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono-tech text-[11px] uppercase tracking-wider text-red-400">
                    {client.type}
                  </span>
                  <span className="text-xs text-zinc-500">{client.handle}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-white">{client.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{client.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO & FOOTER */}
      <footer id="contacto" className="border-t border-white/10 bg-[#0B0B0E] pt-20 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* Brand Column */}
            <div className="lg:col-span-5">
              <span className="font-brand text-2xl font-bold tracking-[0.18em] text-white">
                IÑAK<span className="text-red-600">IMAGE</span>
              </span>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
                Calidad, confianza y soluciones audiovisuales. Venta de equipamiento de streaming para iglesias y
                empresas con financiación disponible, rental a precio low cost y producción en vivo.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-200 transition-colors hover:border-red-500/50 hover:text-white"
                >
                  <Instagram className="h-4 w-4 text-red-500" />
                  @inakimage_
                </a>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-200 transition-colors hover:border-red-500/50 hover:text-white"
                >
                  <Video className="h-4 w-4 text-red-500" />
                  TikTok @inakimage_
                </a>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="lg:col-span-4">
              <h4 className="font-mono-tech text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Contacto Directo
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                <li>
                  <a
                    href={buildWhatsAppUrl('¡Hola IÑAKIMAGE! Quiero hacer una consulta.')}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                  >
                    <MessageCircle className="h-4 w-4 text-red-500" />
                    WhatsApp: <strong className="text-white">{WHATSAPP_DISPLAY}</strong>
                  </a>
                </li>
                <li className="inline-flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-red-500" />
                  Línea alternativa: <span className="text-zinc-200">{ALT_PHONE_DISPLAY}</span>
                </li>
                <li className="inline-flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 text-red-500" />
                  Buenos Aires, Argentina (Retiro a coordinar)
                </li>
                <li className="inline-flex items-center gap-2.5">
                  <Truck className="h-4 w-4 text-red-500" />
                  Envíos a todo el país
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-3">
              <h4 className="font-mono-tech text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Navegación
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-zinc-400">
                <li>
                  <a href="#servicios" className="transition-colors hover:text-white">
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#equipos" className="transition-colors hover:text-white">
                    Catálogo de equipos
                  </a>
                </li>
                <li>
                  <a href="#financiacion" className="transition-colors hover:text-white">
                    Financiación Iglesias y Empresas
                  </a>
                </li>
                <li>
                  <a href="#trabajos" className="transition-colors hover:text-white">
                    Trabajos y Shows
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-zinc-500 sm:flex-row">
            <p>© {new Date().getFullYear()} IÑAKIMAGE. Todos los derechos reservados.</p>
            <p className="font-mono-tech">Boceto Web · Listo para desplegar en Vercel</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={buildWhatsAppUrl('¡Hola IÑAKIMAGE! Quiero consultar por equipos / rental.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-black shadow-2xl transition-transform hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  )
}
