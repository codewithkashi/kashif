import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/src/components/ui/badge";
import {
  Building,
  Calendar,
  Award,
  TrendingUp,
  Zap,
  Users,
  Code,
  Server,
} from "lucide-react";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "Future Dev Solutions",
      type: "Full-time",
      location: "Lahore, Pakistan",
      duration: "2023 - Present",
      startDate: "2023",
      description:
        "Leading comprehensive full-stack development initiatives spanning web, mobile, and DevOps domains. Architected and deployed high-availability infrastructure solutions while managing cross-functional development teams.",
      achievements: [
        "Managed a team of 12 developers across multiple projects",
        "Successfully led 10+ major projects from conception to deployment",
        "Built high-availability server infrastructure from scratch with zero downtime",
        "Implemented DNS failover and load balancing systems handling 10k users per minute",
        "Established comprehensive DevOps pipeline and deployment strategies",
        "Delivered scalable solutions across web and mobile platforms",
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "React Native",
        "Docker",
        "Kubernetes",
        "AWS",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Linux",
        "CI/CD",
      ],
      gradientFrom: "from-blue-500",
      gradientTo: "to-purple-600",
      icon: Server,
      stats: {
        team: "12 Developers",
        projects: "10+ Projects",
        uptime: "99.9% Uptime",
      },
    },
    {
      title: "Freelance Full Stack Developer",
      company: "Independent Contractor",
      type: "Freelance",
      location: "Remote",
      duration: "2022 - 2023",
      startDate: "2022",
      description:
        "Delivered custom web applications for various clients including healthcare and educational sectors. Specialized in creating user-centric solutions with modern web technologies.",
      achievements: [
        "Developed lost/found item tracker system for university management",
        "Built InstaCare platform connecting patients with healthcare providers",
        "Created comprehensive appointment management system for doctors",
        "Implemented online video meeting capabilities for medical consultations",
        "Maintained 100% client satisfaction across all delivered projects",
        "Established strong foundation in modern web development practices",
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Bootstrap",
        "Git",
        "VS Code",
      ],
      gradientFrom: "from-green-500",
      gradientTo: "to-teal-600",
      icon: Code,
      stats: {
        satisfaction: "100% Client Satisfaction",
        projects: "Healthcare & Education",
        focus: "User-Centric Design",
      },
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Professional Journey</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            Experience Timeline
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A journey of growth, innovation, and technical excellence across
            diverse projects and technologies
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full hidden lg:block" />

          {/* Mobile Timeline Line */}
          <div className="absolute left-8 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full lg:hidden" />

          <div className="space-y-24">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              const IconComponent = exp.icon;

              return (
                <motion.div
                  key={exp.company + exp.title}
                  initial={{ opacity: 0, y: 80 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: index * 0.3,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="relative"
                >
                  {/* Timeline Node */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{
                      delay: index * 0.3 + 0.2,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className={`absolute top-8 w-16 h-16 rounded-full glass border-4 border-background flex items-center justify-center z-10 ${
                      isLeft
                        ? "lg:left-1/2 lg:-translate-x-1/2"
                        : "lg:left-1/2 lg:-translate-x-1/2"
                    } left-6 -translate-x-1/2 lg:translate-x-0`}
                  >
                    <div
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.gradientFrom} ${exp.gradientTo} opacity-20`}
                    />
                    <IconComponent className="w-6 h-6 text-primary relative z-10" />
                  </motion.div>

                  {/* Year Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.3 + 0.4, duration: 0.6 }}
                    className={`absolute top-2 ${
                      isLeft
                        ? "lg:left-1/2 lg:-translate-x-1/2 lg:-ml-20"
                        : "lg:left-1/2 lg:-translate-x-1/2 lg:ml-20"
                    } left-20 lg:translate-x-0`}
                  >
                    <div
                      className={`px-4 py-2 rounded-full bg-gradient-to-r ${exp.gradientFrom} ${exp.gradientTo} text-white text-sm font-bold shadow-lg`}
                    >
                      {exp.startDate}
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: index * 0.3 + 0.6,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className={`glass p-8 rounded-2xl border-2 border-transparent hover:border-primary/20 transition-all duration-500 group ${
                      isLeft ? "lg:mr-1/2 lg:pr-20" : "lg:ml-1/2 lg:pl-20"
                    } ml-16 lg:ml-0`}
                  >
                    {/* Gradient Border Effect */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${exp.gradientFrom} ${exp.gradientTo} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-wrap items-center gap-3 mb-6">
                        <Badge
                          variant="secondary"
                          className="glass text-xs font-medium"
                        >
                          {exp.type}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                      </div>

                      {/* Title and Company */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <Building className="w-5 h-5 text-primary" />
                          <span className="font-semibold text-primary text-lg">
                            {exp.company}
                          </span>
                        </div>
                        <p className="text-muted-foreground">
                          📍 {exp.location}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                        {Object.entries(exp.stats).map(([key, value]) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                              delay: index * 0.3 + 0.8,
                              duration: 0.6,
                            }}
                            className="text-center p-3 rounded-lg glass"
                          >
                            <div className="text-lg font-bold text-primary">
                              {value.split(" ")[0]}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {value.split(" ").slice(1).join(" ")}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-8">
                        <h4 className="font-bold mb-4 flex items-center gap-2 text-lg">
                          <Award className="w-5 h-5 text-primary" />
                          Key Achievements
                        </h4>
                        <div className="grid gap-3">
                          {exp.achievements.map((achievement, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -30 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{
                                delay: index * 0.3 + 0.8 + idx * 0.1,
                                duration: 0.6,
                              }}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors duration-300 group/achievement"
                            >
                              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-purple-500 mt-2.5 flex-shrink-0 group-hover/achievement:scale-125 transition-transform duration-300" />
                              <span className="text-sm leading-relaxed">
                                {achievement}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-bold mb-4 flex items-center gap-2 text-lg">
                          <Code className="w-5 h-5 text-primary" />
                          Technologies & Tools
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={inView ? { opacity: 1, scale: 1 } : {}}
                              transition={{
                                delay: index * 0.3 + 1.0 + idx * 0.05,
                                duration: 0.4,
                              }}
                            >
                              <Badge
                                variant="outline"
                                className="hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 cursor-pointer"
                              >
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
