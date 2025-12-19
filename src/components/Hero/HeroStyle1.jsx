import React from "react";

export default function HeroStyle1({ title, subTitle, bgImgUrl }) {
  const bookingUrl =
    "https://book.octorate.com/octobook/site/reservation/index.xhtml?siteKey=8e3ffa8acec77e1b7347357712d940a3";

  return (
    <>
      <style>{`
        /* Estilos para los botones CTA del Hero */
        .cs_hero_cta_wrapper {
          display: flex;
          gap: 20px;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .cs_hero_btn_primary {
          position: relative;
          display: inline-block;
          padding: 18px 45px;
          background: #798a74;
          color: white;
          border: 2px solid #798a74;
          border-radius: 12px;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: 0.5px;
          text-decoration: none;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 25px rgba(121, 138, 116, 0.35);
          animation: pulse-reservation 2s infinite;
        }
        
        @keyframes pulse-reservation {
          0%, 100% {
            box-shadow: 0 8px 25px rgba(121, 138, 116, 0.35);
          }
          50% {
            box-shadow: 0 8px 35px rgba(121, 138, 116, 0.55);
          }
        }
        
        .cs_hero_btn_primary:hover {
          background: #6b7a66;
          border-color: #6b7a66;
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(121, 138, 116, 0.5);
          animation: none;
        }
        
        .cs_hero_btn_primary:active {
          transform: translateY(-1px);
        }
        
        .cs_hero_btn_secondary {
          display: inline-block;
          padding: 18px 40px;
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.8);
          border-radius: 12px;
          font-weight: 600;
          font-size: 17px;
          letter-spacing: 0.5px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .cs_hero_btn_secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: white;
          color: white;
          transform: translateY(-2px);
        }
        
        .cs_hero_urgency_text {
          margin-top: 20px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 15px;
          font-weight: 500;
          letter-spacing: 0.5px;
          animation: fadeIn 1s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .cs_hero_btn_primary,
          .cs_hero_btn_secondary {
            padding: 15px 35px;
            font-size: 16px;
            width: 100%;
            max-width: 280px;
          }
          
          .cs_hero_cta_wrapper {
            gap: 15px;
          }
          
          .cs_hero_urgency_text {
            font-size: 14px;
          }
        }
      `}</style>

      <div className="cs_hero cs_style_1 cs_center text-center position-relative cs_primary_bg">
        <figure
          className="cs_slider_parallax_bg cs_hero_bg cs_bg_filed h-100 w-100 position-absolute top-0 start-0 mb-0"
          style={{ backgroundImage: `url(${bgImgUrl})` }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(30, 30, 30, 0.45)",
            zIndex: 2,
          }}
        />
        <div className="container position-relative cs_zindex_3">
          <div className="cs_hero_text">
            {subTitle && (
              <p className="cs_hero_subtitle cs_white_color text-uppercase d-inline-flex position-relative cs_mb_25 cs_letter_spacing_1">
                <img
                  className="cs_hero_subtitle_icon_1 position-absolute start-0"
                  src="/images/icons/star.svg"
                  alt="Star"
                />
                <span dangerouslySetInnerHTML={{ __html: subTitle }} />
                <img
                  className="cs_hero_subtitle_icon_2 position-absolute end-0"
                  src="/images/icons/star.svg"
                  alt="Star"
                />
              </p>
            )}

            {title && (
              <h1
                className="cs_hero_title cs_fs_89 cs_white_color mb-0"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            )}

            {/* Doble CTA - Opción 1 */}
            <div className="cs_hero_cta_wrapper" style={{ marginTop: "40px" }}>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cs_hero_btn_primary"
              >
                RESERVAR AHORA
              </a>
              <a href="/rooms" className="cs_hero_btn_secondary">
                Ver Habitaciones
              </a>
            </div>

            <p className="cs_hero_urgency_text">
              ✨ Disponibilidad limitada para el verano 2025
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
