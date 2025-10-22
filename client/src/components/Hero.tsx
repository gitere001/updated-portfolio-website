import { ArrowDown, Sparkles, Code2, Rocket } from "lucide-react";
import SocialLinks from "./SocialLinks";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Floating gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-slate-200 to-transparent dark:from-slate-700 dark:to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-slate-300 to-transparent dark:from-slate-600 dark:to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Greeting badge */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              <Sparkles className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Available for opportunities
              </span>
            </motion.div> */}

            {/* Main heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-slate-900 dark:text-slate-100">
                  Hi, I'm
                </span>
                <span className="block bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-slate-100 dark:via-slate-300 dark:to-slate-100 bg-clip-text text-transparent">
                  James Gitere
                </span>
              </h1>

              <div className="flex items-center gap-3">
                <div className="h-1 w-12 bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-emerald-500 dark:to-emerald-400 rounded-full" />
                <h2 className="text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-300">
                  Full Stack Software Engineer
                </h2>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl"
            >
              Crafting exceptional digital experiences with 3.5+ years of expertise in modern web technologies. Specialized in building scalable, innovative solutions.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-6 md:gap-8 pt-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">3.5+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Years Exp</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-slate-100">15+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Projects</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 px-8"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-all duration-300 px-8"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <SocialLinks className="mt-4" />
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-tr from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-3xl opacity-20 blur-2xl"
              />

              {/* Main image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-400 via-emerald-500 to-emerald-600 dark:from-emerald-600 dark:via-emerald-500 dark:to-emerald-400 p-[3px]"

                >
                  <div className="w-full h-full rounded-3xl bg-white dark:bg-slate-950" />
                </motion.div>

                {/* Image */}
                <div className="absolute inset-3 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/pro1.webp"
                    alt="James Gitere"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 1,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="absolute -bottom-4 -left-4 bg-emerald-600 dark:bg-emerald-500 text-white px-6 py-3 rounded-2xl shadow-2xl border-4 border-white dark:border-slate-950"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="font-bold text-sm">Available for hire</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors cursor-pointer group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;