import Image from "next/image";

export default function Header({ uniName, uniLogo }: HeaderProps) {
    return (
        <header className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 px-6 py-4 bg-white/10 backdrop-blur-md border-b border-white/20 rounded-b-xl shadow-md">
            
            {/* Left: Logo */}
            <div className="flex items-center justify-center sm:justify-start w-full sm:w-1/3">
                <Image 
                    src={uniLogo || "/globe.svg"} 
                    alt="Logo" 
                    width={48} 
                    height={48} 
                    className="rounded-full bg-blue-100 p-1" 
                />
            </div>

            {/* Center: Name */}
            <h1 className="text-lg sm:text-2xl text-blue-100 tracking-wide text-center font-mono font-light w-full sm:w-1/3">
                {uniName}
            </h1>

            {/* Right: Admin label */}
            <div className="w-full sm:w-1/3 flex justify-center sm:justify-end">
                <span className="text-sm sm:text-base font-medium bg-blue-200 text-gray-800 px-4 py-2 rounded-full">
                    Admin dashboard
                </span>
            </div>
        </header>
    );
}

interface HeaderProps {
    uniName: string;
    uniLogo: string;
}
