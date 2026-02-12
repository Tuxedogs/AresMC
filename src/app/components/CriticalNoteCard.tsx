import { ReactNode } from 'react';

interface CriticalNoteCardProps {
  title: string;
  highlight: string;
  highlightColor?: 'green' | 'yellow' | 'red' | 'blue' | 'custom';
  highlightClassName?: string; // for custom colors
  children?: ReactNode;
  borderLeft?: boolean;
  extraNotes?: ReactNode;
}

const colorMap: Record<string, { border: string; bg: string; text: string }> = {
  green: {
    border: 'border-green-500/70',
    bg: 'bg-green-900/30',
    text: 'text-green-300',
  },
  yellow: {
    border: 'border-yellow-500/70',
    bg: 'bg-yellow-900/30',
    text: 'text-yellow-300',
  },
  red: {
    border: 'border-red-500',
    bg: 'bg-red-900/30',
    text: 'text-red-300',
  },
  blue: {
    border: 'border-blue-500/70',
    bg: 'bg-blue-900/30',
    text: 'text-blue-300',
  },
  custom: {
    border: '',
    bg: '',
    text: '',
  },
};

export function CriticalNoteCard({
  title,
  highlight,
  highlightColor = 'green',
  highlightClassName = '',
  children,
  borderLeft = false,
  extraNotes,
}: CriticalNoteCardProps) {
  let computedHighlightColor = highlightColor;
  let computedTitleClass = 'text-xs uppercase tracking-wider text-slate-300';
  let computedExtraNotes = extraNotes;

  if (highlight === 'CAUTION') {
    computedHighlightColor = 'yellow';
    computedTitleClass = 'text-xs uppercase tracking-wider text-yellow-300';
    if (extraNotes) {
      computedExtraNotes = <div className="mt-2 text-xs text-yellow-300">{extraNotes}</div>;
    }
  } else if (highlight === 'BLOCKED') {
    computedHighlightColor = 'red';
    computedTitleClass = 'text-xs uppercase tracking-wider text-red-300';
    if (extraNotes) {
      computedExtraNotes = <div className="mt-2 text-xs text-red-300">{extraNotes}</div>;
    }
  }

  const color = colorMap[computedHighlightColor] || colorMap.green;
  return (
    <div
      className={`rounded-lg bg-slate-900/30 p-4 text-center flex flex-col gap-1 border border-slate-800/60 ${
        borderLeft ? 'border-l-4 ' + color.border : ''
      }`}
    >
      <div className={computedTitleClass}>{title}</div>
      <div
        className={`mt-3 rounded-md border px-3 py-2 text-sm font-semibold text-white ${
          computedHighlightColor === 'custom'
            ? highlightClassName
            : color.border + ' ' + color.bg
        }`}
      >
        {highlight}
      </div>
      {children && <div className="mt-2 text-xs text-slate-400">{children}</div>}
      {computedExtraNotes}
    </div>
  );
}
