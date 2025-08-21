import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  className?: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills,
  className,
}) => {
  return (
    <Card
      className={cn(
        "overflow-hidden hover-scale transition-all duration-300 glass",
        className
      )}
    >
      <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-background px-3 py-1 rounded-full text-sm border border-border"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "C"],
    },
    {
      title: "Frontend Development",
      skills: ["React", "Redux Toolkit", "HTML", "CSS", "Tailwind CSS", "Next.js"],
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "Flask",
        "REST APIs",
        "Mpesa Integration (Daraja)",
        "Paystack Integration",
        "Email Integration (Postmark, Elastic Email)",
        "SMS Integration (Africa's Talking)",
        "Cloudinary (cloud media storage and management)",
        "Ai Integration (OpenAI, ChatGPT)"


      ],
    },
    {
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "DBMS"],
    },
    {
      title: "Developer Tools",
      skills: ["Git", "VS Code", "Postman", "npm", "Vim"],
    },
    {
      title: "DevOps & Infrastructure",
      skills: [
        "Nginx",
        "HAProxy",
        "SSL Certificates",
        "Server Security",
        "Backups & Cloning",
        "VPS (e.g. DigitalOcean)",
        "Cloudflare R2",
        "Server Configuration",
        "Linux OS & Command Line",
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="container mx-auto p-[0.5rem] md:p-[2rem]">
        <h2 className="section-title">My Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
