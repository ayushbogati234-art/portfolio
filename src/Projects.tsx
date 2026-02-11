import { ExternalLink, Github, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Two Way Hand Sign Translation Using Computer Vision',
      description:
        'Communication can be challenging when people rely on different modes such as speech and sign language. This project provides a real-time solution by translating spoken language into corresponding hand sign gestures and hand sign gestures into spoken audio output. This system works in both directions: Voice → Hand Sign Gestures and Hand Sign Gestures → Voice Output. It uses a camera for gesture recognition and a microphone for voice input, making the system interactive and practical. Features include voice input using microphone, text-to-speech voice output, real-time hand gesture detection via webcam, machine learning-based gesture recognition, two-way translation system, and supports predefined hand signs that are easily extendable.',
      technologies: ['Python', 'OpenCV', 'Machine Learning', 'Speech Recognition', 'Text-to-Speech', 'MediaPipe', 'TensorFlow'],
      github: 'https://github.com/ayushbogati234-art/hand-sign-translation',
      live: 'https://www.youtube.com/channel/UCCpBkCj9pFw6uv_4AreFlyw',
      color: 'blue',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A collection of projects I've worked on to apply my skills and learn new technologies
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-blue-200 transition-all duration-300 hover:shadow-xl group mb-8"
            >
              <div className={`bg-gradient-to-br ${getColorClasses(project.color)} p-8`}>
                <Folder className="text-white opacity-80" size={48} />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <Github size={20} />
                    <span className="font-medium">Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span className="font-medium">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/ayushbogati234-art"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
          >
            <Github size={20} />
            <span className="font-medium">View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
