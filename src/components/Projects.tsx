import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { Badge } from "@/src/components/ui/badge";
import { Smartphone, Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Projects = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    // {
    //   title: "Qi Tech - Incident Reporting Tool",
    //   description:
    //     "Professional incident reporting system currently used by over 700 pharmacies in the UK including Well Pharmacy. NHS certified and production-ready solution for healthcare incident management and compliance.",
    //   image: "/projects/qitech.png",
    //   type: "Full Stack Web",
    //   icon: Globe,
    //   technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    //   features: [
    //     "NHS Certification",
    //     "700+ Active Pharmacies",
    //     "Incident Tracking",
    //     "Compliance Reports",
    //   ],
    //   github: "#",
    //   demo: "#",
    //   role: "Lead Backend Developer",
    //   duration: "1 year",
    //   category: "web",
    // },
    {
      title: "Ferd AI - AI Design Generator",
      description:
        "An intelligent design generation platform that collects user requirements and creates custom designs, components, and design tokens using advanced AI algorithms.",
      image: "/projects/ferd.png",
      type: "Full Stack Web",
      icon: Globe,
      technologies: ["Next.js", "Prisma", "PostgreSQL", "OpenAI", "TypeScript"],
      features: [
        "AI-Powered Design",
        "Component Generation",
        "Design Tokens",
        "User Requirements",
      ],
      github: "#",
      demo: "#",
      role: "Full Stack Developer",
      duration: "4 months",
      category: "web",
    },
    {
      title: "OrbyPOS - Restaurant Management System",
      description:
        "Comprehensive restaurant POS management system featuring menu management, inventory tracking, stock control, order processing, analytics dashboard, taxation system, multi-role access, and subscription management with payment gateway integration.",
      image: "/projects/orbypos.png",
      type: "Full Stack Web",
      icon: Globe,
      technologies: [
        "Next.js",
        "Material UI",
        "Prisma",
        "PostgreSQL",
        "Stripe",
      ],
      features: [
        "Menu Management",
        "Inventory Control",
        "Analytics Dashboard",
        "Multi-role Access",
      ],
      github: "#",
      demo: "#",
      role: "Lead Full Stack Developer",
      duration: "7 months",
      category: "web",
    },
    {
      title: "Future Soul - Dating & Matchmaking App",
      description:
        "Modern dating and matchmaking mobile application with comprehensive matching algorithms, real-time chat features, audio and video calling capabilities, and all standard dating app functionalities.",
      image: "/projects/futuresoul.png",
      type: "Mobile App",
      icon: Smartphone,
      technologies: [
        "Next.js",
        "React Native",
        "PostgreSQL",
        "Prisma",
        "Socket.io",
      ],
      features: [
        "Smart Matching",
        "Real-time Chat",
        "Audio/Video Calls",
        "Profile Management",
      ],
      github: "#",
      demo: "#",
      role: "Full Stack Developer",
      duration: "4 months",
      category: "mobile",
    },
    {
      title: "Orby Waiter - POS Waiter Application",
      description:
        "Dedicated waiter application for restaurant POS systems featuring order management, menu browsing, payment processing, printing integration, and real-time notifications for seamless restaurant operations.",
      image: "/projects/waiter.png",
      type: "Mobile App",
      icon: Smartphone,
      technologies: [
        "Next.js",
        "React Native",
        "PostgreSQL",
        "Prisma",
        "Firebase",
      ],
      features: [
        "Order Management",
        "Real-time Notifications",
        "Print Integration",
        "Payment Processing",
      ],
      github: "#",
      demo: "#",
      role: "Full Stack Developer",
      duration: "3 months",
      category: "mobile",
    },
    {
      title: "Future Kiosk - Self-Ordering System",
      description:
        "Self-service ordering kiosk system for restaurants with interactive menu display, QR code scanning, order tracking, payment processing, and automatic printing integration for enhanced customer experience.",
      image: "/projects/future-kiosk.png",
      type: "Mobile App",
      icon: Smartphone,
      technologies: [
        "Next.js",
        "React Native",
        "PostgreSQL",
        "Prisma",
        "Firebase",
      ],
      features: [
        "Self-Service Ordering",
        "QR Code Scanning",
        "Order Tracking",
        "Auto Printing",
      ],
      github: "#",
      demo: "#",
      role: "Full Stack Developer",
      duration: "4 months",
      category: "mobile",
    },
    {
      title: "Brid St - Stock Management System",
      description:
        "Comprehensive stock management application connecting restaurant and business owners with stock suppliers. Features stock order tracking, menu management, inventory control, and supplier coordination for seamless business operations.",
      image: "/projects/brid-st.png",
      type: "Full Stack Mobile & Web",
      icon: Globe,
      technologies: [
        "React Native",
        "Next.js",
        "PostgreSQL",
        "Firebase",
        "TypeScript",
      ],
      features: [
        "Stock Order Tracking",
        "Menu Management",
        "Supplier Coordination",
        "Inventory Control",
      ],
      github: "#",
      demo: "#",
      role: "Full Stack Developer",
      duration: "3 months",
      category: "web",
    },

    {
      title: "FFC Sports Complex - Event Management",
      description:
        "Comprehensive sports event management mobile application featuring match scheduling, timing management, push notifications, visitor registration, and integrated map services for sports complex operations.",
      image: "/projects/ffc.png",
      type: "Mobile App",
      icon: Smartphone,
      technologies: [
        "React Native",
        "Next.js",
        "PostgreSQL",
        "Firebase",
        "Maps Integration",
      ],
      features: [
        "Match Scheduling",
        "Real-time Notifications",
        "Visitor Registration",
        "Map Integration",
      ],
      github: "#",
      demo: "#",
      role: "Mobile Developer",
      duration: "5 months",
      category: "mobile",
    },
    {
      title: "Orby Display - Digital Signage Control",
      description:
        "Real-time digital signage management system for controlling TV ads and banners. Features screen management, admin web panel for content control, and mobile app for displaying advertisements with live updates.",
      image: "/projects/orbydisplay.png",
      type: "Full Stack Mobile & Web",
      icon: Globe,
      technologies: [
        "React Native",
        "Next.js",
        "Socket.io",
        "PostgreSQL",
        "Real-time Sync",
      ],
      features: [
        "Real-time Control",
        "Screen Management",
        "Admin Panel",
        "Live Updates",
      ],
      github: "#",
      demo: "#",
      role: "Full Stack Developer",
      duration: "2 months",
      category: "web",
    },
    {
      title: "Cashpier - Steam Trading Marketplace",
      description:
        "Advanced Steam trading marketplace platform enabling users to login with Steam, list gaming items for sale, and facilitate automated purchases. Features integrated trading bots, automated trade offer initiation, and seamless payment processing.",
      image: "/projects/cashpier.png",
      type: "Full Stack Web",
      icon: Globe,
      technologies: [
        "Next.js",
        "PostgreSQL",
        "Firebase",
        "Steam API",
        "Stripe",
      ],
      features: [
        "Steam Integration",
        "Automated Trading Bots",
        "Trade Offer System",
        "Payment Processing",
      ],
      github: "#",
      demo: "#",
      role: "Full Stack Developer",
      duration: "2 months",
      category: "web",
    },
    {
      title: "Juliet Nails - Salon Management System",
      description:
        "Comprehensive salon management platform with multi-location support featuring turn tracker, payroll management, services and staff management, client registration and reservation system. Includes integrated Stripe payments and printer functionality for complete salon operations.",
      image: "/projects/jtnails.png",
      type: "Full Stack Web & Mobile",
      icon: Globe,
      technologies: [
        "Next.js",
        "React Native",
        "PostgreSQL",
        "Firebase",
        "Stripe",
      ],
      features: [
        "Multi-location Support",
        "Turn Tracker",
        "Payroll Management",
        "Reservation System",
      ],
      github: "#",
      demo: "#",
      role: "Full Stack Developer",
      duration: "2 months",
      category: "web",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work across web development, mobile apps, and cloud
            infrastructure
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {projects
            .slice(0, pathname === "/" ? 4 : projects.length)
            .map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Project Image */}
                <motion.div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  } relative group`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="glass overflow-hidden">
                    <div className="aspect-video bg-muted/50 relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to icon if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            const iconDiv = document.createElement("div");
                            iconDiv.className =
                              "w-full h-full flex items-center justify-center";
                            iconDiv.innerHTML = `<div class="w-16 h-16 text-primary/50">${project.icon.name}</div>`;
                            parent.appendChild(iconDiv);
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge variant="secondary" className="glass">
                          {project.type}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                {/* Project Details */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      {(() => {
                        const iconColors = {
                          web: "text-blue",
                          mobile: "text-purple",
                          devops: "text-teal",
                        };
                        const colorClass =
                          iconColors[
                            project.category as keyof typeof iconColors
                          ] || "text-primary";
                        return (
                          <project.icon className={`w-6 h-6 ${colorClass}`} />
                        );
                      })()}
                      <Badge variant="outline">{project.role}</Badge>
                      <Badge variant="secondary">{project.duration}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4
                      className={`font-semibold mb-3 ${(() => {
                        const titleColors = {
                          web: "text-blue",
                          mobile: "text-purple",
                          devops: "text-teal",
                        };
                        return (
                          titleColors[
                            project.category as keyof typeof titleColors
                          ] || "text-primary"
                        );
                      })()}`}
                    >
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons - Removed */}
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* View More Button */}
        {pathname === "/" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-center mt-16"
          >
            <Button
              variant="neon"
              size="lg"
              onClick={() => router.push("/projects")}
            >
              View All Project
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
