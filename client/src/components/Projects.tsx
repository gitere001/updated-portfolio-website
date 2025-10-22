import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: string[];
}

const Projects: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  const projects: Project[] = [
    {
      title: "Jepaks Academy & Admin",
      description:
        "A suite of platforms for managing learning and administration — includes Jepaks Academy (academy.jepaks.systems) and Jepaks Admin (admin.jepaks.systems). Built with Next.js and Node.js, featuring M-Pesa Paybill integration and secure backend APIs.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "M-Pesa API"],
      liveUrl: "https://academy.jepaks.systems/",
      images: [
        "/projects/jepaks-academy/jepaks_academy1.png",
        "/projects/jepaks-academy/jepaks_academy2.png",
        "/projects/jepaks-academy/jepaks_academy3.png",
        "/projects/jepaks-academy/jepaks_academy4.png",
      ],
    },
    {
      title: "Jepaks Systems Website",
      description:
        "The main Jepaks Systems website showcasing platform information, onboarding flow, and integrations. Designed for scalability and hosted on DigitalOcean.",
      technologies: ["Next.js", "Tailwind CSS", "Node.js", "DigitalOcean"],
      liveUrl: "https://jepaks.systems/",
      images: [
        "/projects/jepaks-systems/jepaks_website1.png",
        "/projects/jepaks-systems/jepaks_website2.png",
        "/projects/jepaks-systems/jepaks_website3.png",
        "/projects/jepaks-systems/jepaks_website4.png",
      ],
    },
    {
      title: "Digital 4 Africa Masterclass Platform",
      description:
        "A learning platform automating payments and enrollments with Paystack and M-Pesa integrations. Developed with React and Node.js for seamless user experience.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Paystack", "M-Pesa"],
      liveUrl: "https://masterclass.digital4africa.com/",
      images: [
        "/projects/d4a-masterclass/masterclass3.png",
        "/projects/d4a-masterclass/screenshot2.png",
        "/projects/d4a-masterclass/masterclass1.png",
        "/projects/d4a-masterclass/masterclass2.png",
      ],
    },
    {
      title: "ICIPE AI Chatbot",
      description:
        "An intelligent chatbot built using the OpenAI API to automatically respond to ICIPE-related information queries. Designed for accuracy and responsiveness.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "OpenAI API"],
      liveUrl: "https://icipe-chatbot.vercel.app/",
      images: [
        "/projects/icipe-chatbot/ai_chatbot2.png",
        "/projects/icipe-chatbot/ai_chatbot1.png",
        "/projects/icipe-chatbot/ai_chatbot3.png",
        "/projects/icipe-chatbot/ai_chatbot4.png",
      ],
    },
    {
      title: "Recipe Genius",
      description:
        "An AI-powered recipe generator that provides personalized recipe ideas based on user preferences and dietary needs.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "OpenAI API"],
      liveUrl: "https://recipegenius-one.vercel.app/",
      githubUrl: "https://github.com/gitere001/Recipe-Genius",
      images: [
        "/projects/recipe-genius/screenshot1.png",
        "/projects/recipe-genius/recipe1.png",
        "/projects/recipe-genius/recipe2.png",
        "/projects/recipe-genius/recipe3.png",
      ],
    },
  ];

  const nextImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (projectIndex: number, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: ((prev[projectIndex] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const goToImage = (projectIndex: number, imageIndex: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectIndex]: imageIndex,
    }));
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in full-stack and AI-powered web development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, projectIndex) => {
            const currentIndex = currentImageIndex[projectIndex] || 0;
            const hasMultipleImages = project.images.length > 1;

            return (
              <motion.div
                key={projectIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl hover:border-emerald-500/30 transition-all duration-300 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 h-full flex flex-col group">
                  {/* Image Gallery */}
                  <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <img
                      src={project.images[currentIndex]}
                      alt={`${project.title} - View ${currentIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />

                    {hasMultipleImages && (
                      <>
                        <button
                          onClick={() => prevImage(projectIndex, project.images.length)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                          aria-label="Previous image"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => nextImage(projectIndex, project.images.length)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                          aria-label="Next image"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </>
                    )}

                    {hasMultipleImages && (
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.images.map((_, imageIndex) => (
                          <button
                            key={imageIndex}
                            onClick={() => goToImage(projectIndex, imageIndex)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              currentIndex === imageIndex
                                ? "bg-emerald-500 w-6"
                                : "bg-white/50 hover:bg-white/75"
                            }`}
                            aria-label={`Go to image ${imageIndex + 1}`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <CardHeader className="pb-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                      {project.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="py-0 flex-grow">
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="font-normal bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-0"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge
                          variant="outline"
                          className="font-normal border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400"
                        >
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-2 pt-4">
                    {project.liveUrl && (
                      <Button
                        asChild
                        size="sm"
                        className="gap-1 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white flex-1"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          Live Demo <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="gap-1 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 flex-1"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          GitHub <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/gitere001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-medium gap-2 group transition-colors"
          >
            View more projects on GitHub
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;