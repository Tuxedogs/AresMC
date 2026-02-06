import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronLeft, ChevronRight, FileDown } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { PDFPage } from '@/app/components/PDFPage';
import { chapterRoutes, tocStructure } from '@/app/router';
import { TOC } from '@/app/components/TOC';
import chapters from '@/app/content/chapters';

export function RootLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Ensure navigation lands at the top of the new page.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  // Find current chapter based on route
  const currentChapter = chapterRoutes.find((ch) => {
    const path = ch.path === '/' ? '/' : ch.path;
    return location.pathname === path;
  }) || chapterRoutes[0];

  const currentIndex = chapterRoutes.findIndex((ch) => ch.id === currentChapter.id);
  const previousChapter = currentIndex > 0 ? chapterRoutes[currentIndex - 1] : null;
  const nextChapter = currentIndex < chapterRoutes.length - 1 ? chapterRoutes[currentIndex + 1] : null;

  const navigate = useNavigate();

  const navigateToChapter = (path: string) => {
    // Use client-side navigation to avoid full page reloads (prevents white flash)
    navigate(path);
    setSidebarOpen(false);
  };

  const handlePrint = () => {
    window.print();
  };

  // Check if we're on the intro page (showing cover/toc)
  const isIntroPage = currentChapter.id === 'introduction';

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Top Navigation - Hidden on print */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#141414] border-b border-gray-800 print:hidden">
        <div className="flex items-center h-14 px-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 hover:bg-gray-800 rounded-lg mr-3 transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="flex-1">
            <h1 className="text-base font-medium text-white">
              Multi-Crew Operations
            </h1>
          </div>

        </div>
      </nav>

      {/* Sidebar Navigation - Hidden on print */}
      <aside
        className={`
          fixed top-14 left-0 h-[calc(100vh-3.5rem)] w-64 bg-[#141414] border-r border-gray-800
          transition-transform duration-300 z-40 overflow-y-auto print:hidden
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-4">
          <div className="mb-6">
            <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
              Contents
            </h2>
          </div>
          <nav className="space-y-1">
            <TOC items={chapters} currentPath={location.pathname} onNavigate={navigateToChapter} />
          </nav>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden print:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="lg:ml-64 pt-14 print:pt-0 print:ml-0">
        <div className="pdf-container">
          {/* Cover Page - Only on introduction chapter */}
          {isIntroPage && (
            <PDFPage pageNumber={undefined} showHeader={false} showFooter={false}>
              <div className="flex flex-col items-center justify-center h-full text-center pt-16 pb-40">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-1.5 bg-indigo-600/20 border border-indigo-500/30 rounded-full mt-12">
                    <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                      Version 1.0 • February 2026
                    </span>
                  </div>

                  <h1 className="text-6xl font-light text-white tracking-tight">
                    Multi-Crew<br />Manual
                  </h1>

                  <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

                  <p className="text-xl text-gray-400 font-light">
                    A Tux-Actual Production
                  </p>

                  <div className="pt-12 space-y-2 text-sm text-gray-500">
                    <p>ARES Multi-Crew Operations</p>
                    <p>Moonbreakers Training Division</p>
                  </div>
                </div>
                {/* Extra vertical space at the bottom of the cover */}
                <div style={{ minHeight: '30vh' }} />
              </div>
            </PDFPage>
          )}



          {/* Current Chapter Content */}
          <PDFPage pageNumber={currentChapter.pageNumber}>
            <Outlet />
            <div className="flex justify-between mt-12 mb-4">
              {previousChapter && (
                <button
                  onClick={() => navigateToChapter(previousChapter.path)}
                  className="bg-gray-800/60 text-gray-200 hover:bg-gray-700 hover:text-white font-medium text-sm px-6 py-3 rounded-lg shadow transition-all border border-gray-700"
                  aria-label={`Go to previous chapter: ${previousChapter.title}`}
                >
                  ← {previousChapter.title}
                </button>
              )}
              {nextChapter && (
                <button
                  onClick={() => navigateToChapter(nextChapter.path)}
                  className="bg-gray-800/60 text-gray-200 hover:bg-gray-700 hover:text-white font-medium text-sm px-6 py-3 rounded-lg shadow transition-all border border-gray-700"
                  aria-label={`Go to next chapter: ${nextChapter.title}`}
                >
                  {nextChapter.title} →
                </button>
              )}
            </div>
          </PDFPage>
        </div>
      </main>

      {/* Navigation Buttons - Hidden on print */}
      <div className="print:hidden">
        {/* Floating button for section top only (implementation assumed elsewhere) */}
      </div>

      {/* Print Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .pdf-container {
          max-width: 310mm;
          margin: 0 auto;
          background: #0a0a0a;
        }

        .pdf-page {
          width: 310mm;
          min-height: 297mm;
          margin: 0 auto 2rem;
          padding: 25mm 20mm;
          box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
        }

        .pdf-content {
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .pdf-body {
          flex: 1;
        }

        @media print {
          @page {
            size: A4;
            margin: 0;
          }

          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }

          body {
            margin: 0;
            padding: 0;
            background: #1a1a1a;
          }

          .pdf-container {
            max-width: none;
            margin: 0;
            background: transparent;
          }

          .pdf-page {
            width: 210mm;
            height: 297mm;
            min-height: 297mm;
            max-height: 297mm;
            margin: 0;
            padding: 25mm 20mm;
            box-shadow: none;
            page-break-after: always;
            page-break-inside: avoid;
          }

          .pdf-page:last-child {
            page-break-after: auto;
          }

          .print\\:hidden {
            display: none !important;
          }

          .print\\:pt-0 {
            padding-top: 0 !important;
          }

          .print\\:ml-0 {
            margin-left: 0 !important;
          }
        }

        @media screen and (max-width: 1024px) {
          .pdf-page {
            width: 100%;
            min-height: auto;
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
