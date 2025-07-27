'use client';

import { LanguageProvider } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <LanguageSwitcher />
      {children}
    </LanguageProvider>
  );
}
