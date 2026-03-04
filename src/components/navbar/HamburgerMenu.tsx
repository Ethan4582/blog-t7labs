"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

interface HamburgerMenuProps {
   isOpen: boolean;
   onClose: () => void;
}

const menuItems = [
   { label: "Agency", href: "https://tea7labs.vercel.app/" },
   { label: "Hire Me", href: "https://ash-cv.vercel.app/" },
   { label: "Contact", href: "mailto:singhashirwad2003@gmail.com" },
];

const socialLinks = [
   { label: "Resume", href: "https://drive.google.com/file/d/1HeCJcPd-Q9hqTWnfUVATOB3liYAVUh_V/view" },
   { label: "Portfolio", href: "https://ash-cv.vercel.app/" },
   { label: "LinkedIn", href: "https://www.linkedin.com/in/ashirwad08singh/" },
   { label: "Twitter", href: "https://x.com/SinghAshir65848" },
];

const containerVariants: Variants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: {
         staggerChildren: 0.06,
         delayChildren: 0.15,
      },
   },
   exit: {
      opacity: 0,
      transition: {
         staggerChildren: 0.03,
         staggerDirection: -1,
      },
   },
};

const itemVariants: Variants = {
   hidden: { y: 40, opacity: 0 },
   visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
   },
   exit: {
      y: -20,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
   },
};

export default function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
   return (
      <AnimatePresence>
         {isOpen && (
            <>
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={onClose}
                  className="fixed inset-0 z-[998] bg-black/10 dark:bg-black/40 backdrop-blur-sm"
               />
               <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed top-4 right-4 bottom-4 w-[calc(100vw-32px)] sm:w-[380px] z-[999] flex flex-col bg-background border border-border/50 shadow-2xl rounded-[32px] overflow-y-auto"
               >
                  {/* Close Button */}
                  <div className="flex justify-end p-6">
                     <motion.button
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        onClick={onClose}
                        className="px-5 py-2.5 rounded-full bg-foreground text-background font-bold text-xs tracking-wider flex items-center gap-2 hover:opacity-90 transition-all cursor-pointer shadow-md"
                        aria-label="Close menu"
                     >
                        CLOSE
                        <X className="w-4 h-4" />
                     </motion.button>
                  </div>

                  {/* Menu Items */}
                  <motion.nav
                     variants={containerVariants}
                     initial="hidden"
                     animate="visible"
                     exit="exit"
                     className="flex-1 flex flex-col px-10 py-4 gap-6"
                  >
                     {menuItems.map((item) => (
                        <motion.div key={item.label} variants={itemVariants}>
                           <Link
                              href={item.href}
                              onClick={onClose}
                              className="block text-foreground text-4xl sm:text-5xl font-black hover:translate-x-3 hover:text-primary transition-all duration-300 tracking-tight font-serif"
                           >
                              {item.label}
                           </Link>
                        </motion.div>
                     ))}
                  </motion.nav>

                  {/* Social Links */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0 }}
                     transition={{ delay: 0.3, duration: 0.4 }}
                     className="px-10 pb-12 grid grid-cols-2 gap-y-6 gap-x-4 font-sans mt-auto"
                  >
                     {socialLinks.map((link) => (
                        <a
                           key={link.label}
                           href={link.href}
                           className="text-foreground/80 hover:text-primary text-sm font-semibold transition-colors tracking-wide"
                        >
                           {link.label}
                        </a>
                     ))}
                  </motion.div>
               </motion.div>
            </>
         )}
      </AnimatePresence>
   );
}
