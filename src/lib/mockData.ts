export interface Section {
   id: string;
   title: string;
}

export interface PageItem {
   title: string;
   slug: string;
   sections: Section[];
}

export interface ToggleGroup {
   title: string;
   slug: string;
   pages: PageItem[];
}

export interface Product {
   id: string;
   title: string;
   description: string;
   date: string;
   image: string;
}

export interface Tutorial {
   id: string;
   title: string;
   description: string;
   date: string;
   tag: string;
   image: string;
   category: string;
}

export const recentTutorials: Tutorial[] = [
   {
      id: "1",
      title: "Water Ripple Hover Effect ",
      description: "Tutorial rebuilding a water ripple hover effect that fluidly distorts text using Three.js, React, and GLSL shaders.",
      date: "March 3, 2026",
      tag: "THREE.JS",
      category: "Three.js",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
   },

];

export const featuredProducts: Product[] = [
   {
      id: "p1",
      title: "templete.t7labs",
      description: "Free open-source hub offering premium templates for design, portfolios, or startups to help founders and creators",
      date: "February 5, 2026",
      image: "/assets/building2.png",
   },
   {
      id: "p2",
      title: "bg-design.t7labs",
      description: "High-quality AI-generated fresh background images that make your hero section glow.",
      date: "March 1, 2026",
      image: "/assets/building1.png",
   },
];

export const allTutorials: Partial<Tutorial>[] = [
   { date: "March 3, 2026", title: "Mask Section Transition", category: "Scroll" },
];

export const blogNavigation: ToggleGroup[] = [
   {
      title: "Getting Started",
      slug: "getting-started",
      pages: [
         {
            title: "Introduction",
            slug: "intro",
            sections: [
               { id: "overview", title: "Overview" },
               { id: "installation", title: "Installation" },
               { id: "quick-start", title: "Quick Start" },
            ],
         },
         {
            title: "Background",
            slug: "background",
            sections: [
               { id: "history", title: "History" },
               { id: "motivation", title: "Motivation" },
               { id: "architecture", title: "Architecture" },
            ],
         },
         {
            title: "Template",
            slug: "template",
            sections: [
               { id: "basic-template", title: "Basic Template" },
               { id: "advanced-template", title: "Advanced Template" },
               { id: "customization", title: "Customization" },
            ],
         },
      ],
   },
   {
      title: "Three.js",
      slug: "Three.js",
      pages: [
         {
            title: "Water Ripple Hover Effect ",
            slug: "water-ripple-hover-effect",
            sections: [
               { id: "initializing-project", title: "Initializing the project" },
               { id: "root-layout", title: "Root Layout Configuration" },
               { id: "ripple-component", title: "Ripple Effect Component & Shaders" },
            ],
         },
      ],
   },
];

export function findPageBySlug(slugPath: string[]): { group: ToggleGroup; page: PageItem } | null {
   if (slugPath.length !== 2) return null;
   const [groupSlug, pageSlug] = slugPath;
   const group = blogNavigation.find((g) => g.slug === groupSlug);
   if (!group) return null;
   const page = group.pages.find((p) => p.slug === pageSlug);
   if (!page) return null;
   return { group, page };
}

export function getFirstPage(): string {
   const firstGroup = blogNavigation[0];
   const firstPage = firstGroup.pages[0];
   return `/blog/${firstGroup.slug}/${firstPage.slug}`;
}
