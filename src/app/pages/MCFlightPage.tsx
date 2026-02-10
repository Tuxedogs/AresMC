import { PDFSection } from '../components/PDFSection';
import { PDFCallout } from '../components/PDFCallout';

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
        {/* Add content here if needed */}
      </PDFSection>

      <PDFSection title="" level={2}>
        <div className="doctrine-card bg-gray-900/50 border border-indigo-900/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-100">GENERAL DOCTRINE</h3>

          <div className="mt-6 grid gap-x-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <ul className="mt-3 space-y-5 text-sm text-gray-200">
                  <li>
                    <h4 className="text-base font-semibold text-gray-100 uppercase tracking-wider mb-2">Multi-Crew</h4>
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
                  <li>Ignore <span className="text-yellow-200 font-semibold">light fighters</span> unless forced</li>
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

        </div>

        <PDFCallout type="warning" title="Vampire Ships">
          Currently a bug allows ships restored through Repair All to re-enter combat with a 10× HP buffer.
          <strong>Secure all kills with Hard Death.</strong>
        </PDFCallout>
        <SectionDivider />
        <h3 className="text-lg font-semibold mb-4 mt-6">Designated Targets</h3>
        <p>
          Multi-crew ships engage targets fighters cannot efficiently kill due to ammo limits, durability, or subsystem
          depth. Heavy fighters, gunships, and capital threats are MC responsibility.
        </p>
        <p className="text-base font-semibold text-gray-200">DO NOT chase light fighters.</p>
        <p>
          Large-caliber fire near friendlies is a liability. Maintain distance and monitor escalation threats. Fighters
          should not sustain engagements against anything larger than a Hornet or F8.
        </p>
        <SectionDivider />
        <h3 className="text-lg font-semibold mb-4 mt-6">Engineers Matter</h3>
        <p>
          Engineering enables repeated recovery. Hard death requires power plant critical RNG or extreme alpha damage.
          Multi-crew platforms sustain long engagements. Ships that benefit from <span className="text-blue-400 font-semibold">engineers</span> being on board should be
          utilized to their full potential. Your fight does not stop when your ship hits 0% hull and armor. Repair your
          components and keep firing.
        </p>
        <SectionDivider />
        <h3 className="text-lg font-semibold mb-4 mt-6">Commit</h3>
        <p>
          Multi-crew ships absorb pressure and eliminate high-threat targets. An FC may call for your ship to be first
          in on an enemy fighter ball. Draw aggro and let fighters peel from your ship.
        </p>
      </PDFSection>

    </>
  );
}
