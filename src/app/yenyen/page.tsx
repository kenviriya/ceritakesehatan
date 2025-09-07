'use client';

import type {LucideIcon} from 'lucide-react';
import {assets} from '@/assets/assets';
import {Button} from '@/components/ui/button';
import {
  Phone,
  CheckCircle2,
  MapPin,
  Clock,
  ShieldCheck,
  MessageSquare,
  Instagram,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import * as motion from 'motion/react-client';

// TikTok SVG component
const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path d="M224 88a88 88 0 0 1-51.4-16.6V160a72 72 0 1 1-72-72 73.2 73.2 0 0 1 8.6.5V120a40 40 0 1 0 28 38.2V32h32a56 56 0 0 0 56 56Z" />
  </svg>
);

// Motion variants
const container = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {staggerChildren: 0.12, delayChildren: 0.1},
  },
} as const;

const fadeUp = {
  hidden: {opacity: 0, y: 24},
  show: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.6, ease: [0.22, 1, 0.36, 1]},
  },
} as const;

const pop = {
  hidden: {opacity: 0, scale: 0.9},
  show: {opacity: 1, scale: 1, transition: {duration: 0.5}},
  whileHover: {scale: 1.05},
  whileTap: {scale: 0.95},
} as const;

const WAPhone = '628999524888' as const; // edit here when needed

type FeatureItemProps = {icon: LucideIcon; title: string; desc: string};
const FeatureItem: React.FC<FeatureItemProps> = ({icon: Icon, title, desc}) => (
  <motion.li variants={fadeUp} className="flex items-start gap-3">
    <Icon className="mt-1 size-5 text-[#005da2]" />
    <div>
      <p className="font-semibold text-[#2f3b69]">{title}</p>
      <p className="text-sm text-[#2f3b69]/80">{desc}</p>
    </div>
  </motion.li>
);

