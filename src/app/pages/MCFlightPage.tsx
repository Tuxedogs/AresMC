import { PDFSection } from '@/app/components/PDFSection';
import { PDFCallout } from '@/app/components/PDFCallout';

export function MCFlightPage() {
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
        <h3 className='text-lg font-semibold mb-4 mt-6'>1. Heavy Threat Engagement</h3>
        <p> Multi-crew ships are responsible for engaging and defeating targets that fighters cannot efficiently handle due to ammunition limits, durability, or subsystem depth. This includes some <span className="text-yellow-400 font-semibold">heavy fighters</span>, <span className="text-orange-400 font-semibold">gunships</span>, and <span className="text-red-400 font-semibold">capital</span> threats.</p>
          <p>Currently, fighters carry severely limited ammunition reserves, making sustained engagements against larger targets inefficient. Light fighters should ideally never engage anything larger than a Hornet or an F8. In fleet combat,
             heavier opposition is the responsibility of multi-crew ships.</p>
             <PDFCallout type="warning" title="Engage Accordingly">
              Do not get distracted chasing light fighters or small targets that your fighters can handle. Size 8 cannon rounds flying past friendlies are a recipe for disaster. Following at a distance and focusing on potential incoming threats should be your priority.
            </PDFCallout>
        <h3 className="text-lg font-semibold mb-4 mt-6">2. Sustained Damage Application</h3>
        <p>Unlike fighters, multi-crew platforms are built for long engagements. <span className="text-blue-400 font-semibold">Engineers</span> for crew, larger capacitors, ammunition reserves, and turret coverage allow them to maintain continuous damage output without disengaging.</p>
        <PDFCallout type="info" title="Engineers Matter">
           <p> Engineering is incredibly strong. The problem is that it's only really fun once the ship has been disabled, armor and hull stripped. However, an engineer can keep a ship combat effective as many times as needed, kill conditions being a critical power plant dice roll, or an extremely high alpha (Torpedo, Idris Railgun).   </p>
        </PDFCallout>
        <h3 className="text-lg font-semibold mb-4 mt-6">3.Target Finalization (Hard Kills)</h3>
        <p>With engineering in play, disabling a ship is no longer sufficient. Multi-crew ships are responsible for hard-killing disabled targets so fighters can remain focused on active threats. Leaving cleanup to fighters is a waste of time and ammunition.</p>
        <h3 className="text-lg font-semibold mb-4 mt-6">4. Fighter Support</h3>
        <p>Multi-crew ships do not replace fighters; they enable them. By absorbing pressure, eliminating high-value targets, and cleaning up disabled hulls, multi-crew platforms allow fighters to operate aggressively without being bogged down by tasks they are poorly suited for.
        </p>
        <h3 className="mt-6">5. Damage Absorption and Distraction</h3>
        <p>Multi-crew ships can take hits that fighters cannot afford to. Their presence forces the enemy to commit resources, draw fire, or reposition, creating openings for friendly fighters to exploit.</p>
            <PDFCallout type="info" title="FC I'm bored">
           <p> Fighters can still play a pivotal role in engagements against larger ships, such as intercepting enemy ordinance or destroying PDC's. A skilled fighter can strip PDC's and turrets from a capital ship with ease, significantly reducing overall time spent dealing with that target </p>
        </PDFCallout>

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
