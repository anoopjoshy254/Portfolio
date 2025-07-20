import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }} // more upward motion
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 1.2, // slower animation
        ease: [0.22, 1, 0.36, 1], // smooth easing
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInSection;
