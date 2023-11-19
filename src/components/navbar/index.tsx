export default () => {
  return (
    <nav className="h-[80px] mx-3 flex justify-between items-center md:w-[90%] lg:w-[80%] xl:w-[70%] md:mx-auto">
      <h1 className="font-pacifico text-xl">Benkhattab</h1>
      <ul className="flex flex-row gap-2 text-gray-700 mt-1">
        <li className="">
          <a href="/#contact">contact</a>
        </li>
        <li className="">
          <a href="/#about">about</a>
        </li>
        <li className="">
          <a href="/#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
};
