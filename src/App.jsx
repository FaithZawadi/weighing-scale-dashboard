// PublicProcurementPage.jsx
// -- Final responsive version (React + Tailwind v4)

// Image imports (adjust paths as needed)
import heroCity from "/public/ppra.jpg";
import heroClipboard from "/public/procure.jpg";
import logo from "/public/logo.jpeg";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  Facebook,
  Linkedin,
  Twitter,
  Youtube,
  Search,
  Menu,
  ChevronRight,
  ScrollText,
  LayoutGrid,
  ShieldAlert,
  BookOpen,
  FileText,
  HelpCircle,
  Send,
  Briefcase,
  ListChecks,
  Users,
  CalendarClock,
  Megaphone,
} from "lucide-react";

/* ---------- utility components ---------- */

const IconWrap = ({ children }) => (
  <span className="inline-flex h-5 w-5 items-center justify-center">{children}</span>
);

/* fully‑coloured quick‑link tile */
const Tile = ({ bg = "bg-gray-300", icon: Icon, label }) => (
  <a
    href="#"
    className={`${bg} flex h-36 w-40 flex-shrink-0 flex-col items-center justify-center gap-2 rounded-xl text-white shadow-lg transition hover:shadow-xl md:h-40 md:w-full`}
  >
    <Icon size={28} />
    <span className="px-2 text-center text-[0.8rem] font-medium leading-tight">{label}</span>
  </a>
);

/* white card with coloured icon chip */
const FeatureCard = ({ color = "bg-gray-300", icon: Icon, label }) => (
  <a
    href="#"
    className="flex flex-col items-start gap-4 rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md"
  >
    <span className={`${color} inline-flex rounded-lg p-3 text-white`}>
      <Icon size={24} />
    </span>
    <span className="text-sm font-medium leading-tight text-gray-900">{label}</span>
  </a>
);

const NewsItem = ({ title, date }) => (
  <li className="flex items-start gap-3">
    <ScrollText size={18} className="mt-0.5 text-blue-500" />
    <div>
      <a href="#" className="block text-sm font-medium leading-snug hover:underline">
        {title}
      </a>
      <time className="text-xs text-gray-500">{date}</time>
    </div>
  </li>
);

const PrimaryButton = ({ text }) => (
  <button className="rounded-md bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-blue-600">
    {text}
  </button>
);

/* ---------- main component ---------- */

