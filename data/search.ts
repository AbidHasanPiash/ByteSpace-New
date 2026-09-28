import { courses } from "@/data/home";

/** Topic pills on the search page (single row in the design). */
export const searchTopics = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

export const levels = ["All levels", "Beginner", "Intermediate", "Advanced"];

export const sortOptions = ["Most relevant", "Highest rated", "Newest", "Price: low to high"];

/** The search results grid shows the catalogue three times (18 cards, 6 rows). */
export const searchResults = [...courses, ...courses, ...courses];

export const TOTAL_PAGES = 5;
