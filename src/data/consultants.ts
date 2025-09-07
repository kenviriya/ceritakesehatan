import type {StaticImageData} from 'next/image';
import {profileYen, profileLilianda} from '@/assets/assets';

export type Consultant = {
  slug: string;
  name: string;
  phone: `62${number}`;
  title: string;
  photo: StaticImageData | string;
  location?: string;
  hours?: string;
  instagram?: string;
  tiktok?: string;
};

export const consultants: Consultant[] = [
  {
    slug: 'yenyen',
    name: 'Yen Yen',
    phone: '628999524888',
    title: 'Konsultan Resmi',
    photo: profileYen,
    location: 'Pakuwon Tower, Jakarta',
    hours: '09.00-21.00 WIB',
    instagram: 'aulora_yenyen',
    tiktok: 'aulorayenyen',
  },
  {
    slug: 'lilianda',
    name: 'Lilianda',
    phone: '6285121068889',
    title: 'Konsultan Resmi',
    photo: profileLilianda,
    location: 'Pakuwon Tower, Jakarta',
    hours: '10.00-18.00 WIB',
    instagram: 'lilianda_',
    tiktok: 'liliandasoenarto',
  },
];

export function getConsultant(slug: string) {
  return consultants.find((c) => c.slug === slug);
}

export function getAllSlugs() {
  return consultants.map((c) => ({slug: c.slug}));
}
