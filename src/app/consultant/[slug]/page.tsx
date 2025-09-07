import ConsultantPage from '@/app/consultant/(components)/ConsultantPage';
import {getConsultant, getAllSlugs} from '@/data/consultants';
import type {StaticImageData} from 'next/image';
import {notFound} from 'next/navigation';

type Params = {slug: string};

export function generateStaticParams() {
  return getAllSlugs();
}

export async function generateMetadata({params}: {params: Promise<Params>}) {
  const {slug} = await params;
  const c = getConsultant(slug);
  if (!c) return {};

  const title = `Konsultasi Aulora Pants - ${c.name}`;
  const description = `Chat WhatsApp ${c.name} untuk konsultasi ukuran, cara pakai, dan promo Aulora Pants.`;
  const url = `https://kenviriya.space/consultant/${slug}`;

  const imageUrl =
    typeof c.photo === 'string' ? c.photo : (c.photo as StaticImageData).src;

  return {
    title,
    description,
    alternates: {canonical: url},
    openGraph: {
      title,
      description,
      url,
      images: [{url: imageUrl}],
    },
    twitter: {card: 'summary_large_image', title, description},
  };
}

export default async function Page({params}: {params: Promise<Params>}) {
  const {slug} = await params;
  const c = getConsultant(slug);
  if (!c) return notFound();
  return <ConsultantPage c={c} />;
}
