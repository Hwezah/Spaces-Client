import { ReservationProvider } from "@/app/_components/ReservationContext";
import Header from "./_components/Header";
import { Josefin_Sans } from "next/font/google";
import Footer from "./_components/Footer";
import ScrollToTopButton from "@/app/_components/ScrollToTopButton";
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
        className={`${josefin.className} min-h-screen bg-primary-950 text-primary-100 flex flex-col antialiased `}
      >
        <Header />
        <div className="px-4 py-12 mx-auto grid">
          <main className="max-w-[120rem] w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
          <ScrollToTopButton />
        </div>
        <Footer />
      </body>
    </html>
  );
}
