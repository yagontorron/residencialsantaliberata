import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { PlaceCarousel } from "@/components/PlaceCarousel";
import fachada from "@/assets/fachada.png";
import aerea from "@/assets/baiona-aerea.jpg";
import castelo from "@/assets/baiona-castelo.jpg";
import carabela from "@/assets/baiona-carabela.jpg";
import iglesia from "@/assets/baiona-iglesia.jpg";
import cascoantiguo from "@/assets/baiona-cascoantiguo.jpg";
import playa from "@/assets/baiona-playa.jpg";
import arcadas from "@/assets/baiona-arcadas.jpg";
import plazaHotel from "@/assets/baiona-plaza-hotel.jpg";
import cocina from "@/assets/render-cocina.jpg";
import dormitorio from "@/assets/render-dormitorio.jpg";
import salon from "@/assets/render-salon.jpg";
import plaza from "@/assets/plaza-proyecto.png";
import planoBajoB from "@/assets/plano-bajo-b.png";
import planoBajoA from "@/assets/plano-bajo-a.png";
import planoPrimeroB from "@/assets/plano-primero-b.png";
import planoPrimeroA from "@/assets/plano-primero-a.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Residencial Santa Liberata — Cuatro viviendas boutique en Baiona" },
      {
        name: "description",
        content:
          "Promoción boutique de cuatro viviendas de obra nueva en Plaza Santa Liberata, Baiona. Ubicación histórica, escala privada, materiales cuidados y atmósfera atlántica.",
      },
      { property: "og:title", content: "Residencial Santa Liberata — Cuatro viviendas boutique en Baiona" },
      {
        property: "og:description",
        content:
          "Promoción boutique de cuatro viviendas de obra nueva en Plaza Santa Liberata, Baiona.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Manrope:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  component: Index,
});

const viviendas = [
  {
    nombre: "Bajo B",
    planta: "Bajo",
    dormitorios: 3,
    superficie: "243,57 m²",
    precio: "725.000 €",
    plano: planoBajoB,
    text: "Vivienda de planta baja con espacios amplios y relación directa con el jardín.",
  },
  {
    nombre: "Bajo A",
    planta: "Bajo",
    dormitorios: 3,
    superficie: "175,65 m²",
    precio: "590.000 €",
    plano: planoBajoA,
    text: "Vivienda de planta baja pensada para disfrutar amplitud, luz y exterior privado.",
  },
  {
    nombre: "1º B",
    planta: "Primera planta",
    dormitorios: 3,
    superficie: "133,91 m²",
    precio: "535.000 €",
    plano: planoPrimeroB,
    text: "Vivienda en primera planta, amplia y luminosa, dentro de una promoción de solo cuatro unidades.",
  },
  {
    nombre: "1º A",
    planta: "Primera planta",
    dormitorios: 3,
    superficie: "131,32 m²",
    precio: "525.000 €",
    plano: planoPrimeroA,
    text: "Vivienda en primera planta, con espacios generosos y sentido de casa en el centro de Baiona.",
  },
];

const calidades = [
  {
    t: "La cocina",
    img: cocina,
    d: "Una cocina cálida y funcional, con tonos madera, superficies de inspiración pétrea y una presencia discreta de la grifería y los detalles.",
  },
  {
    t: "Los dormitorios",
    img: dormitorio,
    d: "Estancias pensadas para la calma: tonos claros, armarios integrados y una base neutra que permite construir un interior sereno y personal.",
  },
  {
    t: "El salón",
    img: salon,
    d: "Un espacio amplio y luminoso, donde la luz indirecta, la proporción y los materiales crean una atmósfera cómoda y atemporal.",
  },
  {
    t: "Comunes y baños",
    img: salon,
    d: "Zonas comunes, baños y exteriores siguen la misma línea material: porcelánicos naturales, iluminación cálida y una lectura limpia del espacio.",
  },
];

