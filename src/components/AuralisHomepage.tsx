import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Hammer,
  Leaf,
  MapPin,
  MessageSquareText,
  MonitorSmartphone,
  Paintbrush,
  PhoneCall,
  SearchCheck,
  Scissors,
  Sparkles,
  Store,
  UtensilsCrossed,
  Wine,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  { title: "Website design", copy: "Clean, credible websites shaped around what local customers need to see first.", icon: Paintbrush },
  { title: "Landing pages", copy: "Focused pages for offers, events, ads, seasonal services, and quote requests.", icon: Store },
  { title: "Mobile optimization", copy: "Responsive layouts that make calling, booking, and reading effortless on phones.", icon: MonitorSmartphone },
  { title: "Local SEO setup", copy: "Page structure, location signals, and search basics that help nearby customers find you.", icon: SearchCheck },
  { title: "Contact and booking forms", copy: "Simple flows that route visitors toward calls, quotes, bookings, or messages.", icon: MessageSquareText },
  { title: "Content and brand cleanup", copy: "Sharper wording, better hierarchy, and a more consistent professional presence.", icon: Sparkles },
];

const process = ["Discover", "Structure", "Design", "Review", "Launch"];

const concepts = [
  { name: "Barbershop", note: "Booking-forward pages with services, location, and social proof sections.", icon: Scissors },
  { name: "Restaurant", note: "Menu, hours, directions, reservations, and fast mobile browsing.", icon: UtensilsCrossed },
  { name: "Lawn care", note: "Quote-first service pages for neighborhoods, packages, and seasonal work.", icon: Leaf },
  { name: "Mobile bartending", note: "Event inquiry flows with packages, galleries, and availability prompts.", icon: Wine },
  { name: "Contractor", note: "Trust-focused project pages with service areas, quote forms, and clear calls.", icon: Hammer },
];

const trustItems = [
  "Built for local businesses",
  "Clear communication",
  "Simple process",
  "Mobile-first",
  "No confusing tech talk",
  "Designed around calls, quotes, bookings, and messages",
];

const benefits = [
  { label: "Mobile-first", icon: MonitorSmartphone, className: "hero-card-one" },
  { label: "Local SEO ready", icon: MapPin, className: "hero-card-two" },
  { label: "Fast launch", icon: Zap, className: "hero-card-three" },
  { label: "Clear contact flow", icon: PhoneCall, className: "hero-card-four" },
];

function useReducedMotionAwareScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrollY(window.scrollY));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return scrollY;
}

function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const [visible, setVisible] = useState(false);
  const id = useMemo(() => `reveal-${Math.random().toString(36).slice(2)}`, []);

  useEffect(() => {
    const target = document.querySelector(`[data-reveal-id="${id}"]`);
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [id]);

  return (
    <div data-reveal-id={id} className={cn("reveal-up", visible && "is-visible", className)}>
      {children}
    </div>
  );
}

