import Image from "next/image";
import heroImg from "../../public/hero-img.png";
import card2Img from "../../public/card2-img.png";
import card3Img from "../../public/card3-img.png";
import card4Img from "../../public/card4-img.png";
import homeImg5 from "../../public/home-img5.png";
import WhyChooseUsCard from "@/components/home/WhyChooseUsCard";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import MyButton from "@/components/home/MyButton";

const page = () => {
  return (
    <div>
      <section id="hero" className="grid grid-cols-2 gap-2 p-10">
        <div className="block col-span-2 p-10 md:col-span-1 md:hidden">
          <Image
            src={heroImg}
            alt="Picture of Muslim worshippers"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-between col-span-2 text-center md:px-48 md:py-44 md:col-span-1 md:text-start">
          <div>
            <h1>Discover a world where education meets excitement</h1>
          </div>
          <div>
            <p>
              Our Islamic app for kids is designed to inspire and teach in the
              most enjoyable way. Our app is not just educational; it&#39;s an
              adventure in faith
            </p>
          </div>
        </div>
        <div className="hidden col-span-2 p-10 md:col-span-1 md:block">
          <Image
            src={heroImg}
            alt="Picture of Muslim worshippers"
            className="rounded-xl"
          />
        </div>
      </section>

      <section id="whyChooseUs" className="px-5 my-4 md:my-16 md:px-32">
        <h1 className="text-center">Why Choose Us?</h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 md:col-span-1">
            <WhyChooseUsCard
              bgColor={"bg-primary-200"}
              img={heroImg}
              alt={"Muslim worshippers"}
              text={
                "Our app contains the fundamental teaching of Islam for Kids"
              }
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <WhyChooseUsCard
              bgColor={"bg-secondary-200"}
              img={card2Img}
              alt={"Muslim worshippers"}
              text={
                "We make it interesting by including the the Stories of the Prophets and his Companions "
              }
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <WhyChooseUsCard
              bgColor={"bg-secondary-300"}
              img={card3Img}
              alt={"Muslim worshippers"}
              text={
                "As we all know that Du’a is an essential part of our life as a Muslim. Du’a is also included in our app"
              }
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <WhyChooseUsCard
              bgColor={"bg-secondary-100"}
              img={card4Img}
              alt={"Muslim worshippers"}
              text={"Our app contains the 99 Names of Allah"}
            />
          </div>
        </div>
      </section>

      <section id="teachings" className="px-4 my-8 md:px-32 md:my-16">
        <h1 className="text-center">Our Teachings</h1>
        <div className="grid grid-cols-4 gap-5 md:grid-cols-3">
          <div className="flex items-center justify-center w-full col-span-2 p-5 border rounded-lg md:col-span-1 border-primary-200 md:text-tertiary-200 h-[200px] font-bold md:text-3xl text-xl text-primary-200">
            Pillars of Islam
          </div>
          <div className="flex items-center justify-center w-full col-span-2 p-5 border rounded-lg md:col-span-1 md:border-primary-200 text-tertiary-200 h-[200px] font-bold md:text-3xl text-xl border-secondary-200">
            Articles of Faith
          </div>
          <div className="flex items-center justify-center w-full col-span-2 p-5 border rounded-lg md:col-span-1 md:border-primary-200 text-tertiary-200 h-[200px] font-bold md:text-3xl text-xl border-secondary-300">
            Stories of the Prophets
          </div>
          <div className="flex items-center justify-center w-full col-span-2 p-5 border rounded-lg md:col-span-1 md:border-primary-200 md;text-tertiary-200 md:hidden h-[200px] font-bold md:text-3xl text-xl border-secondary-100 text-tertiary-100">
            Stories of the companions
          </div>
        </div>
        <div className="flex items-center justify-center mt-5">
          <Link href="/teachings">
            <MyButton
              title={"View All"}
              icon={<FaArrowRightLong />}
              bgColor={"bg-primary-200"}
              color={"text-white"}
            />
          </Link>
        </div>
      </section>

      <section
        id="getStarted"
        className="grid grid-cols-2 px-4 mt-8 md:px-32 bg-secondary-300 md:mt-16"
      >
        <div className="grid grid-rows-2 gap-5 pt-6 md:p-32">
          <div>
            <h2 className="text-white">
              The Prophet (S.A.W) said “Seeking knowledge is an obligation upon
              every Muslim”
            </h2>
          </div>
          <div>
            <MyButton
              title={"Get started with us"}
              icon={<FaArrowRightLong />}
              bgColor={"bg-white"}
              color={"text-secondary-300"}
            />
          </div>
        </div>
        <div className="flex items-start py-6 md:py-0 md:items-center md:justify-center md:p-4">
          <Image
            src={homeImg5}
            alt="Two kids under moonlight"
            className="w-full rounded-lg md:w-2/4"
          />
        </div>
      </section>
    </div>
  );
};

export default page;
