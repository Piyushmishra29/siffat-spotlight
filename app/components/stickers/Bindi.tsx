type Props = { className?: string };

/** Bindi — hot red dot with little smile + eyes. */
export default function Bindi({ className }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="50" cy="50" r="44" fill="#C8102E" />
      <circle cx="37" cy="42" r="4" fill="#0A0A0A" />
      <circle cx="63" cy="42" r="4" fill="#0A0A0A" />
      <path
        d="M34 60 Q50 76 66 60"
        stroke="#0A0A0A"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
