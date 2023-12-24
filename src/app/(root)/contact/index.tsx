export default function Contact() {
  return (
    <section
    id="contact"
    className="flex min-h-screen flex-col items-start justify-center gap-6 pt-7 "
  >
    <h1 className="text-4xl text-gray-700 underline decoration-current decoration-2 underline-offset-4 dark:text-gray-300">
      Let{"'"}s work together.
    </h1>
    <form className="grid w-full gap-4 md:grid-cols-2 text-gray-700 dark:text-gray-200 font-semibold">
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
        className="mt-2 h-10 w-full rounded-md border-2 text-gray-600 border-gray-600 bg-white hover:bg-gray-100 md:col-span-2"
      >
        Submit
      </button>
    </form>
  </section>
  );
}