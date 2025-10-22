import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Award, Briefcase, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "gitere.dev@gmail.com",
      href: "mailto:gitere.dev@gmail.com",
    },
  ];

  const stats = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      value: "3.5+",
      label: "Years Experience",
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      value: "15+",
      label: "Projects Completed",
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: "ALX",
      label: "Graduate",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
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
            About Me
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Full Stack Software Engineer passionate about creating impactful digital solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Image & Contact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Profile Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-emerald-500/20 shadow-xl">
                <img
                  src="/about.jpeg"
                  alt="James Gitere profile"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
              </div>
            </div>

            {/* Contact Info */}
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-4 flex items-center gap-4 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:border-emerald-500/30"
              >
                <div className="h-12 w-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-medium text-slate-900 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium text-slate-900 dark:text-slate-100">{info.value}</p>
                  )}
                </div>
              </Card>
            ))}

            {/* Stats Cards */}
            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-4 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:border-emerald-500/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-slate-900 dark:text-slate-100">{stat.value}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="p-6 md:p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-xl h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-full" />
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">
                  Who I Am
                </h3>
              </div>

              <div className="space-y-5 text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  I'm a <span className="font-semibold text-slate-900 dark:text-slate-100">Full Stack Software Engineer</span> graduated from <span className="font-semibold text-emerald-600 dark:text-emerald-400">ALX Africa</span>, passionate about creating scalable and efficient software solutions. With expertise in both front-end and back-end development, I thrive on building applications that enhance user experience and drive business success.
                </p>
                <p>
                  My journey in tech is fueled by continuous learning and a desire to innovate, making me eager to tackle new challenges and create impactful solutions. I specialize in modern web technologies including <span className="font-semibold text-slate-900 dark:text-slate-100">React, Node.js, Next.js,</span> and <span className="font-semibold text-slate-900 dark:text-slate-100">MongoDB</span>.
                </p>
                <p>
                  I combine technical expertise with problem-solving skills to deliver robust applications that meet and exceed client expectations. My approach is collaborative, adaptable, and focused on creating value through technology.
                </p>
              </div>

              {/* Key Skills */}
              <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Core Competencies</h4>
                <div className="flex flex-wrap gap-2">
                  {["Full Stack Development", "API Integration", "UI/UX Design", "Database Management", "Cloud Deployment", "Agile Methodology"].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  download=""
                  href="James_Gitere_Cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition-all duration-300 text-center font-medium shadow-lg hover:shadow-xl"
                >
                  Download CV
                </a>
                <a
                  href="#contact"
                  className="border-2 border-emerald-600 dark:border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-6 py-3 rounded-lg transition-all duration-300 text-center font-medium"
                >
                  Get In Touch
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;