'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    console.log('LanguageSwitcher mounted!');
  }, []);

  console.log('LanguageSwitcher render - mounted:', mounted);

  // Don't render until mounted to avoid SSR issues
  if (!mounted) {
    return <div className="fixed top-4 left-4 z-[9999] bg-red-500 text-white p-2">Loading...</div>;
  }

  return <LanguageSwitcherContent />;
}

function LanguageSwitcherContent() {
  const { language, setLanguage } = useLanguage();

  console.log('LanguageSwitcher rendered with language:', language);

  return (
    <div className="fixed top-4 left-4 z-[9999]" style={{ position: 'fixed', top: '16px', left: '16px', zIndex: 9999 }}>
      <div className="bg-white dark:bg-gray-800 backdrop-blur-md rounded-lg shadow-xl border border-gray-300 dark:border-gray-600 p-2">
        <div className="flex items-center space-x-2">
          <Globe className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              language === 'en'
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            EN
          </button>
          
          <button
            onClick={() => setLanguage('id')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              language === 'id'
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            ID
          </button>
        </div>
      </div>
    </div>
  );
}
