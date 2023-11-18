import Navbar from "@/components/navbar";

export default ({children}: {children : React.ReactNode}) => {
    return (
        <div className="font-manrope font-normal overflow-x-hidden">
            <Navbar/>
            {children}
        </div>
    );
}