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
          First, I cannot thank <span className="font-semibold text-indigo-400">CosticLuna</span> enough for letting me
          use, edit and expand upon her original documentation, as well as picking her brain. Your work provided a much
          needed kick-start to getting this entire project rolling, becoming a critical part of multi-crew training. A lot has changed since then, and I hope to keep this document updated as the game evolves.
        </p>

        <p>
          This site is a working reference for how we approach multi-crew combat. It’s organized to move from general
          principles into specific roles and situations, with diagrams and short callouts.
        </p>

        <p>
          Not every fight needs strict doctrine. Casual roams and small engagements can be flexible. When escalation
          happens, this is the framework we fall back on to decide what we field, how we commit, and what we avoid
          entirely.
        </p>

        <p>
          Each capital-class and large multi-crew ship has unique characteristics that require specific strategies and
          crew coordination. Ship pages are added as platforms become viable options in PU combat. Ships not included
          here are generally not fielded by us and don't require documentation.
        </p>

        <PDFCallout type="info" title="Who is this for?">
          Anyone interested in multi-crew operations, whether you're a dedicated 
          gunner, engineer, or pilot looking to understand your crew's needs better.
        </PDFCallout>

        <p className="italic text-sm text-gray-400">
          This section is currently under development, if you have feedback or want to add to the discussion reach out....
        </p>
      </PDFSection>
    </>
  );
}
