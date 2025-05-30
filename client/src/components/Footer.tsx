
import SocialLinks from "./SocialLinks";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 py-10 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold gradient-text">James Gitere</h2>
            <p className="text-muted-foreground mt-1">Full Stack Software Engineer</p>
          </div>
          
          <SocialLinks />
          
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>&copy; {currentYear} James Gitere. All rights reserved.</p>
            <p className="mt-1">Made with ❤️ in Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
