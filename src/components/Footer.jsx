import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-black">
        <div className="flex items-center justify-center w-1/6 p-4 mx-auto">
          <Link href="https://www.linkedin.com/in/vee-jay/" className="mx-2">
            <FaLinkedin
              size={25}
              className="text-[#71b7fb] hover:opacity-80 transition"
            />
          </Link>
          <Link href="https://twitter.com/bytes_nova" className="mx-2">
            <FaTwitter
              size={25}
              className="text-[#0866ff] hover:opacity-80 transition"
            />
          </Link>
          <Link
            href="https://web.facebook.com/victorjohn.aderibigbe.7"
            className="mx-2"
          >
            <FaFacebook
              size={25}
              className="text-[#1d9bf0] hover:opacity-80 transition"
            />
          </Link>
        </div>
      </div>
      <div className="p-4 text-xs text-white bg-primary-200 md:text-base">
        <span className="flex items-center justify-center">
          &copy;2024 Victor Aderibigbe | BytesNova&#8482;
        </span>
      </div>
    </div>
  );
};

export default Footer;
