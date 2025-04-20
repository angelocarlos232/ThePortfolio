import Image from 'next/image';
import profilePic from '@/app/assets/profile-pic.jpeg';
const ImageHolder = () => {
  return (
    <div className="flex justify-end h-full">
      <div className="w-[100%] max-w-[50vh]">
        <Image
          src={profilePic}
          alt="picture"
          layout="responsive"
          width={800}
          height={1100}
          className="w-full h-auto rounded-3xl object-cover"
        />
      </div>
    </div>
  );
};

export default ImageHolder;
