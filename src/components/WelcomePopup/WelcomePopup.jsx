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

        {/* Columna izquierda: imagen */}
        <div className="cs_popup_col_image">
          <div className="cs_popup_image_label">
            <span className="cs_popup_badge">SEMANA SANTA</span>
            <p className="cs_popup_dates">1 · 2 · 3 · 4 · 5</p>
            <p className="cs_popup_month">ABRIL 2026</p>
          </div>
        </div>

        {/* Columna derecha: contenido */}
        <div className="cs_popup_col_content">
          <div className="cs_popup_col_inner">
            <div className="cs_popup_top">
              <h2 className="cs_popup_title">Grindelia</h2>
              <div className="cs_promo_discount">PROMO ESPECIAL</div>
              <p className="cs_promo_label">Semana Santa en Grindelia</p>
            </div>

            <ul className="cs_popup_benefits">
              <li>
                <span className="cs_benefit_icon">📅</span>
                <span>
                  <strong>Del 1 al 5 de abril</strong>
                </span>
              </li>
              <li>
                <span className="cs_benefit_icon">✔</span>
                <span>
                  <strong>4 noches</strong> + late check-out el 5 por la tarde
                </span>
              </li>
              <li>
                <span className="cs_benefit_icon">🎁</span>
                <span>
                  <strong>Regalo exclusivo</strong> de bienvenida
                </span>
              </li>
            </ul>

            <p className="cs_popup_desc">
              Departamentos de 2 y 3 ambientes, piscina climatizada y espacios
              de relax en la costa.
            </p>

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
      </div>
    </>
  );
}
