import { PDFSection } from '@/app/components/PDFSection';
import { PDFCallout } from '@/app/components/PDFCallout';

export function SubTargetingPage() {
  return (
    <>
      <PDFSection 
        title="Sub Targeting Guide" 
        subtitle="Targeting specific components for tactical advantage"
        level={1}
      >
        <p>
          Sub-targeting is one of the most powerful tools available to turret gunners. By targeting specific components 
          of enemy ships, you can disable critical systems and turn the tide of battle.
        </p>

        <PDFCallout type="important" title="Key Binding">
          Make sure you have "Cycle Sub-Target Forward" and "Cycle Sub-Target Back" 
          bound (see Keybindings section).
        </PDFCallout>
      </PDFSection>

      <PDFSection title="Sub-Targeting Basics" level={2}>
        <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 my-6">
          <h4 className="text-indigo-400 font-semibold mb-3 text-base">Priority Target Components:</h4>
          <div className="space-y-3 text-sm">
            <div>
              <h5 className="text-amber-400 font-semibold mb-1">Power Plants</h5>
              <p>
                Disabling the power plant will cripple all ship systems. This is often your primary target on larger 
                vessels.
              </p>
            </div>

            <div>
              <h5 className="text-amber-400 font-semibold mb-1">Engines</h5>
              <p>
                Taking out engines reduces mobility and makes the target easier to hit for extended periods.
              </p>
            </div>

            <div>
              <h5 className="text-amber-400 font-semibold mb-1">Weapons</h5>
              <p>
                Disabling enemy weapons reduces incoming damage to your ship and allies.
              </p>
            </div>

            <div>
              <h5 className="text-amber-400 font-semibold mb-1">Shields</h5>
              <p>
                Shield generators when destroyed prevent shield regeneration, making hull damage stick.
              </p>
            </div>

            <div>
              <h5 className="text-amber-400 font-semibold mb-1">Quantum Drive</h5>
              <p>
                Prevents enemy escape, especially useful when trying to secure a kill.
              </p>
            </div>
          </div>
        </div>

        <PDFCallout type="info" title="Coming Soon">
          Detailed diagrams showing component locations on common ships, optimal 
          engagement angles for component targeting, and advanced sub-targeting tactics.
        </PDFCallout>

        <p className="italic text-sm mt-6 text-gray-400">
          *****SUB TARGETING IMAGERY***** - Visual guides to be added
        </p>
      </PDFSection>

      <PDFSection title="Advanced Techniques" level={2}>
        <p>
          Once you've mastered basic sub-targeting, coordinate with your pilot and other gunners to focus fire on 
          specific components for maximum effect.
        </p>

        <PDFCallout type="warning" title="Important">
          Auto-gimbal will track sub-targeted components when within range. Use this to 
          your advantage for precise component destruction.
        </PDFCallout>

        <p className="italic text-sm mt-6 text-gray-400">
          More detailed content coming soon. Check back for updates!
        </p>
      </PDFSection>
    </>
  );
}
