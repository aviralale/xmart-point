import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "What does Web Care actually mean?",
    answer:
      "Web care covers all aspects of maintaining, securing, optimizing, and supporting your website after it is launched.",
  },
  {
    question: "Why do I need a web care plan?",
    answer:
      "Websites require regular maintenance to remain secure and functional.",
  },
  {
    question: "How quickly do you respond to emergencies?",
    answer:
      "For critical issues, we guarantee a response within 1 to 2 hours.",
  },
  {
    question: "Can I request custom development work?",
    answer:
      "Yes. Developer hours are allocated to your business each month.",
  },
  {
    question: "Do you host our website?",
    answer:
      "We are flexible and can work with any hosting provider.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No. Our plans are billed on a month-to-month basis.",
  },
  {
    question: "Can you build a custom digital product?",
    answer:
      "Yes. We design and engineer custom web applications, mobile platforms, and software architectures around your business requirements.",
  },
  {
    question: "How do I get started?",
    answer:
      "Contact us for an expert technical consultation, architectural review, and transparent estimate from our engineering team.",
  },
];

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-intro > *",
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 0.72,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        },
      );

      const rows = listRef.current?.querySelectorAll(".faq-row");
      if (rows) {
        gsap.fromTo(
          rows,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.62,
            stagger: 0.07,
            ease: "power3.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 85%",
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
      ref={sectionRef}
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div className="faq-intro lg:sticky lg:top-28">
            <p className="font-['Space_Grotesk'] text-xs font-medium tracking-[0.16em] text-white/55 uppercase">
              FAQ
            </p>
            <h2 className="mt-3 font-['Space_Grotesk'] text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Got Questions? We Have Answers.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/62 sm:text-base">
              Everything you need to know about our development workflows, design handoffs, search foundations, and launch support plans.
            </p>
          </div>

          <div ref={listRef}>
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="border-t border-white/14"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="faq-row border-white/14"
                >
                  <AccordionTrigger className="py-5 hover:no-underline sm:py-6">
                    <div className="flex items-start gap-4 pr-6 text-left">
                      <span className="mt-0.5 font-['Space_Grotesk'] text-xs tracking-[0.14em] text-white/42">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-['Space_Grotesk'] text-[1.05rem] font-medium leading-snug text-white/88 sm:text-[1.14rem]">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pl-9 pr-8 text-sm leading-relaxed text-white/62 sm:pb-6 sm:text-[0.98rem]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
