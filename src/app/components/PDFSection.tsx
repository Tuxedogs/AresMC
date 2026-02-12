import { ReactNode } from 'react';

interface PDFSectionProps {
  title: string;
  subtitle?: string;
  level?: 1 | 2 | 3;
  children: ReactNode;
  id?: string;
  showHeader?: boolean;
}

export function PDFSection({ title, subtitle, level = 1, children, id }: PDFSectionProps) {
  const HeadingTag = `h${level + 1}` as keyof JSX.IntrinsicElements;
  
  const headingStyles = {
    1: 'text-4xl font-light text-white mb-3 tracking-tight',
    2: 'text-2xl font-normal text-white mb-3 tracking-tight',
    3: 'text-xl font-medium text-gray-200 mb-2',
  };

  return (
    <section id={id} className="pdf-section mb-10 bg-black">
      <div className="mb-6">
        {level === 2 && (
          <div className="mt-3 mb-4 h-px bg-gradient-to-r from-indigo-500/50 via-indigo-500/20 to-transparent" />
        )}
        <HeadingTag className={headingStyles[level]}>
          {title}
        </HeadingTag>
        {subtitle && (
          <p className="text-sm text-gray-400 mt-2 leading-relaxed">
            {subtitle}
          </p>
        )}
        {level === 1 && (
          <div className="mt-3 h-px bg-gradient-to-r from-indigo-500/50 via-indigo-500/20 to-transparent" />
        )}
      </div>
      <div className="text-gray-300 text-[15px] leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
}
