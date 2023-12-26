import { use, useEffect, useRef } from "react";

export default function VideoDemo({demo, placeholderImg}: {demo: string, placeholderImg?: string}) {
    const videoRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current as any;
        const placeholder = imgRef.current as any;
        video.onloadeddata = function() {
            video.classList.remove('hidden');
            placeholder.classList.add('hidden');
          };
    }, []);
    return (
        <div>
          <video ref={videoRef} className="h-full w-full object-cover hidden" autoPlay loop muted>
            <source src={demo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <img ref={imgRef} src={demo} alt={"placeholder image"} className="h-full w-full object-cover" />
        </div>
    );
};