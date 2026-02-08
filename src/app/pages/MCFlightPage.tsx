import { PDFSection } from '@/app/components/PDFSection';
import { PDFCallout } from '@/app/components/PDFCallout';

export function MCFlightPage() {
  const SectionDivider = () => (
    <div className="mt-3 mb-6 h-px bg-gradient-to-r from-indigo-500/50 via-indigo-500/20 to-transparent"></div>
  );

  return (
    <>
      <PDFSection 
        title="MC Flight Operations" 
        subtitle="Advanced multi-crew flight tactics and coordination"
        level={1}
      >
        <p>
          Multi-crew flight operations require coordination, communication, and a deep understanding of your role 
          within the larger tactical picture. This section covers some tactics we plan to implement and refine as a crew.
        </p>

        <PDFCallout type="info" title="Coming Soon">
          Actual Fight footage.
        </PDFCallout>
      </PDFSection>

      <PDFSection title="Role of Multi-Crew Ships" level={2}>
        <div className="doctrine-card bg-gradient-to-br from-slate-950/70 via-gray-950/60 to-indigo-900/25 border border-indigo-800/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-100">GENERAL DOCTRINE</h3>

          <div className="mt-6 grid gap-x-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-semibold text-gray-100 uppercase tracking-wider">ROLES</h4>
                <ul className="mt-3 space-y-5 text-sm text-gray-200">
                  <li>
                    <div className="text-amber-400 font-semibold mb-2">Fighters</div>
                    <ul className="space-y-1.5 pl-6 list-none">
                      <li>Screen hostile fighters</li>
                      <li>Intercept bombers and strike craft</li>
                      <li>Counter incoming ordnance</li>
                      <li>Scout ahead and provide CAS</li>
                    </ul>
                  </li>
                  <li>
                    <div className="text-amber-400 font-semibold mb-2">Multi-Crew</div>
                    <ul className="space-y-1.5 pl-6 list-none">
                      <li>Engage <span className="text-amber-400 font-semibold">intended targets</span></li>
                      <li><span className="text-emerald-300 font-semibold">Secure</span> kills disabled by friendlies</li>
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
                  <li><span className="text-indigo-300 font-semibold">Priority 1:</span> Enemy multi-crew ships</li>
                  <li><span className="text-indigo-300 font-semibold">Priority 2:</span> Capital ships</li>
                  <li><span className="text-indigo-300 font-semibold">Priority 3:</span> Disabled or mission-killed targets</li>
                  <li>Light fighters are <span className="text-amber-400 font-semibold">non-priority</span></li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-100 uppercase tracking-wider">CREW</h4>
                <ul className="mt-3 space-y-1.5 text-sm text-gray-200 list-none pl-6">
                  <li>Pilot consistently positions for turret arcs</li>
                  <li><span className="text-blue-400 font-semibold">Engineers</span> maintain ship internals</li>
                  <li>Gunners, shoot that guy</li>
                  <li>Crew communicates target state</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-base font-semibold text-gray-100 uppercase tracking-wider">COMMITMENT</h4>
                <ul className="mt-3 space-y-1.5 text-sm text-gray-200 list-none pl-6">
                  <li>Engage deliberately, force the fight</li>
                  <li>MC with engineers must attempt to attract as much attention</li>
                  <li>Do not chase light targets</li>
                  <li>Do not stop fighting until complete destruction</li>
                </ul>
              </div>

              <div>
                <h4 className="text-base font-semibold text-gray-100 uppercase tracking-wider">POSITION</h4>
                <ul className="mt-3 space-y-1.5 text-sm text-gray-200 list-none pl-6">
                  <li>Turret coverage over pilot nose</li>
                  <li>Nose over early, earlier than that</li>
                  <li>Bad positioning compounds quickly</li>
                  <li>Reposition early, not late</li>
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

        <h3 className='text-lg font-semibold mb-4 mt-6'>1. Heavy Threat Engagement</h3>
        <p> Multi-crew ships are responsible for engaging and defeating targets that fighters cannot efficiently handle due to ammunition limits, durability, or subsystem depth. This includes some <span className="text-yellow-400 font-semibold">heavy fighters</span>, <span className="text-orange-400 font-semibold">gunships</span>, and <span className="text-red-400 font-semibold">capital</span> threats.</p>
          <p>Currently, fighters carry severely limited ammunition reserves, making sustained engagements against larger targets inefficient. Light fighters should ideally never engage anything larger than a Hornet or an F8. In fleet combat,
             heavier opposition is the responsibility of multi-crew ships.</p>
            <PDFCallout type="caution" title="Intended Targets - Engage Accordingly">
              Do not get distracted chasing light fighters or small targets that your fighters can handle. Size 8 cannon rounds flying past friendlies is recipe for disaster. Following at a distance and focusing on potential incoming threats should be your priority.
            </PDFCallout>
        <SectionDivider />
        <h3 className="text-lg font-semibold mb-4 mt-6">2. Sustained Damage Application</h3>
        <p>Unlike fighters, multi-crew platforms are built for long engagements. <span className="text-blue-400 font-semibold">Engineers</span> for crew, larger capacitors, ammunition reserves, and turret coverage allow them to maintain continuous damage output without disengaging.</p>
        <PDFCallout type="info" title="Engineers Matter">
           <p> Engineering is incredibly strong. The problem is that it's only really fun once the ship has been disabled, armor and hull stripped. However, an engineer can keep a ship combat effective as many times as needed, kill conditions being a critical power plant dice roll, or an extremely high alpha (Torpedo, Idris Railgun).   </p>
        </PDFCallout>
        <SectionDivider />
        <h3 className="text-lg font-semibold mb-4 mt-6">3.Target Finalization (Hard Kills)</h3>
        <p>With engineering in play, disabling a ship is no longer sufficient. Multi-crew ships are responsible for hard-killing disabled targets so fighters can remain focused on active threats. Leaving cleanup to fighters is a waste of time and ammunition.</p>
        <PDFCallout type="warning" title="Vampire Ships">
          4.5 introduced a bug that allows ships recovering from a power plant failure through the "repair all" MFD button to retain their 10x HP buffer while operable.
          <br />
          <br />
          Securing all kills is highly suggested.
        </PDFCallout>
        <SectionDivider />
        <h3 className="text-lg font-semibold mb-4 mt-6">4. Fighter Support</h3>
        <p>Multi-crew ships do not replace fighters; they enable them. By absorbing pressure, eliminating high-value targets, and cleaning up disabled hulls, multi-crew platforms allow fighters to operate aggressively without being bogged down by tasks they are poorly suited for.
        </p>
        <SectionDivider />
        <h3 className="mt-6">5. Damage Absorption and Distraction</h3>
        <p>Multi-crew ships can take hits that fighters cannot afford to. Their presence forces the enemy to commit resources, draw fire, or reposition, creating openings for friendly fighters to exploit.</p>
      </PDFSection>
      <PDFSection title="Planned Topics" level={2}>
        <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 my-6">
      
          <h4 className="text-indigo-400 font-semibold mb-3 text-base">Topics to be covered:</h4>
          <ul className="space-y-2 text-sm">
            <li>• Flying as a single MC ship</li>
            <li>• What ship to use</li>
            <li>• Escalation flow</li>
            <li>• SOP against specific threats</li>
            <li>• Flyting with multiple MC friendlies</li>
          </ul>
        </div>
      </PDFSection>

      <PDFSection title="Tactical Doctrine" level={2}>
        <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 my-6">
          <h4 className="text-indigo-400 font-semibold mb-3 text-base">Planned content:</h4>
          <ul className="space-y-2 text-sm">
            <li>• Engagement rules by ship class</li>
            <li>• Target prioritization</li>
            <li>• Disengagement</li>
            <li>• Support and screening tactics</li>
            <li>• Capital ship engagement rules</li>
            <li>• Fighter coordination strategies</li>
          </ul>
        </div>

        <PDFCallout type="warning" title="Remember">
          Multi-crew ships are force multipliers when used correctly. Proper tactics and 
          positioning can make the difference between dominating a fight in both active combat and support roles, or becoming a liability.
        </PDFCallout>

        <p className="italic text-sm mt-6 text-gray-400">
          This section is actively being developed. Check back for updates or contribute your tactical knowledge!
        </p>
      </PDFSection>

      <PDFSection title="Fighter Integration" level={2}>
        <p>
          How multi-crew ships work with fighter escorts, screening protocols, and mutual support tactics.
        </p>

        <p className="italic text-sm text-gray-400">
          Content coming soon...
        </p>
      </PDFSection>
    </>
  );
}
