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

      <PDFSection title="Perseus" level={2}>
        <h4>***Image***</h4>
        <p>
          
          Four size 8's, capable of one shotting fighters. The ability to rip through a Polaris power plant in seconds. Cheers when you land insane shots 
          at 5km, swearing when you miss them at 500 all with sub-cap interceptor tuning. It's got a decent enough tank 
          in the right hands, able to easily dispatch non idris capitals, all whilst still being engaged by other enemy 
          targets at the same time.
        </p>

        <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 my-6">
          <h4 className="text-indigo-400 font-semibold mb-3 text-base">Gun Positions:</h4>
          
          <div className="space-y-4 text-sm">
            <div>
              <h5 className="text-amber-400 font-semibold mb-2">Gun 1 - Top Forward Position</h5>
              <p>
                Sitting directly behind the nose, they have the benefit of extreme coverage and visibility to most 
                threats, as well as the benefit of being positioned in such a way that natural flight by the pilot 
                makes life a lot better for its operator. Having the benefit of more time on target, more targets.
              </p>
            </div>

            <div>
              <h5 className="text-amber-400 font-semibold mb-2">Gun 2 - Lower Rear Main Turret</h5>
              <p className="mb-2">
                I prefer having more experienced crew members in this position. Due to the limited arc provided as well 
                as the general positioning being counter intuitive to natural flight. It takes an experienced crew to 
                maximize the output of this position, and experience on the Percy when in this seat pays off, 
                immeasurably.
              </p>
              <p>
                Having this position crewed not only wins your fights with raw throughput, it also serves as a critical 
                multi-faceted role. Encompassing any departure for EVA/Ground ops, Engineering first responses and ship 
                field rearming. 
              </p>
            </div>
          </div>
        </div>

           <PDFCallout type="important" title="Pilots">
          I cannot stress enough how important positioning is in this ship. Interceptor like tuning requires position to be held in uncomfortable postures.
          Decoupled flying is a must.
        </PDFCallout>

        <PDFCallout type="warning" title="Convergence">
          Due to the firing arc of the turrets, the best convergence starts around 600m, 
          positioned midway through the pilot's side window. There is a notch in it that serves as a decent enough 
          starting guide of how to position.
        </PDFCallout>

        <p>
          Always account for being too low in your posture for Gun 2, even now I still sometimes underestimate just how 
          much I need to elevate their position in order to get rounds on target.
        </p>

     

        <p>
          Fights between these ships is rarely 1:1, the survivability of your crew and the ability to engage and 
          dispatch enemies while outnumbered, as well as finishing disabled threats from the fighter group is your 
          primary role. Not just winning against the enemy Perseus.
 
        </p>
        <p>A dedicated engineer on this ship is an extreme force multiplier.</p>

      </PDFSection>

      <PDFSection title="Polaris" level={2}>
         <h4>***Image***</h4>
        <p>
          The Polaris is built around long-range threat projection, requiring timing, restraint and an enemy who doesn't 
          know their flare keybind. When used correctly, it forces the enemy to react before they ever get to choose a 
          fight. When used poorly, it becomes an overexposed Dorito-Coffin. The Polaris does not win by trading, do not 
          brawl with it, it's barely a capital when viewing raw stats. It wins by deciding when combat is allowed to 
          happen at all.
        </p>

        <PDFCallout type="warning" title="Crew Size">
          Due to the inherent nature of Polaris gameplay and capabilities, the crew is 
          generally very small, having 3 or more on board is not just viewed as a detriment to overall combat 
          capabilities of the group. It is definitively detrimental.
        </PDFCallout>

        <p>
          This makes the one crew member on board a very busy individual, juggling torpedo operations, engineering 
          emergencies, manning the Maris size 6 nose cannon, or running up to the quad S4's on the shoulders to push 
          off smaller threats to which there are many. A single hornet with specialized weaponry has the ability in the 
          current patch to disable your ship entirely in under a minute by focusing the power plant.
        </p>

        <PDFCallout type="important" title="Under Pressure">
          If you are under pressure in the Polaris at all, something has gone wrong 
          and your crew has 2 jobs.
        </PDFCallout>

        <p>
          Experience with the Polaris crew can vary, as long as engagement rules are adhered to, it's favored in one 
          important aspect, time. If you approach correctly, maintain range and don't draw any attention to yourself, 
          there's a lot of time in relative safety for the crew to get sub-targeted on extremely armored targets like 
          the Idris.
        </p>

        <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 my-6">
          <h4 className="text-indigo-400 font-semibold mb-2 text-base">Torpedo Effectiveness:</h4>
          <p className="text-sm">
            A single well placed size 10 torpedo out of one volley (typically called packs - 4pack -6pack -8pack) is 
            all that's required to knock out both power plants on an Idris, crippling it extensively. It will take half 
            the total payload to achieve a similar result while hitting hull alone, relying on luck to hit critical 
            components or just raw damage throughput to get to the Power Plants via bleed.
          </p>
        </div>

        <p className="font-semibold text-amber-400">
          Keep the Power Plant and QT drive up and running at all costs, because that's what you'll be doing.
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

      <PDFSection title="Idris" level={2}>
         <h4>***Image***</h4>
        <p className="mb-2">
          The idris is not a multi-crew ship, it is a solo powerhouse with the stats of a supercapital. It's an 
          unbal- I'm going to stop before this becomes another manifesto.
        </p>
        <p className="text-amber-400 font-bold text-lg">
          Don't waste a crew.
        </p>
      </PDFSection>
    </>
  );
}
