import { PDFCallout } from '../components/PDFCallout';
import { ShipPageTemplate } from '../components/ShipPageTemplate';
import { useRef, useState } from 'react';
import { PilotingSection } from '../components/PilotingSection';
import { ShipHeroBanner } from '../components/ShipHeroBanner';
import { CriticalNoteCard } from '../components/CriticalNoteCard';
import { PDFSection } from '../components/PDFSection';

export function PerseusPage() {
  const postureVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isPosturePlaying, setIsPosturePlaying] = useState(true);

  const handlePostureToggle = () => {
    const video = postureVideoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setIsPosturePlaying(true);
      return;
    }

    video.pause();
    setIsPosturePlaying(false);
  };

  return (
    <>
    <PDFSection title="" level={3}>  
        <ShipHeroBanner
          image="/Images/Perseus/percyobserve.png"
          imagePosition="left 97%"
          title="RSI - Perseus"
          subtitle='"Firing"'
          description={
            <p className="text-sm text-gray-300 leading-tight">
              While not intended to engage capital ships, we use it against them anyway. A unique combination of speed, firepower, and durability allows it to excel in roles beyond its original design. That capability is refined, not assumed.
            </p>
          }
        />
        </PDFSection>
    
      <PDFSection title="Critical Notes" level={2}>
        <div className="my-4 grid gap-4 md:grid-cols-3 text-center">
          <CriticalNoteCard
            title="Main Guns"
            highlight="OPERATIONAL"
            highlightColor="green"
          >
            <div className='m-0'>Hitreg remains unreliable.</div>
            <div className='mt-1'>1.5km max effective range.</div>
          </CriticalNoteCard>
          <CriticalNoteCard
            title="Torpedoes"
            highlight="OPERATIONAL"
            highlightColor="green"
          >
            <div className='m-0'>Stalker V.</div>
            <div className='mt-1'>Extremely high hit rates.</div>
          </CriticalNoteCard>
          <CriticalNoteCard
            title="Capital Threats"
            highlight="BLOCKED"
            extraNotes={
              <>
                <div>Deploy Polaris</div>
                <div>Long-Range Sniping Ops</div>
              </>
            }
            borderLeft
          />
        </div>
      </PDFSection>
      <PDFSection title="Piloting" level={2}>
        <div>The RSI Perseus heavy gunship is a sub-capital brawler optimized for harassment and close-range pressure on other large ships. In order to engage corvettes/frigates you will need to leverage it's superior maneuverability, to exploit blind spots, avoiding a fair fight. </div>
        <PilotingSection
          videoOrImage={
            <video
              ref={postureVideoRef}
              className="w-full aspect-video object-cover"
              src="/Images/Perseus/position.mp4"
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
            'If the Polaris initiates a forward burn, break position, rotate cleanly, apply boost, then re-establish contact.',
            'Because the initial positioning is controlled and close, the target cannot generate meaningful separation before pressure is resumed.',
          ]}
          isPosturePlaying={isPosturePlaying}
          onPostureToggle={handlePostureToggle}
        />
      </PDFSection>

      <PDFSection title="Piloting Execution" level={2}>
        <h3 className="text-lg font-semibold text-white mb-2">Relative Tracking — Belly</h3>
        <img src="/Images/Perseus/position.jpg" alt="Relative Tracking Belly" className="rounded-lg mb-4 w-full object-cover" />
        <p className="text-gray-300 mb-3">Establish alignment beneath the target while oriented aft. Fecessure on a power plant located behind the "X" toward the rear.</p>
        <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1 mb-2">
          <li>Coordinated pitch, <span className="text-green-400">stealth</span>, combined with feathered main preserve.</li>
          <li>Lateral thrust assists but do not destabilize position that could use a turret independently.</li>
        </ul>
      </PDFSection>

      <PDFSection title="Crew Roles" level={2}>
        <h3 className="text-lg font-semibold text-white mb-2">Gunner</h3>
        <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1 mb-2">
          <li>Core: Maintain turrets and stance discipline.</li>
          <li>Against smaller hulls, drop shields, finish components.</li>
          <li>Against equal or larger hulls, deny clear main & counter tracking.</li>
          <li>Lock torpedoes when viable. Maintain bridge heat stack.</li>
          <li>"Do not waste torpedoes stupidly." Value volume over damage.</li>
        </ul>
      </PDFSection>

      <PDFSection title="Positioning & Range" level={2}>
        <img src="/Images/Perseus/positioning-range.png" alt="Positioning & Range" className="rounded-lg mb-4 w-full object-cover" />
        <ul className="list-none text-sm text-gray-300 space-y-1">
          <li>20,000m — MID ZONE</li>
          <li>2,500m — RISK ZONE</li>
          <li>2,500m — x1ips x2ips</li>
        </ul>
      </PDFSection>

      <PDFSection title="Loadout" level={2}>
        <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1 mb-2">
          <li>EX-CS Torpedoes</li>
          <li>S7 Ballistic (x2)</li>
          <li>S3 Laser Repeaters (x4)</li>
        </ul>
        <img src="/Images/Perseus/loadout.png" alt="Loadout" className="rounded-lg mt-4 w-full object-cover" />
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
