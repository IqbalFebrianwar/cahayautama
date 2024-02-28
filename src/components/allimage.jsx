import Image from "next/image";

const AllImage = ({imagegaleri}) => {
  return (
    <div>
      <Image
        src={imagegaleri}
        width={200}
        height={200}
        alt="image 1"
        className="w-96 max-md:w-64"
      />
    </div>
  );
};
export default AllImage;
