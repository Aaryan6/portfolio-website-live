import { Gabarito } from "next/font/google";
import Particles from "@/components/particles";
import { getTagline } from "./actions";

const gbfont = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default async function Home() {
  const tagline = await getTagline();

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
        <p className={`${gbfont.className} mt-6 text-gray-400`}>{tagline}</p>
      </div>
    </main>
  );
}
