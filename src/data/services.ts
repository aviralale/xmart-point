import { AppWindow, Brush, Code2, Megaphone, ShieldCheck } from "lucide-react";

export interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  benefits: string[];
  technologies: string[];
  useCases: { title: string; description: string }[];
  pricing: { starter: string; professional: string; enterprise: string };
}

const contactPricing = { starter: "Contact us", professional: "Contact us", enterprise: "Contact us" };
const serviceImages: Record<string, string> = {
  "web-design": "/service-software.jpg",
  "web-development": "/service-cloud.jpg",
  "ui-ux-design": "/service-consulting.jpg",
  "app-development": "/service-mobile.jpg",
  "web-security": "/service-security.jpg",
  "digital-marketing": "/service-data.jpg",
};
const makeService = (id: string, icon: React.ElementType, title: string, shortDescription: string, fullDescription: string, features: string[], benefits: string[], technologies: string[]): Service => ({
  id, icon, title, shortDescription, fullDescription, image: serviceImages[id] ?? "", features, benefits, technologies,
  useCases: [{ title, description: shortDescription }], pricing: contactPricing,
});

export const services: Service[] = [
  makeService("web-design", Brush, "Web Design", "Create visually stunning, high-converting, and modern interfaces tailored for your business. We focus on layouts that engage visitors and represent your brand identity.", "Create visually stunning, high-converting, and modern interfaces tailored for your business.", ["Modern layouts", "Brand identity", "Interactive experiences"], ["Clear communication", "Stronger first impressions", "Better usability"], ["Responsive design", "Modern UI patterns", "Accessibility"]),
  makeService("web-development", Code2, "Web Development Service", "Build highly responsive, robust, and search-engine optimized websites tailored to your requirements, ensuring speed, modern standards, and scalable growth.", "Build highly responsive, robust, and search-engine optimized websites tailored to your requirements.", ["Responsive", "Fast performance", "Scalable clean code"], ["Scalable foundations", "Fast experiences", "Reliable delivery"], ["React", "APIs", "Cloud deployment"]),
  makeService("ui-ux-design", AppWindow, "UI/UX Design", "Craft user-centric wireframes and prototypes that deliver seamless navigation journeys, clean interface aesthetics, and peak conversion usability.", "Craft user-centric wireframes and prototypes that deliver seamless navigation journeys.", ["User journeys", "Wireframes & prototyping", "High usability"], ["Simpler journeys", "Consistent products", "Improved usability"], ["Prototyping", "Design systems", "Responsive UI"]),
  makeService("app-development", AppWindow, "App Development", "Deliver premium native and cross-platform mobile apps for iOS and Android, optimized for top-tier execution speeds, fluid interactions, and device integrations.", "Deliver premium native and cross-platform mobile apps for iOS and Android.", ["iOS & Android", "React Native / Flutter", "Device integration"], ["Reach users on mobile", "Smooth performance", "Flexible foundations"], ["iOS", "Android", "React Native"]),
  makeService("web-security", ShieldCheck, "Web Security", "Protect your web presence against hacks, malware, and data leaks. We provide threat modeling, SSL hardening, WAF setups, and security patch automation.", "Protect your web presence against hacks, malware, and data leaks.", ["WAF protection", "Malware scans", "SSL hardening"], ["Reduced exposure", "Resilient systems", "Customer confidence"], ["Security reviews", "Monitoring", "Secure deployment"]),
  makeService("digital-marketing", Megaphone, "Digital Marketing", "Grow your online authority, capture high-intent leads, and maximize your return on ad spend with our data-driven SEO and paid campaign solutions.", "Grow your online authority, capture high-intent leads, and maximize return on ad spend.", ["SEO strategy", "Social media growth", "ROAS optimization"], ["Greater discoverability", "Qualified traffic", "Measurable growth"], ["SEO", "Social media", "Analytics"]),
];

export const getServiceById = (id: string): Service | undefined => services.find((service) => service.id === id);
