import type { IconName } from "@/components/icons/Icon";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators/purepearl-studio" },
];

export const studentAvatars = [
  "/images/avatars/student-1.png",
  "/images/avatars/student-2.png",
  "/images/avatars/student-3.png",
  "/images/avatars/student-4.png",
  "/images/avatars/student-5.png",
  "/images/avatars/student-6.png",
  "/images/avatars/student-7.png",
];

export const learnerAvatars = [
  "/images/avatars/learner-1.png",
  "/images/avatars/learner-2.png",
  "/images/avatars/learner-3.png",
  "/images/avatars/learner-4.png",
];

export const partnerLogos = [
  { src: "/images/partners/logo-1.svg", width: 167, height: 41 },
  { src: "/images/partners/logo-2.svg", width: 168, height: 41 },
  { src: "/images/partners/logo-3.svg", width: 170, height: 41 },
  { src: "/images/partners/logo-4.svg", width: 170, height: 41 },
  { src: "/images/partners/logo-5.svg", width: 169, height: 42 },
];

export const courseTopics = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

/** Row breaks of the topic pills exactly as laid out in the design (8 / 6 / 4 + "More"). */
export const courseTopicRows = [8, 6, 4];

export type Course = {
  slug: string;
  title: string;
  author: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  level: string;
  category: string;
  learners: number;
  price: number;
};

const courseDefaults = {
  author: "purepearl studio",
  lessons: 17,
  duration: "2 hours 16 mins",
  comments: 59,
  rating: 4.5,
  level: "Beginner",
  learners: 26,
  price: 25,
};

export const courses: Course[] = [
  {
    ...courseDefaults,
    slug: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    category: "Design",
    image: "/images/courses/course-1.jpg",
  },
  {
    ...courseDefaults,
    slug: "build-digital-asset",
    title: "Build Digital Asset",
    category: "Design",
    image: "/images/courses/course-2.jpg",
  },
  {
    ...courseDefaults,
    slug: "the-power-of-big-data",
    title: "the Power of Big Data",
    category: "IT & Software",
    image: "/images/courses/course-3.jpg",
  },
  {
    ...courseDefaults,
    slug: "balancing-productivity-and-self-care",
    title: "Balancing Productivity and Self-Care",
    category: "Business",
    image: "/images/courses/course-4.jpg",
  },
  {
    ...courseDefaults,
    slug: "mastering-money-management",
    title: "Mastering Money Management",
    category: "Business",
    image: "/images/courses/course-5.jpg",
  },
  {
    ...courseDefaults,
    slug: "from-idea-to-startup-success",
    title: "From Idea to Startup Success",
    category: "Marketing",
    image: "/images/courses/course-6.jpg",
  },
];

export const getCourse = (slug: string) => courses.find((course) => course.slug === slug);

export const categories: { label: string; icon: IconName }[] = [
  { label: "Design", icon: "design" },
  { label: "Development", icon: "developerMode" },
  { label: "IT & Software", icon: "computer" },
  { label: "Business", icon: "business" },
  { label: "Marketing", icon: "marketing" },
  { label: "Photography", icon: "photography" },
];

export const growthStats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const creatorPerks = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/testimonials/sarah.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/testimonials/james.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/testimonials/alex.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export const footerLinks = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies Settings"];
