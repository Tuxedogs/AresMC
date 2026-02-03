import { ReactNode } from 'react';
import { Info, AlertTriangle, AlertCircle } from 'lucide-react';

interface PDFCalloutProps {
  type: 'info' | 'warning' | 'important';
  title?: string;
  children: ReactNode;
}

export function PDFCallout({ type, title, children }: PDFCalloutProps) {
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
    important: {
      border: 'border-red-500/30',
      bg: 'bg-red-950/20',
      icon: <AlertCircle className="w-5 h-5 text-red-400" />,
      titleColor: 'text-red-300',
    },
  };

  const style = styles[type];

  return (
    <div className={`${style.bg} ${style.border} border-l-4 rounded-r-lg p-4 my-6 flex gap-3`}>
      <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
      <div className="flex-1 text-sm">
        {title && (
          <div className={`${style.titleColor} font-semibold mb-2`}>
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
