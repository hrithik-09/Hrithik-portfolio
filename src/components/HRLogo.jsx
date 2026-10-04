import { useId } from 'react';

export default function HRLogo({ className = '', size = 30 }) {
  const gradientId = useId();
  const stroke = `url(#${gradientId})`;

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14B8A6" />
          <stop offset="100%" stopColor="#0F766E" />
        </linearGradient>
      </defs>

      <rect x="5" y="5" width="90" height="90" rx="20" stroke={stroke} strokeWidth="3" strokeOpacity="0.3" />

      <path
        d="M 25 30 V 70 M 25 50 H 45 M 45 30 V 70"
        stroke={stroke}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M 60 30 V 70 M 60 30 H 72 C 82 30 82 50 72 50 H 60 M 70 50 L 82 70"
        stroke={stroke}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
