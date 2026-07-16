export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--noir)", color: "var(--ivory)" }}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="font-serif text-2xl tracking-[0.15em] uppercase mb-3">Residencial Santa Liberata</div>
            <p className="text-sm opacity-80 leading-relaxed max-w-xs mb-2">
              Obra nueva boutique en Baiona.
            </p>
            <p className="text-xs opacity-60 leading-relaxed max-w-xs">
              Plaza Santa Liberata, 8, Baiona.
            </p>
          </div>
          <div>
            <div className="text-[0.7rem] tracking-[0.28em] uppercase opacity-60 mb-5">Navegación</div>
            <ul className="space-y-3 text-sm">
              <li><a href="#concepto" className="opacity-80 hover:opacity-100">Concepto</a></li>
              <li><a href="#lugar" className="opacity-80 hover:opacity-100">El lugar</a></li>
              <li><a href="#viviendas" className="opacity-80 hover:opacity-100">Viviendas</a></li>
              <li><a href="#calidades" className="opacity-80 hover:opacity-100">Calidades</a></li>
              <li><a href="#contacto" className="opacity-80 hover:opacity-100">Contacto</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[0.7rem] tracking-[0.28em] uppercase opacity-60 mb-5">Legal</div>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="opacity-80 hover:opacity-100">Aviso legal</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100">Política de privacidad</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100">Política de cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="hairline mb-10" style={{ opacity: 0.2 }} />
        <p className="text-xs opacity-50 leading-relaxed max-w-3xl">
          Imágenes, renders, calidades y datos comerciales sujetos a disponibilidad, evolución del proyecto y documentación contractual correspondiente.
        </p>
        <p className="text-xs opacity-40 mt-6">© {new Date().getFullYear()} Residencial Santa Liberata</p>
      </div>
    </footer>
  );
}
