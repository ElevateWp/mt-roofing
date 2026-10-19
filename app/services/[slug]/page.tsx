import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';
import { SERVICES } from '@/lib/clinic-data';

export function generateStaticParams() {
  return SERVICES.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return getServiceMetadata(params.slug);
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  if (!SERVICES.some((service) => service.slug === params.slug)) notFound();
  return <ServiceLandingPage slug={params.slug} />;
}
