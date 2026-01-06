import LogoCarousel from "./LogoCarousel";

const Hero = () => {
  return (
    <section className="bg-base-200">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
        <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">

          <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
            Leads asignados al instante. Trazabilidad sin esfuerzo
          </h1>
          <p className="text-lg opacity-80 leading-relaxed">
          Inmobo conecta todos tus canales de captación, asigna cada lead automáticamente al agente correcto y te da visibilidad completa de lo que pasa después—sin que nadie tenga que hacerlo manualmente.        </p>
          <div className="flex flex-col items-center lg:items-start gap-3">
            <button className="btn btn-primary btn-wide">
              Agendar Demo
            </button>
            <p className="text-sm text-base-content/60">
              Únete a las 10+ inmobiliarias que ya nos usan
            </p>
          </div>
        </div>
        <div className="lg:w-full">
          <video
            src="/output.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </div>
      {/* Logo Carousel centrado debajo del hero */}
      <div className="max-w-4xl mx-auto px-8 pb-8">
        <LogoCarousel />
      </div>
    </section>
  );
};

export default Hero;
