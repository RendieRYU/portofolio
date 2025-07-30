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
    'hero.description': 'I\'m a passionate Computer Science student and Teaching Assistant with 2 years of experience in programming and web development. I love creating innovative solutions using modern technologies and AI.',
    'hero.cta': 'Get In Touch',
    'hero.viewWork': 'View My Work',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Get to know me better',
    'about.description': 'I am a Computer Science student at Universitas Ahmad Dahlan with a GPA of 3.90. As a Teaching Assistant with 2 years of experience, I\'m passionate about programming, web development, and AI. I enjoy creating innovative solutions that solve real-world problems.',
    'about.experience': 'Years Experience',
    'about.projects': 'Projects Completed',
    'about.clients': 'Academic Projects',
    'about.awards': 'GPA Score',
    
    // Experience Timeline
    'about.timeline.title': 'My Journey',
    'about.timeline.student': 'Computer Science Student',
    'about.timeline.student.desc': 'Studying at Universitas Ahmad Dahlan (GPA: 3.90)',
    'about.timeline.assistant': 'Teaching Assistant',
    'about.timeline.assistant.desc': 'Helping students with programming and algorithms',
    'about.timeline.developer': 'Web Developer',
    'about.timeline.developer.desc': 'Building web applications with modern technologies',
    'about.timeline.mobile.desc': 'Built cross-platform mobile applications',
    'about.timeline.web': 'Web Developer',
    'about.timeline.web.desc': 'Created responsive web applications',
    
    // Skills Section
    'skills.title': 'Skills & Expertise',
    'skills.subtitle': 'Technologies I work with',
    'skills.frontend': 'Frontend Development',
    'skills.backend': 'Backend Development',
    'skills.database': 'Database Management',
    'skills.mobile': 'Mobile Development',
    'skills.ml': 'Machine Learning & AI',
    'skills.tools': 'Tools & Development Environment',
    'skills.certifications': 'Education & Achievements',
    'skills.cert1': 'AWS Machine Learning Specialty',
    'skills.cert2': 'Google Cloud Professional ML Engineer',
    'skills.cert3': 'Certified Ethical Hacker (CEH)',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'Some of my recent work',
    'projects.all': 'All',
    'projects.web': 'Web Development',
    'projects.ml': 'Machine Learning',
    'projects.crypto': 'Cryptography',
    'projects.mobile': 'Mobile Development',
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
    'contact.info.email': 'rendiabdi1217@gmail.com',
    'contact.info.phone': '+62 822-2702-7379',
    'contact.info.location': 'Maguwoharjo, Depok, Sleman, DI Yogyakarta',
    'contact.info.response': '24 Hours',
    
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
    'hero.description': 'Saya adalah mahasiswa Informatika dan Asisten Praktikum dengan pengalaman 2 tahun di bidang pemrograman dan pengembangan web. Saya senang menciptakan solusi inovatif menggunakan teknologi modern dan AI.',
    'hero.cta': 'Hubungi Saya',
    'hero.viewWork': 'Lihat Karya Saya',
    
    // About Section
    'about.title': 'Tentang Saya',
    'about.subtitle': 'Mari mengenal saya lebih dekat',
    'about.description': 'Saya adalah mahasiswa Informatika di Universitas Ahmad Dahlan dengan IPK 3.90. Sebagai Asisten Praktikum dengan pengalaman 2 tahun, saya bersemangat tentang pemrograman, pengembangan web, dan AI. Saya senang menciptakan solusi inovatif yang memecahkan masalah dunia nyata.',
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
    'skills.database': 'Manajemen Database',
    'skills.mobile': 'Mobile Development',
    'skills.ml': 'Machine Learning & AI',
    'skills.tools': 'Tools & Development Environment',
    'skills.certifications': 'Pendidikan & Prestasi',
    'skills.cert1': 'AWS Machine Learning Specialty',
    'skills.cert2': 'Google Cloud Professional ML Engineer',
    'skills.cert3': 'Certified Ethical Hacker (CEH)',
    
    // Projects Section
    'projects.title': 'Proyek Unggulan',
    'projects.subtitle': 'Beberapa karya terbaru saya',
    'projects.all': 'Semua',
    'projects.web': 'Web Development',
    'projects.ml': 'Machine Learning',
    'projects.crypto': 'Kriptografi',
    'projects.mobile': 'Mobile Development',
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
    'contact.info.email': 'rendiabdi1217@gmail.com',
    'contact.info.phone': '+62 822-2702-7379',
    'contact.info.location': 'Maguwoharjo, Depok, Sleman, DI Yogyakarta',
    'contact.info.response': '24 Jam',
    
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
