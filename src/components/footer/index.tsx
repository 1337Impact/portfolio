import MediaLinks from "../MediaLinks";

export default function Footer() {
  return (
    <footer className="flex h-[40px] items-center justify-center text-slate-900 dark:text-slate-300">
      <MediaLinks size="xl" />
    </footer>
  );
}
