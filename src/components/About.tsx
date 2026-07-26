import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const interests = [
    { text: "Programming & logic-driven problem solving", icon: "⚡" },
    { text: "Product design & human-centered thinking", icon: "🧩" },
    { text: "Robotics & physical systems", icon: "🤖" },
    { text: "Electronics & DIY builds", icon: "🔧" },
    { text: "UI/UX design as an engineering skill", icon: "🎨" },
    { text: "Applied AI and real-world systems", icon: "🧠" },
  ];

  const currentlyExploring = [
    "Product design and user-centered experiences",
    "Robotics and real-world physical systems",
    "Electronics prototyping and DIY builds",
    "Polished interfaces that balance form and function",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 md:py-40 px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30" />

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        style={{ opacity }}
      >
        {/* Section header */}
        <motion.div 
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-sm tracking-widest uppercase text-accent mb-4 font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
          >
            01 — Introduction
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-medium">
            About <span className="text-accent italic">Me</span>
          </h2>
          
          {/* Decorative underline */}
          <motion.div
            className="mt-6 flex items-center gap-4"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="w-20 h-px bg-accent" />
            <div className="w-3 h-3 rounded-full bg-accent/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Main description */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.p 
              className="text-lg md:text-xl leading-relaxed text-foreground/80"
              variants={itemVariants}
            >
              I’m a <span className="text-accent font-medium">Computer Science & Engineering</span> student in my 2nd year of B.Tech at Navrachana University, Vadodara. After completing a diploma in Computer Engineering, I became especially interested in the space where <span className="text-sage font-medium">logic</span> and <span className="text-gold font-medium">design</span> meet.
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed text-foreground/80"
              variants={itemVariants}
            >
              What draws me in is the tension between problem-solving and aesthetics: code is rigorous, but building something meaningful often requires care for how it feels, flows, and serves people. That’s why I’m increasingly drawn to <span className="text-accent font-medium">product design</span> and human-centered development.
            </motion.p>
            
            <motion.p 
              className="text-lg leading-relaxed text-foreground/80"
              variants={itemVariants}
            >
              Outside coursework, I enjoy tinkering with electronics and small DIY projects. I’m also curious about robotics because it brings logic into the messy, physical world, and I’m always looking for ways to connect technical depth with thoughtful experience.
            </motion.p>

            {/* Work style card */}
            <motion.div 
              className="pt-8 mt-8 border-t border-border/50 relative"
              variants={itemVariants}
            >
              <div className="absolute -top-3 left-0 px-3 py-1 bg-background text-xs tracking-widest uppercase text-muted-foreground">
                How I Work
              </div>
              <p className="text-foreground/70 leading-relaxed mt-4">
                Exploratory and cross-disciplinary. I learn by building, experimenting, and connecting technical work with usability. I’m happiest when a project needs both <span className="text-accent">rigor</span> and <span className="text-sage">taste</span>, and I enjoy bringing different perspectives into the same problem.
              </p>
            </motion.div>
          </motion.div>

          {/* Interests & Exploring */}
          <motion.div 
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-heading font-medium mb-6 flex items-center gap-3">
                <span className="w-10 h-px bg-gradient-to-r from-accent to-transparent" />
                Areas of Interest
              </h3>
              <ul className="grid gap-3">
                {interests.map((interest, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-center gap-4 group p-3 rounded-lg hover:bg-card/50 transition-smooth"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-xl group-hover:scale-125 transition-spring">{interest.icon}</span>
                    <span className="text-foreground/80 group-hover:text-foreground transition-smooth">
                      {interest.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-heading font-medium mb-6 flex items-center gap-3">
                <span className="w-10 h-px bg-gradient-to-r from-sage to-transparent" />
                Currently Exploring
              </h3>
              <ul className="space-y-3">
                {currentlyExploring.map((item, index) => (
                  <motion.li 
                    key={index}
                    className="text-foreground/80 flex items-center gap-4 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <motion.span 
                      className="w-2 h-2 rounded-full bg-sage/60 group-hover:bg-sage group-hover:scale-150 transition-smooth"
                      whileHover={{ rotate: 180 }}
                    />
                    <span className="group-hover:text-foreground transition-smooth">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;