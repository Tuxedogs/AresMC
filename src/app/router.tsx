import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/app/layouts/RootLayout';
import { IntroductionPage } from '@/app/pages/IntroductionPage';
import { MCFlightPage } from '@/app/pages/MCFlightPage';
import { SubTargetingPage } from '@/app/pages/SubTargetingPage';
import { KeybindingsPage } from '@/app/pages/KeybindingsPage';
import { CommonKnowledgePage } from '@/app/pages/CommonKnowledgePage';
import { PilotCrewPage } from '@/app/pages/PilotCrewPage';
import { CapacitorPage } from '@/app/pages/CapacitorPage';
import { SpecialShipsPage } from '@/app/pages/SpecialShipsPage';
import { HowToUsePage } from '@/app/pages/HowToUsePage';
import { ExtraKnowledgePage } from '@/app/pages/ExtraKnowledgePage';
import { GameSettingsPage } from '@/app/pages/GameSettingsPage';
import { CommunicationsPage } from '@/app/pages/CommunicationsPage';

// Linear chapter list (used for prev/next navigation)
export const chapterRoutes = [
  { id: 'introduction', title: 'Introduction', path: '/', pageNumber: 1, component: IntroductionPage },
  { id: 'mc-flight', title: 'Flight', path: '/mc-flight', pageNumber: 2, component: MCFlightPage },
  { id: 'special-ships', title: 'Ships', path: '/special-ships', pageNumber: 3, component: SpecialShipsPage },
  { id: 'sub-targeting', title: 'Sub-Targeting', path: '/sub-targeting', pageNumber: 4, component: SubTargetingPage },
  { id: 'keybindings', title: 'Keybindings', path: '/keybindings', pageNumber: 5, component: KeybindingsPage },
  { id: 'game-settings', title: 'Addl. Keybindings', path: '/game-settings', pageNumber: 6, component: GameSettingsPage },
  { id: 'common-knowledge', title: 'Gunnery with Luna', path: '/common-knowledge', pageNumber: 7, component: CommonKnowledgePage },
  { id: 'capacitor', title: 'Capacitor Management', path: '/capacitor', pageNumber: 8, component: CapacitorPage },
  { id: 'pilot-crew', title: 'Pilot-Crew Pairs', path: '/pilot-crew', pageNumber: 9, component: PilotCrewPage },
  { id: 'communications', title: 'Communications', path: '/communications', pageNumber: 10, component: CommunicationsPage },
  { id: 'how-to-use', title: 'How to use this Knowledge', path: '/how-to-use', pageNumber: 11, component: HowToUsePage },
  { id: 'extra-knowledge', title: 'Addl. Resources', path: '/extra-knowledge', pageNumber: 12, component: ExtraKnowledgePage },
];

// TOC structure (nested) used for sidebar/intro rendering
export const tocStructure = [
  {
    id: 'introduction',
    title: 'Introduction',
    path: '/',
    children: [
      { id: 'mc-flight', title: 'Flight', path: '/mc-flight' },
      {
        id: 'ships',
        title: 'Ships',
        path: '/special-ships',
        children: [
          { id: 'perseus', title: 'Perseus', path: '/special-ships#perseus' },
          { id: 'polaris', title: 'Polaris', path: '/special-ships#polaris' },
          { id: 'idris', title: 'Idris', path: '/special-ships#idris' },
        ],
      },
      { id: 'keybindings', title: 'Keybindings', path: '/keybindings', children: [
        { id: 'addl-keybindings', title: 'Additional keybindings', path: '/game-settings' },
      ] },
      { id: 'sub-targeting', title: 'Sub-Targeting', path: '/sub-targeting' },
    ],
  },
  {
    id: 'gunnery',
    title: 'Gunnery with Luna',
    path: '/common-knowledge',
    children: [
      { id: 'capacitor', title: 'Capacitor Management', path: '/capacitor' },
      { id: 'pilot-crew', title: 'Pilot-Crew Pairs', path: '/pilot-crew' },
    ],
  },
  { id: 'communications', title: 'Communications', path: '/communications' },
  { id: 'how-to-use', title: 'How to use this Knowledge', path: '/how-to-use' },
  { id: 'extra-knowledge', title: 'Addl. Resources', path: '/extra-knowledge' },
];

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
