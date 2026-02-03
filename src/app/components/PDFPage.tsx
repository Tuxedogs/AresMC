import { ReactNode } from 'react';

interface PDFPageProps {
  children: ReactNode;
  pageNumber?: number;
  showHeader?: boolean;
  showFooter?: boolean;
}

export function PDFPage({ children, pageNumber, showHeader = true, showFooter = true }: PDFPageProps) {
  return (
    <div className="pdf-page bg-[#1a1a1a] text-gray-100 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative pdf-content">
        {/* Header */}
        {showHeader && (
          <header className="pdf-header border-b border-gray-800/50 pb-4 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                  
                </h1>
              </div>
              <div className="h-px flex-1 mx-6 bg-gradient-to-r from-gray-800 via-indigo-900/30 to-transparent" />
              <div className="text-xs text-gray-500">
                v1.0 • 2026
              </div>
            </div>
          </header>
        )}

        {/* Content */}
        <div className="pdf-body">
          {children}
        </div>

        {/* Footer */}
        {showFooter && pageNumber && (
          <footer className="pdf-footer border-t border-gray-800/50 pt-4 mt-8">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div>ARES Multi-Crew Operations</div>
              <div className="font-mono">{pageNumber}</div>
            </div>
          </footer>
        )}
      </div>
    </div>
  );
}
