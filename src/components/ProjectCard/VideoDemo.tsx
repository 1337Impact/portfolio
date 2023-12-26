import { use, useEffect, useRef, useState } from "react";

export default function VideoDemo({
  demo,
  placeholderImg,
}: {
  demo: string;
  placeholderImg?: string;
}) {
  const [isloaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(()=>{
      setIsLoaded(true);
    }, 2000);
  }, [isloaded]);

  return (
    <div>
      <video
        className={`${!isloaded && "hidden"} h-full w-full object-cover`}
        autoPlay
        loop
        muted
      >
        <source src={demo} type="video/mp4" onLoadedData={()=>setIsLoaded(true)} />
        Your browser does not support the video tag.
      </video>
      <img
        src={placeholderImg}
        alt={"placeholder image"}
        className={`${isloaded && "hidden"} h-full w-full object-cover`}
      />
    </div>
  );
}
