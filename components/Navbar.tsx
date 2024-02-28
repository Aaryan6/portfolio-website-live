import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="h-[8rem] px-6 flex flex-col md:flex-row justify-between w-full items-center max-w-7xl mx-auto">
      <div className="pt-6 pb-2 md:pt-0 md:pb-0">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="Aaryan"
            width={808}
            height={378}
            className="h-12 w-auto"
            priority
          />
        </Link>
      </div>
      <div className="flex gap-x-1 md:gap-x-3 w-full max-w-xs justify-between items-center">
        <Link
          href="/about"
          className="group rounded-lg border border-transparent px-3 md:px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`text-lg md:text-xl font-semibold`}>
            About{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>

        <Link
          href="/projects"
          className="group rounded-lg border border-transparent px-3 md:px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`text-lg md:text-xl font-semibold`}>
            Projects{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
        </Link>
      </div>
    </header>
  );
}
