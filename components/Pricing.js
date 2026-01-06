const plans = [
  {
    name: "PRO GALILEO",
    price: "50.000",
    priceLabel: "por usuario al mes",
    description: "Plataforma de Precios",
    isFeatured: false,
    features: [
      "5 certificados Galileo",
      "Mapa de Precios Ilimitado",
      "Administrador de usuarios",
      "Logo Personalizado",
    ],
  },
  {
    name: "ENTERPRISE GALILEO",
    price: "300.000",
    priceLabel: "mensual",
    description: "Según tamaño inventario",
    subtitle: "150 Inmuebles",
    isFeatured: true,
    features: [
      "Certificados ILIMITADOS",
      "Envío automático de certificados a usuarios",
      "Mapa de Precios Ilimitado",
      "Logo Personalizado",
      "Módulo de Estadísticas",
      "Atención Premium",
    ],
  },
  {
    name: "ENTERPRISE ESTELAR",
    price: "350.000",
    priceLabel: "mensual",
    description: "Según número de agentes",
    subtitle: "0 Agentes",
    isFeatured: false,
    features: [
      "Bot para asignar leads compradores",
      "Canales: WhatsApp, Correo, Instagram",
      "Fuentes: Metrocuadrado, Fincaraiz, Mercado Libre, Proppit, Ciencuadras",
      "App iOS e Instagram",
      "CRM Supernova",
      "Red Estelar",
      "Atención Premium",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="bg-base-200 overflow-hidden" id="pricing">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <p className="font-medium text-primary mb-8">Precios</p>
          <h2 className="font-bold text-3xl lg:text-5xl tracking-tight mb-4">
            Planes Mensuales
          </h2>
          <p className="text-base-content/70 text-lg">
            Accede a una suscripción mensual del Chat Estelar y/o la Plataforma de Precios Galileo
          </p>
        </div>

        <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="relative w-full max-w-sm">
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span className="badge text-xs text-primary-content font-semibold border-0 bg-primary">
                    POPULAR
                  </span>
                </div>
              )}

              {plan.isFeatured && (
                <div className="absolute -inset-[1px] rounded-[9px] bg-primary z-10"></div>
              )}

              <div className="relative flex flex-col h-full gap-5 lg:gap-6 z-10 bg-base-100 p-8 rounded-lg">
                {/* Header section with fixed height for alignment */}
                <div className="lg:min-h-[180px] flex flex-col">
                  <div className="text-center">
                    <p className="text-lg lg:text-xl font-bold text-primary">
                      {plan.name}
                    </p>
                    {plan.description && (
                      <p className="text-base-content/60 text-sm mt-1">
                        {plan.description}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col items-center gap-1 mt-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl lg:text-5xl tracking-tight font-extrabold">
                        ${plan.price}
                      </span>
                    </div>
                    <p className="text-sm text-base-content/60">
                      {plan.priceLabel}
                    </p>
                    <p className="text-sm text-base-content/80 font-medium mt-2 min-h-[20px]">
                      {plan.subtitle || "\u00A0"}
                    </p>
                  </div>
                </div>

                <button className="btn btn-primary btn-block">
                  Probar 1 Mes Gratis
                </button>

                <ul className="space-y-2.5 leading-relaxed text-sm flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-[18px] h-[18px] text-primary shrink-0 mt-0.5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
