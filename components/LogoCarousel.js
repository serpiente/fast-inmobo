import Image from "next/image";

const logos = [
  { name: "Century 21 Metropolitan", src: "/logos/century21-metropolitan.png" },
  { name: "Engel & Völkers", src: "/logos/engel-volkers.png" },
  { name: "Fedelonjas", src: "/logos/fedelonjas.png" },
  { name: "Century 21", src: "/logos/century21.png" },
  { name: "El Solar", src: "/logos/el-solar.png" },
  { name: "Century 21 Abundanza", src: "/logos/century21-abundanza.png" },
  { name: "deBedout", src: "/logos/debedout.png" },
  { name: "Keller Williams Santa Ana", src: "/logos/keller-williams-santa-ana.png" },
  { name: "RE/MAX Planet", src: "/logos/remax-planet.png" },
  { name: "RE/MAX Capital", src: "/logos/remax-capital.png" },
  { name: "Cool House", src: "/logos/cool-house.png" },
  { name: "Area IN Inmobiliaria", src: "/logos/area-in-inmobiliaria.png" },
  { name: "RE/MAX Conecta", src: "/logos/remax-conecta.png" },
  { name: "Brikss", src: "/logos/brikss.png" },
];

const LogoCarousel = () => {
  return (
    <div className="w-full py-4">
      <p className="text-sm text-base-content/60 text-center mb-4">
        Empresas que confían en nosotros
      </p>
      <div className="relative overflow-hidden">
        {/* Gradient fade en los bordes */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-base-200 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-base-200 to-transparent z-10" />

        {/* Contenedor del marquee */}
        <div className="flex animate-marquee">
          {/* Logos duplicados 2x para efecto infinito */}
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-8 flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={180}
                height={60}
                className="h-8 lg:h-14 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
