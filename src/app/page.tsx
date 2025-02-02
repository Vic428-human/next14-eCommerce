import Image from "next/image";
import { CircleCheckBig } from "lucide-react";
import MaxWidthWrapper from "../components/MaxWidthWrapper";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-10 ">
          <div className="">
            {/* Left Column */}
            <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start text-center sm:text-left">
              {/* Logo */}
              <div className="w-28 left-0 top-0 hidden lg:block">
                <Image
                  src="/snake-1.png"
                  alt="Snake logo"
                  className="w-full"
                  width={112}
                  height={112}
                />
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Your Image on a{" "}
                <span className="inline-block">
                  <span className="bg-green-500 text-white px-2 py-1">
                    Custom
                  </span>{" "}
                  Phone Case
                </span>
              </h1>
              <p className="mt-8 text-lg max-w-prose text-balance">
                Capture your favorite memories with your own,
                <span className="font-semibold">one-of-one</span> phone case.
                CaseCobra allows you to protect your memories, not just your
                phone.
              </p>

              {/* Features List */}
              <ul className="mt-8 space-y-4 font-medium">
                {[
                  "High-quality, durable material",
                  "5 year print guarantee",
                  "Modern iPhone models supported",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-1.5">
                    {/* <Check className="text-green-500 w-5 h-5" /> */}
                    <CircleCheckBig className="text-green-500 w-5 h-5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Phone Mockup */}
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
