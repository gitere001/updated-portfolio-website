import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const About: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "gitere.dev@gmail.com",
      href: "mailto:gitere.dev@gmail.com",
    },
    // {
    //   icon: <Phone className="h-5 w-5" />,
    //   label: "Phone",
    //   value: "+254 714 584 667",
    //   href: "tel:+254714584667"
    // },
    // {
    //   icon: <MapPin className="h-5 w-5" />,
    //   label: "Location",
    //   value: "Nairobi, Kenya",
    //   href: null
    // }
  ];

  return (
    <section id="about" className="bg-muted/50">
      <div className="container mx-auto p-[0.5rem] md:p-[2rem]">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16">
          {/* Info Cards with Profile Image */}
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg border border-border hover-scale">
              <img
                src="/about.jpeg"
                alt="James Gitere profile"
                className="w-full h-full object-cover"
              />
            </div>

            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-4 flex items-center gap-4 hover-scale glass"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium">{info.value}</p>
                  )}
                </div>
              </Card>
            ))}

            {/* <Card className="p-4 glass">
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground">Graduated from ALX Africa</p>
              <p className="text-sm text-muted-foreground">Full Stack Software Engineering</p>
            </Card> */}

            <Card className="p-4 glass">
              <h3 className="text-lg font-semibold mb-2">Experience</h3>
              <p className="text-muted-foreground">2+ years</p>
              <p className="text-sm text-muted-foreground">
                Building web applications
              </p>
            </Card>
          </div>

          {/* About Content */}
          <div className="lg:col-span-2">
            <Card className="p-4 md:p-8 glass">
              <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
              <div className="space-y-4 text-lg">
                <p>
                  I'm a Full Stack Software Engineer graduated from ALX Africa,
                  passionate about creating scalable and efficient software
                  solutions. With expertise in both front-end and back-end
                  development, I thrive on building applications that enhance
                  user experience and drive business success.
                </p>
                <p>
                  My journey in tech is fueled by continuous learning and a
                  desire to innovate, making me eager to tackle new challenges
                  and create impactful solutions.
                </p>
                <p>
                  I combine technical expertise with problem-solving skills to
                  deliver robust applications that meet and exceed client
                  expectations. My approach is collaborative, adaptable, and
                  focused on creating value through technology.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  download=""
                  href="James_Gitere_Cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-colors text-center"
                >
                  Download CV
                </a>
                <a
                  href="#contact"
                  className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md transition-colors text-center"
                >
                  Get In Touch
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
