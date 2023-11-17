import Navbar from "@/components/navbar";

export default ({children}: {children : React.ReactNode}) => {
    return (
        <div className="">
            <Navbar/>
            {children}
        </div>
    );
}