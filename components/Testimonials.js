import Image from "next/image";

const testimonials = [
  {
    name: "Julián DeBedout",
    role: "Director General",
    company: "Inmobiliaria deBedout",
    text: "¡Excelente experiencia con la app Inmobo! La interfaz es intuitiva, han creado opciones a medida de nuestra inmobiliaria y recibimos soporte 24/7. Como CEO me ha permitido tener mayor control y supervisión en operaciones con brokers y procesos mejorando el servicio que prestamos a nuestros clientes. ¡Definitivamente la recomiendo!",
    rating: 5,
    logo: "/logos/debedout.jpg",
  },
  {
    name: "Laura Camargo",
    role: "Co-founder & CEO",
    company: "BRIKSS",
    text: "Chat estelar es una excelente herramienta que nos ha permitido centralizar todos los contactos en un solo lugar, responder más rápido y no perder oportunidades por falta de seguimiento. Chat Estelar es intuitivo, eficiente y se adapta muy bien al día a día de nuestro equipo comercial. Gracias a su automatización y organización, hemos mejorado notablemente la gestión de leads y la conversión. Sin duda, es una solución clave para cualquier inmobiliaria que quiera profesionalizar su atención al cliente.",
    rating: 5,
    logo: "/logos/brikss.jpg",
  },
  {
    name: "María José Herrera",
    role: "Coordinadora de Ventas",
    company: "Keller Williams Santa Ana",
    text: "Lo mejor es que mis agentes siguen usando WhatsApp como siempre, pero ahora yo puedo ver todas las conversaciones y métricas en un solo lugar.",
    rating: 5,
  },
];

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5 text-primary"
  >
    <path
      fillRule="evenodd"
      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
      clipRule="evenodd"
    />
  </svg>
);

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col h-full p-6 md:p-8 bg-base-100 rounded-2xl">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="flex-1 mb-6">
        <p className="text-base-content/80 leading-relaxed">
          &ldquo;{testimonial.text}&rdquo;
        </p>
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-base-content/10">
        {testimonial.logo ? (
          <div className="w-1/2 h-16 bg-white rounded-lg flex items-center justify-center p-2">
            <Image
              src={testimonial.logo}
              alt={testimonial.company}
              width={120}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div className="flex-1">
          <p className="font-semibold text-base-content">{testimonial.name}</p>
          <p className="text-sm text-base-content/60">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="bg-base-200 py-24" id="testimonials">
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
