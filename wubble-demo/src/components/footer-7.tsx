import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}










const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "AI sound engineer", href: '#' },
      { name: "AI voice generator", href: "#" },
      { name: "AI voice cloner", href: "#" },
      { name: "AI audio studio", href: "#" },
      { name: "AI SFX studio", href: "#" },
      { name: "Wubble API", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Marketing ", href: '#' },
      { name: "Film & TV", href: "#" },
      { name: "Game dev", href: "#" },
      { name: "Creators", href: "#" },
      { name: "Podcastors", href: "#" },
      { name: "Hospitality", href: "#" },
    ],
  },
  {
    title: "Tools",
    links: [
      { name: "AI audio cleaner", href: "#" },
      { name: "Social clop generator", href: "#" },
      { name: "AI Dubbing", href: "#" },
      { name: "Auto captioning ", href: "#" },
      { name: "Podcast intro maker", href: "#" },
      { name: "AB Tester", href: '#' }
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Pricing", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "News room", href: "#" },
      { name: "Developers", href: "#" },
    ]

  },
  {
    title: "Company & Legal",
    links: [
      { name: "About Wubble", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Terms of Use", href: "#" },
      { name: "Subscriber License", href: "#" },
      { name: "FAQS", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  { icon: <FaInstagram className="size-5" />, href: "#", label: "Instagram" },
  { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export const Footer7 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://www.shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  sections = defaultSections,
  description = "A collection of components for your startup business or side project.",
  socialLinks = defaultSocialLinks,
  copyright = "© 2024 Shadcnblocks.com. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  return (
    <section className="py-32  mt-[5rem] p-3">
      <div className="container mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-8"
                />
              </a>
              <h2 className="text-xl font-semibold">Logo</h2>
            </div>
            {/* <p className="max-w-[70%] text-sm text-muted-foreground">
              {description}
            </p> */}
            {/* sections */}
            <div className="flex w-full justify-evenly lg:gap-20">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 font-bold">{section.title}</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/* <ul className="flex items-center space-x-6 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul> */}
          </div>

        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

