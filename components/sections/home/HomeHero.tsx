import Image from 'next/image';
import { Star } from 'lucide-react';
import { CLINIC_INFO } from '@/lib/clinic-data';

export default function HomeHero() {
  const phone = CLINIC_INFO.contact.phone;
  const phoneLink = `tel:${phone.replace(/[^0-9+]/g, '')}`;

  return (
    <section
      aria-label="MT Roofing and Damp Proofing in Sevenoaks and Kent"
      className="relative z-30 isolate -mt-[88px] flex h-[100svh] min-h-[600px] w-full shrink-0 items-end overflow-hidden bg-neutral-900 text-white sm:-mt-[100px] md:-mt-[112px]"
    >
      <Image
        src="/images/roofb3-1.jpg"
        alt="A newly roofed home in Sevenoaks and Kent"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/10" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/15 to-black/10" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[12vh] z-[1] overflow-hidden text-center">
        <span className="block whitespace-nowrap font-display text-[clamp(2.5rem,9.2vw,9rem)] font-semibold leading-none tracking-[-0.08em] text-white/[0.34]">
          MT ROOFING
        </span>
      </div>

      <div className="relative z-10 grid w-full grid-cols-1 items-end gap-8 px-5 pb-[8vh] sm:px-8 md:grid-cols-12 md:px-12 lg:px-[5.2vw]">
        <div className="w-full max-w-[700px] md:col-span-7 lg:col-span-7">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/35 bg-black/25 px-3 py-2 sm:px-4">
            <span className="flex items-center gap-1 text-[#00A9D8]" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, index) => <Star key={index} size={13} fill="currentColor" strokeWidth={1.5} />)}
            </span>
            <span className="font-body text-[11px] font-medium leading-tight text-white sm:text-xs">5.0 · 10 Google reviews</span>
          </div>

          <p className="mb-3 font-body text-[10px] font-bold uppercase tracking-[0.2em] text-white/75 sm:text-xs">
            SEVENOAKS · KENT
          </p>
          <h1 className="mb-4 max-w-[760px] font-display text-[clamp(2.5rem,5.1vw,5rem)] font-semibold leading-[0.99] tracking-[-0.045em] text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.16)] sm:mb-5">
            Roofing and damp proofing, done right.
          </h1>
          <p className="max-w-[540px] font-body text-sm leading-relaxed text-white/85 sm:text-base md:text-lg">
            Trusted roofing and damp proofing services for homes and businesses in Sevenoaks and across Kent.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-7">
            <a
              href="/request-a-quote/"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#00A9D8] px-6 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(16,43,90,0.35)] transition-colors hover:bg-[#18C5ED] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-7"
            >
              Request a free quote <span aria-hidden="true">↗</span>
            </a>
            <a
              href={phoneLink}
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/55 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-7"
            >
              Call {phone}
            </a>
          </div>
        </div>

        <div className="hidden w-full md:col-span-5 md:block lg:col-span-4 lg:col-start-9">
          <div className="mb-4 grid grid-cols-2 gap-3">
            <article className="rounded-xl border border-white/30 bg-black/25 p-4 lg:p-5">
              <span className="block font-display text-3xl font-semibold leading-none text-[#00A9D8] lg:text-4xl">5.0</span>
              <span className="mt-2 block font-body text-xs leading-snug text-white/80">Google rating<br />10 customer reviews</span>
            </article>
            <article className="rounded-xl border border-white/30 bg-black/25 p-4 lg:p-5">
              <span className="block font-display text-3xl font-semibold leading-none text-[#00A9D8] lg:text-4xl">24 hours</span>
              <span className="mt-2 block font-body text-xs leading-snug text-white/80">Listed open daily<br />Call to discuss your project</span>
            </article>
          </div>
          <div className="grid grid-cols-3 gap-2 rounded-xl border border-white/25 bg-black/25 p-3 text-center lg:p-4">
            <div>
              <span className="block font-display text-sm font-semibold text-[#00A9D8] lg:text-base">24 hours</span>
              <span className="mt-1 block font-body text-[10px] leading-tight text-white/75">Listed availability</span>
            </div>
            <div className="border-x border-white/20 px-1">
              <span className="block font-display text-sm font-semibold text-[#00A9D8] lg:text-base">5.0 ★</span>
              <span className="mt-1 block font-body text-[10px] leading-tight text-white/75">Google rating</span>
            </div>
            <div>
              <span className="block font-display text-base font-semibold text-[#00A9D8] lg:text-lg">Kent</span>
              <span className="mt-1 block font-body text-[10px] leading-tight text-white/75">Sevenoaks and nearby</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-3 left-5 right-5 z-20 flex items-center justify-between font-body text-[9px] uppercase tracking-[0.14em] text-white/60 sm:bottom-4 sm:left-8 sm:right-8 md:left-12 md:right-12 lg:left-[5.2vw] lg:right-[5.2vw]">
        <span>MT Roofing and Damp Proofing · Sevenoaks</span>
        <span>Scroll to explore ↓</span>
      </div>
    </section>
  );
}
