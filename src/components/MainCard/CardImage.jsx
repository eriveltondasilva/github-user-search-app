import Image from 'next/image';

export default function CardImage({ src, alt, size = 80 }) {
  return (
    <section className='w-20 h-20'>
      <Image
        className='rounded-full'
        src={src}
        alt={alt}
        width={size}
        height={size}
      />
    </section>
  );
}
