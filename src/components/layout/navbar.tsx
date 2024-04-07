import Link from "next/link";
// import { Home } from "lucide-react";
import Image from "next/image";
import { buttonVariants } from "../ui/button";
import MaxWidthWrapper from "./max-width-wrapper";
import AuthButton from "../auth/authButton";

export function Navbar() {
  return (
    <>
      <nav className="sticky inset-x-0 top-0 z-30 my-3 h-16 w-full  backdrop-blur-lg transition-all dark:bg-black">
        <MaxWidthWrapper>
          <div className="cover flex w-full justify-center">
            <div
              className="flex h-16 w-1/2 items-center justify-between rounded-full border border-gray-100 bg-gray-500 bg-opacity-50 bg-clip-padding px-3 backdrop-blur-sm

 backdrop-filter"
            >
              <Link href="/" className="z-40 flex font-semibold">
                <div className="flex h-14 items-center justify-between gap-3">
                  <Image src="/logo.png" alt="logo" width={70} height={70} />
                  <span className="text-2xl font-bold text-white">WebWay</span>
                </div>
              </Link>
              <div className="hidden items-center space-x-4 sm:flex">
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    variant: "hovblue",
                    size: "sm",
                  })}
                >
                  Home
                </Link>
                <Link
                  href="/events"
                  className={buttonVariants({
                    variant: "hovblue",
                    size: "sm",
                  })}
                >
                  About
                </Link>
                <Link
                  href="/team"
                  className={buttonVariants({
                    variant: "hovblue",
                    size: "sm",
                  })}
                >
                  Contact
                </Link>

                <AuthButton />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
}
