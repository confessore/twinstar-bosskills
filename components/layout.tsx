import Header from "@/components/header";
import "@/app/globals.css";
import { Akshar } from "next/font/google";

const akshar = Akshar({ subsets: ["latin"] });

const main = `${akshar.className} flex flex-col min-w-full min-h-screen bg-amber-300 text-amber-800 opacity-90`;
const main_dark = `dark:bg-amber-900 dark:text-yellow-200`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={`${main} ${main_dark} ${akshar.className}`}>
        <Header />
        <div className="">{children}</div>
      </div>
    </>
  );
}
