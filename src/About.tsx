import { Heart, Lightbulb, Target, Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex flex-col items-center">
              <div className="flex space-x-4 mb-8">
                <a
                  href="https://github.com/ayushbogati234-art"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white p-4 rounded-lg hover:bg-gray-800 transition-all transform hover:scale-110 shadow-lg"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://linkedin.com/in/ayush-bogati-aaaa78372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-110 shadow-lg"
                >
                  <Linkedin size={28} />
                </a>
                <a
                  href="mailto:ayush@example.com"
                  className="bg-red-600 text-white p-4 rounded-lg hover:bg-red-700 transition-all transform hover:scale-110 shadow-lg"
                >
                  <Mail size={28} />
                </a>
              </div>

              <img
                src="/s.jpeg"
                alt="Ayush Bogati"
                className="w-80 h-96 object-cover rounded-2xl shadow-xl border-4 border-blue-100"
              />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Engineering Student & Tech Enthusiast
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              I'm a first-year engineering student with a strong passion for technology
              and innovation. I love learning new things, solving complex problems, and
              working on projects that make a difference.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              My journey in engineering has just begun, but I'm excited to explore
              various fields including software development, electronics, and system design.
              I believe in continuous learning and hands-on experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="flex justify-center mb-3">
                  <Target className="text-blue-600" size={32} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Goal-Oriented</h4>
                <p className="text-sm text-gray-600">Focused on achieving excellence</p>
              </div>

              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="flex justify-center mb-3">
                  <Lightbulb className="text-green-600" size={32} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Creative</h4>
                <p className="text-sm text-gray-600">Innovative problem solver</p>
              </div>

              <div className="text-center p-4 bg-orange-50 rounded-xl">
                <div className="flex justify-center mb-3">
                  <Heart className="text-orange-600" size={32} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Passionate</h4>
                <p className="text-sm text-gray-600">Driven by curiosity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
