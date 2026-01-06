"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

// Features array - 5 features with videos
const features = [
  {
    title: "Identificación automática",
    description:
      "Cero confusión: el cliente pregunta por una propiedad y el sistema ya sabe cuál es. Sin preguntas innecesarias, sin tiempo perdido.",
    type: "video",
    path: "/videos/features/01-reconocimiento-propiedad.mp4",
    format: "video/mp4",
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
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    title: "Asignación al instante",
    description:
      "Tu lead recibe respuesta en segundos, no en horas. El agente correcto lo atiende antes de que pierda interés.",
    type: "video",
    path: "/videos/features/02-asignacion-agente.mp4",
    format: "video/mp4",
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
    title: "IA que resuelve dudas",
    description:
      "El cliente pregunta por metros, precio o amenidades y recibe respuesta al instante. Tú entras cuando necesita un experto, no un bot.",
    type: "video",
    path: "/videos/features/04-ia-dudas.mp4",
    format: "video/mp4",
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
    title: "Agenda inteligente, control total",
    description:
      "La IA filtra horarios imposibles y te propone los viables. Tú apruebas, el cliente recibe confirmación al instante.",
    type: "video",
    path: "/videos/features/05-agendamiento.mp4",
    format: "video/mp4",
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
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
        />
      </svg>
    ),
  },
  {
    title: "Cierre con toque humano",
    description:
      "El agente confirma personalmente desde el CRM. El cliente siente atención real, tú mantienes el control total.",
    type: "video",
    path: "/videos/features/06-cierre-confirmacion.mp4",
    format: "video/mp4",
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
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

// Media component for video or image
const Media = ({ feature }) => {
  const { type, path, format, alt } = feature;
  const style = "rounded-2xl w-full shadow-lg";
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (type !== "video" || !videoRef.current) return;

    const video = videoRef.current;
    let animationId;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
      animationId = requestAnimationFrame(updateProgress);
    };

    animationId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationId);
  }, [type]);

  if (type === "video") {
    return (
      <div className="relative">
        <video
          ref={videoRef}
          className={style}
          autoPlay
          muted
          loop
          playsInline
          src={path}
        >
          <source src={path} type={format} />
        </video>
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-base-300/50 rounded-b-2xl overflow-hidden">
          <div
            className="h-full bg-primary"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
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
const FeatureBlock = ({ feature, reversed, isFirst }) => {
  const { title, description, svg } = feature;

  return (
    <div>
      {/* Divider line - 75% width, centered */}
      {!isFirst && (
        <div className="flex justify-center py-10 md:py-12">
          <div className="w-3/4 h-0.5 bg-base-300" />
        </div>
      )}
      <div
        className={`flex flex-col ${
          reversed ? "lg:flex-row-reverse" : "lg:flex-row"
        } gap-8 lg:gap-16 items-center`}
      >
      {/* Text content */}
      <div className="flex-1 lg:flex-[3] space-y-5">
        <div className="flex items-center gap-3">
          <span className="text-primary">{svg}</span>
          <h3 className="text-3xl md:text-4xl font-bold text-base-content">
            {title}
          </h3>
        </div>
        <p className="text-xl text-base-content/70 leading-relaxed">
          {description}
        </p>
      </div>

        {/* Media */}
        <div className="flex-1 lg:flex-[2] w-full">
          <Media feature={feature} />
        </div>
      </div>
    </div>
  );
};

// Main component - displays all features as static blocks
const FeaturesAccordion = () => {
  return (
    <section
      className="py-16 md:py-20 max-w-7xl mx-auto bg-base-100"
      id="features"
    >
      <div className="px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-4">
            Un lead llega. Esto pasa.
          </h2>
          <p className="text-lg md:text-xl text-base-content/70 max-w-3xl mx-auto">
            Las preguntas repetitivas, la asignación manual, el ir y venir para agendar. Chat Estelar se encarga. Tú te encargas de cerrar.
          </p>
        </div>

        {/* Feature blocks */}
        <div>
          {features.map((feature, i) => (
            <FeatureBlock
              key={feature.title}
              feature={feature}
              reversed={i % 2 === 1}
              isFirst={i === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;
