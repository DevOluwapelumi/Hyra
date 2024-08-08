import Image from "next/image";

const WhyChooseUsCard = ({ bgColor, img, alt, text }) => {
  return (
    <div
      className={`${bgColor} rounded-lg w-full md:p-10 h-[250px] p-2 md:h-[300px]`}
    >
      <div className="flex items-center justify-center">
        <Image src={img} alt={alt} className="w-[150px] rounded-lg h-[100px]" />
      </div>
      <div className="mt-5">
        <p className="text-center text-white">{text}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
