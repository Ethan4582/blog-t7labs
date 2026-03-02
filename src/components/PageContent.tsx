"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { PageItem, ToggleGroup } from "@/src/lib/blogData";

interface PageContentProps {
   group: ToggleGroup;
   page: PageItem;
}

const PLACEHOLDER_PARAS = [
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
   "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
   "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
];

const containerVariants = {
   hidden: {},
   visible: { transition: { staggerChildren: 0.1 } },
};

const sectionVariants = {
   hidden: { opacity: 0, y: 28 },
   visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as any },
   },
};

export default function PageContent({ group, page }: PageContentProps) {
   /* Notify Lenis that the DOM changed so it recalculates scroll height */
   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      window.scrollTo({ top: 0 });
   }, [page.slug]);

   return (
      <motion.div
         ref={ref}
         key={page.slug}
         variants={containerVariants}
         initial="hidden"
         animate="visible"
         className="flex-1 min-w-0 px-10 py-12"
      >
         {/* Breadcrumb */}
         <motion.div variants={sectionVariants} className="flex items-center gap-2 mb-8 font-sans">
            <span className="text-[12px] text-muted-foreground/60 font-bold uppercase tracking-widest">
               {group.title}
            </span>
            <span className="text-muted-foreground/30 text-xs">/</span>
            <span className="text-[12px] text-primary/80 font-bold uppercase tracking-widest">
               {page.title}
            </span>
         </motion.div>

         {/* Page Title */}
         <motion.h1
            variants={sectionVariants}
            className="text-4xl md:text-6xl font-black text-foreground mb-4 tracking-tight leading-tight font-serif"
         >
            {page.title}
         </motion.h1>
         <motion.p variants={sectionVariants} className="text-muted-foreground text-lg mb-14 leading-relaxed max-w-2xl font-sans">
            Placeholder overview for {page.title} under {group.title}. Scroll down to explore all sections.
         </motion.p>

         {/* Divider */}
         <motion.div variants={sectionVariants} className="h-px bg-gradient-to-r from-primary/30 via-primary/5 to-transparent mb-14" />

         {/* Sections */}
         {page.sections.map((section, index) => (
            <motion.section
               key={section.id}
               id={section.id}
               variants={sectionVariants}
               className="mb-24 scroll-mt-28"
            >
               {/* Section label */}
               <div className="flex items-center gap-3 mb-6 font-sans">
                  <span className="text-[10px] font-black text-primary/60 uppercase tracking-[0.3em]">
                     Section {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1 bg-border/20" />
               </div>

               <h2 className="text-3xl font-bold text-foreground mb-6 tracking-tight font-serif">
                  {section.title}
               </h2>

               {/* Info card */}
               <div className="rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm p-8 mb-8 group hover:border-primary/30 hover:bg-primary/5 transition-all duration-500 shadow-sm font-sans">
                  <div className="flex items-start gap-5">
                     <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-primary/20">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary-foreground" />
                     </div>
                     <div>
                        <p className="text-sm font-bold text-foreground mb-1.5">{section.title}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                           This section covers the {section.title.toLowerCase()} topics within {page.title}. Detailed documentation and examples follow below.
                        </p>
                     </div>
                  </div>
               </div>

               {PLACEHOLDER_PARAS.map((para, pi) => (
                  <p key={pi} className="text-base text-foreground/70 leading-8 mb-6 font-sans">
                     {para}
                  </p>
               ))}

               {/* Code-like block */}
               <div className="mt-8 rounded-lg border border-border/30 bg-muted/30 overflow-hidden shadow-sm">
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/30 bg-muted/10">
                     <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                     <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                     <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                     <span className="ml-3 text-[11px] text-muted-foreground/60 font-mono font-bold">{section.id}.ts</span>
                  </div>
                  <div className="px-5 py-4 font-mono text-[12px] leading-6 text-foreground/70">
                     <span className="text-purple-500/80">export</span>{" "}
                     <span className="text-blue-500/80">const</span>{" "}
                     <span className="text-primary font-bold">{section.id.replace(/-/g, "_")}</span>{" "}
                     <span className="text-foreground/50">=</span>{" "}
                     <span className="text-orange-500/80">{`{`}</span>
                     <br />
                     {"  "}
                     <span className="text-foreground/60">name:</span>{" "}
                     <span className="text-green-600/80">"{section.title}"</span>
                     <span className="text-orange-500/80">,</span>
                     <br />
                     {"  "}
                     <span className="text-foreground/60">page:</span>{" "}
                     <span className="text-green-600/80">"{page.slug}"</span>
                     <span className="text-orange-500/80">,</span>
                     <br />
                     <span className="text-orange-500/80">{`}`}</span>
                     <span className="text-foreground/50">;</span>
                  </div>
               </div>
            </motion.section>
         ))}
      </motion.div>
   );
}