function Index() {
  return (
    <div id="top" className="overflow-x-hidden">
      <Header />

      {/* HERO */}
      <section className="pt-28 md:pt-40 pb-20 md:pb-28 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto text-center flex flex-col">
          {/* 1. Eyebrow */}
          <Reveal>
            <p className="eyebrow mb-10 md:mb-12">
              Obra nueva boutique · Rúa Santa Liberata, 8 · Baiona
            </p>
          </Reveal>

          {/* 2. Imagen principal con hairlines (mismo tratamiento, ahora arriba) */}
          <Reveal delay={120}>
            <div className="hairline mb-10 md:mb-14" />
            <div className="relative max-w-5xl mx-auto">
              <img
                src={fachada}
                alt="Fachada de Residencial Santa Liberata, ilustración a mano"
                className="w-full h-auto"
                style={{ boxShadow: "0 30px 80px -40px rgba(43,31,20,0.25)" }}
              />
            </div>
            <div className="hairline mt-10 md:mt-14 mb-12 md:mb-16" />
          </Reveal>

          {/* 3. Título */}
          <Reveal delay={160}>
            <h1 className="font-serif text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-[-0.02em] text-ink-strong mb-6 md:mb-8">
              Residencial Santa Liberata
            </h1>
          </Reveal>

          {/* 4. Subtítulo */}
          <Reveal delay={220}>
            <p className="font-serif italic text-xl md:text-2xl text-ink max-w-2xl mx-auto mb-4">
              Cuatro viviendas boutique en el corazón histórico de Baiona.
            </p>
          </Reveal>

          {/* 5. Frase */}
          <Reveal delay={300}>
            <p className="text-sm md:text-base text-ink/80 max-w-xl mx-auto mb-10 md:mb-12">
              Para quienes valoran el lugar, la calma y el detalle.
            </p>
          </Reveal>

          {/* 6. Botones */}
          <Reveal delay={380}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 md:mb-20">
              <a href="#contacto" className="btn-primary">Solicitar dossier</a>
              <a href="#viviendas" className="btn-ghost">Conocer las viviendas</a>
            </div>
          </Reveal>

          {/* 7. Datos inferiores */}
          <Reveal delay={460}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 text-left max-w-5xl mx-auto">
              {[
                ["Unidades", "4 viviendas"],
                ["Ubicación", "Plaza Santa Liberata, Baiona"],
                ["Proyecto", "Obra nueva boutique"],
                ["Entrega estimada", "Verano 2027"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="eyebrow mb-3">{k}</div>
                  <div className="font-serif text-lg md:text-xl text-ink-strong leading-snug">{v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAP I — CONCEPTO */}
      <section id="concepto" className="py-28 md:py-40 px-6 md:px-12" style={{ backgroundColor: "var(--stone-warm)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="chapter-label mb-6">Capítulo I — Concepto</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.15] text-ink-strong mb-10">
              El <span className="accent">equilibrio</span> entre lugar, vivienda y detalle.
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <div className="hairline mb-10 mx-auto w-24" />
            <p className="text-base md:text-lg text-ink leading-[1.85] font-light">
              Residencial Santa Liberata nace de una relación muy concreta con Baiona: su escala, su historia, su luz y su manera pausada de habitar.
            </p>
            <p className="text-base md:text-lg text-ink leading-[1.85] font-light mt-5">
              Cuatro viviendas de obra nueva concebidas con amplitud, calma y una atención cuidada a los materiales, la atmósfera interior y la continuidad con el entorno.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CAP II — EL LUGAR */}
      <section id="lugar" className="py-28 md:py-40 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-20">
            <Reveal><p className="chapter-label mb-6">Capítulo II — El lugar</p></Reveal>
            <Reveal delay={100}>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.15] text-ink-strong max-w-3xl mx-auto mb-10">
                Vivir entre la <span className="accent">historia</span>, la plaza y el mar.
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-base md:text-lg text-ink leading-[1.85] font-light max-w-2xl mx-auto">
                En la Plaza Santa Liberata, Residencial Santa Liberata se sitúa en uno de los entornos con más carácter de Baiona: cerca del casco histórico, la vida local, el puerto, el mar y algunos de los lugares más reconocibles de la villa.
              </p>
              <p className="text-base md:text-lg text-ink leading-[1.85] font-light max-w-2xl mx-auto mt-5">
                Una ubicación para vivir Baiona a pie, con la calma de una escala urbana propia y la cercanía de todo aquello que le da identidad.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <figure className="mb-6">
              <img src={aerea} alt="Vista aérea de Baiona" className="w-full h-[60vh] md:h-[80vh] object-cover" />
              <figcaption className="eyebrow mt-4">Baiona · Vista aérea</figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-12">
              <PlaceCarousel
                items={[
                  { src: cascoantiguo, cap: "Casco histórico" },
                  { src: castelo, cap: "Castillo de Monterreal" },
                  { src: carabela, cap: "Carabela Pinta" },
                  { src: playa, cap: "Mar y playas" },
                  { src: arcadas, cap: "Las Arcadas · vida local" },
                  { src: plazaHotel, cap: "Patrimonio de Baiona" },
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* MÁS QUE UBICACIÓN */}
      <section className="py-28 md:py-36 px-6 md:px-12" style={{ backgroundColor: "var(--noir)", color: "var(--ivory)" }}>
        <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <Reveal>
            <div className="space-y-6">
              <img src={iglesia} alt="Iglesia de Santa Liberata" className="w-full h-auto" />
              <img src={plaza} alt="Proyecto de reurbanización de la Plaza Santa Liberata" className="w-full h-auto" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="chapter-label mb-5" style={{ color: "var(--clay)" }}>Entorno en evolución</p>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.15] mb-8" style={{ color: "var(--ivory)" }}>
              Más que <span className="accent">ubicación</span>
            </h2>
            <div className="hairline mb-8 w-20" style={{ background: "linear-gradient(90deg, var(--clay), transparent)" }} />
            <p className="text-base leading-[1.85] font-light opacity-85 mb-5">
              El entorno inmediato de Santa Liberata está previsto que evolucione con un proyecto de reurbanización orientado a recuperar el espacio público, mejorar la accesibilidad y reforzar el carácter peatonal de la plaza.
            </p>
            <p className="text-base leading-[1.85] font-light opacity-85 mb-8">
              Una intervención que suma valor al día a día: más espacio para caminar, nuevas zonas verdes, mobiliario urbano, iluminación renovada y una plaza pensada para volver a ser lugar de encuentro.
            </p>
            <a
              href="https://www.vigoe.es/comarcas/val-minor/baiona/casi-15-millones-para-urbanizar-la-plaza-central-de-baiona-asi-sera-el-bulevar-ajardinado-de-santa-liberata/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.65rem] tracking-[0.22em] uppercase opacity-50 hover:opacity-90 border-b border-current/40 pb-1 inline-block transition-opacity"
            >
              Fuente: VigoÉ
            </a>
          </Reveal>
        </div>
      </section>

      {/* CAP III — VIVIENDAS */}
      <section id="viviendas" className="py-28 md:py-40 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-20">
            <Reveal><p className="chapter-label mb-6">Capítulo III — Viviendas</p></Reveal>
            <Reveal delay={100}>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.15] text-ink-strong mb-10">
                Cuatro <span className="accent">únicas</span>.
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-base md:text-lg text-ink leading-[1.85] font-light max-w-2xl mx-auto">
                Una promoción de solo cuatro viviendas amplias de obra nueva: dos bajos con jardín y dos viviendas en primera planta.
              </p>
              <p className="text-base md:text-lg text-ink leading-[1.85] font-light max-w-2xl mx-auto mt-4">
                Una escala privada, pensada para quienes buscan vivir Baiona desde el centro, con amplitud, comodidad y sentido de casa.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-10">
            {viviendas.map((v, idx) => (
              <Reveal key={v.nombre} delay={idx * 80}>
                <article
                  className="group h-full flex flex-col transition-all duration-500"
                  style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
                >
                  <div
                    className="p-6 md:p-8 flex items-center justify-center"
                    style={{ backgroundColor: "var(--stone-warm)" }}
                  >
                    <img
                      src={v.plano}
                      alt={`Plano de la vivienda ${v.nombre}`}
                      className="w-full h-auto max-h-[420px] object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-8 md:p-10 flex flex-col flex-grow">
                    <div className="flex items-baseline justify-between mb-4">
                      <h3 className="font-serif text-4xl text-ink-strong">{v.nombre}</h3>
                      <span className="eyebrow">{v.planta}</span>
                    </div>
                    <p className="text-sm text-ink leading-relaxed mb-8 flex-grow">{v.text}</p>

                    <dl className="grid grid-cols-3 gap-4 py-5 border-y border-border mb-8">
                      <div>
                        <dt className="eyebrow mb-1.5" style={{ fontSize: "0.6rem" }}>Superficie construida</dt>
                        <dd className="font-serif text-base text-ink-strong">{v.superficie}</dd>
                      </div>
                      <div>
                        <dt className="eyebrow mb-1.5" style={{ fontSize: "0.6rem" }}>Dormitorios</dt>
                        <dd className="font-serif text-base text-ink-strong">{v.dormitorios}</dd>
                      </div>
                      <div>
                        <dt className="eyebrow mb-1.5" style={{ fontSize: "0.6rem" }}>Precio</dt>
                        <dd className="font-serif text-base text-ink-strong">{v.precio}</dd>
                      </div>
                    </dl>

                    <a href="#contacto" className="btn-ghost w-full">Solicitar información</a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAP IV — CALIDADES (memoria visual) */}
      <section id="calidades" className="py-28 md:py-40 px-6 md:px-12" style={{ backgroundColor: "var(--card)" }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20 md:mb-24 max-w-3xl mx-auto">
            <Reveal><p className="chapter-label mb-6">Capítulo IV — Calidades</p></Reveal>
            <Reveal delay={100}>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.15] text-ink-strong mb-8">
                La <span className="accent">memoria</span> de Residencial Santa Liberata.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="font-serif italic text-lg md:text-xl text-ink mb-8">
                Roble, piedra, blancos rotos y luz cálida. Una calidad que se siente más que se enumera.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="hairline mb-8 mx-auto w-20" />
              <p className="text-base md:text-lg text-ink leading-[1.85] font-light">
                Una casa se reconoce en sus materiales: la temperatura de la madera, la luz indirecta, la continuidad de los tonos neutros y la calma de una composición bien resuelta.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-x-10 md:gap-x-14 gap-y-16 md:gap-y-24">
            {calidades.map((c, idx) => (
              <Reveal key={c.t} delay={(idx % 2) * 100}>
                <figure>
                  <img src={c.img} alt={c.t} className="w-full aspect-[4/3] object-cover mb-8" />
                  <figcaption>
                    <h3 className="font-serif text-2xl md:text-3xl text-ink-strong mb-4">{c.t}</h3>
                    <p className="text-base text-ink leading-[1.8] font-light max-w-md">{c.d}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="text-[0.7rem] text-ink/55 leading-relaxed mt-24 max-w-3xl mx-auto text-center italic font-light">
              Las calidades, marcas y referencias indicadas tienen carácter orientativo. El promotor se reserva el derecho a sustituirlas por materiales de características técnicas y estéticas equivalentes, en función de la disponibilidad del mercado o de ajustes propios del proceso de ejecución de la obra.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CAP V — ESTADO DEL PROYECTO */}
      <section className="py-28 md:py-40 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal><p className="chapter-label mb-6">Capítulo V — Estado del proyecto</p></Reveal>
          <Reveal delay={100}>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.15] text-ink-strong mb-10">
              Un proyecto <span className="accent">ya en marcha</span>.
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="text-base md:text-lg text-ink leading-[1.85] font-light max-w-2xl mx-auto mb-20">
              Residencial Santa Liberata avanza como una promoción de obra nueva con licencia concedida, construcción iniciada y entrega estimada para verano de 2027.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-10 md:gap-6 relative">
            <div className="hidden md:block absolute top-3 left-[16%] right-[16%] h-px" style={{ backgroundColor: "var(--bronze)", opacity: 0.4 }} />
            {[
              { t: "Licencia concedida", s: "Completado" },
              { t: "Construcción iniciada", s: "En curso" },
              { t: "Entrega estimada", s: "Verano 2027" },
            ].map((s, idx) => (
              <Reveal key={s.t} delay={idx * 120}>
                <div className="text-center relative">
                  <div className="w-2.5 h-2.5 rounded-full mx-auto mb-6 relative z-10" style={{ backgroundColor: "var(--bronze)" }} />
                  <h3 className="font-serif text-xl text-ink-strong mb-2">{s.t}</h3>
                  <p className="eyebrow">{s.s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAP VI — CONTACTO */}
      <section id="contacto" className="py-28 md:py-40 px-6 md:px-12" style={{ backgroundColor: "var(--stone-warm)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <Reveal><p className="chapter-label mb-6">Capítulo VI — Solicitar información</p></Reveal>
            <Reveal delay={100}>
              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.15] text-ink-strong mb-8">
                Solicitar información <span className="accent">privada</span>.
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-base md:text-lg text-ink leading-[1.85] font-light max-w-2xl mx-auto">
                Recibe el dossier comercial, consulta disponibilidad o agenda una visita informativa para conocer la promoción con más detalle.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Gracias. Nos pondremos en contacto."); }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <Field label="Nombre" type="text" name="nombre" />
                <Field label="Teléfono" type="tel" name="telefono" />
              </div>
              <Field label="Email" type="email" name="email" />
              <div>
                <label className="eyebrow block mb-3">Tipo de interés</label>
                <select
                  className="w-full bg-transparent border-b border-input py-3 text-base text-ink-strong focus:outline-none focus:border-ink-strong transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled>Seleccionar</option>
                  <option>Primera vivienda</option>
                  <option>Segunda residencia</option>
                  <option>Inversión patrimonial</option>
                  <option>Agente inmobiliario</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label className="eyebrow block mb-3">Mensaje</label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-input py-3 text-base text-ink-strong focus:outline-none focus:border-ink-strong transition-colors resize-none"
                />
              </div>
              <div className="pt-4">
                <button type="submit" className="btn-primary w-full md:w-auto">Solicitar dossier</button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Field({ label, type, name }: { label: string; type: string; name: string }) {
  return (
    <div>
      <label className="eyebrow block mb-3">{label}</label>
      <input
        type={type}
        name={name}
        className="w-full bg-transparent border-b border-input py-3 text-base text-ink-strong focus:outline-none focus:border-ink-strong transition-colors"
      />
    </div>
  );
}
