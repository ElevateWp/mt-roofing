import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#17191C] block mb-2 font-medium uppercase tracking-wider">Roof Repairs & Replacement</span>
          <h2 className="font-display text-33 md:text-41 text-[#17191C]">Care for your roof, from repairs to renewal</h2>
        </AnimateOnScroll>
        <div className="flex flex-col space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#17191C] uppercase tracking-wider block mb-2 font-medium">Roof repairs</span>
              <h3 className="font-display text-26 md:text-33 text-[#17191C] mb-4">Address leaks and roof damage</h3>
              <p className="font-body text-15 md:text-17 text-[#17191C]/80 leading-relaxed mb-6">Contact the team to discuss leaks, storm damage and other roof repairs, then agree the work and quote before starting.</p>
              <div className="p-4 bg-[#F3F8FC] border-l-4 border-[#17191C] mb-6 rounded-sm"><span className="font-body text-13 text-[#17191C]/80"><strong className="text-[#17191C] font-semibold">Discuss your project:</strong> The work, materials and timing are agreed with you before starting.</span></div>
              <Button href="/services/roof-repairs/" variant="ghost" size="md">Explore Roof Repairs</Button>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm"><Image src="/images/jsroof-stock-06.jpg" alt="Illustrative roof repair" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" /></div>
            </AnimateOnScroll>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6"><div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm"><Image src="/images/jsroof-stock-07.jpg" alt="Illustrative residential roofing" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div></AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#17191C] uppercase tracking-wider block mb-2 font-medium">Roof replacement</span>
              <h3 className="font-display text-26 md:text-33 text-[#17191C] mb-4">Plan your next roof with confidence</h3>
              <p className="font-body text-15 md:text-17 text-[#17191C]/80 leading-relaxed mb-6">For an ageing or significantly damaged roof, talk through replacement options, materials and the project scope with MT Roofing and Damp Proofing.</p>
              <div className="p-4 bg-[#F3F8FC] border-l-4 border-[#17191C] mb-6 rounded-sm"><span className="font-body text-13 text-[#17191C]/80"><strong className="text-[#17191C] font-semibold">A clear plan:</strong> Agree the quote and timing before the work begins.</span></div>
              <Button href="/services/roof-replacement/" variant="ghost" size="md">Explore Roof Replacement</Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
