import Image from "next/image";
import img1 from "../../../../public/about-img1.png";
import img2 from "../../../../public/about-img2.png";
import img3 from "../../../../public/about-img3.png";
import img4 from "../../../../public/about-img4.png";
import googlePlayLogo from "../../../../public/google-play.png";

const AboutPage = () => {
  return (
    <div>
      <section className="flex flex-col p-10 md:flex-row-reverse">
        <div className="flex items-center justify-center pr-0 md:pr-72">
          <Image
            src={img1}
            alt="Picture of Muslim worshippers"
            className="rounded-xl"
          />
        </div>
        <div className="mt-10 text-center md:px-72 md:text-start md:mt-0">
          <div className="mb-5">
            <h2>Hyra Islamic Stories for Kids</h2>
          </div>
          <div>
            <p>
              It has been observed that some children lack proper fundamentals
              of Islamic teachings. Hyra is introduced to help kids know about
              the Islamic Teachings.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col p-10 md:flex-row md:bg-primary-300 bg-secondary-300">
        <div className="flex items-center justify-center pl-0 md:pl-72">
          <Image
            src={img2}
            alt="Picture of Muslim worshippers"
            className="rounded-xl"
          />
        </div>
        <div className="mt-10 text-center md:px-96 md:text-start md:mt-0">
          <p className="text-white">
            It has been observed that some children lack proper fundamentals of
            Islamic teachings. Hyra is introduced to help kids know about the
            Islamic Teachings.
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-between p-10 md:px-80 md:flex-row-reverse">
        <div className="flex items-center justify-center">
          <Image
            src={img3}
            alt="Picture of Muslim worshippers"
            className="rounded-xl max-h-[200px] max-w-[200px]"
          />
        </div>
        <div className="mt-10 text-center md:pr-96 md:text-start md:mt-0">
          <p>
            The target audience for this app is kids between the ages of 7-12
          </p>
        </div>
      </section>

      <section className="flex flex-col p-10 md:flex-row bg-secondary-300">
        <div className="flex items-center justify-center pl-0 md:pl-72">
          <Image
            src={img4}
            alt="Picture of Muslim worshippers"
            className="rounded-xl"
          />
        </div>
        <div className="mt-10 text-center md:px-96 md:text-start md:mt-0">
          <p className="text-white">
            The app combines Islamic teaching, Stories of the Prophet, Stories
            of the Companion, Du’a, quizzes and interactive activities to make
            learning about Islam enjoyable and fun for young mind
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center py-10">
        <Image src={googlePlayLogo} alt="Google play Store Logo" width={300} />
      </section>
    </div>
  );
};

export default AboutPage;
