'use client';

import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [t('projects.all'), t('projects.web'), t('projects.ml'), t('projects.crypto'), t('projects.mobile')];

  const projects = [
    {
      id: 1,
      title: 'Website PPDB TK Aba Mertosanan',
      category: 'Web App',
      description: 'Website lengkap untuk TK Aba Mertosanan dengan fitur pendaftaran online siswa, galeri kegiatan, program kurikulum, dan portal admin. Menggunakan design yang child-friendly dengan navigasi yang intuitif.',
      image: '/projects/tk-aba-mertosanan.png',
      technologies: ['Next.js', 'Supabase', 'TypeScript', 'Tailwind CSS'],
      liveDemo: 'https://tk-aba-mertosanan.vercel.app',
      sourceCode: 'https://github.com/kyASse/tk-aba-mertosanan',
      featured: true
    },
    {
      id: 2,
      title: 'AES-128 Visualizer Cipher',
      category: 'Cryptography',
      description: 'Aplikasi web interaktif untuk visualisasi proses enkripsi dan dekripsi AES-128. Menampilkan step-by-step proses kriptografi dengan interface yang clean dan dark theme untuk pengalaman pengguna yang optimal.',
      image: '/projects/aes-128-visualizer.png',
      technologies: ['Python', 'Streamlit', 'Cryptography', 'AES-128'],
      liveDemo: 'https://aes-128-encrypt-decrypt.streamlit.app/',
      sourceCode: 'https://github.com/RendieRYU/Final-Project-Cryptography-Aes-Encryption-Decryption',
      featured: true
    },
    {
      id: 3,
      title: 'Analisis Data Bike Sharing Dataset',
      category: 'Machine Learning',
      description: 'Proyek analisis data komprehensif menggunakan Bike Sharing Dataset. Menghasilkan insights mendalam tentang pola penggunaan sepeda dengan visualisasi data yang menarik menggunakan Python dan Streamlit dashboard.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Streamlit'],
      liveDemo: '#',
      sourceCode: 'https://github.com/RendieRYU/Proyek-Analisis-Data-Bike-Sharing-Dataset',
      featured: true
    },
    {
      id: 4,
      title: 'Klasifikasi Tingkat Kematangan Tomat',
      category: 'Machine Learning',
      description: 'Sistem klasifikasi otomatis menggunakan Convolutional Neural Network (CNN) untuk mendeteksi tingkat kematangan tomat. Model dapat mengklasifikasi tomat menjadi 4 kategori: mentah, setengah matang, matang, dan busuk.',
      technologies: ['Python', 'TensorFlow', 'CNN', 'Google Colab'],
      liveDemo: '#',
      sourceCode: 'https://github.com/RendieRYU/Klasifikasi-Kematangan-Tomat',
      featured: false
    }
  ];

  const filteredProjects = selectedCategory === t('projects.all') 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 lg:mb-8">
            {t('projects.title')}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-12 sm:mb-16 lg:mb-20">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`anime-button px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                selectedCategory === category
                  ? 'anime-glow-bg text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="anime-card bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-56 lg:h-64 group">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <div className="text-white text-6xl lg:text-7xl font-bold opacity-50">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                )}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold z-10">
                    Featured
                  </div>
                )}
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveDemo}
                    className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.sourceCode}
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                  >
                    Source Code
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-center justify-between mb-4 lg:mb-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="anime-gradient-text text-sm font-medium bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 lg:mb-8 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs lg:text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <div className="anime-glow-bg rounded-xl p-10 lg:p-16 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8">
              Interested in working together?
            </h3>
            <p className="text-lg lg:text-xl opacity-90 mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <a
              href="#contact"
              className="anime-button inline-block bg-white text-blue-600 px-10 lg:px-12 py-4 lg:py-5 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
