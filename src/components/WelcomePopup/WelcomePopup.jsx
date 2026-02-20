"use client";

import { useEffect, useState } from "react";
import "./WelcomePopup.scss";

// Configuración: cambiar a true cuando haya una nueva promoción
const POPUP_ENABLED = true;

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Mostrar el popup después de un pequeño delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBooking = () => {
    window.open(
      "https://book.octorate.com/octobook/site/reservation/index.xhtml?siteKey=8e3ffa8acec77e1b7347357712d940a3",
      "_blank",
      "noopener,noreferrer",
    );
    setIsOpen(false);
  };

  // No mostrar el popup si está deshabilitado
  if (!POPUP_ENABLED || !isOpen) return null;

  return (
    <>
      <div className="cs_popup_overlay" onClick={handleClose} />
      <div className="cs_welcome_popup">
        <button
          className="cs_popup_close"
          onClick={handleClose}
          aria-label="Cerrar popup"
        >
          ×
        </button>

        <div className="cs_popup_image_bg">
          <div className="cs_popup_header">
            <h2 className="cs_popup_title">COMENZÁ EL OTOÑO EN GRINDELIA.</h2>
            <p className="cs_popup_subtitle">21 | 22 | 23 | 24 de marzo</p>
          </div>
        </div>
        <div className="cs_popup_content">
          <div className="cs_popup_body">
            <div className="cs_popup_promo">
              <div className="cs_promo_discount">FIN DE SEMANA LARGO XXL</div>
              <p className="cs_promo_text">
                En Grindelia sabemos que un fin de semana largo no se
                desaprovecha.
                <br />
                <strong>
                  Por eso armamos una propuesta especial pensada para que
                  realmente valga la pena quedarse los cuatro días.
                </strong>
              </p>
            </div>

            <div className="cs_popup_details">
              <div className="cs_detail_item cs_detail_item--highlight">
                <span className="cs_detail_icon">✔</span>
                <p className="cs_detail_text">
                  <strong>
                    Descuento especial por estadía completa de 4 noches
                  </strong>
                </p>
              </div>
              <div className="cs_detail_item cs_detail_item--highlight">
                <span className="cs_detail_icon">✔</span>
                <p className="cs_detail_text">
                  <strong>Late check-out incluido</strong>
                </p>
              </div>
            </div>

            <div className="cs_popup_highlight">
              <p className="cs_highlight_text">
                <strong>Beneficios exclusivos para esta fecha</strong>
              </p>
              <p className="cs_highlight_subtext">
                Aprovechá este finde largo para desconectar 🌿✨
              </p>
              <p className="cs_highlight_subtext">
                Más tiempo para disfrutar el spa, el entorno y el descanso
              </p>
              <p className="cs_highlight_subtext">
                Evitás el horario pico y el tráfico de regreso
              </p>
            </div>
          </div>

          <div className="cs_popup_footer">
            <button className="cs_popup_btn_primary" onClick={handleBooking}>
              RESERVAR AHORA
            </button>
            <button className="cs_popup_btn_secondary" onClick={handleClose}>
              Explorar el sitio
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
