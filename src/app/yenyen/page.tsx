import {assets} from '@/assets/assets';
import {Button} from '@/components/ui/button';
import {Phone} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const YenYenPage = () => {
  return (
    <div className="flex flex-col items-center gap-6 py-10 bg-red-800">
      <h1 className="text-2xl font-bold">Hubungi Kami</h1>
      <h2 className="text-lg text-center">
        Order dan Konsultasi Aulora Pants melalui Whatsapp
      </h2>

      <Image
        src={assets.profileYen}
        alt="Foto Profil Yen Yen"
        quality={100}
        width={200}
        height={250}
        className="rounded-lg"
      />

      <Link href="https://wa.me/628999524888">
        <Button className="bg-green-600 py-5 px-10 text-white hover:bg-green-700 flex items-center gap-2">
          <Phone className="w-6 h-6" /> Hubungi Yen Yen
        </Button>
      </Link>
    </div>
  );
};

export default YenYenPage;
