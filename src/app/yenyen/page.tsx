import {assets} from '@/assets/assets';
import {Button} from '@/components/ui/button';
import {Phone} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const YenYenPage = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-10 bg-red-800 min-h-svh">
      <h1 className="text-4xl font-bold">Hubungi Kami</h1>
      <h2 className="text-2xl text-center">
        Order dan Konsultasi Aulora Pants melalui Whatsapp
      </h2>

      <Image
        src={assets.profileYen}
        alt="Foto Profil Yen Yen"
        quality={100}
        width={350}
        height={437.5}
        className="rounded-lg"
      />

      <Link href="https://wa.me/628999524888">
        <Button className="bg-[#166534] py-10 px-20 min-w-md text-white hover:bg-green-700 flex items-center gap-4 text-2xl font-semibold">
          <Phone /> Hubungi Yen Yen
        </Button>
      </Link>
    </div>
  );
};

export default YenYenPage;
