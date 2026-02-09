import { PDFCallout } from '@/app/components/PDFCallout';
import { ShipPageTemplate } from '@/app/components/ShipPageTemplate';

export function PerseusPage() {
  return (
    <>
      <ShipPageTemplate
        title="Perseus"
        subtitle="Multi-Crew Success"
        banner={
          <img
            className="ship-video-banner w-full max-h-[360px] object-cover rounded-lg border border-slate-800"
            src="/Images/Perseus/2percypatrol.png"
            alt="Perseus patrol formation"
          />
        }
        overview={
          <>
            <p>
              The Perseus is used to apply sustained, high-caliber fire against targets fighters are not intended to
              engage in sustained combat with.
            </p>
            <p>
              We field it against a large portion of our engagement profiles, including capitals, while deliberately
              tanking enemy fighters as our own fighters peel pressure off.
            </p>
            <p>
              The survivability of your crew and the ability to engage and dispatch enemies while outnumbered, as well
              as finishing disabled threats from the fighter group is your primary role. Not just winning against the
              enemy Perseus.
            </p>
            <p>
              At two or more Idris on grid, the Perseus is no longer viable and is replaced by a Polaris operating at
              stand-off range.
            </p>
          </>
        }
        criticalNotes={
          <div className="my-4 border border-slate-900 bg-neutral-950 rounded-lg p-6">
            <div className="grid gap-6 md:grid-cols-3 text-sm md:divide-x md:divide-slate-800/40">
              <div className="md:pr-6 pt-3 relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-0.5 before:w-1/2 before:bg-gradient-to-r before:from-emerald-500/50 before:to-black/0">
                <div className="text-sm uppercase tracking-wider text-slate-200 font-semibold mb-3">No Capital Present</div>
                <div className="border border-amber-500/70 rounded-md px-4 py-3 text-white font-semibold">
                  Field Perseus (1+)
                </div>
                <div className="mt-3 text-slate-400 text-xs">Standard doctrine / FC discretion</div>
              </div>
              <div className="md:px-6 pt-3 relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-0.5 before:w-1/2 before:bg-gradient-to-r before:from-emerald-500/50 before:to-black/0">
                <div className="text-sm uppercase tracking-wider text-slate-200 font-semibold mb-3">1x Idris (Any Polaris)</div>
                <div className="border border-amber-500/70 rounded-md px-4 py-3 text-white font-semibold">
                  Remain in Perseus
                </div>
                <div className="mt-3 text-slate-400 text-xs">Ignore Polaris Count</div>
              </div>
              <div className="md:pl-6 pt-3 relative before:content-[''] before:absolute before:top-0 before:left-0 before:h-0.5 before:w-1/2 before:bg-gradient-to-r before:from-red-500/70 before:to-black/0">
                <div className="text-sm uppercase tracking-wider text-red-300 font-semibold mb-3">2+ Idris</div>
                <div className="relative border border-red-500 rounded-md px-4 py-4 text-white font-extrabold">
                  DO NOT FIELD PERSEUS
                  <div className="absolute inset-0 -z-10 rounded-md bg-red-500/10 blur-xl" />
                </div>
                <div className="mt-3 text-red-300 text-xs">Deploy Polaris</div>
                <div className="mt-1 text-red-300 text-xs">Long-Range Sniping Ops</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Capital escalation and response doctrine.
            </p>
          </div>
        }
        piloting={
          <>
            <p>
              Interceptor like tuning requires position to be held in uncomfortable postures. Decoupled flying is a
              must.
            </p>
            <p>
              The Perseus should be positioned offset to the target’s side or rear, effectively strafing backward while
              the pilot uses main thrust to hold relative position.
            </p>
            <p>
              Nose orientation is adjusted continuously to keep primary batteries aligned while the ship rolls as needed
              to maintain turret coverage on subsystems and secondary targets.
            </p>
            <div className="my-6 grid gap-4 md:grid-cols-2">
              <div className="border border-slate-800 rounded-lg bg-slate-950/60 h-48 flex items-center justify-center text-xs text-gray-500">
                Posture 1
              </div>
              <div className="border border-slate-800 rounded-lg bg-slate-950/60 h-48 flex items-center justify-center text-xs text-gray-500">
                Posture 2
              </div>
            </div>
          </>
        }
        crew={
          <>
            <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 my-6">
              <h4 className="text-indigo-400 font-semibold mb-3 text-base">Gun Positions:</h4>
              <div className="space-y-4 text-sm">
                <div>
                  <h5 className="text-amber-400 font-semibold mb-2">Gun 1 - Top Forward Main Turret</h5>
                  <p>
                    Sitting directly behind the nose, they have the benefit of extreme coverage and visibility to most
                    threats, as well as the benefit of being positioned in such a way that natural flight by the pilot
                    makes life a lot better for its operator. Having the benefit of more time on target, more targets.
                  </p>
                </div>
                <div>
                  <h5 className="text-amber-400 font-semibold mb-2">Gun 2 - Lower Rear Main Turret</h5>
                  <p className="mb-2">
                    This turret has a more limited firing arc and operates counter to natural pilot movement. Because
                    of its constrained coverage, it is best assigned to crew members who prefer having additional
                    gameplay options such as EVA, engineering, or field rearming.
                  </p>
                </div>
              </div>
            </div>
            <p>
              Maximizing the lower rear main turret requires an experienced crew member, and time spent in this seat on
              the Perseus pays off significantly.
            </p>
            <p>
              A single Perseus with both turrets manned delivers far more effective targeted fire and has unmatched
              survivability in many scenarios versus two Perseus with only one turret crewed. The key is having
              crewmates comfortable with flexing into multi-role tasks.
            </p>
          </>
        }
        turretPosturing={
          <>
            <div className="my-6 grid gap-4 md:grid-cols-3">
              <div className="border border-slate-800 rounded-lg bg-slate-950/60 h-48 flex items-center justify-center text-xs text-gray-500">
                Posture Pilot cockpit
              </div>
              <div className="border border-slate-800 rounded-lg bg-slate-950/60 h-48 flex items-center justify-center text-xs text-gray-500">
                Posture Top turret
              </div>
              <div className="border border-slate-800 rounded-lg bg-slate-950/60 h-48 flex items-center justify-center text-xs text-gray-500">
                Posture Lower turret
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
            <PDFCallout type="assist" title="Subtargeting">
              At close ranges, auto-gimbal is extremely effective, allowing consistent and accurate fire onto specific
              components of capital and large ships. For nearly all other applications, Precision Manual (PM) is
              preferred.
            </PDFCallout>
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
