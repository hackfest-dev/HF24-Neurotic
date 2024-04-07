import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { api } from "~/utils/api";
import { Poppins } from "next/font/google";
import "~/styles/globals.css";
import { Navbar } from "~/components/layout/navbar";
import Footer from "~/components/layout/footer";
import "~/styles/globals.css";
import { Toaster } from "~/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "500",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={`${poppins.className}`}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
        <Footer />
      </main>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
