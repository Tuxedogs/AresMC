import { PDFSection } from '@/app/components/PDFSection';
import { PDFCallout } from '@/app/components/PDFCallout';

export function PilotCrewPage() {
  return (
    <>
      <PDFSection 
        title="Pilot-Crew Pairs" 
        subtitle="Building effective communication and coordination"
        level={1}
      >
        <p className='text-gray-300 mb-4'>
          Now, the importance of a relationship with your pilot and vice versa. Knowing how your pilot flies their 
          ship is necessary for becoming a dominating fighting 
          force in the 'verse. Let's take Luna and House. They normally fly a Hurricane or a Scorpius.
        </p>
        <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 my-4"> 
        <p className='text-gray-400 italic'>
          "Learning to cooperate was the majority of our struggles when we first started. Followed by what weapons, 
          components, and tactics to use.</p>
        <p className='my-4 text-gray-400 italic'>
          Now that we have been flying together for several years now, we know how each other works and our tendencies 
          during combat. Learning that my pilot likes to nose up on a target after we pass, and has a tendency to 
          over-shoot merges are things that I keep in the back of my brain during our fights. I know to point the 
          turret straight up after a pass because that's where the target is going to end up. I point my turret 
          further in front of a target when we merge because they always end up that way eventually, but for us, 
          it tends to be quicker than normal"
            </p>
              <div className="font-semibold text-indigo-400 mb-3 my-4">-Luna</div>
          </div>
        
 

        <PDFCallout type="info">
          Knowing what your pilot is likely to do during a fight allows you to mentally prepare for what is likely 
          to come and allows you to react quicker during high-stress situations.
        </PDFCallout>
      </PDFSection>

      <PDFSection title="Common Call-outs" level={2}>
        <p>
          Now that we know the importance of your relationship with your pilot, we should discuss what you should be 
          relaying to your pilot. Roughly speaking your pilot has a wide front view and a narrow rear view (If they 
          have look-behind bound). You as the turret (or one of many) have a better sense of awareness than them. 
          It is your job to relay information to your pilot about what is around them, dangers to you and/or your 
          fleet, and situational awareness that your pilot might be too tunnel-visioned to notice.
        </p>

        <PDFCallout type="warning">
          These callouts are meant for internal pilot to crew comms. They are not meant as something to be called 
          out to the entire group. I would recommend using something like TS/SRS or the in-game channel VoIP system, 
          however the game system rarely works.
        </PDFCallout>
      </PDFSection>

      <PDFSection title="Gunner Call-outs" level={3}>
        <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 my-4">
          <div className="space-y-4 text-sm">
            <div>
              <h5 className="text-indigo-400 font-semibold mb-1">(# of tails) tails</h5>
              <p>Calling out how many targets you have following the ship</p>
            </div>

            <div>
              <h5 className="text-indigo-400 font-semibold mb-1">Charge (or cap/ammo) low (Turret identifier if on a multi-turret ship)</h5>
              <div className="space-y-1">
                <p>Letting your pilot know that you are low on ammo</p>
                <p className="text-gray-400 italic">- Get used to how the turret shoots and know when it's getting low</p>
                <p className="text-gray-400 italic">- Especially important if you have ballistics equipped</p>
              </div>
            </div>

            <div>
              <h5 className="text-indigo-400 font-semibold mb-1">Charge (or cap/ammo) dry (Turret identifier if on a multi-turret ship)</h5>
              <p>Letting your pilot know that you are completely out of ammo</p>
            </div>

            <div>
              <h5 className="text-indigo-400 font-semibold mb-1">Contact, [Ship Type] [Pilot Name] [Direction]</h5>
              <div className="space-y-1">
                <p>Giving your pilot the contact info so they have better situational awareness</p>
                <p className="text-gray-400 italic">- Recommended to use landmarks for directions</p>
                <p className="text-gray-400 italic">- Some ships have larger radars so you will see targets before fighters can</p>
              </div>
            </div>

            <div>
              <h5 className="text-indigo-400 font-semibold mb-1">(gunner position (if on multi-turret ship)) no eyes</h5>
              <p>Tells your pilot that you cannot see the target that was called out</p>
            </div>

            <div>
              <h5 className="text-indigo-400 font-semibold mb-1">Launch seen (ordnance type)(direction)</h5>
              <p>Tells your pilot that you have identified the origin of a missile or torpedo launch</p>
            </div>

            <div>
              <h5 className="text-indigo-400 font-semibold mb-1">Fire on board (own/enemy ship)</h5>
              <p>Tells your pilot a reprioritization of tasking or a change in ship state is required</p>
            </div>
          </div>
        </div>
      </PDFSection>

      <PDFSection title="Pilot Call-outs" level={3}>
        <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 my-4">
          <div className="space-y-4 text-sm">
            <div>
              <h5 className="text-amber-400 font-semibold mb-1">[Player name] Primary</h5>
              <p>This is to tell your gunner your target so you can coordinate fire</p>
            </div>

            <div>
              <h5 className="text-amber-400 font-semibold mb-1">Merging on [Player name] [Relative Direction]</h5>
              <p>This is to prepare your gunner so that you can coordinate fire</p>
            </div>

            <div>
              <h5 className="text-amber-400 font-semibold mb-1">Off nose [Player name] [Shiptype] [Side/Pitch Attitude(High/Low)]</h5>
              <div className="space-y-1">
                <p>To let your gunner(s) know the target is on the nose, this prioritizes that target</p>
                <p className="text-gray-400 italic">- Especially helpful on turrets with slower rotations</p>
              </div>
            </div>

            <div>
              <h5 className="text-amber-400 font-semibold mb-1">Countermeasures dry</h5>
              <div className="space-y-1">
                <p>To let your gunner(s) know that you have no way of evading missiles</p>
                <p className="text-gray-400 italic">- Can also be a callout to the fighter group (or flight lead)</p>
              </div>
            </div>

            <div>
              <h5 className="text-amber-400 font-semibold mb-1">Ballistics Low</h5>
              <p>To let your gunner(s) know that you will need to rearm/disengage soon</p>
            </div>

            <div>
              <h5 className="text-amber-400 font-semibold mb-1">Ballistics (Torps/Missiles if high priority secondary) dry</h5>
              <div className="space-y-1">
                <p>To let your gunner(s) know that you are looking to disengage and rearm</p>
                <p className="text-gray-400 italic">- To let gunner(s) know on select ships to prepare for field rearming</p>
              </div>
            </div>

            <div>
              <h5 className="text-amber-400 font-semibold mb-1">No eyes</h5>
              <div className="space-y-1">
                <p>Response to a target that was called out when you cannot find them</p>
                <p className="text-gray-400 italic">- The idea is for your gunner to give more directional information to you</p>
              </div>
            </div>

            <div>
              <h5 className="text-amber-400 font-semibold mb-1">Last Stand</h5>
              <div className="space-y-1">
                <p>The pulling of crew from normal stations and retasking them to damage control.</p>
                <p className="text-amber-400 font-semibold">Priority: Fire &gt; Power Plants &gt; Engines &gt; Weapons &gt; Shields</p>
              </div>
            </div>
          </div>
        </div>
      </PDFSection>

      <PDFSection title="Engineer Call-outs" level={3}>
        <p className="italic text-gray-400">TBD, when it's gameplay exists.</p>
      </PDFSection>

      {/* Communications moved to its own page */}
    </>
  );
}
