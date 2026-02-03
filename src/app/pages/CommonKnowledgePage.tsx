import { PDFSection } from '@/app/components/PDFSection';
import { PDFCallout } from '@/app/components/PDFCallout';

export function CommonKnowledgePage() {
  return (
    <>
      <PDFSection 
        title="Gunnery with Luna" 
        subtitle="Understanding delta, weapon velocities, and effective engagement ranges"
        level={1}
      >
        <PDFCallout type="important" title="Essential Knowledge">
          Knowing the distance you can engage a target is essential for maintaining a healthy capacitor/ammo count 
          and applying effective damage to other ships. This means knowing when to shoot, and more importantly when not to shoot.
        </PDFCallout>
      </PDFSection>

      <PDFSection title="Delta" level={2}>
        <p>
          Now that you have the basic basics we can continue. First off, You need to know what range and delta are. 
          Let's start with delta. The term <span className="font-semibold text-indigo-400">'Delta'</span> means an 
          increment of a variable —symbol <span className="font-bold text-indigo-400">Δ</span> - This might not be 
          helpful so let me explain it in our game's terms.
        </p>

        <p>
          Your delta is the difference in speed from you to your target. For optimal hit rate, you should be shooting 
          when the delta is positive (target is coming towards you) although it is still possible to hit a target when 
          the delta is negative (target is moving away from you). Let's give an example:
        </p>

        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-5 my-6 space-y-3">
          <p className="text-sm">
            • If a target has a delta of <span className="text-green-400 font-semibold">+100</span> then they are 
            moving <span className="text-green-400">100m/s toward you</span>
          </p>
          <p className="text-sm">
            • If a target has a delta of <span className="text-red-400 font-semibold">-100</span> then they are 
            moving <span className="text-red-400">100m/s away from you</span>
          </p>
          <p className="text-sm">
            • If a target has a delta of <span className="text-yellow-400 font-semibold">0</span> then they are 
            <span className="text-yellow-400"> stationary relative to you</span>
          </p>
        </div>

        <p>
          Let's use these as a practical example. If you are looking at a ship with a 100 delta and that ship is 1km 
          away from you it means that that ship will be at 900m a second later. So let's say that your weapons shoot 
          at 900 m/s and use the example from above: When you fire your weapon the bullet will travel 900m towards 
          the ship and the ship will travel 100m towards the bullet, causing them to collide after exactly one second. 
          This means that when shooting a target that is moving away from you, it will take longer for the bullet to 
          reach them as opposed to if they were not moving. This also means that it takes less time to hit when the 
          target is moving towards you.
        </p>
      </PDFSection>

      <PDFSection title="Ship Weapons" level={2}>
        <p>
          Now this is essential to know not just for a turret gunner but for every player in the verse. This is 
          information that both you and your pilot need to know so that you can beat out those pesky fighters.
        </p>

        <PDFCallout type="important" title="Golden Rule">
          Always use repeaters or gatlings on a turret. Never use cannons.
        </PDFCallout>
        <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 my-6">
          <h4 className="text-indigo-400 font-semibold mb-3 text-base">Weapon Velocities:</h4>
          <div className="space-y-2 text-sm">
            <p>• <span className="text-indigo-300 font-mono">CF series</span> shoots at <span className="text-green-400 font-bold">1800 m/s</span></p>
            <p>• <span className="text-indigo-300 font-mono">NDBs</span> shoot at <span className="text-green-400 font-bold">1400 m/s</span></p>
            <p>• <span className="text-indigo-300 font-mono">GT series Ballistic gatlings</span> at <span className="text-green-400 font-bold">1600 m/s</span></p>
            <p>• <span className="text-indigo-300 font-mono">Breakneck S4 Gatling</span> at <span className="text-green-400 font-bold">1450 m/s</span></p>
          </div>
        </div>

        <PDFCallout type="info" title="Effective Range Formula">
          Gun speed / 2 = rough effective range
        </PDFCallout>

        <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 my-6">
          <h4 className="text-indigo-400 font-semibold mb-3 text-base">Effective Ranges:</h4>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <p>• <span className="text-indigo-300 font-mono">CF series</span> - <span className="text-amber-400 font-bold">900m</span></p>
            <p>• <span className="text-indigo-300 font-mono">GT series</span> - <span className="text-amber-400 font-bold">800m</span></p>
            <p>• <span className="text-indigo-300 font-mono">NDBs</span> - <span className="text-amber-400 font-bold">700m</span></p>
            <p>• <span className="text-indigo-300 font-mono">Breakneck</span> - <span className="text-amber-400 font-bold">725m</span></p>
          </div>
        </div>

        <h3 className="text-xl font-medium text-white mt-8 mb-4">Weapon Statistics Comparison</h3>
        <p className="text-sm italic mb-3 text-gray-400">All laser size 3 for comparison</p>

        <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 my-6">
          <div className="space-y-4">
            <div className="border-b border-gray-800 pb-3">
              <h5 className="text-indigo-300 font-semibold mb-2">CF-337 Panther</h5>
              <div className="text-sm space-y-1">
                <p>Alpha: <span className="text-amber-400 font-semibold">43.7</span></p>
                <p>DPS: <span className="text-amber-400 font-semibold">545.62</span></p>
                <p>RPM: <span className="text-amber-400 font-semibold">750</span></p>
              </div>
            </div>

            <div className="border-b border-gray-800 pb-3">
              <h5 className="text-indigo-300 font-semibold mb-2">NDB-30</h5>
              <div className="text-sm space-y-1">
                <p>Alpha: <span className="text-amber-400 font-semibold">85.5</span></p>
                <p>DPS: <span className="text-amber-400 font-semibold">712.5</span></p>
                <p>RPM: <span className="text-amber-400 font-semibold">500</span></p>
              </div>
            </div>

            <div>
              <h5 className="text-indigo-300 font-semibold mb-2">Attrition</h5>
              <div className="text-sm space-y-1">
                <p>Alpha: <span className="text-amber-400 font-semibold">134.8</span></p>
                <p>DPS: <span className="text-amber-400 font-semibold">786.2</span></p>
                <p>RPM: <span className="text-amber-400 font-semibold">350</span></p>
              </div>
            </div>
          </div>
        </div>

        <p>
          Now, this might seem like a lot but I'll break it down for you. The CF series of repeaters shoots faster 
          bullets, has a higher rate of fire, and a larger capacitor, but does less damage. The Attritions shoot 
          slower bullets, have a lower rate of fire, and a smaller capacitor, but do more damage. The NDBs fall in 
          between these two as a sort of middle ground.
        </p>

        <PDFCallout type="info">
          For a general reference the slower-firing, higher-damage weapons (Attritions) are better suited for larger, 
          slower-moving targets. And the opposite is true for the faster firing, lower damage weapons (CF series).
        </PDFCallout>

        <p>
          The only drawback of this design is that NDBs only go up to size 3. This means that ships like the 
          Hammerhead, Hercules, and Carrack cannot use them as they are all Size 4 turrets. They work great for 
          smaller ships like the Scorpius and Hurricane, however.
        </p>

        <h3 className="text-xl font-medium text-white mt-8 mb-4">Weapon Spread</h3>

        <p>
          Let's talk about weapon spread. If your weapons had pin-point accuracy the exact location of where your 
          crosshair is would be where the shots go. We do not want this. The current weapon spread is as follows:
        </p>

        <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 my-6">
          <div className="space-y-2 text-sm">
            <p>• <span className="text-indigo-300 font-mono">CF series</span> - <span className="text-amber-400 font-bold">0.6°</span></p>
            <p>• <span className="text-indigo-300 font-mono">NDBs</span> - <span className="text-amber-400 font-bold">0.55°</span></p>
            <p>• <span className="text-indigo-300 font-mono">Attritions</span> - <span className="text-amber-400 font-bold">0.5°</span></p>
          </div>
        </div>

        <p>
          Now, what does this mean? The number above shows the degree of offset that each projectile can travel when 
          leaving the barrel of the gun. Let's take NDBs as an example. Each shot from an NDB will be 0.55 degrees 
          from the center in a cone shape. This means little to nothing when you are in close range to your target 
          but over a distance, it can land dozens to hundreds of meters from the center of the crosshair. Again, this 
          is a good thing for turrets. Without weapon spread you would not be able to hit evasive fighters when they 
          are trying to run away.
        </p>
      </PDFSection>

      <PDFSection title="Ship Weapons - Penetration" level={2}>
        <p className="italic text-gray-400">Penetration, how to, how not to - TBD.</p>
      </PDFSection>
    </>
  );
}
