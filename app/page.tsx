"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>
        <h2 className="text-4xl font-extrabold dark:text-white">
          Shakir OTT Flix - Home
        </h2>
      </div>
      <div className="relative flex place-items-center">
        <Link
          href="/gallery"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <Image
            className="shadow-xl bg-red rounded-xl 
            p-4 m-4 shadow-cyan-400 
            hover:scale-110
            duration-150 ease-in-out"
            src="/ShakirFlix.png"
            alt="ShakirFlix Logo"
            width={240}
            height={180}
            priority
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
            Find hand-picked customized unlimited video content of entertaining
            category by Shakir.
          </p>
        </Link>
      </div>

      <div className="mb-32 flex flex-row text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://www.youtube.com/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-center`}>YouTube</h2>
          <Image
            className="shadow-xl bg-red rounded-xl 
            p-4 m-4 shadow-cyan-400 
            hover:scale-125 
            duration-150 ease-in-out"
            src="/Youtube.jpg"
            alt="Youtube Logo"
            width={180}
            height={180}
            priority
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
            Find limitless video content of all lengths and category.
          </p>
        </a>

        <a
          href="https://www.netflix.com/in/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-center`}>Netflix</h2>
          <Image
            className="shadow-xl bg-red rounded-xl 
            p-4 m-4 shadow-cyan-400 
            hover:scale-125 
            duration-150 ease-in-out"
            src="/Netflix.png"
            alt="Netflix Logo"
            width={180}
            height={180}
            priority
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
            Find limitless video content of category drama, suspense, thriller
            in series and movies.
          </p>
        </a>

        <a
          href="https://www.hotstar.com/in/home"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-center`}>
            Disney Hotstar{" "}
          </h2>
          <Image
            className="shadow-xl bg-red rounded-xl 
            p-4 m-4 shadow-cyan-400 
            hover:scale-125 
            duration-150 ease-in-out"
            src="/DisneyHotstar.jpg"
            alt="Disney Hotstar Logo"
            width={180}
            height={180}
            priority
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
            Find limitless video content of all lengths and category.
          </p>
        </a>

        <a
          href="https://www.jiocinema.com/"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold text-center`}>
            Jio Cinema{" "}
          </h2>
          <Image
            className="shadow-xl bg-red rounded-xl 
           p-4 m-4 shadow-cyan-400 
           hover:scale-125 
           duration-150 ease-in-out"
            src="/JioCinema.jpg"
            alt="Jio Cinema Logo"
            width={180}
            height={180}
            priority
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-70`}>
            Find limitless video content of all lengths and category.
          </p>
        </a>
      </div>
    </main>
  );
}
