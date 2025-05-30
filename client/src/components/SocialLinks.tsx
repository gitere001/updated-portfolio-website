
import { Github, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className }) => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/james-gitere/',
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      name: 'GitHub',
      url: 'https://github.com/gitere001',
      icon: <Github className="h-5 w-5" />
    }
  ];

  return (
    <div className={cn("flex gap-4 items-center", className)}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-primary transition-colors duration-300"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
