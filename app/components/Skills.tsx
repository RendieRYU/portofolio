const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React/Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Vue.js', level: 75 },
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'PostgreSQL', level: 75 },
        { name: 'MongoDB', level: 80 },
      ]
    },
    {
      title: 'Mobile',
      icon: '📱',
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 70 },
        { name: 'Expo', level: 85 },
        { name: 'PWA', level: 90 },
      ]
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS/Vercel', level: 80 },
        { name: 'Figma', level: 85 },
      ]
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      year: '2023',
      icon: '☁️'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      year: '2022',
      icon: '⚛️'
    },
    {
      title: 'Google UX Design Certificate',
      issuer: 'Google',
      year: '2022',
      icon: '🎨'
    }
  ];

  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 lg:mb-8">
            My <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-24 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white dark:bg-gray-900 rounded-xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-center mb-8 lg:mb-10">
                <div className="text-5xl lg:text-6xl mb-4 lg:mb-6">{category.icon}</div>
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
                      <span className="text-blue-600 dark:text-blue-400 text-sm lg:text-base font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 lg:h-4">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 lg:h-4 rounded-full transition-all duration-1000 ease-out"
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
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-8 lg:p-10 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-5xl lg:text-6xl mb-6 lg:mb-8">{cert.icon}</div>
                <h4 className="text-xl lg:text-2xl font-bold text-gray-800 dark:text-white mb-4 lg:mb-6">
                  {cert.title}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2 lg:mb-3 text-lg">
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
        <div className="mt-16 sm:mt-20 lg:mt-24 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-10 lg:p-16 text-white max-w-6xl mx-auto">
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
