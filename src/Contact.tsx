import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations.
            Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

            <div className="space-y-6">
              <a
                href="mailto:ayushbogati234@gmail.com"
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group"
              >
                <div className="bg-blue-600 p-3 rounded-lg group-hover:bg-blue-700 transition-colors">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">ayush@example.com</p>
                </div>
              </a>

              <a
                href="tel:+918623091341"
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors group"
              >
                <div className="bg-green-600 p-3 rounded-lg group-hover:bg-green-700 transition-colors">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+91 8623091341</p>
                </div>
              </a>

              <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                <div className="bg-orange-600 p-3 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Location</p>
                  <p className="text-gray-600">India</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-bold text-gray-900 mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/ayushbogati234-art"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white p-4 rounded-lg hover:bg-gray-800 transition-all transform hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ayush-bogati-aaaa78372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:ayushbogati234@gmail.com"
                  className="bg-red-600 text-white p-4 rounded-lg hover:bg-red-700 transition-all transform hover:scale-110"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Project Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold shadow-lg"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center border-t border-gray-200 pt-8">
          <p className="text-gray-600">
            © 2024 Ayush Bogati. Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
