import { ReactNode } from 'react';

interface ShipHeroBannerProps {
  image: string;
  imagePosition?: string;
  title: string;
  subtitle?: string;
  description?: ReactNode;
  children?: ReactNode;
  ariaLabel?: string;
}

export function ShipHeroBanner({
  image,
  imagePosition = 'left 97%',
  title,
  subtitle,
  description,
  children,
  ariaLabel = 'Ship hero image',
}: ShipHeroBannerProps) {
  return (
    <div
      className="w-full overflow-hidden rounded-lg border border-slate-800 relative"
      style={{
        height: 'clamp(320px,48vh,520px)',
        backgroundImage: `url('${image}')`,
        backgroundSize: 'cover',
        backgroundPosition: imagePosition,
        backgroundRepeat: 'no-repeat',
      }}
      aria-label={ariaLabel}
    >
      <div className="absolute bottom-0 left-0 w-full h-[36%] pointer-events-none" style={{
        background: 'linear-gradient(to top, var(--tw-gradient-to, #0a0a0a) 80%, rgba(10,10,10,0) 100%)',
      }} aria-hidden="true" />
      <div
        className="absolute left-0 bottom-0 z-10 p-6 sm:p-8 text-left"
        style={{
          color: 'var(--tw-text-opacity, #e5e7eb)',
          textShadow: '0 2px 8px rgba(0,0,0,0.32)',
          width: '48%',
          maxWidth: '100vw',
        }}
      >
        <div className="mb-2">
          <h1
            className="text-3xl font-bold text-white mb-2"
            style={{
              textShadow: '0 4px 16px rgba(0,0,0,0.48), 0 2px 8px rgba(0,0,0,0.32)',
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <h2
              className="text-lg font-medium text-indigo-200 mb-3"
              style={{
                textShadow: '0 3px 12px rgba(0,0,0,0.36), 0 1px 4px rgba(0,0,0,0.24)',
              }}
            >
              {subtitle}
            </h2>
          )}
        </div>
        {description && (
          <div className="bg-black/80 border border-slate-800 rounded-lg p-4 backdrop-blur-sm">
            {description}
          </div>
        )}
        {children}
      </div>
      <style>{`
        @media (max-width: 900px) {
          .ship-hero-content {
            width: 90vw !important;
            max-width: 100vw;
          }
        }
        @media (max-width: 640px) {
          .ship-hero-content {
            left: 50%;
            bottom: 0.5rem;
            transform: translateX(-50%);
            width: 95vw !important;
            max-width: 100vw;
            padding: 0.75rem;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
