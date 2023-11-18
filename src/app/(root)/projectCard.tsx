interface Props {
  title: string;
  // description: string,
  date: string;
  image?: string;
  link?: string;
  tech?: string[];
  children: React.ReactNode;
}

export default ( {title, date, tech, children}: Props) => {
  return (
    <div className="py-3 border-2 border-slate-500 rounded-md p-4 hover:scale-[1.02] transition-all ease-in-out duration-300 shadow-xl cursor-pointer">
      <div className=" flex justify-between items-end border-b-2 border-gray-300 py-2">
        <h1 className="text-xl text-gray-600 font-medium">{title}</h1>
        <h3 className="text-xs text-gray-400 font-bold border-2 rounded px-2">
          {date}
        </h3>
      </div>
      <p className="text-gray-600 mt-1">
        {children}
      </p>
      <div>
        <ul className="mt-3">
          {
            tech && tech.map((item, index) => (
              <li key={index} className="inline-block border-2 border-gray-400 rounded-full px-3 py-[2px] text-sm font-semibold text-gray-500 mr-2">{item}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};
