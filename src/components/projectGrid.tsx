import React from "react";
import dashboard from "../assets/dashboard.png";
import container from "../assets/Container.png"

interface GridProjectItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
}

const projectData: GridProjectItem[] = [
  {
    id: "roadersmap",
    title: "Roadersmap",
    description: "Autonomous routing for global logistics.",
    imageUrl: container, 
    imageAlt: "Global logistics connected network map",
  },
  {
    id: "scriply-ai",
    title: "Scriply Ai",
    description: "Telemedicine architecture for millions.",
    imageUrl: dashboard, 
    imageAlt: "Medical Dashboard UI preview",
  },
];

export const ProjectGrid: React.FC = () => {
  return (
    <section className="w-full text-white px-4 py-12 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projectData.map((project) => (
            <div key={project.id} className="flex flex-col space-y-5 group">
              {/* Image Container Card */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#0c0d0e] border border-neutral-900 shadow-2xl flex items-center justify-center p-4">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.imageAlt || project.title}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                ) : (
                  /* Placeholder when no image URL is provided */
                  <div className="w-full h-full rounded-2xl bg-neutral-900/50 border border-neutral-800 flex items-center justify-center text-neutral-600 text-sm font-mono">
                    Image Space ({project.title})
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5 px-1">
                <h3 className="text-2xl md:text-[24px] font-[700] leading-[32px] tracking-tight text-[#F0F0F0]">
                  {project.title}
                </h3>
                <p className="text-[#A1A1A6] text-sm md:text-[14px] font-[400] leading-[20px]">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
