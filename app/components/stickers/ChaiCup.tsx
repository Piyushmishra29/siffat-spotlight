type Props = { className?: string };

/** Kulhad mug with steam swirls. */
export default function ChaiCup({ className }: Props) {
  return (
    <svg
      viewBox="0 0 100 110"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* steam */}
      <path
        d="M35 18 Q30 8 38 4 Q44 12 38 22"
        stroke="#5C5A45"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M50 14 Q45 4 53 0 Q60 8 53 18"
        stroke="#5C5A45"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M65 18 Q60 8 68 4 Q74 12 68 22"
        stroke="#5C5A45"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {/* mug */}
      <path
        d="M22 32 L78 32 L72 100 Q72 105 66 105 L34 105 Q28 105 28 100 Z"
        fill="#B85A2B"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <ellipse cx="50" cy="32" rx="28" ry="6" fill="#4A2415" stroke="#0A0A0A" strokeWidth="3" />
      <ellipse cx="50" cy="32" rx="20" ry="3.5" fill="#8B3A1A" />
    </svg>
  );
}
