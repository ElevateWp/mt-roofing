import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CLINIC_INFO, SERVICES, DENTISTS } from '@/lib/clinic-data';

export default function Footer() {
  return (
    <footer className="w-full bg-forest text-paper border-t border-mist/20 pt-16 md:pt-24 pb-12">
      <div className="max-w-site mx-auto px-6 md:px-12">
        {/* Top section: company summary and project enquiry contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-mist/20">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-paper rounded-xl p-2 flex items-center justify-center flex-shrink-0 shadow-md">
                <Image
                  src="/images/logo.png"
                  alt="MT Roofing and Damp Proofing logo"
                  width={60}
                  height={60}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-24 md:text-30 font-medium leading-tight">
                  MT Roofing and Damp Proofing
                </span>
                <span className="font-body text-13 text-paper/70 font-medium">
                  Roofing & damp proofing across Kent
                </span>
              </div>
            </div>
            <p className="font-body text-16 text-paper/80 leading-relaxed max-w-xl">
              Flat and pitched roofing, repairs, inspections, damp proofing, roofline services and emergency repairs across Sevenoaks and Kent.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-13 text-paper/60">
              <span>+44 7951 960060</span>
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-12 flex flex-col justify-between">
            <div className="p-6 bg-paper/5 border border-mist/20 rounded-none shadow-sm">
              <span className="font-body text-13 text-lime block mb-2 font-semibold uppercase tracking-wider">
                Roofing in Sevenoaks and Kent
              </span>
              <p className="font-body text-15 text-paper/90 mb-4">
                Need roofing or damp proofing work? Contact the team for a quote.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-15 font-semibold text-lime hover:underline"
                >
                  Call: {CLINIC_INFO.contact.phone}
                </a>
                <Link
                  href="/request-a-quote/"
                  className="font-body text-13 text-paper/80 underline underline-offset-4 hover:text-paper"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section: Complete Internal Linking Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16 border-b border-mist/20">
          {/* Column 1: technical Treatments */}
          <div className="col-span-1">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">
              Services
            </span>
            <ul className="space-y-2.5 font-body text-15">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="text-paper/80 hover:text-lime transition-colors"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: technical Team */}
          <div className="col-span-1">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">
              Our Team
            </span>
            <ul className="space-y-2.5 font-body text-15">
              <li>
                <Link href="/our-team/" className="text-paper/80 hover:text-lime transition-colors">
                  Meet the Roofing Team
                </Link>
              </li>
              {DENTISTS.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/our-team/${d.slug}/`}
                    className="text-paper/80 hover:text-lime transition-colors"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: The company */}
          <div className="col-span-1">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">
              Company
            </span>
            <ul className="space-y-2.5 font-body text-15">
              <li>
                <Link href="/about/" className="text-paper/80 hover:text-lime transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/testimonials/" className="text-paper/80 hover:text-lime transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="text-paper/80 hover:text-lime transition-colors">
                  Roofing Advice
                </Link>
              </li>
              <li>
                <Link href="/request-a-quote/" className="text-paper/80 hover:text-lime transition-colors">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="text-paper/80 hover:text-lime transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/request-a-quote/" className="text-paper/80 hover:text-lime transition-colors">
                  Discuss Your Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <span className="font-body text-13 text-paper/40 uppercase tracking-wider block mb-4 font-semibold">
              Contact Details
            </span>
            <div className="space-y-3 font-body text-15 text-paper/80">
              <div>
                <span className="text-paper/50 block text-13">Phone:</span>
                <a
                  href={`tel:${CLINIC_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lime transition-colors font-medium"
                >
                  {CLINIC_INFO.contact.phone}
                </a>
              </div>
              <div>
              <span className="text-paper/50 block text-13">Address:</span>
                <address className="not-italic leading-relaxed text-13 text-paper/70">
                  {CLINIC_INFO.primaryLocation.directions}
                </address>
              </div>
              {CLINIC_INFO.contact.website && (
                <div>
                  <span className="text-paper/50 block text-13">Website:</span>
                  <a href={CLINIC_INFO.contact.website} className="block max-w-full break-all hover:text-lime transition-colors" target="_blank" rel="noopener noreferrer">
                    mtroofing.co.uk
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-body text-13 text-paper/60">
          <div>
            © {new Date().getFullYear()} {CLINIC_INFO.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Sevenoaks and Kent</span>
            <span>MT Roofing and Damp Proofing</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
