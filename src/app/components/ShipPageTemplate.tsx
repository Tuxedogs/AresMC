import { ReactNode } from 'react';
import { PDFSection } from '@/app/components/PDFSection';

interface ShipPageTemplateProps {
  title: string;
  subtitle: string;
  banner: ReactNode;
  overview?: ReactNode;
  criticalNotes?: ReactNode;
  piloting?: ReactNode;
  crew?: ReactNode;
  turretPosturing?: ReactNode;
  loadout?: ReactNode;
  generalRules?: ReactNode;
}

export function ShipPageTemplate({
  title,
  subtitle,
  banner,
  overview,
  criticalNotes,
  piloting,
  crew,
  turretPosturing,
  loadout,
  generalRules,
}: ShipPageTemplateProps) {
  const SectionDivider = () => (
    <div className="mt-3 mb-6 h-px bg-gradient-to-r from-indigo-500/50 via-indigo-500/20 to-transparent"></div>
  );

  const renderSection = (heading: string, content?: ReactNode) => {
    if (!content) {
      return null;
    }

    return (
      <>
        <SectionDivider />
        <h3 className="text-lg font-semibold mt-8">{heading}</h3>
        {content}
      </>
    );
  };

  return (
    <div style={{ marginTop: 0, paddingTop: 0 }}>
      {banner}
      {overview && (
        <>
          <h3 className="text-lg font-semibold mt-6">Overview</h3>
          {overview}
        </>
      )}
      {renderSection('Critical Notes', criticalNotes)}
      {renderSection('Piloting', piloting)}
      {renderSection('Crew', crew)}
      {renderSection('Turret Posturing', turretPosturing)}
      {renderSection('Loadout', loadout)}
      {renderSection('General Rules', generalRules)}
    </div>
  );
}
