import { ShipPageTemplate } from '../components/ShipPageTemplate';
import { PDFSection } from '../components/PDFSection';
import { ShipHeroBanner } from '../components/ShipHeroBanner';
import { CriticalNoteCard } from '../components/CriticalNoteCard';
import { PilotingSection } from '../components/PilotingSection';

export function IdrisPage() {
  return (
    <>
      <PDFSection title="Idris" subtitle="The Flagship" level={1}>
        <ShipHeroBanner
          image="/Images/Idris/idris-hero.png"
          imagePosition="left 97%"
          title="Idris"
          subtitle="The Flagship"
          description={
            <p className="text-sm text-gray-300 leading-tight">
              The Idris is the backbone of our fleet, providing command, control, and heavy firepower. Its railgun and fighter complement make it a formidable opponent in any engagement.
            </p>
          }
        />
        <p className="mt-6">
          The Idris is a command ship, excelling in fleet coordination and heavy engagement. This page covers doctrine, critical notes, and piloting tips.
        </p>
      </PDFSection>

      <PDFSection title="Critical Notes" level={2}>
        <div className="my-4 grid gap-4 md:grid-cols-2 text-center">
          <CriticalNoteCard
            title="Railgun Usage"
            highlight="CAUTION"
            extraNotes={<div>Maximize impact on enemy capitals</div>}
          />
          <CriticalNoteCard
            title="Flagship Priority"
            highlight="BLOCKED"
            borderLeft
            extraNotes={<div>Do not overextend</div>}
          />
        </div>
      </PDFSection>

      <PDFSection title="Crew" level={2}>
        <div className="my-6 grid gap-4 md:grid-cols-3">
          <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5">
            <h5 className="text-amber-400 font-semibold mb-2">Command</h5>
            <p className="text-sm text-gray-300">
              The Idris is typically operated by a single commander, responsible for all ship systems and combat decisions. This role demands situational awareness and rapid prioritization.
            </p>
          </div>
          <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 text-left">
            <h5 className="text-emerald-400 font-semibold mb-2">Engineering & Systems</h5>
            <p className="text-sm text-gray-300">
              If a second crew member is present, they focus on maintaining shields, power, and critical systems under fire. Their presence extends the ship’s survivability in prolonged engagements.
            </p>
          </div>
          <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5">
            <h5 className="text-amber-400 font-semibold mb-2">Turret & Support</h5>
            <p className="text-sm text-gray-300">
              Additional crew may man turrets or assist with repairs, but the Idris is not designed for large crews. Over-crewing can reduce efficiency and complicate command.
            </p>
          </div>
        </div>
      </PDFSection>

      <PDFSection title="Piloting" level={2}>
        <PilotingSection
          videoOrImage={
            <video
              className="w-full aspect-video object-cover"
              src="/Images/Idris/position.mp4"
              autoPlay
              loop
              muted
              playsInline
              controlsList="nodownload nofullscreen noremoteplayback nopictureinpicture"
              disablePictureInPicture
            />
          }
          stepTitle="Relative Tracking"
          steps={[
            'Establish and maintain relative tracking on selected target while oriented aft',
            'Roll to match target maneuvers',
            'If the target initiates a forward burn, break position, rotate cleanly, apply boost, then re-establish contact.',
            'Because the initial positioning is controlled and close, the target cannot generate meaningful separation before pressure is resumed.',
          ]}
        />
      </PDFSection>

      <PDFSection title="Posture and Ranges" level={2}>
        <img
          src="/Images/Idris/turret-posturing.png"
          alt="Turret arcs, nose orientation, and dead zones"
          className="w-full rounded-lg border border-slate-800 my-4"
        />
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
