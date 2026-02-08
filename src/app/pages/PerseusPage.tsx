import { PDFSection } from '@/app/components/PDFSection';
import { PDFCallout } from '@/app/components/PDFCallout';

export function PerseusPage() {
  return (
    <>
      <PDFSection
        title="Perseus"
        subtitle="Capital-class gun platform tactics"
        level={1}
      >
        <h4>***Image***</h4>
        <p>
          Four size 8's, capable of one shotting fighters. The ability to rip through a Polaris power plant in seconds.
          Cheers when you land insane shots at 5km, swearing when you miss them at 500 all with sub-cap interceptor
          tuning. It's got a decent enough tank in the right hands, able to easily dispatch non idris capitals, all
          whilst still being engaged by other enemy targets at the same time.
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
          I cannot stress enough how important positioning is in this ship. Interceptor like tuning requires position
          to be held in uncomfortable postures. Decoupled flying is a must.
        </PDFCallout>

        <PDFCallout type="warning" title="Convergence">
          Due to the firing arc of the turrets, the best convergence starts around 600m, positioned midway through the
          pilot's side window. There is a notch in it that serves as a decent enough starting guide of how to position.
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
    </>
  );
}
