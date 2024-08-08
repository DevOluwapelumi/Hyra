import Image from "next/image";
import Link from "next/link";

const TeachingCard = ({ img, alt, title, content, url, bgColor }) => {
  return (
    <div
      className={`${bgColor} p-2 md:p-6 rounded-lg text-white max-h-[700px] h-full`}
    >
      <div>
        <Image
          src={img}
          alt={alt}
          className="rounded-lg h-full max-h-[300px]"
        />
      </div>
      <div>
        <h2 className="my-4 md:my-6">{title}:</h2>
        <p className="text-white">{content}</p>
      </div>
      <div className="my-2 md:my-6">
        <Link href={url} className="font-semibold underline">
          See more
        </Link>
      </div>
    </div>
  );
};

export default TeachingCard;
