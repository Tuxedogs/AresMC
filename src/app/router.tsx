import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/app/layouts/RootLayout';
import chapters from '@/app/content/chapters';

import { IntroductionPage } from '@/app/pages/IntroductionPage';
import { MCFlightPage } from '@/app/pages/MCFlightPage';
import { KeybindingsPage } from '@/app/pages/KeybindingsPage';
import { SubTargetingPage } from '@/app/pages/SubTargetingPage';
import { CommonKnowledgePage } from '@/app/pages/CommonKnowledgePage';
import { PilotCrewPage } from '@/app/pages/PilotCrewPage';
import { CapacitorPage } from '@/app/pages/CapacitorPage';
import { SpecialShipsPage } from '@/app/pages/SpecialShipsPage';
import { HowToUsePage } from '@/app/pages/HowToUsePage';
import { ExtraKnowledgePage } from '@/app/pages/ExtraKnowledgePage';
import { GameSettingsPage } from '@/app/pages/GameSettingsPage';
import { CommunicationsPage } from '@/app/pages/CommunicationsPage';

const pageMap: Record<string, any> = {
  'introduction': IntroductionPage,
  'mc-flight': MCFlightPage,
  'special-ships': SpecialShipsPage,
  'keybindings': KeybindingsPage,
  'game-settings': GameSettingsPage,
  'sub-targeting': SubTargetingPage,
  'common-knowledge': CommonKnowledgePage,
  'capacitor': CapacitorPage,
  'pilot-crew': PilotCrewPage,
  'communications': CommunicationsPage,
  'how-to-use': HowToUsePage,
  'extra-knowledge': ExtraKnowledgePage,
};

function flatten(list: typeof chapters) {
  const out: any[] = [];
  function walk(items: typeof chapters) {
    for (const c of items) {
      out.push(c);
      if (c.children) walk(c.children as any);
    }
  }
  walk(list);
  return out;
}

export const chapterRoutes = flatten(chapters).map((c, idx) => ({
  id: c.id,
  title: c.title,
  path: c.path,
  pageNumber: c.pageNumber,
  component: pageMap[c.id] ?? (() => null),
}));

export const tocStructure = chapters;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: chapterRoutes.map((chapter) => ({
      path: chapter.path === '/' ? undefined : chapter.path,
      index: chapter.path === '/',
      element: <chapter.component />,
    })),
  },
]);
