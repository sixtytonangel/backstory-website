"use client";

import Link from "next/link";

const navItems = [
  { label: "What’s on", href: "#events" },
  { label: "Host your own", href: "#host" },
  { label: "About", href: "#about" },
  { label: "Get in touch", href: "#contact" },
];

export default function Navbar() {
  return <header className="site-nav"><Link className="wordmark" href="/">Backstory<span>.</span></Link><nav aria-label="Primary navigation"><ul>{navItems.map((item) => <li key={item.label}><a href={item.href}>{item.label}</a></li>)}</ul></nav><a className="nav-cta" href="#contact">Say hello ↗</a></header>;
}
