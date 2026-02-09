import { ShipPageTemplate } from '@/app/components/ShipPageTemplate';

export function IdrisPage() {
  return (
    <>
      <ShipPageTemplate
        title="Idris"
        subtitle="Supercapital risk and role reality"
        banner={
          <video
            className="ship-video-banner w-full rounded-lg border border-slate-800"
            src=""
            autoPlay
            loop
            muted
            playsInline
          />
        }
        overview={
          <>
            <p className="mb-2">
              The idris is not a multi-crew ship, it is a solo powerhouse with the stats of a supercapital. It's an
              unbal- I'm going to stop before this becomes another manifesto.
            </p>
            <p className="text-amber-400 font-bold text-lg">Don't waste a crew.</p>
          </>
        }
        crew={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat metus at velit pretium, sit amet
            vulputate metus interdum.
          </p>
        }
        piloting={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus, orci at gravida placerat, mauris
            justo egestas tellus, sed posuere massa elit in nisl.
          </p>
        }
        turretPosturing={
          <img
            src="/Images/Idris/turret-posturing.png"
            alt="Turret arcs, nose orientation, and dead zones"
            className="w-full rounded-lg border border-slate-800 my-4"
          />
        }
        loadout={
          <a className="text-indigo-300 underline" href="spviewer.update" target="_blank" rel="noreferrer">
            spviewer.update
          </a>
        }
        criticalNotes={
          <div className="border border-slate-800 bg-slate-950/70 rounded-lg p-5 mt-3">
            Doctrine block
          </div>
        }
        generalRules={
          <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
            <li>Restocking torp racks</li>
            <li>off bore torpedo's</li>
          </ul>
        }
      />
    </>
  );
}
