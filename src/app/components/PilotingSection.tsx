import { ReactNode, isValidElement } from 'react';
import { PDFCallout } from './PDFCallout';

interface PilotingSectionProps {
  videoOrImage?: ReactNode;
  stepTitle: string;
  steps: ReactNode[];
  isPosturePlaying?: boolean;
  onPostureToggle?: () => void;
}

export function PilotingSection({
  videoOrImage,
  stepTitle,
  steps,
  isPosturePlaying,
  onPostureToggle,
}: PilotingSectionProps) {
  return (
    <div className="my-6 flex flex-col gap-6">
      <div className="rounded-lg border border-slate-800 bg-slate-950/60 overflow-hidden">
        <div className="relative">
          {videoOrImage ? (
            <>
              {videoOrImage}
              {isValidElement(videoOrImage) && videoOrImage.type === 'video' && typeof onPostureToggle === 'function' && (
                <button
                  type="button"
                  onClick={onPostureToggle}
                  className="absolute bottom-2 right-2 z-10 rounded-full border border-slate-700/70 bg-slate-950/80 px-3 py-1 text-xs font-semibold text-slate-100 shadow-sm transition hover:bg-slate-900"
                  aria-label={isPosturePlaying ? 'Pause posture video' : 'Play posture video'}
                >
                  {isPosturePlaying ? 'Pause' : 'Play'}
                </button>
              )}
            </>
          ) : (
            <div className="w-full aspect-video flex items-center justify-center bg-slate-900/40">
              <span className="text-indigo-300 text-sm">[Piloting video or diagram coming soon]</span>
            </div>
          )}
        </div>
      </div>
      <div className="bg-gray-900/50 border border-indigo-900/30 rounded-lg p-5 pb-4 flex flex-col">
        <h4 className="text-amber-400 font-semibold mb-3 text-base">{stepTitle}</h4>
        <ol className="text-sm text-gray-300 space-y-3 leading-relaxed list-decimal pl-5">
          {steps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
