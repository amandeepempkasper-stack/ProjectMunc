import { useEffect, useState } from "react";
import "./popup.css";

function FirstVisitPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) {
      setShow(true);
    }

    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setShow(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // ✅ Stop page scroll when popup is open
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  if (!show) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1040,
        }}
      ></div>

      {/* Modal */}
      {/* Modal */}
      <div
        className="modal show d-block"
        role="dialog"
        style={{
          zIndex: 1050,
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90vw", // responsive width
          maxWidth: "1200px", // allow bigger image on desktop
        }}
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          style={{
            maxWidth: "max-content", // allow desktop big image
            margin: "0 auto", // keep it centered
            width: "90vw", // responsive
          }}
        >
          <div
            className="modal-content position-relative p-0"
            style={{
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            {/* Close button */}
            <button
              type="button"
              className="btn-close position-absolute top-0 end-0 m-2"
              aria-label="Close"
              onClick={() => setShow(false)}
            ></button>

            {/* Image */}
            <img
              src="/popupImg.png"
              alt="Popup"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "90vh",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstVisitPopup;
