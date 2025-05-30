import { ArrowDown } from "lucide-react";
import SocialLinks from "./SocialLinks";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative py-20 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto flex flex-col items-center text-center gap-6 animate-fade-in">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-4">
          <div className="relative flex items-center">
            {/* Profile Image */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl">
              <img
                src="/pro1.webp"
                alt="James Gitere"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Half-overlayed Badge */}
            <div className="-ml-5 z-10 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-md">
              <span>2+</span>
            </div>
          </div>

          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="block">Hi, I'm</span>
              <span className="gradient-text block">James Gitere</span>
            </h1>

            <h2 className="text-xl md:text-2xl text-foreground/80 max-w-2xl mt-2">
              Full Stack Software Engineer
            </h2>

            <p className="text-lg md:text-xl italic text-foreground/70 max-w-2xl mt-2">
              "Building innovative solutions with passion and precision"
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#projects">View My Work</a>
          </Button>
        </div>

        <SocialLinks className="mt-8" />

        <a
          href="#about"
          className=" bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-foreground/70 hover:text-primary transition-colors"
          aria-label="Scroll down"
        >
          {/* <span className="mb-2 text-sm">Scroll Down</span> */}
          <ArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
