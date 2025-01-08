import React from "react";
import { motion } from "framer-motion";

function Profile() {
  return (
    <div className="w-full h-full flex justify-center items-center transition-colors duration-500">
      <motion.div
        className="text-center p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          This Page Will Be Coming Soon...
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Stay tuned for updates! 🚀
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Profile;
