import { useEffect, useState } from "react";
import { whatsappUrl } from "../../utils/booking";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14%       { transform: scale(1.18); }
          28%       { transform: scale(1); }
          42%       { transform: scale(1.12); }
          56%       { transform: scale(1); }
        }
        @keyframes heart-ping {
          0%   { transform: scale(1);   opacity: .45; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .wa-heart       { animation: heartbeat 1.8s ease-in-out infinite; }
        .wa-heart-ping  { animation: heart-ping 1.8s ease-out infinite; }
      `}</style>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className={`fixed bottom-6 right-6 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] shadow-[0_8px_32px_rgba(37,211,102,.35)] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(37,211,102,.50)] hover:scale-110 ${
          show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Ping ring */}
        <span className="wa-heart-ping absolute inset-0 rounded-full bg-[#25D366]/40" />

        {/* Animated heart */}
        <svg
          className="wa-heart relative z-10"
          width="26"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 21.5S2 14.5 2 7.5A5.5 5.5 0 0 1 13 5.34 5.5 5.5 0 0 1 24 7.5C24 14.5 13 21.5 13 21.5Z"
            fill="white"
            stroke="white"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </>
  );
}
