"use client";

import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";

const TeachingPage = ({ params }) => {
  const [teaching, setTeaching] = useState({});
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/teachings/teachings")
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        const data = res.data.teachings;
        data.map((item) => {
          const teachingId = item.id;
          if (Number(params.teachingId) === teachingId) {
            setTeaching(res.data.teachings[teachingId - 1]);
            setList(res.data.teachings[teachingId - 1].list);
          }
        });
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [params.teachingId]);

  return (
    <div className="w-full p-5 mx-auto md:w-2/4 md:min-h-[85vh]">
      {isLoading ? (
        <div className="h-[75vh] flex items-center justify-center">
          <Spinner color="warning" label="Loading..." size="lg" />
        </div>
      ) : (
        <div>
          <h1 className="text-center text-primary-200">{teaching.title}</h1>
          <div className="grid grid-cols-2">
            <div className="flex items-center justify-center col-span-2 mb-5 md:col-span-1 md:hidden">
              <Image src={teaching.img} alt={teaching.alt} width={200} />
            </div>
            <div className="flex flex-col items-start justify-center col-span-2 md:col-span-1">
              <h2 className="text-primary-200">{teaching.heading}</h2>
              <h3 className="my-3 text-xl font-medium">
                {teaching.subheading}
              </h3>
              <ol className="text-lg font-medium list-decimal list-inside">
                {list.map((item, idx) => (
                  <li key={item.id || idx}>{item}</li>
                ))}
              </ol>
            </div>
            <div className="items-center justify-end hidden col-span-2 md:flex md:col-span-1">
              <Image src={teaching.img} alt={teaching.alt} width={200} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeachingPage;