function HeroMockup() {
  return (
    <div className="hero-preview-wrap" aria-label="Website preview for a local business homepage">
      <div className="hero-preview">
        <div className="preview-topbar">
          <span />
          <span />
          <span />
        </div>
        <div className="preview-hero">
          <div>
            <p className="preview-kicker">Local service website</p>
            <h2>Look trusted before they call.</h2>
          </div>
          <div className="preview-phone">
            <div className="phone-speaker" />
            <div className="phone-card" />
            <div className="phone-line" />
            <div className="phone-line short" />
            <div className="phone-button" />
          </div>
        </div>
        <div className="preview-grid">
          <div className="preview-panel strong" />
          <div className="preview-panel" />
          <div className="preview-panel" />
        </div>
        <div className="preview-cta-row">
          <span />
          <span />
        </div>
      </div>
      {benefits.map((benefit) => {
        const Icon = benefit.icon;
        return (
          <div key={benefit.label} className={cn("floating-benefit", benefit.className)}>
            <Icon aria-hidden="true" />
            <span>{benefit.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export default function AuralisHomepage() {
  const scrollY = useReducedMotionAwareScroll();

  return (
    <main className="auralis-page overflow-hidden">
      <div className="ambient-layer" aria-hidden="true">
        <div className="ambient-grid" />
        <div className="parallax-shape shape-one" style={{ transform: `translate3d(0, ${scrollY * 0.035}px, 0)` }} />
        <div className="parallax-shape shape-two" style={{ transform: `translate3d(0, ${scrollY * -0.025}px, 0)` }} />
      </div>

      <section className="hero-section">
        <div className="site-shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><BadgeCheck aria-hidden="true" /> Web design for local businesses</div>
            <h1>Professional websites for local businesses that need to look trusted online.</h1>
            <p className="hero-subhead">
              Auralis Digital creates clean, mobile-friendly websites and landing pages that help small businesses turn visitors into real customers.
            </p>
            <div className="cta-row">
              <Button variant="conversion" size="xl">Get a Free Website Review <ArrowRight aria-hidden="true" /></Button>
              <Button variant="conversionOutline" size="xl">Request a Quote</Button>
            </div>
          </div>
          <HeroMockup />
        </div>
      </section>

      <section className="section-band">
        <div className="site-shell problem-layout">
          <Reveal className="section-heading compact">
            <span className="section-label">The hidden problem</span>
            <h2>Customers judge your business before they ever call.</h2>
          </Reveal>
          <Reveal className="problem-card">
            <p>
              Many local businesses lose customers because their website is outdated, missing, slow, confusing, or does not make it easy to call, book, or request a quote. Auralis Digital turns that first impression into a clear path toward action.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="content-section">
        <div className="site-shell">
          <Reveal className="section-heading">
            <span className="section-label">Services</span>
            <h2>Everything your local digital presence needs to feel credible.</h2>
          </Reveal>
          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} className="service-card">
                  <div className="icon-tile"><Icon aria-hidden="true" /></div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-band process-section">
        <div className="site-shell">
          <Reveal className="section-heading">
            <span className="section-label">Process</span>
            <h2>A simple path from scattered ideas to a launched website.</h2>
          </Reveal>
          <div className="process-line">
            {process.map((step, index) => (
              <Reveal key={step} className="process-step">
                <span className="step-number">0{index + 1}</span>
                <h3>{step}</h3>
                <p>{index === 0 ? "Understand the business and goals." : index === 1 ? "Map pages, content, and contact flows." : index === 2 ? "Create a polished mobile-first experience." : index === 3 ? "Refine details with clear communication." : "Publish with the essentials in place."}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="site-shell">
          <Reveal className="section-heading">
            <span className="section-label">Industry website ideas</span>
            <h2>Example concepts shaped around real local business needs.</h2>
          </Reveal>
          <div className="concept-grid">
            {concepts.map((concept) => {
              const Icon = concept.icon;
              return (
                <Reveal key={concept.name} className="concept-card">
                  <div className="concept-header">
                    <Icon aria-hidden="true" />
                    <span>Example concept</span>
                  </div>
                  <h3>{concept.name}</h3>
                  <p>{concept.note}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-band trust-section">
        <div className="site-shell trust-layout">
          <Reveal className="section-heading compact">
            <span className="section-label">Trust</span>
            <h2>Professional without making the process complicated.</h2>
          </Reveal>
          <div className="trust-grid">
            {trustItems.map((item) => (
              <Reveal key={item} className="trust-pill">
                <CheckCircle2 aria-hidden="true" />
                <span>{item}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="site-shell">
          <Reveal className="final-cta">
            <div className="icon-tile large"><CalendarCheck aria-hidden="true" /></div>
            <h2>Ready to make your business look professional online?</h2>
            <p>Start with a free website review or request a quote today.</p>
            <div className="cta-row centered">
              <Button variant="conversion" size="xl">Get a Free Website Review <ArrowRight aria-hidden="true" /></Button>
              <Button variant="conversionOutline" size="xl">Request a Quote</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
