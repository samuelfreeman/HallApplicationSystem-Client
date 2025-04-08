import { useState } from "react";
import Navbar from "../../Navbar";
import NavInfo from "../../NavInfo";
import { Link } from "react-router";
import Modal from "@/component/Popup";
export default function BookRoom() {
  const [showModal, setShowModal] = useState(false);  
  return (
   <>
   <Navbar/>
   <NavInfo title="Book Room"/>
   <section className="mt-5 sm:mt-10 px-2 sm:px-4 md:px-8 lg:px-20">
      <div className="overflow-x-auto rounded-lg shadow-sm">
        <table className="w-full border-collapse text-sm sm:text-base">
          <thead>
            <tr>
              <th className="border border-gray-300 px-2 py-1">
                <select className="text-sm sm:text-base md:text-lg px-2 sm:px-4 py-1">
                  <option>Floors</option>
                  <option>Ground</option>
                  <option>Floor 1</option>
                  <option>Floor 2</option>
                  <option>Floor 3</option>
                  <option>Floor 4</option>
                  <option>Floor 5</option>
                  <option>Floor 6</option>
                  <option>Floor 7</option>
                  <option>Floor 8</option>
                  <option>Floor 9</option>
                  <option>Floor 10</option>
                </select>
              </th>
              <th colSpan={10} className="px-2 sm:px-4 py-1 text-sm sm:text-base md:text-lg text-left">
                Room Selection
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {/* Ground Floor */}
            <tr>
              <td className="border border-gray-300 px-2 sm:px-4 py-1 font-semibold text-sm sm:text-base md:text-lg">
                Ground
              </td>
              {/* Each cell contains a number (colored) and a label underneath  */}
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
            </tr>

            {/*  Floor 1  */}
            <tr>
              <td className="border border-gray-300 px-2 sm:px-4 py-1 font-semibold text-sm sm:text-base md:text-lg">
                Floor 1
              </td>

              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
            </tr>

            {/*  Floor 2  */}
            <tr>
              <td className="border border-gray-300 px-2 sm:px-4 py-1 font-semibold text-sm sm:text-base md:text-lg">
                Floor 2
              </td>

              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
            </tr>

            {/*  Floor 3  */}
            <tr>
              <td className="border border-gray-300 px-2 sm:px-4 py-1 font-semibold text-sm sm:text-base md:text-lg">
                Floor 3
              </td>

              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
            </tr>

            {/*  Floor 4  */}
            <tr>
              <td className="border border-gray-300 px-2 sm:px-4 py-1 font-semibold text-sm sm:text-base md:text-lg">
                Floor 4
              </td>

              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
            </tr>

            {/*  Floor 5  */}
            <tr>
              <td className="border border-gray-300 px-2 sm:px-4 py-1 font-semibold text-sm sm:text-base md:text-lg">
                Floor 5
              </td>

              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
            </tr>

            {/*  Floor 6  */}
            <tr>
              <td className="border border-gray-300 px-2 sm:px-4 py-1 font-semibold text-sm sm:text-base md:text-lg">
                Floor 6
              </td>

              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
            </tr>

            {/*  Floor 7  */}
            <tr>
              <td className="border border-gray-300 px-2 sm:px-4 py-1 font-semibold text-sm sm:text-base md:text-lg">
                Floor 7
              </td>

              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
            </tr>
            {/*  Floor 8  */}
            <tr>
              <td className="border border-gray-300 px-2 sm:px-4 py-1 font-semibold text-sm sm:text-base md:text-lg">
                Floor 8
              </td>

              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#FF0000] text-white text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
            </tr>

            {/*  Floor 9  */}
            <tr>
              <td className="border border-gray-300 px-2 sm:px-4 py-1 font-semibold text-sm sm:text-base md:text-lg">
                Floor 9
              </td>

              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
            </tr>

            {/*  Floor 10  */}
            <tr>
              <td className="border border-gray-300 px-2 sm:px-4 py-1 font-semibold text-sm sm:text-base md:text-lg">
                Floor 10
              </td>

              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-xs sm:text-sm font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-2 sm:px-4 py-1">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#63D820] text-xs sm:text-sm font-semibold flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-xs sm:text-sm font-semibold">A</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-4 text-sm sm:text-base">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#FF0000]"></div>
          <span>Occupied</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#63D820]"></div>
          <span>Available</span>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 sm:mt-8 flex justify-center gap-4">
        <Link to="/applicantInfo">
          <button className="bg-gray-500 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-gray-600 transition duration-300 text-sm sm:text-base">
            Back
          </button>
        </Link>
        
          <button onClick={()=>setShowModal(true)} className="bg-[#800040] text-white px-4 sm:px-6 py-2 rounded-md hover:bg-[#660033] transition duration-300 text-sm sm:text-base">
          Submit

          </button>
          <Modal visible={showModal} onClose={() => setShowModal(false)}  />
        
      </div>
    </section>
   </>
  );
}
