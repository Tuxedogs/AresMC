import { PDFCallout } from '../components/PDFCallout';
import { ShipPageTemplate } from '../components/ShipPageTemplate';
import { PilotingSection } from '../components/PilotingSection';
import { ShipHeroBanner } from '../components/ShipHeroBanner';
import { CriticalNoteCard } from '../components/CriticalNoteCard';
import { PDFSection } from '../components/PDFSection';

export function PolarisPage() {
  return (
    <>
      <PDFSection title="Polaris" subtitle="The Capital Hunter" level={1}>
        <ShipHeroBanner
          image="/Images/Polaris/polaris-hero.png"
          imagePosition="left 97%"
          title="Polaris"
          subtitle="The Capital Hunter"
          description={
            <p className="text-sm text-gray-300 leading-tight">
              The Polaris is a fast, light capital ship designed to hunt and destroy enemy capital ships. Its torpedoes are its primary weapon, but it also features a hangar and strong defensive turrets.
            </p>
          }
        />
        <p className="mt-6">
          The Polaris is built around long-range threat projection, requiring timing, restraint, and an enemy who doesn't know their flare keybind. When used correctly, it forces the enemy to react before they ever get to choose a fight.
        </p>
      </PDFSection>

      <PDFSection title="Critical Notes" level={2}>
        <div className="my-4 grid gap-4 md:grid-cols-2 text-center">
          <CriticalNoteCard
            title="Torpedo Management"
            highlight="CAUTION"
            extraNotes={<>Coordinate with FC for target priority</>}
          />
          <CriticalNoteCard
            title="Critical Damage"
            highlight="BLOCKED"
            borderLeft
            extraNotes={<div>Preserve ship for future engagements</div>}
          />
        </div>
      </PDFSection>

      <PDFSection title="Piloting" level={2}>
        <PilotingSection
          stepTitle="Space-Submarine Ops."
          steps={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Remain undetected and drift into effective torpedo range. Carefully manage the margin between your operator losing lock and the enemy detecting you—feather that distance constantly.',
            'Maintain full spatial awareness. Monitor threats off your flanks, above, and below—stealth only holds when you are nose-on and presenting the smallest profile possible.',
          ]}
        />
      </PDFSection>

      <PDFSection title="Crew" level={2}>
        <div className="my-6 grid gap-4 md:grid-cols-3">
          <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5">
            <h5 className="text-amber-400 font-semibold mb-2">Skeleton Operations</h5>
            <p className="text-sm text-gray-300">
              The Polaris isn't designed for a minimal crew, fortunately it can fulfill its primary combat roles at near full effectiveness with just one additional crewmember.
            </p>
          </div>
          <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 text-left">
            <h5 className="text-emerald-400 font-semibold mb-2">Bay or Bridge</h5>
            <p className="text-sm text-gray-300">
              Bridge allows for easy access to the hangar and quad 4 turrets, while bay allows for quicker torpedo reloads, Maris 6's and engineering support. Both are viable options depending on crew preference.
            </p>
          </div>
          <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5">
            <h5 className="text-amber-400 font-semibold mb-2">Turret Support</h5>
            <p className="text-sm text-gray-300">
              Additional crew may man the quad S4 turrets to deter smaller threats, but this is situational and not standard doctrine. Over-crewing reduces efficiency and increases risk.
            </p>
          </div>
        </div>
      </PDFSection>

      <PDFSection title="Posture and Ranges" level={2}>
        <img
          src="/Images/Polaris/turret-posturing.png"
          alt="Turret arcs, nose orientation, and dead zones"
          className="w-full rounded-lg border border-slate-800 my-4"
        />
        <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 my-6">
          <h4 className="text-indigo-400 font-semibold mb-2 text-base">Torpedo Effectiveness:</h4>
          <p className="text-sm">
            A single well placed size 10 torpedo out of one volley (typically called packs - 4pack -6pack -8pack)
            is all that's required to knock out both power plants on an Idris, crippling it extensively. It will
            take half the total payload to achieve a similar result while hitting hull alone, relying on luck to hit
            critical components or just raw damage throughput to get to the Power Plants via bleed.
          </p>
        </div>
        <p className="font-semibold text-amber-400">
          Keep the Power Plant and QT drive up and running at all costs, because that's what you'll be doing.
        </p>
      </PDFSection>

      <PDFSection title="Loadout" level={2}>
        <a className="text-indigo-300 underline" href="spviewer.update" target="_blank" rel="noreferrer">
          spviewer.update
        </a>
      </PDFSection>

      <PDFSection title="General Rules" level={2}>
        <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
          <li>Restocking torp racks</li>
          <li>off bore torpedo's</li>
        </ul>
      </PDFSection>
    </>
  );
}
