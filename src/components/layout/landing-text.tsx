import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";
import { buttonVariants } from '../ui/button';
import Link from 'next/link';

const LandingText: React.FC = () => {
    return (
        <div>

            <div className="flex flex-col items-center justify-center h-[100vh] w-[100vw] text-center ">

                <div className="right">
                    <div className=" up flex justify-center w-[50vw] h-[70vh]">
                        <div className="left flex flex-col justify-center items-center h-full w-[30vw] text-left">
                            <h1 className="text-6xl font-bold text-white dark:text-white">
                                Your one stop  for sending
                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        "gifts.",
                                        1000,
                                        "packages.",
                                        1000,
                                        "stationary.",
                                        1000,
                                        "medicine.",
                                        1000,
                                        "electronics.",
                                        1000,
                                        "books.",
                                        1000,
                                        // wait 1s before replacing "Mice" with "Hamsters"
                                    ]}
                                    wrapper="div"
                                    speed={50}
                                    repeat={Infinity}
                                />

                            </h1>
                            <p className="mt-8 mb-3 text-md text-white dark:text-white">
                                WebWay empowers you to send packages, gifts and many more within your region quickly, conveniently, and affordably.We offer a faster and more cost-effective alternative to traditional courier services.  Schedule deliveries online, track your package, and enjoy a hassle-free experience.
                            </p>
                            <div className="but flex justify-start w-[400px]  h-[100px] items-center z-20">
                            <Link
                                href="/parcel"
                                className={buttonVariants({
                                    variant: "bodblue",
                                    size: "lg",
                                })}
                                style={{ marginRight: "20px" }}
                               
                            >
                                Get Started
                            </Link>
                            <Link
                                href="/bus/id"
                                className={buttonVariants({
                                    variant: "bodblue",
                                    size: "lg",
                                })}
                                
                            >
                                Track
                            </Link>
                            </div>
                        </div>

                    </div>
                    <Image className="absolute bottom-0" src='city_shadow.svg' alt='city' layout='fill' objectFit='cover' />
                    <Image className="absolute bottom-0 " src='girlwith_money.svg' alt='city' layout="fill" />
                    <Image className="absolute bottom-0" src='phonedelivery_guy.svg' alt='city' layout="fill" />
                    <div className=" relative down w-[100vw] h-[30vh] z-10 bg-[#0089a3] "></div>
                </div>
            </div>

        </div>
    );
};

export default LandingText;
