import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface CardProps {
  heading: string;
  buttonText: string;
  content: string;
  link: string;
  imagesrc: string;
}

export const Card: React.FC<CardProps> = ({
  heading,
  buttonText,
  content,
  link,
  imagesrc,
}) => {
  return (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#824949] transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div className="h-[36rem] w-[25rem] rounded-xl">
        <Image
          height={500}
          width={500}
          className="object-fit pt-20 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={imagesrc}
          alt={heading}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="text-3xl font-bold text-white">{heading}</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {content}
        </p>
        <Link href={link}>
          <Button variant={"bodblue"}>{buttonText}</Button>{" "}
        </Link>
      </div>
    </div>
  );
};
