interface Props {
  title: string;
  // description: string,
  date: string;
  image?: string;
  link?: string;
  tech?: string[];
  children: React.ReactNode;
}

export default ( {title, date, children}: Props) => {
  return (
    <div className="border-2 border-slate-500 rounded-md p-4 hover:scale-[1.02] transition-all ease-in-out duration-300 shadow-xl cursor-pointer">
      <div className=" flex justify-between items-end border-b-2 py-2">
        <h1 className="text-xl text-gray-600 font-bold">{title}</h1>
        <h3 className="text-xs text-gray-400 font-bold border-2 rounded px-2">
          {date}
        </h3>
      </div>
      <p className="text-gray-500">
        {children}
      </p>
    </div>
  );
};
