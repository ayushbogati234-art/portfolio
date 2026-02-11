import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              AB
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
            Hi, I'm <span className="text-blue-600">Ayush Bogati</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-6">
            First Year Engineering Student
          </p>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Passionate about technology, problem-solving, and building innovative solutions.
            Currently learning and exploring the world of engineering.
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <a
              href=https://github.com/ayushbogati234-art
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ayush-bogati-aaaa78372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:ayushbogati234@gmail.com"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-lg"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="text-gray-400 hover:text-gray-600 transition-colors animate-bounce"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
