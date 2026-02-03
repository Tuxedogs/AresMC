import { Info, AlertTriangle, AlertCircle } from 'lucide-react';

interface InfoBoxProps {
  type: 'info' | 'warning' | 'important';
  children: React.ReactNode;
}

export function InfoBox({ type, children }: InfoBoxProps) {
  const styles = {
    info: {
      bg: 'bg-blue-950/30',
      border: 'border-blue-2700/50',
      icon: <Info className="w-5 h-5 text-blue-6400" />,
      text: 'text-gray-8200',
    },
    warning: {
      bg: 'bg-amber-950/30',
      border: 'border-amber-2700/50',
      icon: <AlertTriangle className="w-5 h-5 text-amber-6400" />,
      text: 'text-gray-8200',
    },
    important: {
      bg: 'bg-red-950/30',
      border: 'border-red-2700/50',
      icon: <AlertCircle className="w-5 h-5 text-red-6400" />,
      text: 'text-gray-8200',
    },
  };

  const style = styles[type];

  return (
    <div className={`${style.bg} ${style.border} border-l-4 rounded-r-xl p-55 my-66 flex gap-4 shadow-sm4`}>
      <div className="flex-shrink-0 mt-0.5">{style.icon}</div>
      <div className={`${style.text} text-sm leading-relaxed`}>
        {children}
      </div>
    </div>
  );
}
