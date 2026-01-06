import Image from "next/image";

const logos = [
  { name: "Cliente 1", src: "/logos/logo-01.jpg" },
  { name: "Cliente 2", src: "/logos/logo-02.jpg" },
  { name: "Cliente 3", src: "/logos/logo-03.jpg" },
  { name: "Cliente 4", src: "/logos/logo-04.jpg" },
  { name: "Cliente 5", src: "/logos/logo-05.jpg" },
  { name: "Cliente 6", src: "/logos/logo-06.jpg" },
  { name: "Cliente 7", src: "/logos/logo-07.jpg" },
  { name: "Cliente 8", src: "/logos/logo-08.jpg" },
  { name: "Cliente 9", src: "/logos/logo-09.jpg" },
  { name: "Cliente 10", src: "/logos/logo-10.jpg" },
  { name: "Cliente 11", src: "/logos/logo-11.jpg" },
  { name: "Cliente 12", src: "/logos/logo-12.jpg" },
  { name: "Cliente 13", src: "/logos/logo-13.jpg" },
  { name: "Cliente 14", src: "/logos/logo-14.jpg" },
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
