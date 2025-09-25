import React from "react";

interface Project {
  country: string;
  type: string;
  title: string;
  description: string;
}

const projects: Project[] = [
  {
    country: "🇪🇹",
    type: "E-commerce",
    title: "Addis Market Hub",
    description:
      "Complete e-commerce platform with integrated payment gateway and inventory management for local retailers.",
  },
  {
    country: "🇨🇦",
    type: "Recruitment",
    title: "TalentConnect Canada",
    description:
      "Advanced job portal connecting skilled professionals with top Canadian employers across multiple industries.",
  },
  {
    country: "🇦🇺",
    type: "Real Estate",
    title: "Sydney Properties Plus",
    description:
      "Comprehensive real estate platform with virtual tours, CRM integration, and advanced search capabilities.",
  },
  {
    country: "🇺🇸",
    type: "Education",
    title: "LearnTech Academy",
    description:
      "Interactive e-learning management system with video streaming, assessments, and progress tracking.",
  },
  {
    country: "🇺🇸",
    type: "Education",
    title: "LearnTech Academy",
    description:
      "Interactive e-learning management system with video streaming, assessments, and progress tracking.",
  },
  {
    country: "🇦🇺",
    type: "Real Estate",
    title: "Sydney Properties Plus",
    description:
      "Comprehensive real estate platform with virtual tours, CRM integration, and advanced search capabilities.",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-6">
          <h1 className="text-2xl sm:text-4xl font-bold text-center text-transparent bg-clip-text 
           bg-gradient-to-r from-gray-300 via-white to-gray-400">
            Featured Projects
            </h1>
          <p className="sm:text-lg md:text-xl text-gray-300">
            A showcase of our recent work and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-indigo-500 transition-all duration-200 shadow-md"
            >
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">{project.country}</span>
                <span className="text-sm text-indigo-400 uppercase font-semibold">
                  {project.type}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
