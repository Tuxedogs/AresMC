import { PDFSection } from '@/app/components/PDFSection';
import { ExternalLink } from 'lucide-react';

export function ExtraKnowledgePage() {
  return (
    <>
      <PDFSection 
        title="Extra Knowledge" 
        subtitle="Quick reference guide for weapon systems and useful resources"
        level={1}
      >
      </PDFSection>

     
      <PDFSection title="Links and Resources" level={2}>
        <div className="space-y-4">
          <div className="bg-indigo-950/20 border border-indigo-600/30 rounded-lg p-5">
            <h4 className="text-indigo-400 font-semibold mb-3 flex items-center gap-2 text-base">
              <ExternalLink className="w-4 h-4" />
              External Tools
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <a href="https://www.spviewer.eu/" target="_blank" rel="noopener noreferrer" 
                   className="text-indigo-400 hover:text-indigo-300 font-medium underline">
                  Spviewer
                </a>
                <p className="mt-1">
                  I highly recommend this website as it gives good details about items, ships, and parts
                </p>
              </div>

              <div>
                <a href="https://www.erkul.games/" target="_blank" rel="noopener noreferrer" 
                   className="text-indigo-400 hover:text-indigo-300 font-medium underline">
                  Erkul
                </a>
                <p className="mt-1">
                  More simplistic version of Spviewer
                </p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-950/20 border border-indigo-600/30 rounded-lg p-5">
            <h4 className="text-indigo-400 font-semibold mb-3 text-base">Contact & Questions</h4>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-indigo-400 font-semibold">Tux-Actual</span> - In game
              </p>
              <p>
                <span className="text-indigo-400 font-semibold">tuxactual</span> - Discord
              </p>
              <p>
                <span className="text-indigo-400 font-semibold">UnderworldEvie</span> - Discord
              </p>
              <p>
                <span className="text-indigo-400 font-semibold">CosticLuna</span> - WLCD and ARES discord
              </p>
            </div>
          </div>
        </div>
      </PDFSection>
    </>
  );
}
