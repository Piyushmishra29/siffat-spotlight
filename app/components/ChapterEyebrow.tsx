type Tone = "pink" | "ink" | "paper";

type Props = {
  n: string;
  total?: string;
  label: string;
  tone?: Tone;
  className?: string;
};

const TONE: Record<Tone, { text: string; muted: string }> = {
  pink: { text: "text-pink", muted: "text-pink/55" },
  ink: { text: "text-ink", muted: "text-ink/45" },
  paper: { text: "text-paper", muted: "text-paper/55" },
};

export default function ChapterEyebrow({
  n,
  total = "08",
  label,
  tone = "pink",
  className = "",
}: Props) {
  const t = TONE[tone];
  return (
    <p
      className={`font-inter text-[10px] uppercase tracking-widest ${t.text} ${className}`}
    >
      <span className="tabular-nums">{n}</span>
      <span className={t.muted}> / {total}</span>
      <span className={t.muted}> — </span>
      <span>{label}</span>
    </p>
  );
}
