import { Code2, Wrench, Cpu, BookOpen } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming',
      color: 'blue',
      skills: ['Python', 'C', 'C++'],
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      color: 'green',
      skills: ['Git', 'GitHub', 'Linux', 'VS Code'],
    },
    {
      icon: Cpu,
      title: 'Technical Skills',
      color: 'orange',
      skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'SQL'],
    },
    {
      icon: BookOpen,
      title: 'Soft Skills',
      color: 'purple',
      skills: ['Team Collaboration', 'Communication', 'Time Management', 'Quick Learner'],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 group-hover:from-blue-600 group-hover:to-blue-700',
      green: 'from-green-500 to-green-600 group-hover:from-green-600 group-hover:to-green-700',
      orange: 'from-orange-500 to-orange-600 group-hover:from-orange-600 group-hover:to-orange-700',
      purple: 'from-slate-500 to-slate-600 group-hover:from-slate-600 group-hover:to-slate-700',
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Constantly learning and developing new skills to become a better engineer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`bg-gradient-to-br ${getColorClasses(category.color)} p-6 transition-all duration-300`}>
                <category.icon className="text-white" size={40} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center text-gray-600"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
