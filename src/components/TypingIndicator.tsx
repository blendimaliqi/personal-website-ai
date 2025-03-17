import { motion } from "framer-motion";

function TypingIndicator() {
  return (
    <div className="flex space-x-1">
      <motion.div
        className="h-2 w-2 rounded-full bg-blue-500"
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "loop",
          delay: 0,
        }}
      />
      <motion.div
        className="h-2 w-2 rounded-full bg-blue-500"
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "loop",
          delay: 0.2,
        }}
      />
      <motion.div
        className="h-2 w-2 rounded-full bg-blue-500"
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "loop",
          delay: 0.4,
        }}
      />
    </div>
  );
}

export default TypingIndicator;
