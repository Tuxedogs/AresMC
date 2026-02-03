import { PDFSection } from '@/app/components/PDFSection';
import { PDFCallout } from '@/app/components/PDFCallout';

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

        <p>
          Multi-crew ships are extremely undervalued currently, outside of a select few. We can in fact dominate group fights and 
          can hold our own in larger engagements. With the launch of Engineering, Gunnery and the turrets 
          themselves, these ships have gone through many iterations. 
          This is to make the crews of <span className="font-semibold text-indigo-400">ARES</span> a better 
          breed than the rest of the universe.
        </p>

        <p>
          This document will take you step by step on how to set up for manning <span className='text-amber-400 font-semibold'>turrets</span>, give you some high level  
          <span className='text-amber-400 font-semibold'> engineering</span> knowledge, as well as covering some of the recommended <span className='text-amber-400 font-semibold'>game settings</span> and 
          <span className='text-amber-400 font-semibold'> keybinds</span>. 
        </p>
        
        <p>      It will also touch briefly on <span className="text-amber-400 font-semibold">power distribution</span> and 
          general <span className="text-amber-400 font-semibold">prioritization under fire</span>. It will help you 
          to become the best version of yourself to take down your opponents.
        </p>

        <PDFCallout type="info" title="Who is this for?">
          Anyone interested in multi-crew operations, whether you're a dedicated 
          gunner, engineer, or pilot looking to understand your crew's needs better.
        </PDFCallout>
      </PDFSection>
    </>
  );
}
