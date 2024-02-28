import Image from "next/image";

const AllImage = ({imagegaleri}) => {
  return (
    <div>
      <Image
        src={imagegaleri}
        width={1000}
        height={1000}
        quality={100}
        alt="image 1"
        className="max-w-md max-md:w-80"
      />
    </div>
  );
};
export default AllImage;
