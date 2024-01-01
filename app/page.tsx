import Image from "next/image";
import Link from "next/link";

import { Pixelify_Sans, Gabarito } from "next/font/google";
import Navbar from "../components/Navbar";
import Particles from "@/components/particles";

const pxfont = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const gbfont = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className="flex flex-col items-center p-6 md:p-12">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="py-20 text-center">
        <h1
          className={`${gbfont.className} text-5xl md:text-8xl text-gray-100 font-semibold`}
        >
          Aaryan Patel
        </h1>
        <p className={`${gbfont.className} mt-6 text-gray-400`}>
          Hi I&apos;m a full stack developer & a freelancer. Passionate to build
          crazy things.
        </p>
      </div>
    </main>
  );
}
