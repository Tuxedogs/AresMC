import { PDFSection } from '@/app/components/PDFSection';
import { PDFCallout } from '@/app/components/PDFCallout';

export function HowToUsePage() {
  return (
    <>
      <PDFSection 
        title="How to Use This Knowledge" 
        subtitle="Putting theory into practice"
        level={1}
      >
        <p>
          So, now you know everything that you need to know to become a respectable turret gunner, how do you use this 
          knowledge? Simple! <span className="text-amber-400 font-bold text-lg">Practice.</span>
        </p>

        <p>
          Get used to what weapons you are using, how your pilot flies, and how your turret moves. 90% of my skill comes 
          from practice. You can study all you want about how the ship systems work, when to fire, and how to manage 
          your capacitor, but you will never be able to use that information without practical experience.
        </p>

        <PDFCallout type="info">
          Whether you gain that experience by taking gunnery classes or by hopping into someone's turret during regular 
          gaming sessions, makes no difference. Getting that hands-on experience and using what you have learned is what 
          matters in the end.
        </PDFCallout>

        <div className="bg-indigo-950/30 border border-indigo-600/40 rounded-lg p-6 my-6">
          <h3 className="text-xl font-semibold text-indigo-400 mb-3">Key Takeaways</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              <span>Master your keybindings and make them second nature</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              <span>Understand delta and effective weapon ranges</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              <span>Build a strong relationship with your pilot</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              <span>Use clear, concise call-outs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              <span>Manage your capacitor intelligently</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-500 font-bold">•</span>
              <span>Practice, practice, practice!</span>
            </li>
          </ul>
        </div>
      </PDFSection>
    </>
  );
}
