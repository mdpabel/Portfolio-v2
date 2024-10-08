import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src='/images/logo-v2.png'
        alt='MD Pabel'
        width={50}
        height={50}
        className='shadow-lg shadow-zinc-800/9 rounded-full'
      />
    </Link>
  );
};

export default Logo;
