import { courses } from "@/data/home";

export const creators = [
  {
    slug: "purepearl-studio",
    name: "PurePearl Studio",
    title: "Passionate UI/UX, Web designer",
    avatar: "/images/creators/purepearl-studio.jpg",
    bio: [
      "Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "ive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
    products: 3,
    followers: 12,
    courses,
  },
];

export const getCreator = (slug: string) => creators.find((creator) => creator.slug === slug);
