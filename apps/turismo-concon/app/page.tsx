import WaitlistForm from "@/components/WaitlistForm";

const ACTIVIDADES = [
  { emoji: "🏄", nombre: "SUP", desc: "Stand Up Paddle en la bahía" },
  { emoji: "🧘", nombre: "Yoga", desc: "Clases frente al mar" },
  { emoji: "🎾", nombre: "Tenis", desc: "Canchas y clases locales" },
  { emoji: "🏓", nombre: "Paddle", desc: "Reserva tu cancha" },
  { emoji: "⛵", nombre: "Vela", desc: "Sal a navegar la costa" },
  { emoji: "🏊", nombre: "Nado", desc: "Aguas abiertas guiado" },
];

const PASOS = [
  {
    n: "1",
    titulo: "Explora",
    desc: "Descubre actividades y emprendedores locales de Concón en un solo lugar.",
  },
  {
    n: "2",
    titulo: "Reserva",
    desc: "Elige día, hora y reserva online en segundos, sin llamadas ni idas y vueltas.",
  },
  {
    n: "3",
    titulo: "Vive Concón",
    desc: "Disfruta la experiencia y apoya directamente a la comunidad local.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* NAV */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="text-lg font-extrabold tracking-tight text-mar-dark">
          turismo<span className="text-atardecer">.concon</span>
        </span>
        <a
          href="#lista"
          className="rounded-full bg-mar px-4 py-2 text-sm font-semibold text-white shadow transition hover:bg-mar-dark"
        >
          Quiero entrar
        </a>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-mar-light/20 to-arena" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:py-20">
          <div>
            <span className="inline-block rounded-full bg-mar/10 px-3 py-1 text-sm font-semibold text-mar-dark">
              🌊 Concón, Chile
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              Vive Concón con quienes lo conocen de verdad.
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              El marketplace de experiencias recreativas locales: SUP, yoga,
              tenis, paddle, vela y nado. Reserva con emprendedores de la zona,
              en un solo lugar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#lista"
                className="rounded-xl bg-atardecer px-6 py-3 font-semibold text-white shadow-md transition hover:brightness-95"
              >
                Sumarme a la lista de espera
              </a>
              <a
                href="#actividades"
                className="rounded-xl border border-mar/30 px-6 py-3 font-semibold text-mar-dark transition hover:bg-mar/5"
              >
                Ver actividades
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 lg:justify-end">
            {ACTIVIDADES.map((a) => (
              <div
                key={a.nombre}
                className="flex w-28 flex-col items-center rounded-2xl bg-white/80 p-4 text-center shadow-sm backdrop-blur"
              >
                <span className="text-3xl">{a.emoji}</span>
                <span className="mt-2 text-sm font-semibold text-slate-700">
                  {a.nombre}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVIDADES */}
      <section id="actividades" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Todas las experiencias de Concón, en un solo lugar
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Desde el mar a la cancha. Conecta con emprendedores locales y vive la
          costa como un local.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVIDADES.map((a) => (
            <div
              key={a.nombre}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-3xl">{a.emoji}</span>
              <h3 className="mt-3 text-lg font-bold text-slate-900">
                {a.nombre}
              </h3>
              <p className="mt-1 text-slate-600">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold text-slate-900">
            Cómo funciona
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {PASOS.map((p) => (
              <div key={p.n} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-mar text-lg font-bold text-white">
                  {p.n}
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">
                  {p.titulo}
                </h3>
                <p className="mt-2 text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMPRENDEDORES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl bg-mar-dark px-8 py-12 text-white sm:px-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">
                ¿Tienes un emprendimiento recreativo en Concón?
              </h2>
              <p className="mt-4 text-mar-light/90 text-lg">
                Publica tus actividades, recibe reservas online y llega a más
                visitantes. Tú pones la experiencia, nosotros la tecnología.
              </p>
              <ul className="mt-6 space-y-2 text-white/90">
                <li>✅ Agenda y reservas sin complicaciones</li>
                <li>✅ Más visibilidad para tu negocio local</li>
                <li>✅ Pagos y comunicación en un solo lugar</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">
              <p className="text-lg font-semibold">
                Sé de los primeros emprendedores en la plataforma.
              </p>
              <a
                href="#lista"
                className="mt-4 inline-block rounded-xl bg-atardecer px-6 py-3 font-semibold text-white shadow-md transition hover:brightness-95"
              >
                Quiero publicar mis actividades
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LISTA DE ESPERA */}
      <section id="lista" className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Súmate a la lista de espera
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Estamos construyendo turismo.concon. Déjanos tu correo y te
            avisamos apenas abramos. Los primeros tendrán beneficios.
          </p>
        </div>
        <div className="mt-8">
          <WaitlistForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
          <span className="font-extrabold text-mar-dark">
            turismo<span className="text-atardecer">.concon</span>
          </span>
          <p className="text-sm text-slate-500">
            Experiencias locales de Concón · Hecho con 🌊 en Chile
          </p>
        </div>
      </footer>
    </main>
  );
}
