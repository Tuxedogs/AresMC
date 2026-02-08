import { PDFSection } from '@/app/components/PDFSection';
import { PDFCallout } from '@/app/components/PDFCallout';

export function PolarisPage() {
  return (
    <>
      <PDFSection
        title="Polaris"
        subtitle="Long-range threat projection playbook"
        level={1}
      >
        <h4>***Image***</h4>
        <p>
          The Polaris is built around long-range threat projection, requiring timing, restraint and an enemy who
          doesn't know their flare keybind. When used correctly, it forces the enemy to react before they ever get to
          choose a fight. When used poorly, it becomes an overexposed Dorito-Coffin. The Polaris does not win by
          trading, do not brawl with it, it's barely a capital when viewing raw stats. It wins by deciding when combat
          is allowed to happen at all.
        </p>

        <PDFCallout type="warning" title="Crew Size">
          Due to the inherent nature of Polaris gameplay and capabilities, the crew is generally very small, having 3
          or more on board is not just viewed as a detriment to overall combat capabilities of the group. It is
          definitively detrimental.
        </PDFCallout>

        <p>
          This makes the one crew member on board a very busy individual, juggling torpedo operations, engineering
          emergencies, manning the Maris size 6 nose cannon, or running up to the quad S4's on the shoulders to push off
          smaller threats to which there are many. A single hornet with specialized weaponry has the ability in the
          current patch to disable your ship entirely in under a minute by focusing the power plant.
        </p>

        <PDFCallout type="important" title="Under Pressure">
          If you are under pressure in the Polaris at all, something has gone wrong and your crew has 2 jobs.
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
    </>
  );
}
