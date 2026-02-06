import { PDFSection } from '../components/PDFSection';
import { PDFCallout } from '../components/PDFCallout';

export function IntroductionPage() {
  return (
    <>
      <PDFSection 
        title="Introduction" 
        subtitle="Welcome to Multi-Crew combat operations"
        level={1}
      >
        <p>
          First, I cannot thank <span className="font-semibold text-indigo-400">CosticLuna</span> enough 
          for letting me use, edit and expand upon her original documentation, as well as picking her brain. 
          This laid the foundation for Moonbreakers and MC training in general for the org. 
          A lot has changed since then, and I hope to keep this document updated as the game evolves.
        </p>

        <PDFCallout type="info" title="Who is this for?">
          Anyone interested in multi-crew operations, whether you're a dedicated 
          gunner, engineer, or pilot looking to understand your crew's needs better.
        </PDFCallout>
      </PDFSection>
    </>
  );
}
