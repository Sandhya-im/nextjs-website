import React from "react";
import Image from "next/image";
import logo from '../Assets/logo.jpg'

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#0a6879] mt-20 text-white">
        <div className="px-5 md:px-20 grid grid-cols-12 gap-6 py-5">
          <div className="md:col-span-4 col-span-12 gap-5 bg-[#0d9ab973] rounded-lg p-2 flex items-center">
            <i className="bi bi-telephone-fill text-4xl text-white mb-2"></i>
            <div className="flex flex-col">
              <p className="text-lg font-medium">Phone Number</p>
              <p className="text-sm font-bold">+974 3118 1843</p>
            </div>
          </div>

          <div className="md:col-span-4 col-span-12 gap-5 bg-[#0d9ab973] rounded-lg p-2 flex items-center">
            <i className="bi bi-envelope-at-fill text-4xl text-white mb-2"></i>
            <div className="flex flex-col">
              <p className="text-lg font-medium">Email Address</p>
              <p className="text-sm font-bold">Elbrithcqr@gmail.com</p>
            </div>
          </div>

          <div className="md:col-span-4 col-span-12 gap-5 bg-[#0d9ab973] rounded-lg p-2 flex items-center">
            <i className="bi bi-geo-alt-fill text-4xl text-white mb-2"></i>
            <div className="flex flex-col">
              <p className="text-lg font-medium">Office Location</p>
              <p className="text-sm font-bold">Ambassador Street, Zone 61</p>
            </div>
          </div>

          <div className="h-12 w-20 md:col-span-4 col-span-4 md:ml-20 gap-5 p-2">
            <Image src={logo} width={80} height={50} alt="" />
          </div>
          <div className="md:col-span-4 col-span-8 gap-5 p-2">
            <p className="text-[13px]">
              Your health, physical and emotional well-being is important to us.
              We are always by your side and have made it even easier for you to
              find the necessary vitamins.
            </p>
          </div>
          <div className="md:col-span-4 hidden gap-5"></div>

          <div className="col-span-12  text-[10px] flex gap-5">
            <i className="bi bi-geo-alt"></i>
            <p>
              Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
              400051
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
