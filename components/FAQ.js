"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "¿Con qué canales se integra Inmobo?",
    answer: (
      <p>
        Portales inmobiliarios principales de tu país, Facebook Leads, Instagram, Google Ads, tu sitio web y WhatsApp Business. Si usas otro canal, pregúntanos.
      </p>
    ),
  },
  {
    question: "¿Cuánto toma implementarlo?",
    answer: (
      <p>
        La mayoría de las agencias están funcionando en menos de una semana. Te ayudamos con la configuración inicial.
      </p>
    ),
  },
  {
    question: "¿Mis agentes tienen que aprender un sistema nuevo?",
    answer: (
      <p>
        Inmobo es muy simple. Además, los agentes pueden seguir usando WhatsApp—nosotros capturamos la información automáticamente.
      </p>
    ),
  },
  {
    question: "¿Qué pasa si un agente no responde a tiempo?",
    answer: (
      <p>
        Puedes configurar reasignación automática. Si el agente no contacta al lead en X minutos, pasa al siguiente.
      </p>
    ),
  },
  {
    question: "¿Puedo ver reportes de desempeño por agente?",
    answer: (
      <p>
        Sí. Ves tiempo de respuesta, leads atendidos, tasa de conversión y más—por agente, por fuente y por etapa del embudo.
      </p>
    ),
  },
  {
    question: "¿Funciona para agencias pequeñas?",
    answer: (
      <p>
        Sí. Tenemos agencias desde 2 agentes hasta más de 50. El plan Starter está pensado para equipos pequeños.
      </p>
    ),
  },
  {
    question: "¿Hay contrato de permanencia?",
    answer: (
      <p>
        No. Pagas mes a mes y puedes cancelar cuando quieras.
      </p>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="bg-base-100" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Preguntas Frecuentes
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
