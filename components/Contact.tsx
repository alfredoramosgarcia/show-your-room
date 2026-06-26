"use client";

import { Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  const handleContact = () => {
    window.location.href = "mailto:investment@alfredoramos.pro";
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contactCard">
          <div className="contactIcon">
            <Mail size={42} />
          </div>

          <span className="contactTag">CONTACTO</span>

          <h2 className="contactTitle">¿Te imaginas viviendo aquí?</h2>

          <p className="contactDescription">
            Si esta vivienda encaja con lo que estás buscando, escríbeme y
            responderé personalmente lo antes posible con toda la información y
            disponibilidad.
          </p>

          <a
            href="mailto:investment@alfredoramos.pro?subject=Interés%20en%20la%20vivienda"
            className="contactButton"
          >
            <Mail size={22} />
            Contactar por correo
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
