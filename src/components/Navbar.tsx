import React from "react";
import { Menu } from "lucide-react";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="flex justify-between items-center py-4 px-12 bg-[#FF6666]">
        <h1 className="text-[48px] font-extrabold text-[#3A3A3A]">YK.</h1>
        <div className="hover:cursor-pointer">
          <Menu size={60} className=" text-[#3A3A3A]" />
        </div>
      </div>
    </nav>
  );
};
