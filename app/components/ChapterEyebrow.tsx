type Props = {
  n: string;
  total?: string;
  label: string;
  className?: string;
};

export default function ChapterEyebrow({
  n,
  total = "08",
  label,
  className = "",
}: Props) {
  return (
    <p
      className={
        "font-inter text-[10px] uppercase tracking-widest text-pink " + className
      }
    >
      <span className="tabular-nums">{n}</span>
      <span className="text-pink/55"> / {total}</span>
      <span className="text-pink/55"> — </span>
      <span>{label}</span>
    </p>
  );
}
