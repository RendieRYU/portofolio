'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'hello@johndoe.dev',
      link: 'mailto:hello@johndoe.dev'
    },
    {
      icon: '📱',
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: '📍',
      title: 'Location',
      content: 'San Francisco, CA',
      link: '#'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      content: '/in/johndoe',
      link: 'https://linkedin.com/in/johndoe'
    }
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-white mb-6 lg:mb-8">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 lg:p-10 shadow-lg">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-6 lg:mb-8">
              Send me a message
            </h3>
            
            {submitMessage && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 rounded-lg text-green-700 dark:text-green-300">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-3 text-lg">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors text-lg"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-3 text-lg">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors text-lg"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-3 text-lg">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors text-lg"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-3 text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-colors resize-none text-lg"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 lg:py-5 px-8 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-10 lg:space-y-12">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-6 lg:mb-8">
                Let's connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 lg:mb-10 leading-relaxed text-lg">
                I'm always interested in hearing about new opportunities, 
                whether it's a full-time position, freelance project, or just a chat about technology. 
                Don't hesitate to reach out!
              </p>
            </div>

            <div className="grid gap-6 lg:gap-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-6 lg:p-8 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="text-4xl lg:text-5xl mr-6 lg:mr-8 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white text-lg lg:text-xl mb-2">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg">
                      {info.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-8 lg:p-10 text-white">
              <div className="flex items-center mb-4 lg:mb-6">
                <div className="w-4 h-4 bg-green-300 rounded-full mr-4 animate-pulse"></div>
                <span className="font-semibold text-lg lg:text-xl">Available for new projects</span>
              </div>
              <p className="text-green-100 text-base lg:text-lg leading-relaxed">
                I'm currently accepting new freelance projects and full-time opportunities. 
                Let's discuss how I can help bring your vision to life!
              </p>
            </div>

            {/* Response Time */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 lg:p-10 shadow-md">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4 lg:mb-6 text-lg lg:text-xl">
                📞 Response Time
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg leading-relaxed">
                I typically respond to messages within 24 hours. For urgent matters, 
                feel free to reach out via phone or LinkedIn for a faster response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
