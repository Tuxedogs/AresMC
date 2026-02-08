import { PDFSection } from '@/app/components/PDFSection';
import { PDFCallout } from '@/app/components/PDFCallout';

export function SpecialShipsPage() {
  return (
    <>
      <PDFSection 
        title="Specific Ships" 
        subtitle="Capital-class and large multi-crew platform strategies"
        level={1}
      >
        <p>
          Each capital-class and large multi-crew ship has unique characteristics that require specific strategies 
          and crew coordination. Here's what you need to know about operating the major platforms.
        </p>
      </PDFSection>


      <PDFSection title="Hammerhead" level={2}>
         <h4>***Image***</h4>
        <p>
          So the infamous Hammerhead, the 7 crew monster of a ship. I'll be honest here, It's an okay ship but it's 
          something that needs fighter support to be fully effective. Let's look at how a good crew runs one. The main 
          trouble with this ship is that it has 6 turrets, so someone needs to direct the gunner's fire to be the most 
          effective. For this, we select the person in the top turret to be the 
          <span className="text-indigo-400 font-semibold"> 'Master Gunner'</span>.
        </p>

        <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 my-6">
          <h4 className="text-indigo-400 font-semibold mb-3 text-base">The Master Gunner Role:</h4>
          <p className="text-sm mb-3">
            The Master gunner is the gunner in the top turret that coordinates the fire of all of the turrets of the 
            ship. They relay the most important information to the pilot and are in charge of what targets get shot 
            first, and when to engage. For instance, they tell the other turrets at what range to fire, at whom, and if 
            they should be trying to shoot specific ship parts.
          </p>
          <p className="text-sm">
            It's a Master gunner's job to be the primary voice of the ship's turrets. They act as a sort of maestro of 
            the ship's firepower, as the pilot only has access to missiles and no guns.
          </p>
        </div>

        <p>
          The shape of the hammerhead allows it to have up to 5 of the 6 turrets on the same ship at the same time. 
          That's <span className="text-amber-400 font-bold">20 size 4 guns!</span> This can allow for almost 
          instantaneous destruction of targets if timed well. That timing window is only a few seconds long, so learning 
          to coordinate it that well takes time and practice.
        </p>

        <p>
          This takes knowing all of the same skills that a smaller, heavy fighter, takes while also managing 5 other 
          turrets. It can be a lot at times, but having all of the firepower on a single target is well worth it.
        </p>

        <PDFCallout type="info">
          There are no dedicated call-outs for the master gunner (outside of the regular call-outs) so using regular 
          conversation between you and your shipmates is necessary. If you want to tell your gunners to wait to fire on 
          a target you have to just tell them straight up.
        </PDFCallout>

        <p>
          The relationship between gunners and their master gunner is the same as one you might find in a professional 
          kitchen. Having constant communication is key to understanding your situation and what the best plan moving 
          forward is.
        </p>
      </PDFSection>

    </>
  );
}
