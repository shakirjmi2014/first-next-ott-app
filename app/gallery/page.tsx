"use client";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>
        <h2 className="text-4xl font-extrabold dark:text-white">Shakir OTT Flix - Media Gallery</h2>
      </div>
      <div className="mb-32 grid text-center lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href={{
            pathname: "/player",
            query: { url: "/NextJs in 7 Minutes.mp4" },
          }}
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>NextJs in 7 Minutes</h2>
          <Image
            className="shadow-xl bg-red rounded-xl 
            p-4 m-4 shadow-cyan-400 
            hover:scale-125 
            duration-150 ease-in-out"
            src="/Next JS tutorial.PNG"
            alt="NextJs in 7 Minutes Logo"
            width={360}
            height={280}
            priority
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            NextJs tutorial: In this nextjs introductory video, I will walk you
            through what next js is about and why you might want to consider it
            for your next production website!
          </p>
        </Link>

        <Link
          href="/NextJs in 7 Minutes.mp4"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            NextJs in 7 Minutes 1st
          </h2>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/Next JS tutorial 1.PNG"
            alt="NextJs in 7 Minutes 1st Logo"
            width={360}
            height={280}
            priority
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            NextJs tutorial: In this nextjs introductory video, I will walk you
            through what next js is about and why you might want to consider it
            for your next production website!
          </p>
        </Link>

        <Link
          href="/NextJs in 7 Minutes.mp4"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            NextJs in 7 Minutes 2nd
          </h2>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/Next JS tutorial 2.PNG"
            alt="NextJs in 7 Minutes copy 2 Logo"
            width={360}
            height={280}
            priority
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            NextJs tutorial: In this nextjs introductory video, I will walk you
            through what next js is about and why you might want to consider it
            for your next production website!
          </p>
        </Link>

        <Link
          href="/NextJs in 7 Minutes.mp4"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            NextJs in 7 Minutes 3rd
          </h2>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/Next JS tutorial 3.PNG"
            alt="NextJs in 7 Minutes copy 3 Logo"
            width={360}
            height={280}
            priority
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            NextJs tutorial: In this nextjs introductory video, I will walk you
            through what next js is about and why you might want to consider it
            for your next production website!
          </p>
        </Link>

        <Link
          href="/NextJs in 7 Minutes.mp4"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            NextJs in 7 Minutes 4th
          </h2>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/Next JS tutorial 4.PNG"
            alt="NextJs in 7 Minutes copy 4 Logo"
            width={360}
            height={280}
            priority
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            NextJs tutorial: In this nextjs introductory video, I will walk you
            through what next js is about and why you might want to consider it
            for your next production website!
          </p>
        </Link>
      </div>
    </main>
  ); 
}
