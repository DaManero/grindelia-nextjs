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
      "noopener,noreferrer"
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
            <h2 className="cs_popup_title">ENERO – FEBRERO | TEMPORADA ALTA</h2>
            <p className="cs_popup_subtitle">Reservando tu semana ahora</p>
          </div>
        </div>
        <div className="cs_popup_content">
          <div className="cs_popup_body">
            <div className="cs_popup_promo">
              <div className="cs_promo_discount">✨ 15% OFF</div>
              <p className="cs_promo_text">
                Solo 4 unidades disponibles
                <br />
                <strong>¡Reservá ya tu semana!</strong>
              </p>
            </div>

            <div className="cs_popup_details">
              <div className="cs_detail_item">
                <span className="cs_detail_icon">📅</span>
                <p className="cs_detail_text">
                  Desde el <strong>Sábado 17 de Enero</strong>
                  <br />
                  hasta el <strong>Sábado 16 de Febrero</strong>
                </p>
              </div>
              <div className="cs_detail_item">
                <span className="cs_detail_icon">⚠️</span>
                <p className="cs_detail_text">
                  <strong>Solo 4 unidades disponibles</strong>
                  <br />
                  Temporada alta · Cupos limitados
                </p>
              </div>
            </div>

            <div className="cs_popup_highlight">
              <p className="cs_highlight_text">
                <strong>Aprovechá la temporada alta con descuento</strong>
              </p>
              <p className="cs_highlight_subtext">
                Las mejores semanas del verano te están esperando 🌿✨
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
