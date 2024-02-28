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
        className="w-96 max-md:w-64"
      />
    </div>
  );
};
export default AllImage;
