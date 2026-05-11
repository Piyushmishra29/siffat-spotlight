type Props = { className?: string };

/** Film clapperboard, "TAKE 1" stamped. */
export default function Clapperboard({ className }: Props) {
  return (
    <svg
      viewBox="0 0 120 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* slate top with stripes */}
      <polygon
        points="6,8 110,2 116,28 12,34"
        fill="#0A0A0A"
        stroke="#0A0A0A"
        strokeWidth="2"
      />
      <polygon points="22,7 36,5 32,32 18,33" fill="#F4F1EC" />
      <polygon points="46,5 60,4 56,31 42,32" fill="#F4F1EC" />
      <polygon points="70,4 84,3 80,30 66,31" fill="#F4F1EC" />
      <polygon points="94,3 108,3 104,28 90,29" fill="#F4F1EC" />
      {/* board */}
      <rect x="10" y="34" width="104" height="58" fill="#FF2D9B" stroke="#0A0A0A" strokeWidth="2" />
      <text
        x="60"
        y="68"
        textAnchor="middle"
        fill="#0A0A0A"
        fontFamily="Impact, Arial Black, sans-serif"
        fontSize="20"
        letterSpacing="2"
      >
        TAKE 1
      </text>
      <text
        x="60"
        y="86"
        textAnchor="middle"
        fill="#0A0A0A"
        fontFamily="Inter, sans-serif"
        fontSize="9"
        letterSpacing="2"
      >
        MUMBAI
      </text>
    </svg>
  );
}
