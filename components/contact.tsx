"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { emailId } from "@/lib/data";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-muted-foreground -mt-6">
        Please contact me directly at{" "}
        <a 
          className="underline text-primary hover:text-primary/90 transition-colors" 
          href={"mailto:"+emailId}
        >
          {emailId}{" "}
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-muted bg-card-background focus:bg-transparent transition-all outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          style={{ color: "var(--foreground)" }}
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-muted p-4 bg-card-background focus:bg-transparent transition-all outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          style={{ color: "var(--foreground)" }}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}