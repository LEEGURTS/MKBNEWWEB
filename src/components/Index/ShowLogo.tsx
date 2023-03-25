import { motion } from "framer-motion";

const ShowLogo: React.FunctionComponent = () => {
  return (
    <motion.div
      className="w-screen h-screen bg-white flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
    >
      와우!
    </motion.div>
  );
};

export default ShowLogo;
