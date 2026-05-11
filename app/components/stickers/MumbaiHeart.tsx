type Props = { className?: string };

/** Hot-pink heart with MUMBAI stamp. */
export default function MumbaiHeart({ className }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M50 85 C 18 65, 8 40, 24 24 C 36 12, 50 22, 50 32 C 50 22, 64 12, 76 24 C 92 40, 82 65, 50 85 Z"
        fill="#FF2D9B"
        stroke="#0A0A0A"
        strokeWidth="3"
      />
      <text
        x="50"
        y="52"
        textAnchor="middle"
        fill="#FFFFFF"
        fontFamily="Impact, Arial Black, sans-serif"
        fontSize="14"
        letterSpacing="2"
      >
        MUMBAI
      </text>
      {/* tiny smile */}
      <path
        d="M40 60 Q50 68 60 60"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
