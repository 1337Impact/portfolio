"use client";
import Link from "next/link";
import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import swal from "sweetalert";

export default function Contact() {
  const submitForm = (e: any) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    console.log(data);
    fetch("/api/sendmail", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((body) => {
        return body.json();
      })
      .then((res) => {
        swal(
          "Email sent successfully !",
          "I will get back to you as soon as possible",
          "success",
        );
      })
      .catch((err) => {
        swal("Error", "Something went wrong, please try again later", "error");
      });
      e.target.reset();
  };

  return (
    <main className="m-container md:my-10 flex-col"
      id="contact"
      // className="mt-20 flex min-h-[calc(100vh-40px)]  pt-7"
    >
      <div>
        <h1 className="text-2xl md:text-3xl text-gray-700 underline decoration-current decoration-2 underline-offset-4 dark:text-gray-300">
          Let{"'"}s work together.
        </h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          Get in touch or send me an email directly on{" "}
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            <a href="mailto:mobenkhattab@gmail.com">mobenkhattab@gmail.com</a>.
          </span>
        </p>
      </div>
      <form
        onSubmit={submitForm}
        className="mt-4 grid w-full gap-4 font-semibold text-gray-700 md:grid-cols-2 dark:text-gray-200"
      >
        <div className="grid w-full gap-1">
          <label className="">Name</label>
          <input
            required={true}
            minLength={5}
            maxLength={50}
            name="name"
            type="text"
            className="h-10 rounded-md border-2 border-gray-600 bg-transparent p-2 focus:outline-none dark:border-gray-200"
          />
        </div>
        <div className="flex w-full flex-col gap-1">
          <label className="">Email</label>
          <input
            name="email"
            type="email"
            required={true}
            className="h-10 rounded-md border-2 border-gray-600 bg-transparent p-2 focus:outline-none dark:border-gray-200"
          />
        </div>
        <div className="flex w-full flex-col gap-1 md:col-span-2">
          <label className="">Subject</label>
          <input
            minLength={3}
            name="subject"
            type="text"
            className="h-10 rounded-md border-2 border-gray-600 bg-transparent p-2 focus:outline-none dark:border-gray-200"
          />
        </div>
        <div className="flex w-full flex-col gap-1 md:col-span-2">
          <label className="">Message</label>
          <textarea
            required={true}
            minLength={5}
            maxLength={1000}
            name="message"
            className="h-28 rounded-md border-2 border-gray-600 bg-transparent p-2 focus:outline-none dark:border-gray-200"
          />
        </div>
        <button
          type="submit"
          className="mt-2 h-10 w-full rounded-md border-2 border-gray-600 bg-gray-600 text-gray-100 hover:bg-gray-700 md:col-span-2 dark:border-gray-200 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-100"
        >
          Submit
        </button>
      </form>
      <Link
        href="/#home"
        className="mt-4 flex items-center justify-start gap-3 text-gray-600 hover:text-gray-800 dark:text-gray-200 dark:hover:text-gray-100"
      >
        <h2 className="text-md">Go back home</h2>
        <div className="w-4 translate-y-[1px] animate-pulse">
          <FaArrowRightLong size="100%" />
        </div>
      </Link>
    </main>
  );
}
