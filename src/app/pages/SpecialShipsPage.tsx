import { PDFSection } from '@/app/components/PDFSection';
import { PDFCallout } from '@/app/components/PDFCallout';

export function SpecialShipsPage() {
  return (
    <>
      <PDFSection 
        title="Ships" 
        subtitle="Capital-class and large multi-crew platform strategies"
        level={1}
      >
        <p>
          Each capital-class and large multi-crew ship has unique characteristics that require specific strategies 
          and crew coordination. Here's what you need to know about operating the major platforms.
        </p>

        <p>
          Ship pages are added as platforms become viable options in PU combat. Ships not included here are generally
          not fielded by us and don’t require documentation.
        </p>

        <p>
          Each page covers practical strategies, general rules of thumb, and loadout recommendations you can apply
          immediately.
        </p>
      </PDFSection>

    </>
  );
}
