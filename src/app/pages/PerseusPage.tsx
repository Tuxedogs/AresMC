import { PDFCallout } from '@/app/components/PDFCallout';
import { ShipPageTemplate } from '@/app/components/ShipPageTemplate';
import { useRef, useState } from 'react';

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
      <ShipPageTemplate
        // Removed top separators and version text
        banner={
          // HeroBanner with overlayed title, subtitle, and overview text
          <div
            className="perseus-hero-banner w-full overflow-hidden rounded-lg border border-slate-800 relative"
            style={{
              height: 'clamp(320px,48vh,520px)',
              backgroundImage: "url('/Images/Perseus/percyobserve.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'left 90%',
              backgroundRepeat: 'no-repeat',
            }}
            aria-label="Perseus hero image"
          >
            <div className="absolute bottom-0 left-0 w-full h-[36%] pointer-events-none" style={{
              background: 'linear-gradient(to top, var(--tw-gradient-to, #0a0a0a) 80%, rgba(10,10,10,0) 100%)',
            }} aria-hidden="true" />
            {/* Title, subtitle, and overview bottom-left */}
            <div
              className="perseus-hero-content absolute left-0 bottom-0 z-10 p-6 sm:p-8 text-left"
              style={{
                color: 'var(--tw-text-opacity, #e5e7eb)',
                textShadow: '0 2px 8px rgba(0,0,0,0.32)',
                width: '48%', // 20% shorter than 60%
                maxWidth: '100vw',
              }}
            >
              <div className="mb-2">
                <h1
                  className="text-3xl font-bold text-white mb-2"
                  style={{
                    textShadow: '0 4px 16px rgba(0,0,0,0.48), 0 2px 8px rgba(0,0,0,0.32)',
                  }}
                >
                  Perseus
                </h1>
                <h2
                  className="text-lg font-medium text-indigo-200 mb-3"
                  style={{
                    textShadow: '0 3px 12px rgba(0,0,0,0.36), 0 1px 4px rgba(0,0,0,0.24)',
                  }}
                >
                  This isn’t a free win.
                </h2>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-sm text-gray-300 leading-tight">
                  While not intended to engage capital ships. With refined piloting and coordination, it can. That capability is refined, not assumed.
                </p>
              </div>
            </div>
            <style>{`
              .perseus-hero-content {
                /* Desktop: width set inline to 60% */
              }
              @media (max-width: 900px) {
                .perseus-hero-content {
                  width: 90vw !important;
                  max-width: 100vw;
                }
              }
              @media (max-width: 640px) {
                .perseus-hero-content {
                  left: 50%;
                  bottom: 0.5rem;
                  transform: translateX(-50%);
                  width: 95vw !important;
                  max-width: 100vw;
                  padding: 0.75rem;
                  text-align: center;
                }
              }
            `}</style>
          </div>
        }
        // No overview prop; hero now contains overview
        criticalNotes={
          <div className="my-4 grid gap-4 md:grid-cols-3 text-center">
            {/* Consistent decision cards keep risk calls scannable. */}
              <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-4 text-center">
              <div className="text-xs uppercase tracking-wider text-slate-300">No Capital Present</div>
              <div className="mt-3 rounded-md border border-green-500/70 px-3 py-2 text-sm font-semibold text-white">
                Field Perseus
              </div>
              <div className="mt-2 text-xs text-slate-400">Standard doctrine / FC discretion</div>
            </div>
              <div className="rounded-lg border border-slate-800 bg-slate-950/70 p-4 text-center">
              <div className="text-xs uppercase tracking-wider text-slate-300">1x Idris (Any Polaris)</div>
              <div className="mt-3 rounded-md border border-green-500/70 px-3 py-2 text-sm font-semibold text-white">
                Field Perseus
              </div>
              <div className="mt-2 text-xs text-slate-400">Ignore Polaris Count</div>
            </div>
              <div className="rounded-lg border border-red-500/40 bg-slate-950/70 p-4 text-center">
              <div className="text-xs uppercase tracking-wider text-red-300">2+ Idris</div>
              <div className="mt-3 rounded-md border border-red-500 px-3 py-2 text-sm font-extrabold text-white">
                DO NOT FIELD PERSEUS
              </div>
              <div className="mt-2 text-xs text-red-300">Deploy Polaris</div>
              <div className="mt-1 text-xs text-red-300">Long-Range Sniping Ops</div>
            </div>
          </div>
        }
        piloting={
          <>
            <p className="text-sm text-gray-300">
              Interceptor like tuning requires position to be held in uncomfortable postures. Decoupled flying is a
              must.
            </p>
            <div className="my-6 grid gap-4 md:grid-cols-[3.3fr_2fr] md:items-start">
              <div className="flex flex-col gap-4">
                <div className="rounded-lg border border-slate-800 bg-slate-950/60 overflow-hidden">
                  <div className="relative">
                    <video
                      ref={postureVideoRef}
                      className="w-full aspect-video object-cover"
                      src="/Images/Perseus/position.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      onPlay={() => setIsPosturePlaying(true)}
                      onPause={() => setIsPosturePlaying(false)}
                    />
                    <button
                      type="button"
                      onClick={handlePostureToggle}
                      className="absolute bottom-2 right-2 z-10 rounded-full border border-slate-700/70 bg-slate-950/80 px-3 py-1 text-xs font-semibold text-slate-100 shadow-sm transition hover:bg-slate-900"
                      aria-label={isPosturePlaying ? 'Pause posture video' : 'Play posture video'}
                    >
                      {isPosturePlaying ? 'Pause' : 'Play'}
                    </button>
                  </div>
                </div>
                <PDFCallout type="assist" title="Subtargeting">
                  At close ranges, auto-gimbal is extremely effective. For nearly all other applications, Precision
                  Manual (PM) is preferred.
                </PDFCallout>
              </div>
              {/* Ordered steps make the posture sequence easy to follow at a glance. */}
              <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 pb-4 flex flex-col">
                <h4 className="text-amber-400 font-semibold mb-3 text-base">Belly-Hold Tracking</h4>
                <ol className="text-sm text-gray-300 space-y-3 leading-relaxed list-decimal pl-5">
                  <li>
                    Hold the ship stationary on the belly of the Polaris, oriented facing rear. Maintain position using
                    low main thrust combined with continuous strafe corrections rather than chasing with pitch or yaw.
                  </li>
                  <li>
                    When the Polaris begins to roll, immediately match the roll while increasing lateral strafe input.
                    This keeps relative position locked and prevents sliding off the hull. The goal is to move with the
                    rotation, not fight it.
                  </li>
                  <li>
                    If the Polaris initiates a forward burn, do not panic or overcorrect. Break position, rotate cleanly,
                    apply a short boost, then re-establish contact.
                  </li>
                  <li>
                    Because the initial positioning is controlled and close, the target cannot generate meaningful
                    separation before pressure is resumed.
                  </li>
                </ol>
              </div>
            </div>
          </>
        }
        crew={
          <>
            <div className="grid gap-4 md:grid-cols-2">
              {/* Parallel cards keep crew roles consistent and easy to compare. */}
              <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5">
                <h5 className="text-amber-400 font-semibold mb-2">Gun 1 - Top Forward Main Turret</h5>
                <p className="text-sm text-gray-300">
                  Sitting directly behind the nose, they have the benefit of extreme coverage and visibility to most
                  threats, as well as the benefit of being positioned in such a way that natural flight by the pilot
                  makes life a lot better for its operator.
                </p>
              </div>
              <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5">
                <h5 className="text-amber-400 font-semibold mb-2">Gun 2 - Lower Rear Main Turret</h5>
                <p className="text-sm text-gray-300">
                  This turret has a more limited firing arc and operates counter to natural pilot movement. Because of
                  its constrained coverage, it is best assigned to crew members who prefer having additional gameplay
                  options such as EVA, engineering, or field rearming.
                </p>
              </div>
            </div>
            <div className="mt-4 space-y-2 text-sm text-gray-300">
              <p>
                Maximizing the lower rear main turret requires an experienced crew member, and time spent in this seat
                on the Perseus pays off significantly.
              </p>
              <p>
                A single Perseus with both turrets manned delivers far more effective targeted fire and has unmatched
                survivability in many scenarios versus two Perseus with only one turret crewed. The key is having
                crewmates comfortable with flexing into multi-role tasks.
              </p>
            </div>
          </>
        }
        turretPosturing={
          <>
            <div className="my-6 grid gap-4 md:grid-cols-3">
              {/* Intentional placeholders keep the grid balanced while assets are in progress. */}
              <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                <div className="text-xs uppercase tracking-wider text-slate-400">Pilot cockpit</div>
                <div className="mt-3 text-sm text-slate-500">Coming soon</div>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                <div className="text-xs uppercase tracking-wider text-slate-400">Top turret</div>
                <div className="mt-3 text-sm text-slate-500">Coming soon</div>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-950/60 p-4">
                <div className="text-xs uppercase tracking-wider text-slate-400">Lower turret</div>
                <div className="mt-3 text-sm text-slate-500">Coming soon</div>
              </div>
            </div>
            <p>
              Turrets turn rates are extremely sluggish, pilots should move in predictable patterns and communicate
              intent so gunners can prepare a solution.
            </p>
            <p>
              This gives a general idea of the significant challenges the lower turret faces when engaging targets,
              pilots and crew must be aware of this. Unless dedicated engineer is on board, be prepared to sacrifice
              this position and flex into other roles.
            </p>
          </>
        }
        loadout={
          <a className="text-indigo-300 underline" href="spviewer.update" target="_blank" rel="noreferrer">
            spviewer.update
          </a>
        }
        generalRules={
          <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
            <li>Restocking torp racks</li>
            <li>off bore torpedo's</li>
          </ul>
        }
      />
    </>
  );
}
