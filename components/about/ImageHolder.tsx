import Image from 'next/image';
import profilePic from '@/app/assets/profile-pic.jpeg';

const ImageHolder = () => {
  return (
    <div className="flex justify-center md:justify-end h-full">
      <div className="w-[80%] md:w-[100%] max-w-[40vh] md:max-w-[50vh]">
        <Image
          src={profilePic}
          alt="Angelo Carlos profile picture"
          layout="responsive"
          width={800}
          height={1100}
          className="w-full h-auto rounded-2xl md:rounded-3xl object-cover"
          priority={true}
        />
      </div>
    </div>
  );
};

export default ImageHolder;
