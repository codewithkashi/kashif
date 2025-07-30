import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { Building, Calendar, Award, TrendingUp } from "lucide-react";

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
      description:
        "Leading comprehensive full-stack development initiatives spanning web, mobile, and DevOps domains. Architected and deployed high-availability infrastructure solutions while managing cross-functional development teams.",
      achievements: [
        "Managed a team of 12 developers across multiple projects",
        "Successfully led 7 major projects from conception to deployment",
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
      color: "border-primary",
    },
    {
      title: "Freelance Full Stack Developer",
      company: "Independent Contractor",
      type: "Freelance",
      location: "Remote",
      duration: "2022 - 2023",
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
      color: "border-accent-subtle",
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of growth, innovation, and technical excellence
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-12 mb-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-primary to-transparent opacity-30 hidden md:block" />
              )}

              <Card
                className={`glass p-8 border-l-4 ${exp.color} hover:bg-accent/10 transition-all duration-500 ml-0 md:ml-12`}
              >
                {/* Timeline dot */}
                <div className="absolute -left-3 top-8 w-6 h-6 bg-primary rounded-full border-4 border-background hidden md:block" />

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Job Details */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge variant="secondary" className="glass">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 mb-4">
                        <Building className="w-4 h-4 text-primary" />
                        <span className="font-medium text-primary">
                          {exp.company}
                        </span>
                        <span className="text-muted-foreground">
                          • {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-primary" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                              delay: index * 0.2 + idx * 0.1,
                              duration: 0.5,
                            }}
                            className="flex items-start gap-3 text-sm"
                          >
                            <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-primary">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
