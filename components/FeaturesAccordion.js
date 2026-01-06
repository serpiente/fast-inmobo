import Image from "next/image";

// Features array - each feature has its own media
const features = [
  {
    title: "Captación multicanal",
    description:
      "Conecta portales inmobiliarios, Facebook Leads, Instagram, Google Ads, tu sitio web y WhatsApp Business en un solo lugar.",
    type: "image",
    path: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80",
    alt: "Dashboard de captación",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
        />
      </svg>
    ),
  },
  {
    title: "Asignación automática",
    description:
      "Cada lead se asigna automáticamente al agente correcto según tus reglas: zona, tipo de propiedad, disponibilidad o round-robin.",
    type: "image",
    path: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    alt: "Asignación de leads",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Seguimiento en WhatsApp",
    description:
      "Los agentes pueden seguir usando WhatsApp. Chat Estelar captura las conversaciones automáticamente para que tengas visibilidad completa.",
    type: "image",
    path: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    alt: "WhatsApp Business",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
        />
      </svg>
    ),
  },
  {
    title: "Reportes y métricas",
    description:
      "Visualiza tiempo de respuesta, leads atendidos, tasa de conversión y más—por agente, por fuente y por etapa del embudo.",
    type: "image",
    path: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    alt: "Dashboard de métricas",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
  },
];

// Media component for video or image
const Media = ({ feature }) => {
  const { type, path, format, alt } = feature;
  const style = "rounded-2xl w-full shadow-lg";

  if (type === "video") {
    return (
      <video
        className={style}
        autoPlay
        muted
        loop
        playsInline
        src={path}
      >
        <source src={path} type={format} />
      </video>
    );
  } else if (type === "image") {
    return (
      <Image
        src={path}
        alt={alt}
        className={`${style} object-cover aspect-video`}
        width={600}
        height={400}
      />
    );
  } else {
    return <div className={`${style} aspect-video bg-base-200`}></div>;
  }
};

// Feature block component - static, no accordion
const FeatureBlock = ({ feature, reversed }) => {
  const { title, description, svg } = feature;

  return (
    <div
      className={`flex flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 lg:gap-16 items-center`}
    >
      {/* Text content */}
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-primary">{svg}</span>
          <h3 className="text-2xl md:text-3xl font-bold text-base-content">
            {title}
          </h3>
        </div>
        <p className="text-lg text-base-content/70 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Media */}
      <div className="flex-1 w-full">
        <Media feature={feature} />
      </div>
    </div>
  );
};

// Main component - displays all features as static blocks
const FeaturesAccordion = () => {
  return (
    <section
      className="py-24 md:py-32 max-w-7xl mx-auto bg-base-100"
      id="features"
    >
      <div className="px-8">
        <h2 className="font-extrabold text-4xl lg:text-6xl tracking-tight mb-16 md:mb-24">
          Todo lo que necesitas para{" "}
          <span className="bg-neutral text-neutral-content px-2 md:px-4 py-1 md:py-0 leading-loose md:leading-relaxed box-decoration-clone">
            cerrar más ventas
          </span>
        </h2>

        {/* Feature blocks */}
        <div className="space-y-16 md:space-y-24">
          {features.map((feature, i) => (
            <FeatureBlock
              key={feature.title}
              feature={feature}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;
