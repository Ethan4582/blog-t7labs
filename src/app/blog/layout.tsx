import Navbar from "@/src/components/Navbar";
import Sidebar from "@/src/components/Sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "VeeMeet Docs — Blog",
   description: "Explore components and documentation for VeeMeet Docs.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
   return (
      <div className="min-h-screen bg-background text-foreground">
         <Navbar />
         <div className="flex pt-[65px]">
            {/* Left sidebar */}
            <Sidebar />
            {/* Main content area */}
            <main className="flex flex-1 min-w-0">
               {children}
            </main>
         </div>
      </div>
   );
}
