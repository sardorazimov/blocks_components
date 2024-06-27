import { motion } from "framer-motion";
const introHeaderVariants = {
    hide: { opacity: 0, x: -500 },
    show: { opacity: 1, x: 0, transition: { duration: 2 } },
  };
  
  const introPictureVariants = {
    hide: { opacity: 0, x: 500 },
    show: { opacity: 1, x: 0, transition: { duration: 2 } },
  };
  
export function Intro() {
    return (
      <div className="flex h-[36rem] w-full flex-col items-center justify-center overflow-x-clip bg-secondary text-light md:h-[90vh]">
        {/* Other components */}
        <motion.header
          className="z-10 flex flex-col gap-4 md:-mt-36"
          variants={introHeaderVariants}
          initial="hide"
          animate="show"
        >
          {/* Your header content */}
        </motion.header>
        <motion.img
          src="/banner.png"
          alt="Your Image"
          variants={introPictureVariants}
          initial="hide"
          animate="show"
        />
      </div>
    );
  }
  
