import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/src/components/ui/badge";
import { Card } from "@/src/components/ui/card";
import { Code, Smartphone, Cloud, Award } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { label: "Years Experience", value: "3+", icon: Award },
    { label: "Projects Completed", value: "20+", icon: Code },
    { label: "Mobile Apps", value: "10+", icon: Smartphone },
    { label: "Cloud Deployments", value: "15+", icon: Cloud },
  ];

  const techStack = {
    Frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Native",
    ],
    Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Laravel"],
    DevOps: ["Docker", "Kubernetes", "AWS", "DigitalOcean", "Linux"],
    Tools: ["Git", "VS Code", "Bitbucket", "Gtilab", "Github"],
  };

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about turning complex problems into elegant, scalable
            solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <Card className="glass p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                My Journey
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Started as a curious computer science student, I've evolved into
                a versatile engineer who bridges the gap between frontend
                elegance, backend robustness, and infrastructure reliability.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My passion lies in creating seamless user experiences backed by
                rock-solid architecture and automated deployment pipelines. I
                believe in writing clean, maintainable code that stands the test
                of time.
              </p>

              {/* Mission Statement */}
              <div className="border-l-4 border-primary pl-4">
                <p className="font-medium text-primary mb-2">Mission</p>
                <p className="text-sm text-muted-foreground">
                  To build technology that not only solves today's problems but
                  anticipates tomorrow's challenges, making the digital world
                  more accessible and efficient.
                </p>
              </div>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const colors = [
                  "text-blue",
                  "text-purple",
                  "text-teal",
                  "text-orange",
                ];
                const colorClass = colors[index] || "text-primary";
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  >
                    <Card className="glass p-6 text-center hover:bg-accent/10 transition-all duration-300">
                      <stat.icon
                        className={`w-8 h-8 ${colorClass} mx-auto mb-3`}
                      />
                      <div className={`text-2xl font-bold ${colorClass} mb-1`}>
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-center mb-8">
              Tech <span className="text-gradient">Stack</span>
            </h3>

            {Object.entries(techStack).map(
              ([category, technologies], index) => {
                const categoryColors: Record<string, string> = {
                  Frontend: "text-blue",
                  Backend: "text-purple",
                  DevOps: "text-teal",
                  Tools: "text-orange",
                };
                const colorClass =
                  categoryColors[category as keyof typeof categoryColors] ||
                  "text-primary";

                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  >
                    <Card className="glass p-6">
                      <h4 className={`font-semibold ${colorClass} mb-4`}>
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                              delay: 0.8 + index * 0.1 + techIndex * 0.05,
                              duration: 0.4,
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Badge
                              variant="secondary"
                              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                );
              }
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
