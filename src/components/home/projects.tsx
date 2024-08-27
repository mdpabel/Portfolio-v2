'use client';
import Image from 'next/image';
import Slider from 'react-slick';

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <div className=''>
      <Slider {...settings}>
        <Image src='/images/image-2.webp' alt='Test' width={500} height={400} />
        <Image src='/images/image-2.webp' alt='Test' width={500} height={400} />
        <Image src='/images/image-2.webp' alt='Test' width={500} height={400} />
        <Image src='/images/image-2.webp' alt='Test' width={500} height={400} />
        <Image src='/images/image-2.webp' alt='Test' width={500} height={400} />
        <Image src='/images/image-2.webp' alt='Test' width={500} height={400} />
      </Slider>
    </div>
  );
};

export default Projects;
