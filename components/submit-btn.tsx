import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] font-semibold bg-primary text-background rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-foreground active:scale-105 disabled:scale-100 disabled:opacity-65"
      disabled={pending}
      aria-label="Submit Button"
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-foreground"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}