import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/inmobo-logo.png";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                priority={true}
                className="h-8 w-auto"
                width={150}
                height={32}
              />
            </Link>

            <p className="mt-3 text-sm text-base-content/80">
              Asignación automática de leads y trazabilidad completa para agencias inmobiliarias.
            </p>
            <p className="mt-3 text-sm text-base-content/60">
              Copyright © {new Date().getFullYear()} - Todos los derechos reservados
            </p>
          </div>
          <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                ENLACES
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                {config.resend.supportEmail && (
                  <a
                    href={`mailto:${config.resend.supportEmail}`}
                    target="_blank"
                    className="link link-hover"
                    aria-label="Contactar Soporte"
                  >
                    Soporte
                  </a>
                )}
                <Link href="/#features" className="link link-hover">
                  Características
                </Link>
                <Link href="/#pricing" className="link link-hover">
                  Precios
                </Link>
                <Link href="/#faq" className="link link-hover">
                  FAQ
                </Link>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3">
                LEGAL
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/tos" className="link link-hover">
                  Términos de servicio
                </Link>
                <Link href="/privacy-policy" className="link link-hover">
                  Política de privacidad
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
