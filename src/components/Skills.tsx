import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import Image from "next/image";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillsData = [
    // Frontend
    {
      name: "React",
      category: "Frontend",
      icon: "/icons/react.png",
      color: "from-blue-400 to-cyan-400",
    },
    {
      name: "Next.js",
      category: "Frontend",
      icon: "/icons/next_js.png",
      color: "from-gray-800 to-gray-600",
    },
    {
      name: "TypeScript",
      category: "Frontend",
      icon: "/icons/typescript.png",
      color: "from-blue-600 to-blue-400",
    },
    {
      name: "JavaScript",
      category: "Frontend",
      icon: "/icons/javascript.png",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      icon: "/icons/tailwind_css.png",
      color: "from-cyan-400 to-teal-400",
    },
    {
      name: "Bootstrap",
      category: "Frontend",
      icon: "/icons/bootstrap.png",
      color: "from-purple-500 to-purple-700",
    },

    // Backend
    {
      name: "Node.js",
      category: "Backend",
      icon: "/icons/node_js.png",
      color: "from-green-500 to-green-700",
    },
    {
      name: "Next.js",
      category: "Backend",
      icon: "/icons/next_js.png",
      color: "from-gray-800 to-gray-600",
    },
    {
      name: "Express.js",
      category: "Backend",
      icon: "/icons/express.png",
      color: "from-gray-600 to-gray-800",
    },
    {
      name: "Firebase",
      category: "Backend",
      icon: "/icons/firebase.png",
      color: "from-orange-400 to-yellow-500",
    },
    {
      name: "Laravel",
      category: "Backend",
      icon: "/icons/laravel.png",
      color: "from-orange-400 to-yellow-500",
    },

    // Mobile
    {
      name: "React Native",
      category: "Mobile",
      icon: "/icons/react.png",
      color: "from-blue-500 to-purple-500",
    },
    {
      name: "Expo",
      category: "Mobile",
      icon: "/icons/expo.png",
      color: "from-indigo-500 to-blue-500",
    },

    // Database
    {
      name: "PostgreSQL",
      category: "Database",
      icon: "/icons/postgresql.png",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "MySQL",
      category: "Database",
      icon: "/icons/mysql.png",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "MongoDB",
      category: "Database",
      icon: "/icons/mongodb.png",
      color: "from-green-600 to-emerald-600",
    },
    {
      name: "Redis",
      category: "Database",
      icon: "/icons/redis.png",
      color: "from-red-500 to-red-600",
    },
    {
      name: "Prisma",
      category: "Database",
      icon: "/icons/postgresql.png", // Using PostgreSQL icon as Prisma works with it
      color: "from-indigo-600 to-purple-600",
    },

    // DevOps & Cloud
    {
      name: "Docker",
      category: "DevOps",
      icon: "/icons/docker.png",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Kubernetes",
      category: "DevOps",
      icon: "/icons/kubernetes.png",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "AWS",
      category: "DevOps",
      icon: "/icons/aws.png",
      color: "from-orange-500 to-yellow-500",
    },
    {
      name: "Digital Ocean",
      category: "DevOps",
      icon: "/icons/digital_ocean.png",
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Linux",
      category: "DevOps",
      icon: "/icons/linux.png",
      color: "from-gray-700 to-black",
    },
    {
      name: "CI/CD",
      category: "DevOps",
      icon: "/icons/ci_cd.png",
      color: "from-green-500 to-green-700",
    },

    // Tools & Others
    {
      name: "Git",
      category: "Tools",
      icon: "/icons/git.png",
      color: "from-orange-600 to-red-600",
    },
    {
      name: "GitHub",
      category: "Tools",
      icon: "/icons/github.png",
      color: "from-gray-700 to-black",
    },
    {
      name: "Bitbucket",
      category: "Tools",
      icon: "/icons/bitbucket.png",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "GitLab",
      category: "Tools",
      icon: "/icons/gitlab.png",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "VS Code",
      category: "Tools",
      icon: "/icons/visual_studio_code.png",
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Android Studio",
      category: "Tools",
      icon: "/icons/android_studio.png",
      color: "from-green-500 to-green-700",
    },
  ];

  const categories = [
    "Frontend",
    "Backend",
    "Mobile",
    "Database",
    "DevOps",
    "Tools",
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-br from-background via-muted/20 to-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical{" "}
            <span className="text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crafting exceptional digital experiences with modern technologies
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skillsData.filter(
              (skill) => skill.category === category
            );

            return (
              <motion.div
                key={category}
                variants={categoryVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ delay: categoryIndex * 0.1 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <Badge
                    variant="outline"
                    className="px-4 py-2 text-sm font-semibold border-2"
                  >
                    {category}
                  </Badge>
                  <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                >
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants as any}
                      whileHover={{
                        scale: 1.05,
                        rotate: 2,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="group cursor-pointer"
                    >
                      <Card className="relative overflow-hidden p-6 h-28 flex flex-col items-center justify-center text-center hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/20">
                        {/* Animated background gradient */}
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                          initial={false}
                          animate={{ opacity: 0 }}
                          whileHover={{ opacity: 0.1 }}
                        />

                        {/* Floating animation for icon */}
                        <motion.div
                          animate={{
                            y: [0, -4, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: skillIndex * 0.1,
                          }}
                          className="mb-2 filter group-hover:drop-shadow-lg transition-all duration-300"
                        >
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={32}
                            height={32}
                            className="w-8 h-8 object-contain"
                          />
                        </motion.div>

                        <span className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                          {skill.name}
                        </span>

                        {/* Subtle glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-lg"
                          initial={false}
                          whileHover={{
                            boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                          }}
                          transition={{ duration: 0.3 }}
                        />
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Floating elements for visual interest */}
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full opacity-30"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-3 h-3 bg-purple-500 rounded-full opacity-20"
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        {/* Bottom section with summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <Card className="glass p-8 max-w-4xl mx-auto border-2">
            <h3 className="text-2xl font-semibold mb-4">
              Continuous <span className="text-primary">Learning</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in staying current with emerging technologies and best
              practices. Each project is an opportunity to explore new tools and
              refine existing skills, ensuring I can deliver cutting-edge
              solutions that meet modern standards.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
