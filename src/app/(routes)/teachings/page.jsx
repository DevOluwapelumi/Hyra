"use client";

import TeachingCard from "@/components/teachings/TeachingCard";
import { useEffect, useState } from "react";
import axios from "axios";

const TeachingsPage = () => {
  const [teachings, setTeachings] = useState([]);

  useEffect(() => {
    axios
      .get("api/teachings/teachings")
      .then((res) => {
        console.log(res);
        setTeachings(res.data.teachings);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <section className="px-2 mb-10 md:px-10">
      <h1 className="text-center">Our Teachings</h1>
      <div className="grid grid-cols-4 gap-2 px-2 md:gap-6 md:px-32">
        {teachings.map((teaching) => (
          <div key={teaching.id} className="col-span-4 md:col-span-1">
            <TeachingCard
              img={teaching.img}
              alt={teaching.alt}
              title={teaching.title}
              content={teaching.content}
              url={`/teachings/${teaching.id}`}
              bgColor={teaching.bgColor}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeachingsPage;