export default function YenYenPage() {
  return (
    <div className="min-h-svh bg-[#dfe2ec] text-[#2f3b69]">
      {/* Top banner */}
      <div className="relative overflow-hidden">
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.8}}
          className="absolute inset-0 bg-gradient-to-br from-[#005da2] via-[#2f3b69] to-[#005da2] opacity-90"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-10 sm:py-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid items-center gap-8 sm:grid-cols-[auto,1fr]"
          >
            {/* Avatar card */}
            <motion.div variants={pop} className="mx-auto w-full max-w-[320px]">
              <div className="rounded-2xl bg-[#ebe3e1] p-3 shadow-lg ring-1 ring-black/5">
                <motion.div
                  initial={{scale: 0.95}}
                  animate={{scale: 1}}
                  transition={{duration: 0.6}}
                >
                  <Image
                    src={assets.profileYen}
                    alt="Foto Profil Yen Yen"
                    width={420}
                    height={525}
                    className="h-auto w-full rounded-xl object-cover"
                    priority
                  />
                </motion.div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-medium text-[#2f3b69]">
                    Konsultan Resmi BE International
                  </p>
                  <p className="text-xs text-[#2f3b69]/70">
                    Siap bantu pilih ukuran & jawab pertanyaan
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Headline & CTA */}
            <motion.div variants={fadeUp} className="text-center sm:text-left">
              <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Hubungi Yen Yen
              </h1>
              <p className="mt-3 max-w-prose text-white/90">
                Order dan konsultasi Aulora Pants via WhatsApp. Dapatkan panduan
                ukuran, cara pakai, dan promo terbaru.
              </p>

              <motion.div
                variants={pop}
                whileHover="whileHover"
                whileTap="whileTap"
                className="mt-6 inline-flex w-full sm:w-auto"
              >
                <Link
                  href={`https://wa.me/${WAPhone}`}
                  className="flex w-full justify-center"
                >
                  <Button className="h-14 w-full rounded-2xl bg-[#25D366] px-6 text-lg font-bold text-white shadow-lg shadow-[#25D366]/50 hover:bg-[#20ba57] sm:w-auto sm:text-base sm:font-semibold">
                    <Phone className="mr-2 size-6" /> Chat WhatsApp
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-4 flex items-center justify-center gap-2 text-white/85 sm:justify-start"
              >
                <ShieldCheck className="size-5" />
                <span className="text-sm">Produk resmi • Garansi keaslian</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Info strip */}
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true, margin: '-80px'}}
        className="border-y border-[#2f3b69]/10 bg-white/70 backdrop-blur"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-4 py-4 text-sm sm:grid-cols-3">
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-[#005da2]" />
            <span>Pakuwon Tower, Jakarta</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4 text-[#005da2]" />
            <span>Jam layanan: 09.00–21.00 WIB</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="size-4 text-[#005da2]" />
            <span>Respon cepat via WhatsApp</span>
          </div>
        </div>
      </motion.div>

      {/* Benefits / Why buy */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
        >
          <motion.h2
            variants={fadeUp}
            className="text-center text-2xl font-bold text-[#2f3b69]"
          >
            Kenapa Aulora Pants & konsultasi dengan Yen Yen?
          </motion.h2>
          <motion.ul
            variants={container}
            className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3"
          >
            <FeatureItem
              icon={CheckCircle2}
              title="Panduan Ukuran Akurat"
              desc="Biar pas dan nyaman dipakai seharian."
            />
            <FeatureItem
              icon={CheckCircle2}
              title="Cara Pakai & Perawatan"
              desc="Tips praktis agar manfaatnya maksimal."
            />
            <FeatureItem
              icon={CheckCircle2}
              title="Promo Terkini"
              desc="Info diskon & bundling yang sedang berjalan."
            />
            <FeatureItem
              icon={CheckCircle2}
              title="Pengiriman Cepat"
              desc="Packing rapi, kirim ke seluruh Indonesia."
            />
            <FeatureItem
              icon={CheckCircle2}
              title="Original & Bergaransi"
              desc="Produk resmi BE International."
            />
            <FeatureItem
              icon={CheckCircle2}
              title="Dukungan Setelah Pembelian"
              desc="Tanya kapan pun saat Anda butuh."
            />
          </motion.ul>
        </motion.div>
      </section>

      {/* Secondary CTA card */}
      <section className="mx-auto max-w-5xl px-4 pb-14">
        <motion.div
          variants={pop}
          initial="hidden"
          whileInView="show"
          viewport={{once: true}}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#ebe3e1] to-[#dfe2ec] p-6 shadow-lg ring-1 ring-black/5 sm:p-8"
        >
          <motion.p
            variants={fadeUp}
            className="text-lg font-semibold text-[#2f3b69]"
          >
            Siap konsultasi sekarang?
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-1 max-w-prose text-[#2f3b69]/80"
          >
            Klik tombol di bawah. Jelaskan keluhan, ukuran pinggang, tinggi
            badan, dan kebiasaan aktivitas supaya kami bisa rekomendasikan
            ukuran yang tepat.
          </motion.p>
          <motion.div
            variants={pop}
            className="mt-5 flex w-full justify-center"
          >
            <Link
              href={`https://wa.me/${WAPhone}`}
              className="w-full sm:w-auto"
            >
              <Button className="h-14 w-full rounded-2xl bg-[#25D366] px-6 text-lg font-bold text-white shadow-lg shadow-[#25D366]/50 hover:bg-[#20ba57] sm:w-auto sm:text-base sm:font-semibold">
                <Phone className="mr-2 size-6" /> Chat WhatsApp Sekarang
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer mini note with social links */}
      <footer className="pb-10 text-center text-xs text-[#2f3b69]/70">
        <p>
          © {new Date().getFullYear()} YenYen&apos;s Team · Halaman konsultasi
          Yen Yen
        </p>
        <div className="mt-3 flex justify-center gap-6 text-[#2f3b69]">
          <Link
            href="https://instagram.com/your_instagram"
            target="_blank"
            aria-label="Instagram"
            className="hover:text-[#E1306C]"
          >
            <Instagram className="size-5" />
          </Link>
          <Link
            href="https://tiktok.com/@your_tiktok"
            target="_blank"
            aria-label="TikTok"
            className="hover:text-black"
          >
            <TikTokIcon className="size-5" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
