import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-[calc(100vh-40px)] flex-col items-start justify-center pt-7"
    >
      <div>
        <h1 className="text-4xl text-gray-700 underline decoration-current decoration-2 underline-offset-4 dark:text-gray-300">
          Let{"'"}s work together.
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Get in touch or shoot me an email directly on{" "}
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            mobenkhattab@gmail.com.
          </span>
        </p>
      </div>
      <form className="mt-6 grid w-full gap-4 font-semibold text-gray-700 md:grid-cols-2 dark:text-gray-200">
        <div className="grid w-full gap-1">
          <label className="">Name</label>
          <input
            type="text"
            className="h-10 rounded-md border-2 border-gray-600 p-2 focus:outline-none"
          />
        </div>
        <div className="flex w-full flex-col gap-1">
          <label className="">Email</label>
          <input
            type="text"
            className="h-10 rounded-md border-2 border-gray-600 p-2 focus:outline-none"
          />
        </div>
        <div className="flex w-full flex-col gap-1 md:col-span-2">
          <label className="">Subject</label>
          <input
            type="text"
            className="h-10 rounded-md border-2 border-gray-600 p-2 focus:outline-none"
          />
        </div>
        <div className="flex w-full flex-col gap-1 md:col-span-2">
          <label className="">Message</label>
          <textarea className="h-32 rounded-md border-2 border-gray-600 p-2 focus:outline-none" />
        </div>
        <button
          type="submit"
          className="mt-2 h-10 w-full rounded-md border-2 border-gray-600 bg-white text-gray-600 hover:bg-gray-100 md:col-span-2"
        >
          Submit
        </button>
      </form>
      <Link
        href="/#home"
        className="mt-4 flex items-center justify-start gap-3 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
      >
        <h2 className="text-md">Go back home</h2>
        <div className="w-4 translate-y-[1px] animate-pulse">
          <FaArrowRightLong size="100%" />
        </div>
      </Link>
    </section>
  );
}
