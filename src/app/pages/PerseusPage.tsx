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
      <div className="relative rounded-2xl shadow-xl overflow-hidden" style={{borderRadius: '16px'}}>
        <img
          src="/Images/Perseus/percyobserve.png"
          alt="RSI Perseus Hero"
          className="w-full h-[340px] object-cover"
          style={{borderRadius: '16px'}}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"
          style={{borderRadius: '16px'}}
        />
        <div
          className="absolute left-0 bottom-0 top-0 flex flex-col justify-center p-10 sm:p-14"
          style={{
            width: '48%',
            maxWidth: '600px',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)',
          }}
        >
          <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">RSI – Perseus</h1>
          <h2 className="text-lg font-medium text-indigo-200 mb-4">"Firing"</h2>
          <div className="bg-black/60 rounded-lg p-4">
            <p className="text-base text-gray-300 leading-tight">
              While not intended to engage capital ships, we use it against them anyway. A unique combination of speed, firepower, and durability allows it to excel in roles beyond its original design. That capability is refined, not assumed.
            </p>
          </div>
        </div>
      </div>
    </PDFSection>
    
      <PDFSection title="Critical Notes" level={2}>
        <div className="my-4 grid gap-4 md:grid-cols-3 text-center">
          <div className="relative">
            <CriticalNoteCard
              title="Main Guns"
              highlight="OPERATIONAL"
              highlightColor="green"
            >
              <div className='m-0'>Hitreg remains unreliable.</div>
              <div className='mt-1'>1.5km max effective range.</div>
            </CriticalNoteCard>
            <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(circle at 50% 50%, #2dd4bf 10%, #0f172a 100%)', opacity: 0.08, borderRadius: 'inherit'}} />
          </div>
          <div className="relative">
            <CriticalNoteCard
              title="Torpedoes"
              highlight="OPERATIONAL"
              highlightColor="green"
            >
              <div className='m-0'>Stalker V.</div>
              <div className='mt-1'>Extremely high hit rates.</div>
            </CriticalNoteCard>
            <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(circle at 50% 50%, #2dd4bf 10%, #0f172a 100%)', opacity: 0.08, borderRadius: 'inherit'}} />
          </div>
          <div className="relative">
            <CriticalNoteCard
              title="Capital Threats"
              highlight="BLOCKED"
              extraNotes={
                <>
                  <div>Deploy Polaris</div>
                  <div>Long-Range Sniping Ops</div>
                </>
              }
            />
            <div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(circle at 50% 50%, #ef4444 10%, #0f172a 100%)', opacity: 0.08, borderRadius: 'inherit'}} />
          </div>
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
        <div className="rounded-2xl bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-black/90 p-8 shadow-lg mb-12">
          <h3 className="text-lg font-semibold text-white mb-4">Relative Tracking — <span className="text-green-400 font-semibold">Belly</span></h3>
          <img src="/Images/Perseus/position.jpg" alt="Relative Tracking Belly" className="rounded-lg mb-6 w-full object-cover" />
          <p className="text-gray-300 mb-4">Establish alignment beneath the target while oriented aft. Fecessure on a power plant located behind the "X" toward the rear.</p>
          <ul className="list-disc pl-5 text-sm text-gray-300 space-y-2">
            <li>Coordinated pitch, <span className="text-green-400">stealth</span>, combined with feathered main preserve.</li>
            <li>Lateral thrust assists but do not destabilize position that could use a turret independently.</li>
          </ul>
        </div>
      </PDFSection>

      <div className="mt-16" />

      <PDFSection title="Crew Roles" level={2}>
        <div className="rounded-2xl bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-black/90 p-8 shadow-lg mb-12">
          <h3 className="text-lg font-semibold text-white mb-4">Gunner</h3>
          <ul className="list-disc pl-5 text-sm text-gray-300 space-y-2">
            <li>Core: Maintain turrets and stance discipline.</li>
            <li>Against smaller hulls, drop shields, finish components.</li>
            <li>Against equal or larger hulls, deny clear main & counter tracking.</li>
            <li>Lock torpedoes when viable. Maintain bridge heat stack.</li>
            <li>"Do not waste torpedoes stupidly." Value volume over damage.</li>
          </ul>
        </div>
      </PDFSection>

      <div className="mt-16" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <PDFSection title="Positioning & Range" level={2}>
          <div className="rounded-2xl bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-black/90 p-8 shadow-lg">
            <img src="/Images/Perseus/positioning-range.png" alt="Positioning & Range" className="rounded-lg mb-6 w-full object-cover" />
            <ul className="list-none text-sm text-gray-300 space-y-2">
              <li>20,000m — MID ZONE</li>
              <li>2,500m — RISK ZONE</li>
              <li>2,500m — x1ips x2ips</li>
            </ul>
          </div>
        </PDFSection>
        <PDFSection title="Loadout" level={2}>
          <div className="rounded-2xl bg-gradient-to-br from-slate-900/80 via-slate-950/90 to-black/90 p-8 shadow-lg">
            <ul className="list-disc pl-5 text-sm text-gray-300 space-y-2">
              <li>EX-CS Torpedoes</li>
              <li>S7 Ballistic (x2)</li>
              <li>S3 Laser Repeaters (x4)</li>
            </ul>
            <img src="/Images/Perseus/loadout.png" alt="Loadout" className="rounded-lg mt-6 w-full object-cover" />
          </div>
        </PDFSection>
      </div>

      <PDFSection title="General Rules" level={2}>
        <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
          <li>Restocking torp racks</li>
          <li>off bore torpedo's</li>
        </ul>
      </PDFSection>

      
    </>
  );
}
