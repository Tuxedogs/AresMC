import { useState, useEffect } from "react";
import { FileDown, Menu, X, ChevronRight, ChevronUp, ChevronsUp } from "lucide-react";
import { Button } from "./components/ui/button";
import { PDFPage } from "./components/PDFPage";
import { IntroductionPage } from "./pages/IntroductionPage";
import { MCFlightPage } from "./pages/MCFlightPage";
import { KeybindingsPage } from "./pages/KeybindingsPage";
import { SubTargetingPage } from "./pages/SubTargetingPage";
import { GunneryWithLunaPage } from "./pages/GunneryWithLunaPage";
import { PilotCrewPage } from "./pages/PilotCrewPage";
import { CapacitorPage } from "./pages/CapacitorPage";
import { SpecialShipsPage } from "./pages/SpecialShipsPage";
import { HowToUsePage } from "./pages/HowToUsePage";
import { ExtraKnowledgePage } from "./pages/ExtraKnowledgePage";
import { GameSettingsPage } from "./pages/GameSettingsPage";
import { CommunicationsPage } from "./pages/CommunicationsPage";

export default function App() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [atSectionTop, setAtSectionTop] = useState(false);
  const [enableDoubleChevron, setEnableDoubleChevron] = useState(false);
  const [lastButtonClickAt, setLastButtonClickAt] = useState<number | null>(null);

  const sections = [
  { id: "introduction", title: "Introduction", page: 1 },
  { id: "mc-flight", title: "Patch Info", page: 2 },
  { id: "keybindings", title: "Keybindings", page: 3, children: [
    { id: "game-settings", title: "Additional Keybinds", page: 11 }
  ] },
  { id: "sub-targeting", title: "Sub-Targeting", page: 4 },
  { id: "common-knowledge", title: "Gunnery with Luna", page: 5 },
  { id: "pilot-crew", title: "Pilot-Crew Pairs", page: 6 },
  { id: "capacitor", title: "Capacitor Management", page: 7 },
  { id: "special-ships", title: "Ships", page: 8 },
  { id: "how-to-use", title: "How to use this Knowledge", page: 9 },
  { id: "extra-knowledge", title: "Addl. Resources", page: 10 },
];

  const flatSections = sections.flatMap((s) => [s, ...(s.children ?? [])]);



  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = flatSections.length - 1; i >= 0; i--) {
        const element = document.getElementById(flatSections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(flatSections[i].id);

          // Determine if we're at the visual "top" of this section (considering offset used elsewhere)
          const offset = 80;
          const desiredTop = element.offsetTop - offset;
          const atTop = Math.abs(window.scrollY - desiredTop) <= 8;
          setAtSectionTop(atTop);

          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastButtonClickAt]);

  // Reset double-chev when user manually interacts (wheel/touch/keydown/pointer)
  useEffect(() => {
    const resetDouble = (e?: Event) => {
      // If the interaction started on the scroll button itself, do not reset.
      try {
        const target = (e as Event & { target?: Element })?.target as Element | undefined;
        if (target && target.closest && target.closest('.scroll-to-section-btn')) {
          return;
        }
        // For keydown, if the active element is the scroll button, ignore
        if (e && (e as KeyboardEvent).type === 'keydown') {
          const active = document.activeElement as Element | null;
          if (active && active.closest && active.closest('.scroll-to-section-btn')) return;
        }
      } catch (err) {
        // ignore errors and fall through to reset
      }

      setEnableDoubleChevron(false);
      setLastButtonClickAt(null);
    };

    window.addEventListener('wheel', resetDouble, { passive: true });
    window.addEventListener('touchstart', resetDouble, { passive: true });
    window.addEventListener('pointerdown', resetDouble, { passive: true });
    window.addEventListener('keydown', resetDouble);

    return () => {
      window.removeEventListener('wheel', resetDouble);
      window.removeEventListener('touchstart', resetDouble);
      window.removeEventListener('pointerdown', resetDouble);
      window.removeEventListener('keydown', resetDouble);
    };
  }, []);

  const onNavigate = (id: string, source: 'button' | 'toc' = 'toc') => {
    const el = document.getElementById(id);
    if (!el) return;

    // If navigation came from the scroll button, enable double chevron behavior.
    if (source === 'button') {
      setEnableDoubleChevron(true);
      setLastButtonClickAt(Date.now());
    } else {
      setEnableDoubleChevron(false);
      setLastButtonClickAt(null);
    }

    // Scroll using the same offset logic as scrollToSection so "top" detection matches.
    const offset = 80;
    const elementPosition = el.offsetTop - offset;
    window.scrollTo({ top: elementPosition, behavior: 'smooth' });

    setActiveSection(id);
  };

  const scrollToSection = (sectionId: string) => {
    // Treat this as TOC-style navigation: disable double chevron
    setEnableDoubleChevron(false);
    setLastButtonClickAt(null);

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      setSidebarOpen(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

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
            {sections.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`
                    w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all flex items-center justify-between group
                    ${
                      activeSection === section.id
                        ? 'bg-indigo-600 text-white font-medium'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }
                  `}
                >
                  <span>{section.title}</span>
                  <span className="text-xs text-gray-500 group-hover:text-gray-400 font-mono">
                    {section.page}
                  </span>
                </button>

                {section.children?.map((child) => (
                  <button
                    key={child.id}
                    onClick={() => scrollToSection(child.id)}
                    className={`
                      w-full text-left px-6 py-2 rounded-lg text-sm transition-all flex items-center justify-between group text-gray-300 hover:bg-gray-800 hover:text-white
                      ${activeSection === child.id ? 'bg-indigo-600 text-white font-medium' : ''}
                    `}
                  >
                    <span className="text-sm">{child.title}</span>
                    <span className="text-xs text-gray-500 group-hover:text-gray-400 font-mono">
                      {child.page}
                    </span>
                  </button>
                ))}
              </div>
            ))}
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
          {/* Cover Page */}
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

          {/* Table of Contents */}
          <PDFPage pageNumber={undefined} showHeader={false}>
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-light text-white mb-3">Contents</h2>
                <div className="h-px bg-gradient-to-r from-indigo-500/50 via-indigo-500/20 to-transparent" />
              </div>

              <div className="space-y-2">
                {sections.map((section) => (
                  <div key={section.id}>
                    <div
                      className="flex items-center justify-between py-3 border-b border-gray-800/50 group hover:border-indigo-500/30 transition-colors cursor-pointer"
                      onClick={() => scrollToSection(section.id)}
                    >
                      <div className="flex items-center gap-3">
                        <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-indigo-400 transition-colors" />
                        <span className="text-gray-300 group-hover:text-white transition-colors">
                          {section.title}
                        </span>
                      </div>
                      <span className="text-sm font-mono text-gray-500 group-hover:text-indigo-400 transition-colors">
                        {section.page}
                      </span>
                    </div>

                    {section.children?.map((child) => (
                      <div
                        key={child.id}
                        className="flex items-center justify-between py-2 pl-8 border-b border-gray-800/20 group hover:border-indigo-500/30 transition-colors cursor-pointer"
                        onClick={() => scrollToSection(child.id)}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-gray-400 text-sm">{child.title}</span>
                        </div>
                        <span className="text-sm font-mono text-gray-500 group-hover:text-indigo-400 transition-colors">
                          {child.page}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </PDFPage>
          </div>
          {/* Content Pages */}
          <div id="introduction">
  <PDFPage pageNumber={1}>
       <IntroductionPage />
  </PDFPage>
</div>

          <div id="mc-flight">
            <PDFPage pageNumber={2}>
                <MCFlightPage />
            </PDFPage>
          </div>

          <div id="keybindings">
            <PDFPage pageNumber={3}>
                <KeybindingsPage />
            </PDFPage>
          </div>

<div id="sub-targeting">
  <PDFPage pageNumber={4}>
    <SubTargetingPage />
  </PDFPage>
</div>

<div id="common-knowledge">
  <PDFPage pageNumber={5}>
  <GunneryWithLunaPage />
  </PDFPage>
</div>

<div id="pilot-crew">
  <PDFPage pageNumber={6}>
  <PilotCrewPage />
  </PDFPage>
</div>

<div id="capacitor">
  <PDFPage pageNumber={7}>
  <CapacitorPage />
  </PDFPage>
</div>

<div id="special-ships">
  <PDFPage pageNumber={8}>
  <SpecialShipsPage />
  </PDFPage>
</div>

<div id="how-to-use">
  <PDFPage pageNumber={9}>
  <HowToUsePage />
  </PDFPage>
</div>

<div id="extra-knowledge">
  <PDFPage pageNumber={10}>
  <ExtraKnowledgePage />
  </PDFPage>
</div>

<div id="game-settings">
  <PDFPage pageNumber={11}>
  <GameSettingsPage />
  </PDFPage>
</div>

      </main>

      {/* Floating button: return to top of current section */}
      <div className="print:hidden">
        <Button
          onClick={() => {
            const idx = sections.findIndex((s) => s.id === activeSection);
            if (atSectionTop && enableDoubleChevron && idx > 0) {
              // Double chevron action: go to previous section (keep double-chev enabled so user can chain)
              onNavigate(sections[idx - 1].id, 'button');
            } else {
              // Single chevron action: scroll to top of current section and enable double chevron
              onNavigate(activeSection, 'button');
            }
          }}
          aria-label={atSectionTop && enableDoubleChevron ? 'Go to previous section' : 'Scroll to section top'}
          className="scroll-to-section-btn"
        >
          {atSectionTop && enableDoubleChevron ? (
            <ChevronsUp className="w-5 h-5" />
          ) : (
            <ChevronUp className="w-5 h-5" />
          )}
        </Button>
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

        /* Scroll button styling */
        .scroll-to-section-btn {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          width: 56px;
          height: 56px;
          border-radius: 9999px;
          background-color: oklch(0.511 0.262 276.966);
          color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          z-index: 50;
          box-shadow: 0 8px 24px rgba(0,0,0,0.45);
          border: 0;
        }

        .scroll-to-section-btn:hover {
          filter: brightness(0.95);
        }

        @media screen and (min-width: 1024px) {
          .scroll-to-section-btn {
            right: auto;
            left: calc(50% + 155mm + 12px);
          }
        }
      `}</style>
    </div>
  );
}
