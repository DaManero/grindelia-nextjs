"use client";

import { useEffect, useState } from "react";
import "./WelcomePopup.scss";

// Configuración: cambiar a true cuando haya una nueva promoción
const POPUP_ENABLED = false;

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
            <h2 className="cs_popup_title">
              GRINDELIA · ECO APART | HOTEL & SPA 🌿
            </h2>
            <p className="cs_popup_subtitle">
              Un beneficio para quienes saben anticiparse.
            </p>
          </div>
        </div>
        <div className="cs_popup_content">
          <div className="cs_popup_body">
            <div className="cs_popup_promo">
              <div className="cs_promo_discount">✨ 15% de descuento</div>
              <p className="cs_promo_text">
                en reservas confirmadas
                <br />
                realizadas hasta el <strong>31 de diciembre</strong>
              </p>
            </div>

            <div className="cs_popup_details">
              <div className="cs_detail_item">
                <span className="cs_detail_icon">📅</span>
                <p className="cs_detail_text">
                  Válido para cualquier semana que se reserve,
                  <strong> incluyendo febrero</strong>
                </p>
              </div>
              <div className="cs_detail_item">
                <span className="cs_detail_icon">⚠️</span>
                <p className="cs_detail_text">
                  <strong>Cupos limitados</strong>
                  <br />
                  Aplicable solo a reservas confirmadas.
                </p>
              </div>
            </div>

            <div className="cs_popup_highlight">
              <p className="cs_highlight_text">
                <strong>Reservar antes es elegir mejor.</strong>
              </p>
              <p className="cs_highlight_subtext">
                No lo pienses mucho… el descanso también se agenda 🌿✨
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
