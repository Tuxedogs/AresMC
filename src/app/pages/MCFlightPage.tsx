import { PDFSection } from '@/app/components/PDFSection';
import { PDFCallout } from '@/app/components/PDFCallout';

export function MCFlightPage() {
  const SectionDivider = () => (
    <div className="mt-3 mb-6 h-px bg-gradient-to-r from-indigo-500/50 via-indigo-500/20 to-transparent"></div>
  );

  return (
    <>
      <PDFSection 
        title="Doctrine" 
        subtitle="Multi-crew flight tactics and coordination"
        level={1}
      >
      </PDFSection>

      <PDFSection title="" level={2}>
        <div className="doctrine-card bg-gradient-to-br from-slate-950/70 via-gray-950/60 to-indigo-900/25 border border-indigo-800/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-100">GENERAL DOCTRINE</h3>

          <div className="mt-6 grid gap-x-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <ul className="mt-3 space-y-5 text-sm text-gray-200">
                  <li>
                    <div className="text-amber-400 font-semibold mb-2">Fighters</div>
                    <ul className="space-y-1.5 pl-6 list-none">
                      <li>Screen hostile fighters</li>
                      <li>Intercept bombers and strike craft</li>
                      <li>Counter incoming ordnance</li>
                      <li>Scout / limited CAS</li>
                    </ul>
                  </li>
                  <li>
                    <div className="text-amber-400 font-semibold mb-2">Multi-Crew</div>
                    <ul className="space-y-1.5 pl-6 list-none">
                      <li><span className="text-emerald-300 font-semibold">Secure</span> disabled kills</li>
                      <li>Engage <span className="text-amber-400 font-semibold">designated targets</span></li>
                      <li>Sustain operations through logistics</li>
                      <li>Support fighters with targeted ordnance</li>
                      <li>Provide countermeasure screen if needed</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-100 uppercase tracking-wider">TARGETING</h4>
                <ul className="mt-3 space-y-1.5 text-sm text-gray-200 list-none pl-6">
                  <li><span className="text-indigo-300 font-semibold">Priority 1:</span> Heavy Fighters/Enemy MC</li>
                  <li><span className="text-indigo-300 font-semibold">Priority 2:</span> Capital ships</li>
                  <li><span className="text-indigo-300 font-semibold">Priority 3:</span> Disabled, key targets</li>
                  <li><span className="text-yellow-200 font-semibold">Light fighters</span>: Ignore unless forced</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-100 uppercase tracking-wider">CREW</h4>
                <ul className="mt-3 space-y-1.5 text-sm text-gray-200 list-none pl-6">
                  <li>Pilot consistently positions for turret arcs</li>
                  <li><span className="text-blue-400 font-semibold">Engineers</span> maintain ship internals</li>
                  <li>Crew communicates target state</li>
                  <li>Gunners, shoot that guy</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-base font-semibold text-gray-100 uppercase tracking-wider">COMMITMENT</h4>
                <ul className="mt-3 space-y-1.5 text-sm text-gray-200 list-none pl-6">
                  <li><span className="text-emerald-300 font-semibold">Commit</span> deliberately</li>
                  <li>MC with <span className="text-blue-400 font-semibold">engineers</span> should draw aggro</li>
                  <li>Do not chase light targets</li>
                  <li><span className="text-orange-400 font-semibold">Do not stop fighting</span> until complete destruction</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-100 uppercase tracking-wider">POSITION</h4>
                <ul className="mt-3 space-y-1.5 text-sm text-gray-200 list-none pl-6">
                  <li>Turret coverage over pilot nose</li>
                  <li>Nose over before turrets lose coverage</li>
                  <li>Bad positioning compounds quickly</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-100 uppercase tracking-wider">COMMON FAILURES</h4>
                <ul className="mt-3 space-y-1.5 text-sm text-gray-200 list-none pl-6">
                  <li>Poor offensive or defensive posture</li>
                  <li>Loss of situational awareness</li>
                  <li>Turret mode or keybind errors</li>
                  <li>Incorrect AG / Fixed / Precision usage</li>
                  <li>Undisciplined sub-targeting</li>
                  <li>Incorrect target prioritization</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 text-xs text-gray-500 text-right">
            *additional explanations below, casual roams do not require strict doctrine adherence
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-4 mt-6"></h3>
        <PDFCallout type="assist" title="Secure - Vampire Ships">
          Currently a bug allows ships restored through Repair All to re-enter combat with a 10× HP buffer.
        </PDFCallout>
        <p>Disables are not kills. MC ships must hard-kill disabled targets when able, allowing fighters stay focused on active threats.</p>
        <SectionDivider />
        <h3 className='text-lg font-semibold mb-4 mt-6'></h3>
        <PDFCallout type="caution" title="Designated Targets" titleClassName="text-amber-400">
          Do not chase light fighters. Large-caliber fire near friendlies is a liability. Maintain distance and monitor
          escalation threats.
        </PDFCallout>
        <p>
          Multi-crew ships engage targets fighters cannot efficiently kill due to ammo limits, durability, or subsystem
          depth. <span className="text-yellow-400 font-semibold">Heavy fighters</span>, <span className="text-orange-400 font-semibold">gunships</span>, and <span className="text-red-400 font-semibold">capital</span> threats are MC responsibility. Fighters should not
          sustain engagements against anything larger than a Hornet or F8.
        </p>
        <SectionDivider />
        <h3 className="text-lg font-semibold mb-4 mt-6"></h3>
        <PDFCallout type="info" title="Engineers Matter">
           <p> Engineering enables repeated recovery. "Hard death" requires power plant critical RNG or extreme alpha damage. </p>
        </PDFCallout>
        <p>Multi-crew platforms sustain long engagements, ships that benefit from <span className="text-blue-400 font-semibold">engineers</span> being on board should be utilized to their full potential. Your fight <span className="text-orange-400 font-semibold">does not stop</span> when your ship hits 0% hull and armor. Repair your components and keep firing.</p>
        <SectionDivider />
        <h3 className="text-lg font-semibold mb-4 mt-6"></h3>
        <PDFCallout type="assist" title="Commit">
          Draw aggro, let fighters peel from your ship.
        </PDFCallout>
        <p>
          Multi-crew ships absorb pressure, eliminate <span className="text-red-400 font-semibold">high-threat</span>{' '}
          targets. An FC may very well call for your ship to be <span className="text-emerald-300 font-semibold">first in</span>{' '}
          on an enemy fighter ball.
        </p>
      </PDFSection>

    </>
  );
}
