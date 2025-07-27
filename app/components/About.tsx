const About = () => {
  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Company',
      description: 'Leading development of web applications using React, Node.js, and cloud technologies.'
    },
    {
      year: '2021 - 2023',
      title: 'Frontend Developer',
      company: 'Digital Agency',
      description: 'Developed responsive websites and mobile applications for various clients.'
    },
    {
      year: '2020 - 2021',
      title: 'Junior Developer',
      company: 'Startup',
      description: 'Started my journey in web development with focus on JavaScript and React.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '30+', label: 'Happy Clients' },
    { number: '100%', label: 'Dedication' }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 lg:mb-8">
            About <span className="text-blue-600">Me</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Passionate developer with a love for creating digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center mb-16 sm:mb-20 lg:mb-24 max-w-7xl mx-auto">
          {/* About Text */}
          <div className="space-y-8 lg:space-y-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white">
              My Journey in Tech
            </h3>
            <div className="space-y-6 lg:space-y-8 text-base lg:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 3 years of experience in creating 
                digital solutions that matter. My journey started with curiosity about how websites work, 
                and it has evolved into a career focused on building user-centered applications.
              </p>
              <p>
                I specialize in modern web technologies including React, Next.js, Node.js, and cloud platforms. 
                I believe in writing clean, maintainable code and creating intuitive user experiences that 
                solve real-world problems.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 lg:p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 mb-3 lg:mb-4">
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
            My Experience
          </h3>
          <div className="space-y-8 lg:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-8 p-6 lg:p-8 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300">
                {/* Timeline dot - only show on desktop */}
                <div className="absolute -left-4 top-10 w-8 h-8 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 hidden md:block"></div>
                
                <div className="md:w-52 lg:w-56 flex-shrink-0">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold text-lg lg:text-xl">
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
