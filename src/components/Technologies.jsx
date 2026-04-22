import { FaPython, FaAws } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiMicrosoftpowerbi,
  SiSnowflake,
  SiDatabricks,
  SiScikitlearn
} from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10, opacity: 0 },
  animate: {
    y: [10, -10],
    opacity: 1,
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>

      <div className="flex flex-wrap items-center justify-center gap-4">
        
        {/* Python */}
        <motion.div variants={iconVariants(2.5)} initial="initial" whileInView="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <FaPython size={40} className="text-yellow-500" />
        </motion.div>

        {/* PostgreSQL */}
        <motion.div variants={iconVariants(3)} initial="initial" whileInView="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <BiLogoPostgresql size={40} className="text-cyan-400" />
        </motion.div>

        {/* AWS */}
        <motion.div variants={iconVariants(5)} initial="initial" whileInView="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <FaAws size={40} className="text-white" />
        </motion.div>

        {/* Power BI */}
        <motion.div variants={iconVariants(2.5)} initial="initial" whileInView="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <SiMicrosoftpowerbi size={40} className="text-yellow-400" />
        </motion.div>

        {/* Snowflake */}
        <motion.div variants={iconVariants(4.5)} initial="initial" whileInView="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <SiSnowflake size={40} className="text-blue-300" />
        </motion.div>

        {/* Databricks */}
        <motion.div variants={iconVariants(4)} initial="initial" whileInView="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <SiDatabricks size={40} className="text-red-500" />
        </motion.div>

        {/* Machine Learning (Scikit-learn as representation) */}
        <motion.div variants={iconVariants(4)} initial="initial" whileInView="animate" className="rounded-2xl border-4 border-neutral-800 p-2">
          <SiScikitlearn size={40} className="text-orange-400" />
        </motion.div>

      </div>
    </div>
  );
};

export default Technologies;
