import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-4xl w-full mx-auto py-10 pb-20 px-10 flex flex-col md:flex-row gap-x-6">
      <div className="">
        <Image
          src={"/abhi.jpeg"}
          alt="profile"
          width={480}
          height={480}
          className="w-28 h-28 object-cover rounded-full"
        />
      </div>
      <div className="py-6 flex-1">
        <h1 className="text-3xl font-semibold text-gray-200 pb-1">
          Abhishek Patel
        </h1>
        <h4 className="text-gray-300 font-medium">Full Stack Developer</h4>
        <p className="mt-5 text-gray-300 leading-relaxed">
          Hi, I&apos;m Abhishek, I called myself a self made full stack
          developer because I learn development by building things. My coding
          journey begins in 11th grade, Started with Html & CSS then tried
          different tech stack, JavaScript, Python, Flask, Django, React, Mern,
          React native & Nextjs.
        </p>
        <p className="mt-5 text-gray-300 leading-relaxed">
          Currently I am an intern as a NextJs developer, recently started
          freelancing, and Building cool things in side!
        </p>

        {/* skills section */}
        <div className="pt-5">
          <h2 className="font-medium border-b border-gray-700 pb-2 w-fit pr-16 text-lg">
            Skills
          </h2>
          <div className="grid grid-cols-3 gap-6 items-center pt-5 max-w-sm justify-between">
            <Image
              src={"/languages/nextjs.svg"}
              alt=""
              width={30}
              height={30}
              className=""
            />
            <Image
              src={"/languages/react.svg"}
              alt=""
              width={35}
              height={35}
              className=""
            />
            <Image
              src={"/languages/js.svg"}
              alt=""
              width={30}
              height={30}
              className=""
            />
            <Image
              src={"/languages/python.svg"}
              alt=""
              width={30}
              height={30}
              className=""
            />
            <Image
              src={"/languages/tailwind.svg"}
              alt=""
              width={35}
              height={35}
              className=""
            />
            <Image
              src={"/languages/ts.svg"}
              alt=""
              width={30}
              height={30}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
