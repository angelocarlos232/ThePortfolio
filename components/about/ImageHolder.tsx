import Image from 'next/image';

const ImageHolder = () => {
  return (
    <div className="flex justify-end h-full">
      <div className="w-[100%] max-w-[50vh]">
        <Image
          src="/picture_3by4_2.jpg"
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
