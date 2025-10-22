import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Cloud,
  CheckCircle2
} from "lucide-react";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  index: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
  title,
  skills,
  icon,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full overflow-hidden bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 group">
        {/* Header with gradient and icon */}
        <div className="relative h-24 bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 flex items-center justify-between px-6">
          <h3 className="text-xl font-bold text-white z-10">{title}</h3>
          <div className="text-white/30 group-hover:text-white/50 transition-colors">
            {icon}
          </div>
          {/* Decorative circle */}
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full" />
        </div>

        <CardContent className="p-6">
          <div className="space-y-2.5">
            {skills.map((skill, skillIndex) => (
              <motion.div
                key={skillIndex}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                className="flex items-start gap-3 group/item"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-500 dark:text-emerald-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                <span className="text-slate-700 dark:text-slate-300 leading-relaxed group-hover/item:text-slate-900 dark:group-hover/item:text-slate-100 transition-colors">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "C"],
      icon: <Code2 className="h-12 w-12" />,
    },
    {
      title: "Frontend Development",
      skills: ["React", "Redux Toolkit", "HTML", "CSS", "Tailwind CSS", "Next.js"],
      icon: <Layout className="h-12 w-12" />,
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "Flask",
        "REST APIs",
        "M-Pesa Integration (Daraja)",
        "Paystack Integration",
        "Email Integration (Postmark, Elastic Email)",
        "SMS Integration (Africa's Talking)",
        "Cloudinary (Media Storage)",
        "AI Integration (OpenAI, ChatGPT)",
      ],
      icon: <Server className="h-12 w-12" />,
    },
    {
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "DBMS"],
      icon: <Database className="h-12 w-12" />,
    },
    {
      title: "Developer Tools",
      skills: ["Git", "VS Code", "Postman", "npm", "Vim"],
      icon: <Wrench className="h-12 w-12" />,
    },
    {
      title: "DevOps & Infrastructure",
      skills: [
        "Nginx",
        "HAProxy",
        "SSL Certificates",
        "Server Security",
        "Backups & Cloning",
        "VPS (DigitalOcean)",
        "Cloudflare R2",
        "Server Configuration",
        "Linux OS & Command Line",
      ],
      icon: <Cloud className="h-12 w-12" />,
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
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
            Technical Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Interested in working together?
          </p>
          <a
            href="#contact"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-8 py-3 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
          >
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;