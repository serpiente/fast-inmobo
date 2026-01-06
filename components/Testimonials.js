import Image from "next/image";

const testimonials = [
  {
    name: "Julián DeBedout",
    role: "Director General",
    company: "Inmobiliaria deBedout",
    text: "¡Excelente experiencia con la app Inmobo! La interfaz es **intuitiva**, han creado opciones a medida de nuestra inmobiliaria y recibimos **soporte 24/7**. Como CEO me ha permitido tener **mayor control y supervisión** en operaciones con brokers y procesos mejorando el servicio que prestamos a nuestros clientes. ¡Definitivamente la recomiendo!",
    logo: "/logos/debedout.png",
  },
  {
    name: "Laura Camargo",
    role: "Co-founder & CEO",
    company: "BRIKSS",
    text: "Chat estelar es una excelente herramienta que nos ha permitido **centralizar todos los contactos** en un solo lugar, **responder más rápido** y **no perder oportunidades** por falta de seguimiento. Chat Estelar es intuitivo, eficiente y se adapta muy bien al día a día de nuestro equipo comercial. Gracias a su automatización y organización, hemos mejorado notablemente la **gestión de leads y la conversión**. Sin duda, es una solución clave para cualquier inmobiliaria que quiera profesionalizar su atención al cliente.",
    logo: "/logos/brikss.png",
  },
  {
    name: "María José Herrera",
    role: "Coordinadora de Ventas",
    company: "Keller Williams Santa Ana",
    text: "Lo mejor es que mis agentes siguen usando WhatsApp como siempre, pero ahora yo puedo ver **todas las conversaciones y métricas** en un solo lugar.",
    logo: "/logos/keller-williams-santa-ana.png",
  },
];

// Function to render text with **bold** markdown
const renderTextWithBold = (text) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-base-content not-italic">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col h-full p-6 md:p-8 bg-base-200 rounded-2xl">
      {/* Logo */}
      <div className="mb-4">
        {testimonial.logo ? (
          <div className="h-12 bg-white rounded-lg flex items-center justify-start p-2 w-fit">
            <Image
              src={testimonial.logo}
              alt={testimonial.company}
              width={120}
              height={40}
              className="h-full w-auto object-contain"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
            {testimonial.name.charAt(0)}
          </div>
        )}
      </div>

      {/* Quote */}
      <blockquote className="flex-1 mb-6 relative">
        <span className="absolute -top-2 -left-1 text-5xl text-primary/30 font-serif">&ldquo;</span>
        <p className="text-sm text-base-content/70 leading-relaxed italic pl-6">
          {renderTextWithBold(testimonial.text)}
        </p>
        <span className="text-5xl text-primary/30 font-serif leading-none">&rdquo;</span>
      </blockquote>

      {/* Author */}
      <div className="pt-4 border-t border-base-content/10">
        <p className="font-semibold text-base-content">{testimonial.name}</p>
        <p className="text-sm text-base-content/60">
          {testimonial.role}, {testimonial.company}
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-base-100 py-24" id="testimonials">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-semibold text-primary mb-4">Testimonios</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-base-content mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
            Agencias inmobiliarias que ya transformaron su gestión de leads con Inmobo
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
