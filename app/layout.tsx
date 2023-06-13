import Header from "@/components/header";
import "./globals.css";
import { Akshar } from "next/font/google";

const akshar = Akshar({ subsets: ["latin"] });

export const metadata = {
  title: "TwinStar WoW Boss Kills",
  description: "",
};

const main = `${akshar.className} flex flex-col min-w-full min-h-screen bg-slate-300 text-slate-800 opacity-90`;
const main_dark = `dark:bg-slate-800 dark:text-slate-300`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <>
          <meta name="format-detection" content="telephone=no" />
          <div className={`${main} ${main_dark} ${akshar.className}`}>
            <Header />
            <div className="">{children}</div>
          </div>
        </>
      </html>
    </>
  );
}
