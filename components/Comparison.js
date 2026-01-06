import Image from "next/image";

const features = [
  { full: "Asignación automática de leads", short: "Asignación automática" },
  { full: "Integración con WhatsApp Business", short: "WhatsApp Business" },
  { full: "Captura de conversaciones automática", short: "Captura conversaciones" },
  { full: "Reportes en tiempo real", short: "Reportes tiempo real" },
  { full: "Soporte 24/7", short: "Soporte 24/7" },
  { full: "Integraciones con portales inmobiliarios", short: "Portales inmobiliarios" },
  { full: "App móvil iOS y Android", short: "App móvil" },
  { full: "Historial completo del lead (asignación, citas, mensajes)", short: "Historial del lead" },
  { full: "Mensajes ilimitados sin costos adicionales", short: "Mensajes ilimitados", highlight: true },
  { full: "Sin costos de implementación", short: "Sin costo setup", highlight: true },
];

const competitors = [
  {
    name: "Chat Estelar",
    shortName: "Nosotros",
    logo: "/inmobo-logo.png",
    isUs: true,
    features: [true, true, true, true, true, true, true, true, true, true],
  },
  {
    name: "Palomma",
    shortName: "Palomma",
    logo: "/logos/palomma.png",
    isUs: false,
    features: [false, true, false, false, false, true, false, false, false, null],
  },
  {
    name: "Rentmies",
    shortName: "Rentmies",
    logo: "/logos/rentmies.png",
    isUs: false,
    features: [true, false, false, true, false, false, true, false, false, null],
  },
];

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 md:w-6 md:h-6 text-green-500"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
      clipRule="evenodd"
    />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 md:w-6 md:h-6 text-red-500"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
      clipRule="evenodd"
    />
  </svg>
);

const UnknownIcon = () => (
  <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
    <div className="w-4 md:w-5 h-0.5 bg-base-content/30 rounded-full" />
  </div>
);

const Comparison = () => {
  return (
    <section className="bg-base-200 py-24" id="comparison">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <p className="font-semibold text-primary mb-4">Comparativa</p>
          <h2 className="text-2xl md:text-5xl font-extrabold text-base-content mb-4">
            ¿Por qué elegir Chat Estelar?
          </h2>
          <p className="text-base-content/70 text-sm md:text-lg max-w-2xl mx-auto">
            Compara nuestras funcionalidades con otras soluciones del mercado
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm md:text-base">
            {/* Header Row */}
            <thead>
              <tr>
                <th className="text-left p-2 md:p-4 bg-base-200 rounded-tl-xl">
                  <span className="text-base-content/60 font-medium text-xs md:text-sm">Funcionalidades</span>
                </th>
                {competitors.map((competitor, i) => (
                  <th
                    key={i}
                    className={`p-2 md:p-4 text-center ${
                      competitor.isUs
                        ? "bg-primary/10 border-2 border-primary border-b-0 rounded-t-xl"
                        : "bg-base-200"
                    } ${i === competitors.length - 1 && !competitor.isUs ? "rounded-tr-xl" : ""}`}
                  >
                    <div className="flex flex-col items-center gap-1 md:gap-2">
                      {/* Mobile: Just name */}
                      <span className="md:hidden font-semibold text-xs text-base-content">
                        {competitor.shortName}
                      </span>

                      {/* Desktop: Logo */}
                      <div className="hidden md:flex h-10 items-center justify-center">
                        <Image
                          src={competitor.logo}
                          alt={competitor.name}
                          width={120}
                          height={40}
                          className="h-8 w-auto object-contain"
                        />
                      </div>

                      {competitor.isUs && (
                        <span className="hidden md:inline text-xs bg-primary text-primary-content px-2 py-0.5 rounded-full font-medium">
                          Nosotros
                        </span>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Feature Rows */}
            <tbody>
              {features.map((feature, featureIndex) => (
                <tr key={featureIndex} className="border-b border-base-200">
                  <td className="p-2 md:p-4 text-base-content font-medium text-xs md:text-sm">
                    {/* Mobile: Short name */}
                    <span className="md:hidden">{feature.short}</span>
                    {/* Desktop: Full name */}
                    <span className="hidden md:inline">{feature.full}</span>
                  </td>
                  {competitors.map((competitor, compIndex) => (
                    <td
                      key={compIndex}
                      className={`p-2 md:p-4 text-center ${
                        competitor.isUs ? "bg-primary/5 border-x-2 border-primary" : ""
                      }`}
                    >
                      <div className="flex justify-center">
                        {competitor.features[featureIndex] === true && <CheckIcon />}
                        {competitor.features[featureIndex] === false && <XIcon />}
                        {competitor.features[featureIndex] === null && <UnknownIcon />}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

            {/* Footer Row */}
            <tfoot>
              <tr>
                <td className="py-4 md:p-4 bg-base-200 rounded-bl-xl"></td>
                {competitors.map((competitor, i) => (
                  <td
                    key={i}
                    className={`py-4 px-1 md:p-4 text-center ${
                      competitor.isUs
                        ? "bg-primary/10 border-2 border-primary border-t-0 rounded-b-xl"
                        : "bg-base-200"
                    } ${i === competitors.length - 1 && !competitor.isUs ? "rounded-br-xl" : ""}`}
                  >
                    {competitor.isUs && (
                      <button className="btn btn-primary btn-xs md:btn-sm whitespace-nowrap">
                        <span className="md:hidden">Empezar</span>
                        <span className="hidden md:inline">Empezar Gratis</span>
                      </button>
                    )}
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
