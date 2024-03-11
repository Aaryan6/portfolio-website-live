import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { getBio } from "../actions";

export default async function About() {
  const bio = await getBio();
  return (
    <div className="max-w-4xl w-full mx-auto py-10 pb-20 px-10 flex flex-col md:flex-row gap-x-6">
      <div className="">
        <Image
          src={"/profile.jpg"}
          alt="profile"
          width={480}
          height={480}
          className="w-28 h-28 object-cover rounded-full"
        />
      </div>
      <div className="py-6 flex-1">
        <h1 className="text-3xl font-semibold text-gray-200 pb-1">
          Aaryan Patel
        </h1>
        <h4 className="text-gray-300 font-medium">Full Stack Developer</h4>
        <p className="mt-5 text-gray-300 leading-relaxed whitespace-pre-wrap">
          {bio}
        </p>

        {/* social media icons */}
        <div className="py-6 flex gap-x-4">
          <a href="https://github.com/Aaryan6" target="_blank">
            <button className="group rounded-lg border p-3 transition-colors border-neutral-700 hover:bg-neutral-800/30">
              <Github size={20} color="#fafafa" />
            </button>
          </a>
          <a href="https://www.linkedin.com/in/aaryanpatel6" target="_blank">
            <button className="group rounded-lg border p-3 transition-colors border-neutral-700 hover:bg-neutral-800/30">
              <Linkedin size={20} color="#fafafa" />
            </button>
          </a>
          <a href="https://twitter.com/aaryanpatel_06" target="_blank">
            <button className="group rounded-lg border p-3 transition-colors border-neutral-700 hover:bg-neutral-800/30">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
              </svg>
            </button>
          </a>
        </div>

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
