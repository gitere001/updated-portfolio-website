import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 py-12 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
              James Gitere
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Full Stack Software Engineer
            </p>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SocialLinks />
          </motion.div>
          
          {/* Copyright Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-slate-600 dark:text-slate-400 text-center md:text-right"
          >
            <p>&copy; {currentYear} James Gitere. All rights reserved.</p>
            <p className="mt-1">
              Made with <span className="text-emerald-600 dark:text-emerald-400">❤️</span> in Nairobi, Kenya
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;