// ─── Activities Module — TypeScript Types ────────────────────────────────────
// Shared interfaces used across all activity pages and components.

export interface Activity {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  date: string;            // ISO format: YYYY-MM-DD
  year: number;
  location: string;
  category: string;        // Display name
  categorySlug: string;    // URL segment (matches folder name)
  image: string;           // Primary image URL
  gallery: string[];       // Additional image URLs
  objectives: string[];
  highlights: string[];
  tags: string[];
  department?: string;
  relatedSlugs?: string[]; // slugs of related activities in the same category
}

export interface CategoryMeta {
  id: string;
  slug: string;            // matches folder name under /activities/
  name: string;
  shortName?: string;
  description: string;
  longDescription: string;
  icon: string;            // emoji or lucide icon name
  heroImage: string;
  color: string;           // primary accent color (hex)
  route: string;           // full route path (category listing page)
  routeFolder: string;     // exact Next.js App Router folder name under /Activity/
  activities: Activity[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
