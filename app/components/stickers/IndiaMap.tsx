type Props = { className?: string };

/** Stylised India outline with Mumbai pin. */
export default function IndiaMap({ className }: Props) {
  return (
    <svg
      viewBox="0 0 100 120"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M40 8 Q26 4 22 16 Q20 26 26 32 Q14 38 18 50 Q12 56 18 64 Q16 76 28 82 Q34 92 44 100 Q52 110 58 102 Q66 92 64 80 Q74 72 70 60 Q82 52 76 42 Q86 32 78 22 Q70 12 60 14 Q50 8 40 8 Z"
        fill="#5C5A45"
        stroke="#0A0A0A"
        strokeWidth="2"
      />
      {/* Mumbai dot — west coast */}
      <circle cx="32" cy="68" r="5" fill="#FF2D9B" stroke="#0A0A0A" strokeWidth="1.5" />
      <text
        x="42"
        y="73"
        fill="#F4F1EC"
        fontFamily="Inter, sans-serif"
        fontSize="9"
        letterSpacing="1"
      >
        MUMBAI
      </text>
    </svg>
  );
}
