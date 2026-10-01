import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/data/services";

gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current?.children || [],
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.78,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );

      const rows = listRef.current?.querySelectorAll(".service-row");
      if (rows) {
        gsap.fromTo(
          rows,
          { opacity: 0, x: 36 },
          {
            opacity: 1,
            x: 0,
            duration: 0.72,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className="mb-8 flex flex-col gap-5 sm:mb-10 lg:mb-12 lg:flex-row lg:items-start lg:justify-between"
        >
          <div className="max-w-2xl">
            <h2
              className="font-['Space_Grotesk'] text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: "hsl(var(--foreground))" }}
            >
              OUR SERVICES
            </h2>
            <p
              className="mt-3 text-sm leading-relaxed sm:text-base"
              style={{ color: "hsl(var(--foreground) / 0.64)" }}
            >
              From high-performance websites to secure mobile platforms, we build digital products designed for measurable business growth.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex h-12 px-7 uppercase items-center justify-center rounded-full font-['Space_Grotesk'] text-base font-semibold transition-colors duration-300 border"
            style={{
              background: "hsl(var(--primary) / 0.92)",
              color: "hsl(var(--primary-foreground))",
              borderColor: "hsl(var(--border) / 0.20)",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.background = "hsl(var(--primary) / 0.72)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.background = "hsl(var(--primary) / 0.92)")
            }
          >
            View all services
          </Link>
        </div>

        <div ref={listRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="service-row group overflow-hidden rounded-2xl border transition-colors duration-300 hover:border-primary/40"
              style={{ borderColor: "hsl(var(--border) / 0.18)" }}
            >
              <div className="relative aspect-[1.45/1] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              </div>
              <div className="p-5 sm:p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3
                    className="font-['Space_Grotesk'] text-xl font-semibold"
                    style={{ color: "hsl(var(--foreground))" }}
                  >
                    {service.title}
                  </h3>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border"
                    style={{
                      borderColor: "hsl(var(--primary) / 0.55)",
                      color: "hsl(var(--primary))",
                    }}
                    aria-label={`Open ${service.title}`}
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
                <p
                  className="line-clamp-3 text-sm leading-relaxed"
                  style={{ color: "hsl(var(--foreground) / 0.64)" }}
                >
                  {service.shortDescription}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full px-3 py-1 text-xs"
                      style={{
                        background: "hsl(var(--primary) / 0.09)",
                        color: "hsl(var(--primary))",
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
