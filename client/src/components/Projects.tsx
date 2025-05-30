
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "D4A Academy",
      description: "A comprehensive Learning Management System (LMS) with student/admin dashboards and payment integration.",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Cloudinary"],
      liveUrl: "https://d4a-academy.com",
      image: "/d4a-academy.png"
    },
    {
      title: "Recipe Genius",
      description: "AI-powered recipe suggestion application that generates recipe ideas based on user preferences.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "OpenAPI"],
      liveUrl: "https://recipegenius-one.vercel.app/",
      githubUrl: "https://github.com/gitere001/Recipe-Genius",
      image: "/recipe-genius-landing.png"
    },
    {
      title: "Cowork Booking",
      description: "A coworking space booking system allowing users to reserve workspaces and manage bookings.",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      liveUrl: "https://coworking-booking-demo.vercel.app/",
      githubUrl: "https://github.com/gitere001/Co-working-space",
      image: "/co-work-space.png"
    },
    {
      title: "Skillup",
      description: "Digital learning marketplace for Kenyan experts to share their knowledge and skills.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      githubUrl: "https://github.com/gitere001/Skillup",
      image: "/skillup1.png"
    },
    {
      title: "BookSwap Connect",
      description: "Peer-to-peer book exchange platform enabling users to trade books with others in their community.",
      technologies: ["React", "Python", "MySQL"],
      githubUrl: "https://github.com/gitere001/Bookswap-connect",
      image: "/bookswapconnect1.png"
    }
  ];

  return (
    <section id="projects" className="bg-muted/50">
      <div className="container mx-auto p-[0.5rem] md:p-[2rem]">
        <h2 className="section-title">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover-scale transition-all duration-300 glass h-full flex flex-col">
              {project.image && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              )}

              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
              </CardHeader>

              <CardContent className="py-2 flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <Badge key={i} variant="secondary" className="font-normal">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="font-normal">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2">
                {project.liveUrl && (
                  <Button asChild variant="default" size="sm" className="gap-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button asChild variant="outline" size="sm" className="gap-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      GitHub <Github className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/gitere001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline gap-1"
          >
            View more projects on GitHub <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
