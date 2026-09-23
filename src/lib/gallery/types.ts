// ─── Gallery Module — TypeScript Types ────────────────────────────────────────
// Separate from Activity types. Do NOT import from Activity Data types.

export interface GalleryFacility {
  /** Display name shown on cards and detail pages */
  name: string;
  /** URL segment: e.g. "campus-building" → /gallery/campus-building */
  slug: string;
  /** Public path to the image folder: e.g. "/gallery/campus-building" */
  imageDirectory: string;
  /** Optional short description shown on the facility detail page */
  description?: string;
  /**
   * Runtime images discovered from the filesystem.
   * Leave undefined in the data file — populated by galleryImageUtils at request time.
   */
  images?: string[];
}
