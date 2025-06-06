import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Pill from "@/components/common/Pill";
import { BACKGROUND_IMAGE, PROPERTYLISTINGSAMPLE } from "@/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const filters = [
  "Top Villa",
  "Self Check-in",
  "Pet Friendly",
  "Pool Access",
  "Mountain View",
  "Beachfront",
];

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col gap-[32px] row-start-2 w-full">
        {/* ---------- HERO SECTION ---------- */}
        <section
          className="h-[60vh] relative flex items-center justify-center text-center w-full"
          style={{
            backgroundImage: `url(${BACKGROUND_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 max-w-2xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Find your favorite place here!
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              The best prices for over 2 million properties worldwide.
            </p>
          </div>
        </section>

        {/* ---------- FILTER SECTION ---------- */}
        <section className="py-8 bg-white w-full">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Filters
            </h2>
            <div className="flex flex-wrap">
              {filters.map((label) => (
                <Pill
                  key={label}
                  label={label}
                  onClick={() => {
                    // replace with real filter logic
                    console.log(`Clicked filter: ${label}`);
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ---------- LISTING SECTION ---------- */}
        <section className="py-8 bg-gray-50 w-full">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROPERTYLISTINGSAMPLE.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={property.image}
                    alt={property.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {property.name}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    ${property.price} / night
                  </p>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-gray-700 text-sm">
                      {property.rating} / 5
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}