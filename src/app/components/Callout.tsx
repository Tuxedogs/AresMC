type CalloutVariant = "note" | "tip" | "warning";

const variantStyles: Record<CalloutVariant, { ring: string; title: string; titleColor: string; }> = {
  note: {
    ring: "border-indigo-900/40 bg-gray-900/50",
    title: "Note",
    titleColor: "text-indigo-300",
  },
  tip: {
    ring: "border-emerald-900/40 bg-gray-900/50",
    title: "Tip",
    titleColor: "text-emerald-300",
  },
  warning: {
    ring: "border-amber-900/40 bg-gray-900/50",
    title: "Warning",
    titleColor: "text-amber-300",
  },
};

export function Callout({
  variant = "note",
  title,
  children,
}: {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
}) {
  const v = variantStyles[variant];

  return (
    <div className={`my-6 rounded-lg border p-4 ${v.ring}`}>
      <div className={`mb-2 text-sm font-semibold ${v.titleColor}`}>
        {title ?? v.title}
      </div>
      <div className="text-sm leading-relaxed text-gray-200">{children}</div>
    </div>
  );
}