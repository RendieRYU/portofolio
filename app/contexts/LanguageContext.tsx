'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hi, I\'m',
    'hero.name': 'Rendie Abdi Saputra',
    'hero.description': 'Passionate about creating innovative solutions through machine learning, cryptography, and full-stack development.',
    'hero.cta': 'Get In Touch',
    'hero.viewWork': 'View My Work',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Get to know me better',
    'about.description': 'I am a passionate technology enthusiast with expertise in machine learning, cryptography, and full-stack development. I love solving complex problems and creating innovative solutions that make a real impact.',
    'about.experience': 'Years Experience',
    'about.projects': 'Projects Completed',
    'about.clients': 'Happy Clients',
    'about.awards': 'Awards Won',
    
    // Experience Timeline
    'about.timeline.title': 'My Journey',
    'about.timeline.ml': 'Machine Learning Engineer',
    'about.timeline.ml.desc': 'Developed AI models for predictive analytics',
    'about.timeline.crypto': 'Cryptography Specialist',
    'about.timeline.crypto.desc': 'Implemented secure encryption systems',
    'about.timeline.mobile': 'Mobile Developer',
    'about.timeline.mobile.desc': 'Built cross-platform mobile applications',
    'about.timeline.web': 'Web Developer',
    'about.timeline.web.desc': 'Created responsive web applications',
    
    // Skills Section
    'skills.title': 'Skills & Expertise',
    'skills.subtitle': 'Technologies I work with',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.mobile': 'Mobile Development',
    'skills.ml': 'Machine Learning',
    'skills.crypto': 'Cryptography',
    'skills.tools': 'Tools & Others',
    'skills.certifications': 'Certifications',
    'skills.cert1': 'AWS Machine Learning Specialty',
    'skills.cert2': 'Google Cloud Professional ML Engineer',
    'skills.cert3': 'Certified Ethical Hacker (CEH)',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Some of my recent work',
    'projects.all': 'All',
    'projects.ml': 'Machine Learning',
    'projects.web': 'Web Development',
    'projects.mobile': 'Mobile',
    'projects.crypto': 'Cryptography',
    'projects.viewLive': 'View Live',
    'projects.viewCode': 'View Code',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Let\'s work together',
    'contact.description': 'I\'m always interested in new opportunities and collaborations. Feel free to reach out!',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Location',
    'contact.info.response': 'Response Time',
    
    // Footer
    'footer.description': 'Passionate about creating innovative solutions through technology.',
    'footer.quickLinks': 'Quick Links',
    'footer.followMe': 'Follow Me',
    'footer.backToTop': 'Back to Top',
    'footer.rights': 'All rights reserved.',
  },
  id: {
    // Navigation
    'nav.about': 'Tentang',
    'nav.skills': 'Keahlian',
    'nav.projects': 'Proyek',
    'nav.contact': 'Kontak',
    
    // Hero Section
    'hero.greeting': 'Hai, Saya',
    'hero.name': 'Rendie Abdi Saputra',
    'hero.description': 'Bersemangat menciptakan solusi inovatif melalui machine learning, kriptografi, dan pengembangan full-stack.',
    'hero.cta': 'Hubungi Saya',
    'hero.viewWork': 'Lihat Karya Saya',
    
    // About Section
    'about.title': 'Tentang Saya',
    'about.subtitle': 'Mari mengenal saya lebih dekat',
    'about.description': 'Saya adalah seorang teknologi enthusiast yang bersemangat dengan keahlian dalam machine learning, kriptografi, dan pengembangan full-stack. Saya suka memecahkan masalah kompleks dan menciptakan solusi inovatif yang memberikan dampak nyata.',
    'about.experience': 'Tahun Pengalaman',
    'about.projects': 'Proyek Selesai',
    'about.clients': 'Klien Puas',
    'about.awards': 'Penghargaan',
    
    // Experience Timeline
    'about.timeline.title': 'Perjalanan Saya',
    'about.timeline.ml': 'Machine Learning Engineer',
    'about.timeline.ml.desc': 'Mengembangkan model AI untuk analitik prediktif',
    'about.timeline.crypto': 'Spesialis Kriptografi',
    'about.timeline.crypto.desc': 'Mengimplementasikan sistem enkripsi yang aman',
    'about.timeline.mobile': 'Mobile Developer',
    'about.timeline.mobile.desc': 'Membangun aplikasi mobile lintas platform',
    'about.timeline.web': 'Web Developer',
    'about.timeline.web.desc': 'Menciptakan aplikasi web yang responsif',
    
    // Skills Section
    'skills.title': 'Keahlian & Expertise',
    'skills.subtitle': 'Teknologi yang saya kuasai',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.mobile': 'Mobile Development',
    'skills.ml': 'Machine Learning',
    'skills.crypto': 'Kriptografi',
    'skills.tools': 'Tools & Lainnya',
    'skills.certifications': 'Sertifikasi',
    'skills.cert1': 'AWS Machine Learning Specialty',
    'skills.cert2': 'Google Cloud Professional ML Engineer',
    'skills.cert3': 'Certified Ethical Hacker (CEH)',
    
    // Projects Section
    'projects.title': 'Proyek Unggulan',
    'projects.subtitle': 'Beberapa karya terbaru saya',
    'projects.all': 'Semua',
    'projects.ml': 'Machine Learning',
    'projects.web': 'Web Development',
    'projects.mobile': 'Mobile',
    'projects.crypto': 'Kriptografi',
    'projects.viewLive': 'Lihat Live',
    'projects.viewCode': 'Lihat Kode',
    
    // Contact Section
    'contact.title': 'Mari Berkolaborasi',
    'contact.subtitle': 'Ayo bekerja sama',
    'contact.description': 'Saya selalu tertarik dengan peluang dan kolaborasi baru. Jangan ragu untuk menghubungi saya!',
    'contact.form.name': 'Nama Anda',
    'contact.form.email': 'Email Anda',
    'contact.form.subject': 'Subjek',
    'contact.form.message': 'Pesan Anda',
    'contact.form.send': 'Kirim Pesan',
    'contact.form.sending': 'Mengirim...',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Telepon',
    'contact.info.location': 'Lokasi',
    'contact.info.response': 'Waktu Respons',
    
    // Footer
    'footer.description': 'Bersemangat menciptakan solusi inovatif melalui teknologi.',
    'footer.quickLinks': 'Tautan Cepat',
    'footer.followMe': 'Ikuti Saya',
    'footer.backToTop': 'Kembali ke Atas',
    'footer.rights': 'Hak cipta dilindungi.',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load saved language from localStorage
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('preferred-language') as Language;
      if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'id')) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', lang);
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
