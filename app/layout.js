import { ReservationProvider } from "@/app/_components/ReservationContext";
import Header from "./_components/Header";
import { Josefin_Sans } from "next/font/google";
import Footer from "./_components/Footer";
import ScrollToTopButton from "@/app/_components/ScrollToTopButton";

import { ModeToggle } from "@/components/ui/themeModeToggle";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";
export const metadata = {
  title: {
    default: "Welcome / Spaces",
    template: "%s / Spaces",
  },
  description:
    "Luxurious space hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} min-h-screen  -100 flex flex-col antialiased dark:bg-background bg-background dark:text-foreground text-foreground`}
      >
        <Header />
        <div className="px-4 pt-12 mx-auto ">
          <main className="max-w-[120rem] w-full relative">
            <ReservationProvider>{children}</ReservationProvider>
            <ModeToggle className="fixed top-1/2 right-4 border border-white/10 rounded-full -mt-4 p-2" />
          </main>
          <ScrollToTopButton />
        </div>
        <Footer />
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
