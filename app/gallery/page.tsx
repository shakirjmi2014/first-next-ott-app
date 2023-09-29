"use client";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href={{
            pathname: "/player",
            query: { url: "/NextJs in 7 Minutes.mp4" },
          }}
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>NextJs in 7 Minutes</h2>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
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

        <Link href="/NextJs in 7 Minutes copy.mp4">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            NextJs in 7 Minutes copy
          </h2>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/Next JS tutorial 1.PNG"
            alt="NextJs in 7 Minutes copy Logo"
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

        <Link href="/NextJs in 7 Minutes copy 2.mp4">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            NextJs in 7 Minutes copy 2
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

        <Link href="/NextJs in 7 Minutes copy 3.mp4">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            NextJs in 7 Minutes copy 3
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

        <Link href="/NextJs in 7 Minutes copy 4.mp4">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            NextJs in 7 Minutes copy 4
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