export default function PublicProcurementPage() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    "Home",
    "About Us",
    "Procurement Tools",
    "Resources",
    "Media Centre",
    "Tenders",
  ];

  const quickLinks = [
    { bg: "bg-emerald-600", icon: LayoutGrid, label: "PPRA Portal" },
    { bg: "bg-blue-600", icon: ShieldAlert, label: "Complaints Management" },
    { bg: "bg-red-600", icon: Megaphone, label: "e‑GP System" },
    { bg: "bg-yellow-500", icon: FileText, label: "Debarment List" },
    { bg: "bg-amber-800", icon: BookOpen, label: "Procurement Guidelines" },
  ];

  const tools = [
    { color: "bg-emerald-600", icon: Briefcase, label: "Business Disclosures" },
    { color: "bg-blue-600", icon: ListChecks, label: "Real‑time Coverage" },
    { color: "bg-red-600", icon: Megaphone, label: "e‑GP System" },
    { color: "bg-amber-800", icon: BookOpen, label: "Procurement Guides" },
  ];

  const resources = [
    { color: "bg-yellow-500", icon: CalendarClock, label: "Training Schedules" },
    { color: "bg-rose-600", icon: HelpCircle, label: "FAQs" },
    { color: "bg-blue-600", icon: Send, label: "Newsletter Sign‑Up" },
    { color: "bg-gray-800", icon: Users, label: "Whistleblower Portal" },
  ];

  const news = [
    { title: "Circular – Submission of Reports", date: "Apr 12 2025" },
    { title: "Tender for Office Stationery", date: "Apr 12 2025" },
    { title: "Debarment of Kamau & Sons", date: "Apr 02 2025" },
    { title: "Press Release – E‑Procurement", date: "Mar 28 2025" },
  ];

  return (
    <div className="font-sans text-gray-900 antialiased">
      {/* top info bar */}
      <div className="bg-gray-100 text-xs sm:text-sm">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between gap-4 px-4 py-2">
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-1">
              <IconWrap><Mail size={14} /></IconWrap> info@example.go.ke
            </span>
            <span className="flex items-center gap-1">
              <IconWrap><Phone size={14} /></IconWrap> +254‑020‑328400
            </span>
            <span>ISO 9001 : 2015 Certified</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            {[Facebook, Twitter, Linkedin, Youtube].map((I, i) => (
              <a key={i} href="#" aria-label={I.name} className="hover:text-blue-500">
                <I size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* navbar */}
      <header className="sticky top-0 z-20 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-4">
          <a href="#" className="flex items-center gap-3">
            <img src={logo} alt="PPRA logo" className="h-15 w-auto" />
            
          </a>

          <nav aria-label="Main" className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <a key={link} href="#" className="hover:text-blue-500">{link}</a>
            ))}
            <a href="#" aria-label="Search" className="text-gray-600 hover:text-blue-500">
              <Search size={18} />
            </a>
          </nav>

          <button aria-label="Toggle navigation" className="md:hidden" onClick={() => setOpen(!open)}>
            <Menu size={24} />
          </button>
        </div>

        {open && (
          <nav className="md:hidden divide-y divide-gray-100 bg-white text-sm font-medium shadow">
            {navLinks.map((link) => (
              <a key={link} href="#" className="block px-4 py-3 hover:bg-gray-50">{link}</a>
            ))}
          </nav>
        )}
      </header>

      {/* hero – rounded container with angled divider */}
      <section className="relative mx-4 my-6 overflow-hidden rounded-xl shadow-lg md:mx-8">
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          <div className="absolute left-1/2 top-0 h-full w-1 origin-top rotate-6 bg-white" />
        </div>

        <div className="grid h-[460px] grid-cols-1 md:grid-cols-2">
          {/* right image (shows first on mobile) */}
          <div className="relative order-2 md:order-1">
            <img src={heroClipboard} alt="Monitoring" className="h-full w-full object-cover" />
            <div className="absolute inset-0 flex items-center bg-black/40 px-6 md:px-12">
              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                Monitor & Report<br />Procurement Irregularities
              </h2>
            </div>
          </div>

          {/* left image */}
          <div className="relative order-1 flex items-center md:order-2">
            <img src={heroCity} alt="City skyline" className="h-full w-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center gap-5 bg-black/50 px-6 md:px-12">
              <h2 className="text-xl font-bold leading-tight text-white md:text-4xl">
                Your Gateway to<br />Transparent Public Procurement
              </h2>
              <PrimaryButton text="Explore PPRA" />
            </div>
          </div>
        </div>
      </section>

      {/* quick links */}
      <section className="bg-white py-10 shadow-inner">
        <div className="mx-auto flex max-w-screen-xl gap-4 overflow-x-auto px-4 md:grid md:grid-cols-5 md:overflow-visible">
          {quickLinks.map((t) => <Tile key={t.label} {...t} />)}
        </div>
      </section>

      {/* announcement bar */}
      <div className="border-y bg-blue-500/5">
        <div className="mx-auto flex max-w-screen-xl items-center gap-2 px-4 py-3 text-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-blue-500" />
          <p>
            <strong>PPRA Notice:</strong> Entities must upload contracts by <time>01 Jul 2025</time>.
            <a href="#" className="ml-2 text-blue-500 underline">View Circular</a>
          </p>
        </div>
      </div>

      {/* about & news */}
      <section className="mx-auto grid max-w-screen-xl gap-12 px-4 py-16 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">About PPRA</h2>
          <h3 className="mb-2 text-lg font-semibold">Who We Are</h3>
          <p className="text-sm leading-relaxed">
            The Public Procurement Regulatory Authority (PPRA) ensures transparency, accountability
            and value for money across all government purchasing.
          </p>
          <h3 className="mt-6 mb-2 text-lg font-semibold">Vision & Mission</h3>
          <p className="text-sm leading-relaxed">
            We envision a fair, efficient procurement ecosystem that drives sustainable national
            development.
          </p>
          <a href="#" className="mt-4 inline-flex items-center text-blue-500 hover:underline">
            Core Values <ChevronRight size={14} className="ml-1" />
          </a>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">News & Announcements</h2>
          <ul className="space-y-5">
            {news.map((n) => <NewsItem key={n.title} {...n} />)}
          </ul>
        </div>
      </section>

      {/* tools & resources */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto grid max-w-screen-xl gap-12 px-4 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">Tools in Action</h2>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((t) => <FeatureCard key={t.label} {...t} />)}
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-bold md:text-3xl">Stakeholder Resources</h2>
            <div className="grid grid-cols-2 gap-4">
              {resources.map((r) => <FeatureCard key={r.label} {...r} />)}
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="border-t bg-white pt-14">
        <div className="mx-auto grid max-w-screen-xl gap-12 px-4 pb-16 md:grid-cols-2">
          <div>
            <img src={logo} alt="PPRA logo" className="h-10" />
            <address className="mt-4 not-italic text-sm leading-relaxed">
              PPRA Main Office<br />PO Box 53028, Nairobi, Kenya<br />+254 20 328400
            </address>
            <a href="#" className="mt-4 inline-flex items-center text-blue-500 hover:underline">
              Regional Offices <ChevronRight size={14} className="ml-1" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Tenders</a></li>
                <li><a href="#" className="hover:underline">FAQs</a></li>
                <li><a href="#" className="hover:underline">Newsletter Sign‑Up</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline">Website Feedback</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
