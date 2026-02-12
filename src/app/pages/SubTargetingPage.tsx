import { PDFSection } from '../components/PDFSection';
import { PDFCallout } from '../components/PDFCallout';
import { PDFTable } from '../components/PDFTable';
import { Dialog, DialogClose, DialogContent, DialogTrigger } from '../components/ui/dialog';

export function SubTargetingPage() {
  const targetCyclingBinds = [
    {
      action: 'Cycle Sub-Target Forward',
      keybind: '',
      description: 'Extremely important. Cycle through key components for more effective damage',
    },
    {
      action: 'Cycle Sub-Target Back',
      keybind: '',
      description: 'Cycle backwards if you skip the intended component',
    },
  ];

  const subtargetingImages = [
    {
      src: '/Images/Subtargeting/idrispower1.png',
      alt: 'Idris power plant subtarget example 1',
      caption: 'Components highlight directly on the target; cycle subtarget forward while remaining locked.',
    },
    {
      src: '/Images/Subtargeting/idrispower2.png',
      alt: 'Idris power plant subtarget example 2',
      caption: 'Correct subtarget selected. The component highlights in the Target Status and casted MFD after cycling subtargets.',
    },
    {
      src: '/Images/Subtargeting/idrisgrimbal.png',
      alt: 'Auto-gimbal tracking the selected subtarget',
      caption: 'Auto-Gimbal tracking the selected subtarget. Missiles and torpedoes follow the same logic and will strike as close as possible to the intended component.',
    },
  ];

  return (
    <>
      <PDFSection 
        title="Sub Targeting Guide" 
        subtitle="Targeting specific components for tactical advantage"
        level={1}
      >
        <PDFCallout type="assist" title="Request">
          Feedback on this section is highly requested.
        </PDFCallout>

        <p>
          Sub-targeting is one of the most powerful tools available to not just gunners, but everyone. By targeting specific components
          of enemy ships, aim assist will pull your shots closer to your subtarget, instead of hitting center hull.
        </p>

        <PDFTable
          columns={[ 
            { header: 'Target Cycling -', key: 'action', width: '30%' },
            { header: 'Keybind', key: 'keybind', width: '20%' },
            { header: 'Description', key: 'description', width: '50%' },
          ]}
          rows={targetCyclingBinds}
        />

        
          <PDFCallout type="warning">
            Normally you will want these both bound. 4.6 has a client crash with "backwards" <b>DO NOT BIND Cycle Back</b>.
          </PDFCallout>


        <PDFSection title="In Practice" level={2}>
        <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 my-6">
          <h4 className="text-amber-400 font-semibold mb-3 text-base">Subtargeting Instructions</h4>
          <ol className="list-decimal pl-5 text-sm text-gray-300 space-y-2">
            <li>Acquire a fresh target lock.</li>
            <li>Aim in the general vicinity of the component you want to subtarget; accuracy matters.</li>
            <li>Press <strong>Cycle Subtarget Forward</strong> once.</li>
            <li>Confirm the component highlights in the Target Status and casted MFDs.</li>
            <li>If the subtarget does not register, unlock the target and repeat.</li>
          </ol>

          <h4 className="text-indigo-400 font-semibold mt-6 mb-3 text-base">Close-Range (Precision Mode)</h4>
          <ol className="list-decimal pl-5 text-sm text-gray-300 space-y-2">
            <li>Switch to Precision Mode at close range.</li>
            <li>Allow the desired component to highlight on the target.</li>
            <li>Press <strong>Cycle Subtarget Forward</strong> while remaining locked.</li>
          </ol>

          <h4 className="text-indigo-400 font-semibold mt-6 mb-3 text-base">Weapon Behavior</h4>
          <ul className="list-disc pl-5 text-sm text-gray-300 space-y-2">
            <li>Auto-Gimbal will track the selected subtarget effectively at close range.</li>
            <li>Missiles and torpedoes follow the selected subtarget and will strike as close as possible to the intended component.</li>
          </ul>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-6">
          {subtargetingImages.map((image) => (
            <div key={image.src} className="space-y-2">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="border border-slate-800 rounded-lg bg-slate-950/60 h-40 w-full overflow-hidden flex items-center justify-center text-xs text-gray-500 cursor-zoom-in"
                    aria-label="Enlarge image"
                  >
                    <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
                  </button>
                </DialogTrigger>
                <DialogContent className="!w-[70vw] !h-[50vh] !max-w-none !max-h-none !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-[calc(50%+192px)] border-slate-800 bg-black/95 p-0">
                  <DialogClose asChild>
                    <button
                      type="button"
                      className="h-full w-full cursor-zoom-out flex items-center justify-center"
                      aria-label="Close image"
                    >
                      <img src={image.src} alt={image.alt} className="w-full h-full object-contain" />
                    </button>
                  </DialogClose>
                </DialogContent>
              </Dialog>
              <p className="text-xs text-gray-400">{image.caption}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 my-6">
          <div className="grid gap-6 md:grid-cols-2 md:divide-x md:divide-indigo-800/30">
            <div>
              <h4 className="text-indigo-400 font-semibold mb-3 text-base">Components you can target currently:</h4>
              <div className="text-sm text-gray-300 space-y-2">
                <div>Power Plants</div>
                <div>Engines</div>
                <div>Weapons</div>
                <div>Shields</div>
                <div>Quantum Drive</div>
                <div>PDC's</div>
              </div>
            </div>
            <div className="md:pl-6">
              <h4 className="text-indigo-400 font-semibold mb-3 text-base">Cannot lock, can destroy:</h4>
              <div className="text-sm text-gray-300 space-y-2">
                <div>Maneuvering Thrusters</div>
                <div>Most Radar</div>
                <div>Retro Thrusters</div>
                <div>Missile racks</div>
                <div>Self-Worth</div>
              </div>
            </div>
          </div>
        </div>

        <p className="italic text-sm mt-6 text-gray-400">
          *****SUB TARGETING IMAGERY***** - Visual guides to be added
        </p>
        </PDFSection>
      </PDFSection>
    </>
  );
}
