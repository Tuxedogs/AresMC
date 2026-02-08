import { ReactNode } from 'react';
import { Info, AlertTriangle, AlertCircle, LifeBuoy } from 'lucide-react';

interface PDFCalloutProps {
  type: 'info' | 'warning' | 'important' | 'assist' | 'caution';
  title?: string;
  titleClassName?: string;
  children: ReactNode;
}

export function PDFCallout({ type, title, titleClassName, children }: PDFCalloutProps) {
  const styles = {
    info: {
      border: 'border-blue-500/30',
      bg: 'bg-blue-950/20',
      icon: <Info className="w-5 h-5 text-blue-400" />,
      titleColor: 'text-blue-300',
    },
    warning: {
      border: 'border-amber-500/30',
      bg: 'bg-amber-950/20',
      icon: <AlertTriangle className="w-5 h-5 text-amber-400" />,
      titleColor: 'text-amber-300',
    },
    caution: {
      border: 'border-amber-300/30',
      bg: 'bg-amber-950/10',
      icon: <AlertTriangle className="w-5 h-5 text-amber-300" />,
      titleColor: 'text-amber-200',
    },
    important: {
      border: 'border-red-500/30',
      bg: 'bg-red-950/20',
      icon: <AlertCircle className="w-5 h-5 text-red-400" />,
      titleColor: 'text-red-300',
    },
    assist: {
      border: 'border-emerald-500/30',
      bg: 'bg-emerald-950/20',
      icon: <LifeBuoy className="w-5 h-5 text-emerald-300" />,
      titleColor: 'text-emerald-300',
    },
  };

  const style = styles[type];

  return (
    <div className={`${style.bg} ${style.border} border-l-4 rounded-r-lg p-4 my-6 flex gap-3`}>
      <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
      <div className="flex-1 text-sm">
        {title && (
          <div className={`${titleClassName ?? style.titleColor} font-semibold mb-2`}>
            {title}
          </div>
        )}
        <div className="text-gray-300 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
