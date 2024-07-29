import Link from "next/link";
import Image from "next/image";
import { JSX, SVGProps } from "react";

export function LandingPage() {
  return (
    <div className="bg-[#fef9ed] text-[#333] min-h-[100dvh] flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Image
            src={"/buzzsvg.svg"}
            alt={"Bus Buzzer logo"}
            width="24"
            height="24"
          ></Image>
          <span className="sr-only">Bus Buzzer</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 overflow-x-auto">
          <Link
            href="#features"
            className="text-lg font-medium hover:underline underline-offset-4 text-[#fdb813]"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#about"
            className="text-lg font-medium hover:underline underline-offset-4 text-[#fdb813]"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="/login"
            className="text-lg font-medium hover:underline underline-offset-4 text-[#fdb813]"
            prefetch={false}
          >
            Login
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#fef9ed]">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-[#333]">
                    Bus Buzzer
                  </h1>
                  <p className="max-w-[600px] text-[#666] md:text-xl">
                    Keeping parents and teachers connected with real-time bus
                    tracking and notifications.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-[#fdb813] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#fdb813]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Download
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-[#fdb813] bg-[#fef9ed] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#fdb813] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <Image
                src="/buzz.png"
                width="512"
                height="512"
                alt="Friendly Bee"
                className="mx-auto overflow-hidden rounded-xl object-cover w-full max-w-[512px] sm:max-w-full lg:order-last lg:w-auto"
                // className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#f7f2e9]"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-[#fdb813] px-3 py-1 text-sm text-white my-auto">
                Key Features
              </div>

              <div className="space-y-2">
                {/* <div className="inline-block rounded-lg bg-[#fdb813] px-3 py-1 text-sm text-white my-auto">Key Features</div> */}
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#333]">
                  Simplify Your School Bus Commute
                </h2>
                <p className="max-w-[900px] text-[#666] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Bus Buzzer provides real-time bus tracking, notifications, and
                  communication tools to keep parents and teachers connected.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#333]">
                        Real-Time Bus Tracking
                      </h3>
                      <p className="text-[#666]">
                        Monitor your child's bus in real-time, so you always
                        know where they are.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#333]">
                        Arrival Notifications
                      </h3>
                      <p className="text-[#666]">
                        Receive alerts when the bus is approaching your stop, so
                        you're never late.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-[#333]">
                        Parent-Teacher Communication
                      </h3>
                      <p className="text-[#666]">
                        Stay connected with your child's school through secure
                        messaging and updates.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Image
                src="/bus.png"
                width="550"
                height="310"
                alt="Bee Features"
                className="mx-auto overflow-hidden rounded-xl object-cover w-full max-w-[550px] sm:max-w-full lg:order-last lg:w-auto"
                // className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#fef9ed]"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-[#fdb813] px-3 py-1 text-sm text-white">
                  About Bus Buzzer
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-[#333]">
                  Connecting Parents and Schools
                </h2>
                <p className="max-w-[600px] text-[#666] md:text-xl/relaxed">
                  Bus Buzzer was created to simplify the school bus commute for
                  families. By providing real-time tracking, notifications, and
                  communication tools, we aim to give parents peace of mind and
                  help schools better serve their communities.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-[#fdb813] px-3 py-1 text-sm text-white">
                  Our Mission
                </div>
                <p className="mx-auto max-w-[700px] text-[#666] md:text-xl/relaxed">
                  At Bus Buzzer, we believe that technology can make the school
                  bus experience more efficient and connected. Our mission is to
                  empower parents and schools with the tools they need to
                  streamline transportation and foster stronger relationships.
                </p>
                <Link
                  href="#"
                  className="inline-flex h-9 items-center justify-center rounded-md bg-[#fdb813] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#fdb813]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Download App
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="download"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#f7f2e9]"
        >
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#333]">
                Download Bus Buzzer Today
              </h2>
              <p className="mx-auto max-w-[600px] text-[#666] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get the app and start tracking your child's bus in real-time.
                Available on iOS and Android.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#fdb813] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#fdb813]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Download on iOS
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#fdb813] bg-[#f7f2e9] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#fdb813] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Download on Android
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#fef9ed]">
        <p className="text-xs text-[#666]">
          &copy; 2024 Bus Buzzer. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-[#fdb813]"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4 text-[#fdb813]"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function BeakerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 3h15" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <path d="M6 14h12" />
    </svg>
  );
}

function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
