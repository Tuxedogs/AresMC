export type ChapterMeta = {
  id: string;
  title: string;
  path: string;
  pageNumber?: number;
  children?: ChapterMeta[];
  description?: string;
};

export const chapters: ChapterMeta[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    path: '/',
    pageNumber: 1,
  },
  { id: 'mc-flight', title: '4.6 details', path: '/mc-flight', pageNumber: 2 },
  {
    id: 'special-ships',
    title: 'Ships',
    path: '/special-ships',
    pageNumber: 3,
    children: [
      { id: 'perseus', title: 'Perseus', path: '/special-ships#perseus' },
      { id: 'polaris', title: 'Polaris', path: '/special-ships#polaris' },
      { id: 'idris', title: 'Idris', path: '/special-ships#idris' },
    ],
  },
  { id: 'sub-targeting', title: 'Sub-Targeting', path: '/sub-targeting', pageNumber: 4 },
  {
    id: 'keybindings',
    title: 'Keybindings',
    path: '/keybindings',
    pageNumber: 5,
    children: [{ id: 'game-settings', title: 'Additional Keybinds', path: '/game-settings' }],
  },
  {
    id: 'common-knowledge',
    title: 'Gunnery with Luna',
    path: '/common-knowledge',
    pageNumber: 6,
    children: [
      { id: 'capacitor', title: 'Capacitor Management', path: '/capacitor' },
      { id: 'pilot-crew', title: 'Pilot-Crew Pairs', path: '/pilot-crew' },
    ],
  },
  { id: 'communications', title: 'Communications', path: '/communications', pageNumber: 7 },
  { id: 'how-to-use', title: 'How to use this Knowledge', path: '/how-to-use', pageNumber: 8 },
  { id: 'extra-knowledge', title: 'Addl. Resources', path: '/extra-knowledge', pageNumber: 9 },
];

export default chapters;
