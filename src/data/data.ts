import { Star, Award, ShieldCheck, LucideIcon } from 'lucide-react';

export interface Experience {
  company: string;
  duration: string;
  role: string;
  desc: string;
  dotColor: string;
}

export interface IconAndText {
  icon: LucideIcon;
  name: string;
}

export interface Blog {
  image: string;
  button: string;
  name: string;
  date: string;
  title: string;
}

export interface PortfolioItem {
  image: string;
  title: string;
  href: string;
  desc: string;
}

export interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
}

export interface CardData {
  title: string;
  description: string;
  outcomes: string[];
  icon: string;
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
}

export const approachSteps: ApproachStep[] = [
  {
    step: "01",
    title: "Fixing comes after understanding.",
    description: "Because the loud problem is rarely the real one."
  },
  {
    step: "02", 
    title: "Decide first. Then move.",
    description: "Most growth issues aren’t about effort : they’re about fuzzy decisions."
  },
  {
    step: "03",
    title: "Build systems, not hacks.", 
    description: "If it only works once, it’s not a strategy."
  },
  {
    step: "04",
    title: "Clarity that actually sticks.",
    description: "Every project ends with clear choices and “here’s what to do next.”"
  }
];



export const experiences: Experience[] = [
  {
    company: "Independent Consulting",
    duration: "2020 - Present",
    role: "Business & Growth Consultant",
    desc: "Working with startups and SMBs to solve real business challenges through strategic planning and execution support.",
    dotColor: "bg-[#FD853A]",
  },
  {
    company: "Strategic Advisory",
    duration: "2018 - 2020",
    role: "Market Research Analyst",
    desc: "Conducted market analysis and competitive research for growing businesses across various industries.",
    dotColor: "bg-[#1D2939]",
  },
  {
    company: "Business Development",
    duration: "2016 - 2018",
    role: "Growth Strategy Lead",
    desc: "Led go-to-market initiatives and helped companies identify new revenue opportunities.",
    dotColor: "bg-[#FD853A]",
  },
];

export const buttons: string[] = [
  "Strategy Consulting",
  "Growth Planning",
  "Market Analysis",
  "GTM Strategy",
  "Execution Support",
];

export const iconAndText: IconAndText[] = [
  {
    icon: Star,
    name: "Proven Results",
  },
  {
    icon: Award,
    name: "Strategic Excellence",
  },
  {
    icon: ShieldCheck,
    name: "Trusted Advisor",
  },
];

export const skills: string[] = [
  "Business Strategy",
  "Growth Planning",
  "Market Analysis",
  "Competitive Research",
  "GTM Strategy",
  "Strategic Planning",
  "Business Development",
  "Execution Support",
];

export const blogs: Blog[] = [
  {
    image: "/Rectangle 6.svg",
    button: "Read More",
    name: "Business Insights",
    date: "15 Jan, 2026",
    title: "5 Strategic Decisions That Transform Growing Businesses",
  },
  {
    image: "/Frame 60.svg",
    button: "Explore",
    name: "Growth Strategy",
    date: "22 Jan, 2026",
    title: "How to Build a Go-To-Market Strategy That Actually Works",
  },
  {
    image: "/Rectangle 6 (1).svg",
    button: "Check Now",
    name: "Market Analysis",
    date: "28 Jan, 2026",
    title: "Understanding Your Competition: A Strategic Approach",
  },
];

export const portfolioData: PortfolioItem[] = [
  {
    image: "/Frame 26.svg",
    title: "SaaS Startup GTM Strategy",
    href: "/case-study-1",
    desc: "Helped a B2B SaaS startup refine their go-to-market approach, resulting in 40% faster customer acquisition and clearer market positioning.",
  },
  {
    image: "/Frame 26.svg",
    title: "E-commerce Growth Plan",
    href: "/case-study-2",
    desc: "Developed comprehensive growth strategy for mid-sized e-commerce business, identifying new revenue streams and optimizing customer targeting.",
  },
  {
    image: "/Frame 26.svg",
    title: "Market Entry Strategy",
    href: "/case-study-3",
    desc: "Conducted market analysis and competitive research for company expanding into new geographic markets, reducing entry risks and identifying key opportunities.",
  },
  {
    image: "/Frame 26.svg",
    title: "Strategic Business Planning",
    href: "/case-study-4",
    desc: "Worked with leadership team to structure 3-year growth plan with clear milestones, priorities, and execution framework for sustainable scaling.",
  },
];

export const reviews: Review[] = [
  {
    name: "Arvind Singh",
    role: "COO - Kadkraft | India",
    text: "Priya brings clarity, confidence, and sharp communication to every conversation. She stands out instantly whether in an organization or building something of her own.",
  },
  {
    name: "Roy Tibon",
    role: "CEO - Kelev Sagol | Israel",
    text: "Priya's professionalism and communication make complex discussions feel simple and structured. She leaves a strong impression through both her thinking and the way she engages.",
  },
  {
    name: "Ishan Kansal",
    role: "Founder/CEO - Homes & Homies | India",
    text: "Priya has a sharp strategic lens breaking down complex ideas into clear, structured thinking. Her communication is crisp, direct, and never vague.",
  },
  {
    name: "Abhinav Thakur",
    role: "Senior Lead - Pacer Staffing | USA",
    text: "Priya approaches every problem with structure, logic, and strategy at the core. Her communication is a big differentiator- focused, sharp, and always to the point.",
  },
    {
    name: "Akshat Shukla",
    role: "Founder - BuildCore Labs | India",
    text: "Priya is a results-driven professional whose passion and enthusiasm are evident in everything she does. Her clarity of thought and unwavering dedication make her an exceptionally effective business consultant.",
  },
];

export const cardData: CardData[] = [
  { 
    title: "Growth Strategy", 
    description: "Defining where to play, who to focus on, and which growth path is worth committing to.",
    outcomes: ["Clear market positioning", "Focused target segments", "Validated growth path"],
    icon: "🎯"
  },
  { 
    title: "GTM & Revenue Strategy", 
    description: "Structuring how products go to market, price, and convert demand into revenue.",
    outcomes: ["Go-to-market structure", "Pricing strategy", "Revenue conversion"],
    icon: "📈"
  },
  { 
    title: "Business Diagnosis / Clarity Sprints", 
    description: "Short structured engagements to untangle complexity and define the right next moves.",
    outcomes: ["Untangled complexity", "Clear priorities", "Actionable next steps"],
    icon: "🔍"
  },
  { 
    title: "Founder & Leadership Advisory", 
    description: "Decision support for leaders navigating scale, trade-offs, and strategic tension. (Selective)",
    outcomes: ["Better decisions", "Strategic clarity", "Confident execution"],
    icon: "⚡"
  },
];
