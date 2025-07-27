'use client';

import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LanguageSwitcher() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to avoid SSR issues
  if (!mounted) {
    return null;
  }

  return <LanguageSwitcherContent />;
}

function LanguageSwitcherContent() {
  const { language, setLanguage } = useLanguage();

  console.log('LanguageSwitcher rendered with language:', language);

  return (
    <div className="fixed top-4 left-4 z-50">
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-lg shadow-lg border border-gray-200/50 dark:border-gray-700/50 p-1">
        <div className="flex items-center space-x-1">
          <Globe className="w-4 h-4 text-gray-600 dark:text-gray-400 ml-2" />
          
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
              language === 'en'
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            EN
          </button>
          
          <button
            onClick={() => setLanguage('id')}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
              language === 'id'
                ? 'bg-blue-500 text-white shadow-md'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            ID
          </button>
        </div>
      </div>
    </div>
  );
}
