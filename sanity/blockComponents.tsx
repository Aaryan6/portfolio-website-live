import { PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "./image";
import Link from "next/link";

export const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-semibold my-2 leading-relaxed">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-semibold my-2 leading-relaxed">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold my-2 leading-relaxed">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl font-semibold my-2 leading-relaxed">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-base md:text-lg leading-relaxed text-gray-300 py-2">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-l-white pl-5 py-5 bg-[#101720]">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className="w-full h-auto aspect-[5/3] relative my-10">
        <Image
          src={urlForImage(value)?.url()}
          alt=""
          fill
          className="object-cover object-center rounded-md"
        />
      </div>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <Link href={value?.href} className="underline decoration-white">
        {children}
      </Link>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="list-disc list-inside">{children}</li>
    ),
    numbered: ({ children }) => (
      <li className="list-decimal list-inside">{children}</li>
    ),
  },
};

export const projectComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-semibold my-2 leading-relaxed">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-semibold my-2 leading-relaxed">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold my-2 leading-relaxed">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl font-semibold my-2 leading-relaxed">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-base md:text-lg leading-relaxed text-gray-900 py-2">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-l-black pl-5 py-5 bg-[#cfcfcf]">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className="w-full h-auto aspect-[5/3] relative my-10">
        <Image
          src={urlForImage(value)?.url()}
          alt=""
          fill
          className="object-cover object-center rounded-md"
        />
      </div>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <Link href={value?.href} className="underline decoration-black">
        {children}
      </Link>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="list-disc list-inside">{children}</li>
    ),
    numbered: ({ children }) => (
      <li className="list-decimal list-inside">{children}</li>
    ),
  },
};
