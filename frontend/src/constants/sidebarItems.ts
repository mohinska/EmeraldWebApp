import { SidebarItem } from '../components/navigation/Sidebar';

export const DEFAULT_SIDEBAR_ITEMS: SidebarItem[] = [
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'CV Master', path: '/cv-master' },
    { label: 'Settings', path: '/settings' },
    { label: 'Education', path: '', isSectionHeader: true },
    { label: 'Interview (hard skills)', path: '/interview' },
    { label: 'Coach (soft skills)', path: '/coach' },
];

