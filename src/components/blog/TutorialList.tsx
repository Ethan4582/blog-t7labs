"use client";

import { motion } from "framer-motion";
import { blogNavigation } from "@/src/lib/mockData";
import Link from "next/link";
import clsx from "clsx";

export default function TutorialList() {
   // Flat map all pages from groups that are NOT 'Getting Started'
   const allPages = blogNavigation
      .filter(group => group.slug !== "getting-started")
      .flatMap(group => group.pages.map(page => ({ ...page, groupSlug: group.slug })));

   return (
      <section className="px-10 py-12 pb-20 border-t border-border/10">
         <div className="max-w-4xl">
            <h2 className="text-3xl font-extrabold text-foreground mb-10 tracking-tight font-serif">
               All Tutorials
            </h2>

            <div className="space-y-1">
               {allPages.reverse().map((page, idx) => {
                  const href = `/blog/${page.groupSlug}/${page.slug}`;

                  return (
                     <motion.div
                        key={page.slug}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                     >
                        <Link
                           href={href}
                           className="group grid grid-cols-[120px_1fr] items-center py-3 px-2 hover:bg-muted/30 transition-all duration-300 rounded-lg border-b border-border/5"
                        >
                           <div className="text-[13px] text-muted-foreground/30 font-medium group-hover:text-muted-foreground/50 transition-colors">
                              {page.date || "March 3, 2026"}
                           </div>

                           <div className="text-[16px] font-bold text-foreground/70 group-hover:text-primary group-hover:pl-1 transition-all duration-300 font-serif tracking-tight">
                              {page.title}
                           </div>
                        </Link>
                     </motion.div>
                  );
               })}
            </div>
         </div>
      </section>
   );
}
