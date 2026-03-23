"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "Web Developer",
  "MERN Stack Developer",
  "Frontend Developer",
  "React.Js Developer",
  "Software Developer",
];
const index = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[index];

    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000); // pause before delete
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <section className="print-page resume-page relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center">
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1>I'm Kunal</h1>
                <div className="wave">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={62}
                    height={62}
                    className=""
                  />
                </div>
              </div>
              {/* <h2>Full Stack Developer</h2> */}
              <h2 className="text-primary">
                {text}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
            <p className="text-gray-600 text-lg font-normal max-w-md xl:max-w-xl">
              My Name is Kunal Deotale. I Have Worked In Multiple Roles
              Including Frontend Developer, Web Developer, React.js Developer,
              And MERN Stack Developer. I Have Strong Expertise In Technologies
              Like Html, Css, Java Script, React.js, Node.js, Express, And Mongo
              Db, Which Enables Me To Develop Scalable And Efficient End To End
              Solutions.
            </p>
          </div>
          <Image
            src={getImgPath("/images/home/banner/kunal-image.png")}
            alt="kunal-image"
            width={585}
            height={650}
            className="block lg:hidden"
          />
        </div>
      </div>
      <div className="absolute right-0 top-0 hidden h-auto w-1/2 lg:block 2xl:h-171.5 2xl:w-187.5">
        <Image
          src={getImgPath("/images/home/banner/kunal-image.png")}
          alt="kunal-image"
          width={585}
          height={650}
          className=" absolute right-0 top-0 z-1"
        />
      </div>
    </section>
  );
};

export default index;
