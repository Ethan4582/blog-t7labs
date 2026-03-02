/**
 * Central registry for all tutorial data.
 * Add new tutorial imports here as you create them.
 *
 * Pattern: import { <name>Data } from "./<category>/<slug>.data";
 *          then add it to tutorialsData under its slug key.
 */

import type { PostContent } from "../types";
import { waterRippleData } from "./threejs/water-ripple.data";

export type { PostContent };

export const tutorialsData: Record<string, PostContent> = {
   "water-ripple-hover-effect": waterRippleData,
};

export function getTutorialData(slug: string): PostContent | null {
   return tutorialsData[slug] ?? null;
}
