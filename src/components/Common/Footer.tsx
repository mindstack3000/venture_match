import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Feedback from "./Feedback";
import Image from "next/image";
import Logo from "../../assets/LogoBlack.png";

function Footer() {
  return (
    <>
      <div className="bg-[#0f172a] md:h-96 w-full flex md:flex-row flex-col justify-center items-center md:justify-around md:items-start p-4">
        <div className="left">
          <div>
            <Image
              src={Logo}
              alt=""
              className="object-scale-down max-h-full drop-shadow-md rounded-full m-auto "
              height={100}
              width={100}
            />
            <div className="p-4">
              <ul>
                <div className="flex gap-6 pb-5">
                  <FaInstagram className="text-white text-2xl cursor-pointer hover:text-yellow-600" />
                  <FaTwitter className="text-white text-2xl cursor-pointer hover:text-blue-600" />
                  <FaLinkedin className="text-white text-2xl cursor-pointer hover:text-blue-600" />
                  <FaYoutube className="text-white text-2xl cursor-pointer hover:text-red-600" />
                </div>
              </ul>
            </div>
            <div className="p-5">
              <ul>
                <p className="text-gray-800 font-bold text-2xl pb-4"></p>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                  Terms & Conditions
                </li>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                  FAQ
                </li>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                  Contact Us
                </li>
                <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                  Company Info
                </li>
              </ul>
            </div>
          </div>
        </div>

        <span className="right">
          <Feedback />
        </span>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
        <h1 className=" text-gray-800 font-semibold">
          © 2021-2022 All rights reserved | Build with ❤ by{"The Boys"}
        </h1>
      </div>
    </>
  );
}

export default Footer;
