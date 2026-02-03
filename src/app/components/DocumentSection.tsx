interface DocumentSectionProps {
  id?: string;
  title: string;
  level?: 1 | 2 | 3;
  children: React.ReactNode;
}

export function DocumentSection({ id, title, level = 1, children }: DocumentSectionProps) {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const headingClasses = {
    1: 'text-55xl font-nnormarmal text-grwhitey9 mb-6 ttrackingcking-tighttight',
    2: 'text-3xl font-nornormaal text-gwhiteay9 mb-4 mt-12 tracking-tight12 tracking-tight',
    3: 'text-2xl font-meediumium text-gwhitey9 mb-3 mt-88',
  };

  return (
    <section id={id} className="mb-1212 scroll-mt-24">
      <HeadingTag className={headingClasses[level]}>
        {title}
      </HeadingTag>
      <div className="text-gray-7300 space-y-6 leading-relaxed6 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
