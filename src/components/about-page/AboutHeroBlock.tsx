import { AboutHeroStats } from "./AboutHeroStats";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function AboutHeroBlock() {
  return (
    <section className="about-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span
            className="inline-flex items-center border-l-4 pl-4 font-['Space_Grotesk'] text-[0.68rem] tracking-[0.14em] uppercase mb-4"
            style={{
              color: "hsl(var(--primary))",
              borderLeftColor: "hsl(var(--primary))",
            }}
          >
              About Xmart Point
          </span>
          <h1
            className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-7"
            style={{ color: "hsl(var(--foreground))" }}
          >
              Engineering Custom Software &{" "}
              <span style={{ color: "hsl(var(--primary))" }}>Scalable Platforms</span>
          </h1>
          <p
            className="text-base mb-5 leading-relaxed max-w-2xl"
            style={{ color: "hsl(var(--foreground), 0.7)" }}
          >
              At Xmart Point, we deliver end-to-end digital solutions that solve complex business challenges. From high-performance web applications and native mobile apps to bespoke CRM platforms and database systems, our solutions are architected to scale with your organization&apos;s growth.
          </p>
          <p
            className="text-base mb-8 leading-relaxed max-w-2xl"
            style={{ color: "hsl(var(--foreground), 0.6)" }}
          >
              We prioritize clean code architectures, advanced data security, and seamless user experiences. By bridging design innovation with rigorous backend engineering, we ensure your technology drives productivity and long-term business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="about-glow-btn relative inline-flex items-center justify-center gap-2 px-8 py-4 font-['Space_Grotesk'] text-xs font-medium tracking-[0.08em] uppercase border transition-colors duration-300 focus:outline-none rounded-full"
              style={{
                color: "hsl(var(--primary-foreground))",
                background: "hsl(var(--primary))",
                borderColor: "hsl(var(--border))",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                  Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </span>
              <span className="about-glow-anim" aria-hidden="true" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-['Space_Grotesk'] text-xs font-medium tracking-[0.08em] uppercase border bg-transparent rounded-full transition-colors duration-300"
              style={{
                color: "hsl(var(--foreground))",
                borderColor: "hsl(var(--border))",
              }}
            >
                Explore Our Services
            </Link>
          </div>
        </div>
        <AboutHeroStats />
      </div>
    </section>
  );
}
