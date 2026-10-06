import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "wouter";

export function SectionHeading({ eyebrow, title, body, align = "left", action }: { eyebrow: string; title: string; body?: string; align?: "left" | "center"; action?: { label: string; href: string } }) {
  return <div className={`section-heading section-heading--${align}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{body && <p>{body}</p>}{action && <Link className="text-link" href={action.href}>{action.label} <FontAwesomeIcon icon={faArrowRight} /></Link>}</div>;
}

export function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`glass-card ${className}`}>{children}</div>;
}

export function PageHero({ eyebrow, title, body, image }: { eyebrow: string; title: string; body: string; image?: string }) {
  return <section className="page-hero" style={image ? { backgroundImage: `linear-gradient(90deg, rgba(11,12,15,.96) 5%, rgba(11,12,15,.73) 55%, rgba(11,12,15,.22)), url(${image})` } : undefined}><div className="container page-hero__inner"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{body}</p></div></section>;
}
