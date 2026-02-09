import { Navigate, createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/app/layouts/RootLayout';
import { IntroductionPage } from '@/app/pages/IntroductionPage';
import { MCFlightPage } from '@/app/pages/MCFlightPage';
import { SubTargetingPage } from '@/app/pages/SubTargetingPage';
import { KeybindingsPage } from '@/app/pages/KeybindingsPage';
import { CommonKnowledgePage } from '@/app/pages/CommonKnowledgePage';
import { PilotCrewPage } from '@/app/pages/PilotCrewPage';
import { CapacitorPage } from '@/app/pages/CapacitorPage';
import { SpecialShipsPage } from '@/app/pages/SpecialShipsPage';
import { PerseusPage } from '@/app/pages/PerseusPage';
import { PolarisPage } from '@/app/pages/PolarisPage';
import { IdrisPage } from '@/app/pages/IdrisPage';
import { HowToUsePage } from '@/app/pages/HowToUsePage';
import { ExtraKnowledgePage } from '@/app/pages/ExtraKnowledgePage';
import { GameSettingsPage } from '@/app/pages/GameSettingsPage';
import { CommunicationsPage } from '@/app/pages/CommunicationsPage';

// Linear chapter list (used for prev/next navigation)
export const chapterRoutes = [
  { id: 'introduction', title: 'Introduction', path: '/', pageNumber: 1, component: IntroductionPage },
  { id: 'mc-flight', title: 'Doctrine', path: '/mc-flight', pageNumber: 2, component: MCFlightPage },
  { id: 'special-ships', title: 'Ships', path: '/special-ships', pageNumber: 3, component: SpecialShipsPage },
  { id: 'perseus', title: 'Perseus', path: '/perseus', pageNumber: 4, component: PerseusPage },
  { id: 'polaris', title: 'Polaris', path: '/polaris', pageNumber: 5, component: PolarisPage },
  { id: 'idris', title: 'Idris', path: '/idris', pageNumber: 6, component: IdrisPage },
  { id: 'sub-targeting', title: 'Sub-Targeting', path: '/sub-targeting', pageNumber: 7, component: SubTargetingPage },
  { id: 'keybindings', title: 'Keybindings', path: '/keybindings', pageNumber: 8, component: KeybindingsPage },
  { id: 'game-settings', title: 'Addl. Keybindings', path: '/game-settings', pageNumber: 9, component: GameSettingsPage },
  { id: 'common-knowledge', title: 'Gunnery with Luna', path: '/common-knowledge', pageNumber: 10, component: CommonKnowledgePage },
  { id: 'capacitor', title: 'Capacitor Management', path: '/capacitor', pageNumber: 11, component: CapacitorPage },
  { id: 'pilot-crew', title: 'Pilot-Crew Pairs', path: '/pilot-crew', pageNumber: 12, component: PilotCrewPage },
  { id: 'communications', title: 'Communications', path: '/communications', pageNumber: 13, component: CommunicationsPage },
  { id: 'how-to-use', title: 'How to use this Knowledge', path: '/how-to-use', pageNumber: 14, component: HowToUsePage },
  { id: 'extra-knowledge', title: 'Addl. Resources', path: '/extra-knowledge', pageNumber: 15, component: ExtraKnowledgePage },
];

// TOC structure (nested) used for sidebar/intro rendering
export const tocStructure = [
  {
    id: 'introduction',
    title: 'Introduction',
    path: '/',
    children: [
      { id: 'mc-flight', title: 'Doctrine', path: '/mc-flight' },
      {
        id: 'ships',
        title: 'Ships',
        path: '/special-ships',
        children: [
          { id: 'perseus', title: 'Perseus', path: '/perseus' },
          { id: 'polaris', title: 'Polaris', path: '/polaris' },
          { id: 'idris', title: 'Idris', path: '/idris' },
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
      element:
        chapter.id === 'special-ships' ? <Navigate to="/perseus" replace /> : <chapter.component />,
    })),
  },
]);
