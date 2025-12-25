import React from "react";

export default function Navbar() {
    return (
        <header className="w-full  px-[173px] py-[47px]">
            <nav
                className="
          flex items-center justify-between
          w-[1093px]
          h-[45px]
          mx-auto
          font-['Work_Sans']
        "
            >
                {/* Logo */}
                <div className="flex items-center gap-[6px]">
                    <img
                        src="/imglogo.png"
                        alt="Agon Logo"
                        className="w-[34px] h-[34px]"
                    />
                    <span className="text-black text-[20px] font-semibold">
                        agon
                    </span>
                </div>

                {/* Menu */}
                <ul className="flex items-center gap-[36px] text-[15px] font-medium">
                    <li className="text-[#0EA5E9] cursor-pointer">Home</li>
                    <li className="text-[#6B7280] cursor-pointer">About</li>
                    <li className="text-[#6B7280] cursor-pointer">Company</li>
                    <li className="text-[#6B7280] cursor-pointer">Pages</li>
                    <li className="text-[#6B7280] cursor-pointer">Blog</li>
                    <li className="text-[#6B7280] cursor-pointer">Shop</li>
                </ul>

                {/* Button */}
                <button
                    className="
            h-[44px]
            px-[22px]
            rounded-full
            text-[14px]
            font-semibold
            text-white
            bg-gradient-to-r
            from-[#1E293B]
            to-[#0F172A]
          "
                >
                    Get Started
                </button>
            </nav>
        </header>
    );
}
