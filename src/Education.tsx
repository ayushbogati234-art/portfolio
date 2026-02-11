import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 hover:border-blue-200 transition-all duration-300">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8">
              <div className="flex items-center space-x-4">
                <div className="bg-white bg-opacity-20 p-4 rounded-xl">
                  <GraduationCap className="text-white" size={48} />
                </div>
                <div className="text-white">
                  <h3 className="text-3xl font-bold mb-2">Bachelor of Engineering</h3>
                  <p className="text-blue-100 text-lg">Padre Conceição College Of Engineering</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start space-x-3">
                  <Calendar className="text-blue-600 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Duration</p>
                    <p className="text-gray-600">2025 - 2029 (Expected)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Award className="text-blue-600 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-gray-900">Current Year</p>
                    <p className="text-gray-600">First Year Engineering</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="text-blue-600 mr-2" size={24} />
                  Key Coursework
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Engineering Mathematics',
                    'Physics',
                    'Chemistry',
                    'Programming Fundamentals',
                    'Engineering Graphics',
                    'Basic Electronics',
                    'Engineering Mechanics',
                    'Communication Skills',
                  ].map((course, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-gray-700 bg-gray-50 px-4 py-2 rounded-lg"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-2 border-gray-100 hover:border-blue-200 transition-all">
              <div className="text-4xl font-bold text-blue-600 mb-2">idk</div>
              <p className="text-gray-600 font-medium">Current CGPA</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-2 border-gray-100 hover:border-green-200 transition-all">
              <div className="text-4xl font-bold text-green-600 mb-2">2+</div>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-2 border-gray-100 hover:border-orange-200 transition-all">
              <div className="text-4xl font-bold text-orange-600 mb-2">3+</div>
              <p className="text-gray-600 font-medium">Technical Skills</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
