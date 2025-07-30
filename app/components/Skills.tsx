'use client';

import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();
  
  const skillCategories = [
    {
      title: t('skills.frontend'),
      icon: '🎨',
      skills: [
        { name: 'Next.js/React', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'JavaScript', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
      ]
    },
    {
      title: t('skills.backend'),
      icon: '⚙️',
      skills: [
        { name: 'PHP/Laravel', level: 85 },
        { name: 'Python', level: 90 },
        { name: 'Java', level: 80 },
        { name: 'C++', level: 85 },
      ]
    },
    {
      title: t('skills.database'),
      icon: '�️',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'Supabase', level: 85 },
      ]
    },
    {
      title: t('skills.mobile'),
      icon: '📱',
      skills: [
        { name: 'Kotlin', level: 80 },
        { name: 'Android Studio', level: 85 },
        { name: 'React Native', level: 75 },
        { name: 'Mobile Development', level: 80 },
      ]
    },
    {
      title: t('skills.tools'),
      icon: '�️',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'VSCode', level: 95 },
        { name: 'Cisco Packet Tracer', level: 85 },
        { name: 'Jupyter Notebook', level: 90 },
      ]
    },
    {
      title: t('skills.ml'),
      icon: '🤖',
      skills: [
        { name: 'Python/TensorFlow', level: 85 },
        { name: 'CNN', level: 80 },
        { name: 'Data Analysis', level: 85 },
        { name: 'Google Colab', level: 90 },
      ]
    }
  ];

  const certifications = [
    {
      title: 'Computer Science Student',
      issuer: 'Universitas Ahmad Dahlan',
      year: '2022 - Present',
      icon: '🎓'
    },
    {
      title: 'Teaching Assistant',
      issuer: 'Computer Science Department',
      year: '2023 - Present',
      icon: '👨‍🏫'
    },
    {
      title: 'GPA 3.90/4.00',
      issuer: 'Academic Achievement',
      year: '2024',
      icon: '🏆'
    }
  ];

  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 lg:mb-8">
            {t('skills.title')}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('skills.subtitle')}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="anime-card bg-white dark:bg-gray-900 rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-8 lg:mb-10">
                <div className="text-5xl lg:text-6xl mb-4 lg:mb-6 anime-float">{category.icon}</div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6 lg:space-y-8">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-3 lg:mb-4">
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-base lg:text-lg">
                        {skill.name}
                      </span>
                      <span className="anime-gradient-text text-sm lg:text-base font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 lg:h-4">
                      <div 
                        className="anime-glow-bar h-3 lg:h-4 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white text-center mb-12 sm:mb-16 lg:mb-20">
            Certifications & Achievements
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {certifications.map((cert, index) => (
              <div key={index} className="anime-card bg-white dark:bg-gray-900 rounded-xl p-8 lg:p-10 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-5xl lg:text-6xl mb-6 lg:mb-8 anime-float">{cert.icon}</div>
                <h4 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white mb-4 lg:mb-6">
                  {cert.title}
                </h4>
                <p className="anime-gradient-text font-semibold mb-2 lg:mb-3 text-lg">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-base lg:text-lg">
                  {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 sm:mt-20 lg:mt-24 text-center anime-glow-bg rounded-xl p-10 lg:p-16 text-white max-w-6xl mx-auto">
          <h3 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8">
            Continuous Learning
          </h3>
          <p className="text-lg lg:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            "Technology evolves rapidly, and so do I. I'm committed to staying current with the latest trends, 
            best practices, and emerging technologies to deliver the best solutions for every project."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
