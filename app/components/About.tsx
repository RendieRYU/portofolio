'use client';

import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  
  const experiences = [
    {
      year: '2022 - Present',
      title: t('about.timeline.student'),
      company: 'Universitas Ahmad Dahlan',
      description: t('about.timeline.student.desc')
    },
    {
      year: '2023 - Present', 
      title: t('about.timeline.assistant'),
      company: 'Computer Science Department',
      description: t('about.timeline.assistant.desc')
    },
    {
      year: '2023 - Present',
      title: t('about.timeline.developer'),
      company: 'Freelance & Projects',
      description: t('about.timeline.developer.desc')
    }
  ];

  const stats = [
    { number: '4+', label: t('about.projects') },
    { number: '2+', label: t('about.experience') },
    { number: '5+', label: t('about.clients') },
    { number: '3.90', label: t('about.awards') }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 lg:mb-8">
            {t('about.title')}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center mb-16 sm:mb-20 lg:mb-24 max-w-7xl mx-auto">
          {/* About Text */}
          <div className="space-y-8 lg:space-y-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white">
              {t('about.timeline.title')}
            </h3>
            <div className="space-y-6 lg:space-y-8 text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                {t('about.description')}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="anime-card text-center p-6 lg:p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow">
                <div className="anime-gradient-text text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white text-center mb-12 sm:mb-16 lg:mb-20">
            {t('about.timeline.title')}
          </h3>
          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="anime-card relative flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-8 p-6 lg:p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300">
                {/* Timeline dot - only show on desktop */}
                <div className="absolute -left-4 top-10 w-8 h-8 anime-glow-bg rounded-full border-4 border-white dark:border-gray-900 hidden md:block"></div>
                
                <div className="md:w-52 lg:w-56 flex-shrink-0">
                  <span className="anime-gradient-text font-semibold text-lg lg:text-xl">
                    {exp.year}
                  </span>
                </div>
                
                <div className="flex-grow space-y-3 lg:space-y-4">
                  <h4 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white">
                    {exp.title}
                  </h4>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                    {exp.company}
                  </p>
                  <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
