import { motion } from "framer-motion";

const BlurText = ({ text }) => {
  const variants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  };

  return (
    <motion.h1
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-4xl font-bold"
    >
      {text}
    </motion.h1>
  );
};

export default BlurText;