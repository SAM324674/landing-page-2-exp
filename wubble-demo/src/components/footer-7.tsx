"use client";
import React from "react";
// Removed unused lucide-react icons (Mail, Phone, MapPin, etc.) as they are not
// present in the Wubble design or the simplified footer.
import { DIcons } from "dicons";
import Link from "next/link";
// Imported components are assumed to be correct
import { FooterBackgroundGradient } from "@/components/hover-footer";
import { TextHoverEffect } from "@/components/hover-footer";


function HoverFooter() {
  // New unified data structure based on the Wubble logo image
  const wubbleFooterData = [
    {
      title: "Product",
      links: [
        { label: "AI sound engineer", href: "#" },
        { label: "AI voice generator", href: "#" },
        { label: "AI voice cloner", href: "#" },
        { label: "AI audio studio", href: "#" },
        { label: "AI SFX studio", href: "#" },
        { label: "Wubble API", href: "#" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Marketing", href: "#" },
        { label: "Film & TV", href: "#" },
        { label: "Game dev", href: "#" },
        { label: "Creators", href: "#" },
        { label: "Podcasters", href: "#" },
        { label: "Hospitality", href: "#" },
      ],
    },
    {
      title: "Tools", // Note: This is the first "Tools" column
      links: [
        { label: "AI audio cleaner", href: "#" },
        { label: "Social clop generator", href: "#" },
        { label: "AI Dubbing", href: "#" },
        { label: "Auto captioning", href: "#" },
        { label: "Podcast intro maker", href: "#" },
        { label: "AB Tester", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Pricing", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Newsroom", href: "#" },
        { label: "Developers", href: "#" },
      ],
    },
    // {
    //   title: "Tools", // Note: This is the second "Tools" column
    //   links: [
    //     { label: "Discord", href: "#" },
    //     { label: "X/Twitter", href: "#" },
    //     { label: "LinkedIn", href: "#" },
    //     { label: "YouTube", href: "#" },
    //   ],
    // },
    {
      title: "Company & Legal",
      links: [
        { label: "About Wubble", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Security", href: "#" },
        { label: "Privacy policy", href: "#" },
        { label: "Cookie policy", href: "#" },
        { label: "Terms of Use", href: "#" },
        { label: "Subscriber License", href: "#" },
        { label: "FAQs", href: "#" },
      ],
    },
  ];

  const Underline = `hover:-translate-y-1 border border-dotted rounded-xl p-2.5 transition-transform bg-[#9598B5]/30 backdrop-blur-md `;

  return (
    <footer className="bg-secondary/30 relative h-fit rounded-3xl overflow-hidden m-8 border border-border">
      <div className="max-w-7xl mx-auto p-14 z-50 relative">
        {/* Adjusted grid to accommodate 7 columns (Brand + 6 new columns) */}
        <div className="flex gap-10 md:gap-8 lg:gap-16 pb-12">

          <div className="flex flex-col space-y-4 col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <span className="text-white text-3xl font-bold">Wubble logo</span>
            </div>

          </div>

          {/* New Footer link sections, mapping all 6 columns from the data structure */}
          {wubbleFooterData.map((section, index) => (
            // Using index as part of the key since two titles are identical ("Tools")
            <div key={`${section.title}-${index}`} >
              <h4 className="text-white text-[18px] font-semibold tracking-[-2.2%] leading-[100%] mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <a
                      href={link.href}
                      className="hover:text-[#3ca2fa] transition-colors text-[18px]"
                    >
                      {link.label}
                    </a>

                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* NOTE: The original 'Contact Us' static section is now removed 
          because all content is now driven by 'wubbleFooterData'. */}
        </div>

        <hr className="border-t border-gray-700 my-8" />

        {/* Footer bottom (Social icons and Copyright) - kept original social icons for now */}
        <div className="relative z-30 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons (You'd ideally create a socialLinks array for this too, 
          but keeping the original structure since the Wubble image doesn't show them) */}
          <div className="flex flex-wrap justify-center gap-y-6 ">
            <div className="flex flex-wrap items-center justify-center gap-6 gap-y-4 px-6">
              <Link
                aria-label="Logo"
                href="mailto:contact@designali.in"
                rel="noreferrer"
                target="_blank"
                className={Underline}
              >
                <DIcons.Mail strokeWidth={1.5} className="h-5 w-5" />
              </Link>
              <Link
                aria-label="Logo"
                href="https://x.com/designali_in"
                rel="noreferrer"
                target="_blank"
                className={Underline}
              >
                <DIcons.X className="h-5 w-5" />
              </Link>
              <Link
                aria-label="Logo"
                href="https://www.instagram.com/designali.in/"
                rel="noreferrer"
                target="_blank"
                className={Underline}
              >
                <DIcons.Instagram className="h-5 w-5" />
              </Link>
              <Link
                aria-label="Logo"
                href="https://www.threads.net/designali.in"
                rel="noreferrer"
                target="_blank"
                className={Underline}
              >
                <DIcons.Threads className="h-5 w-5" />
              </Link>
              <Link
                aria-label="Logo"
                href="https://chat.whatsapp.com/LWsNPcz5BlWDVOha41vzuh"
                rel="noreferrer"
                target="_blank"
                className={Underline}
              >
                <DIcons.WhatsApp className="h-5 w-5" />
              </Link>
              <Link
                aria-label="Logo"
                href="https://www.behance.net/designali-in"
                rel="noreferrer"
                target="_blank"
                className={Underline}
              >
                <DIcons.Behance className="h-5 w-5" />
              </Link>
              <Link
                aria-label="Logo"
                href="https://www.facebook.com/designali.agency"
                rel="noreferrer"
                target="_blank"
                className={Underline}
              >
                <DIcons.Facebook className="h-5 w-5" />
              </Link>
              <Link
                aria-label="Logo"
                href="https://www.linkedin.com/company/designali"
                rel="noreferrer"
                target="_blank"
                className={Underline}
              >
                <DIcons.LinkedIn className="h-5 w-5" />
              </Link>
              <Link
                aria-label="Logo"
                href="https://www.youtube.com/@designali-in"
                rel="noreferrer"
                target="_blank"
                className={Underline}
              >
                <DIcons.YouTube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-y-6">
            {/* ... (Original social icon links using DIcons) ... */}
          </div>

          {/* Copyright */}
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>

      {/* Text hover effect & Background Gradient */}
      <div className="lg:flex hidden h-[30rem] -mt-52 ">
        <TextHoverEffect text="Wubble" className="z-30" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default HoverFooter;