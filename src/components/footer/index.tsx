import MediaLinks from "../MediaLinks";

export default function Footer() {
  return (
    <footer className="flex mt-10 h-[60px] items-center justify-center text-slate-900 dark:text-slate-300">
      <MediaLinks size="xl" />
    </footer>
  );
}
