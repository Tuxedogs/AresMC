import { useState } from 'react';
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

          <Button
            onClick={handlePrint}
            size="sm"
            className="gap-2 bg-indigo-600 hover:bg-indigo-500 text-white border-0"
          >
            <FileDown className="w-4 h-4" />
            <span className="hidden sm:inline">Export PDF</span>
          </Button>
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
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-1.5 bg-indigo-600/20 border border-indigo-500/30 rounded-full">
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
              </div>
            </PDFPage>
          )}

          {/* Table of Contents - Only on introduction chapter */}
          {isIntroPage && (
            <PDFPage pageNumber={undefined} showHeader={false}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-light text-white mb-3">Contents</h2>
                  <div className="h-px bg-gradient-to-r from-indigo-500/50 via-indigo-500/20 to-transparent" />
                </div>

                <div className="space-y-2">
                  {tocStructure.map((item) => (
                    <div key={item.id} className="w-full">
                      <button
                        onClick={() => navigateToChapter(item.path)}
                        className="w-full text-left group"
                      >
                        <div className="flex items-center justify-between py-3 border-b border-gray-800/50 group hover:border-indigo-500/30 transition-colors">
                          <div className="flex items-center gap-3">
                            <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-indigo-400 transition-colors" />
                            <span className="text-gray-300 group-hover:text-white transition-colors">
                              {item.title}
                            </span>
                          </div>
                          <span className="text-sm font-mono text-gray-500 group-hover:text-indigo-400 transition-colors">{/* page */}</span>
                        </div>
                      </button>

                      {item.children && (
                        <div className="pl-6">
                          {item.children.map((child) => (
                            <button key={child.id} onClick={() => navigateToChapter(child.path)} className="w-full text-left group">
                              <div className="flex items-center justify-between py-2 border-b border-gray-800/30 group hover:border-indigo-500/30 transition-colors">
                                <div className="flex items-center gap-3">
                                  <ChevronRight className="w-3 h-3 text-gray-600 group-hover:text-indigo-400 transition-colors" />
                                  <span className="text-gray-300 group-hover:text-white transition-colors">{child.title}</span>
                                </div>
                              </div>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </PDFPage>
          )}

          {/* Current Chapter Content */}
          <PDFPage pageNumber={currentChapter.pageNumber}>
            <Outlet />
          </PDFPage>
        </div>
      </main>

      {/* Navigation Buttons - Hidden on print */}
      <div className="print:hidden">
        {previousChapter && (
          <Button
            onClick={() => navigateToChapter(previousChapter.path)}
            aria-label="Go to previous chapter"
            className="fixed bottom-24 right-6 rounded-full w-14 h-14 p-0 flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white border-0"
            title={`Previous: ${previousChapter.title}`}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
        )}

        {nextChapter && (
          <Button
            onClick={() => navigateToChapter(nextChapter.path)}
            aria-label="Go to next chapter"
            className="fixed bottom-6 right-6 rounded-full w-14 h-14 p-0 flex items-center justify-center bg-indigo-600 hover:bg-indigo-500 text-white border-0"
            title={`Next: ${nextChapter.title}`}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        )}
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
