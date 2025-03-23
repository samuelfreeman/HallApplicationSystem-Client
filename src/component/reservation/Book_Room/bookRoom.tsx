import Navbar from "../../Navbar";
import NavInfo from "../../NavInfo";

export default function BookRoom() {
  return (
   <>
   <Navbar/>
   <NavInfo title="Book Room"/>
   <section className="mt-10 px-20">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 px-2 py-1">
                <select className="text-xl px-4 py-1">
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
              <th colSpan={10} className="px-4 py-1 text-xl text-left">
                Room Selection
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {/* Ground Floor */}
            <tr>
              <td className="border border-gray-300 px-4 py-1 font-semibold text-xl">
                Ground
              </td>
              {/* Each cell contains a number (colored) and a label underneath  */}
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white font-semibold flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white font-semibold flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white font-semibold flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white font-semibold flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
            </tr>

            {/*  Floor 1  */}
            <tr>
              <td className="border border-gray-300 px-4 py-1 font-semibold text-xl">
                Floor 1
              </td>

              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-xs text-gray-700">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
            </tr>

            {/*  Floor 2  */}
            <tr>
              <td className="border border-gray-300 px-4 py-1 font-semibold text-xl">
                Floor 2
              </td>

              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
            </tr>

            {/*  Floor 3  */}
            <tr>
              <td className="border border-gray-300 px-4 py-1 font-semibold text-xl">
                Floor 3
              </td>

              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
            </tr>

            {/*  Floor 4  */}
            <tr>
              <td className="border border-gray-300 px-4 py-1 font-semibold text-xl">
                Floor 4
              </td>

              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white font-semibold flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-xs text-gray-700">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
            </tr>

            {/*  Floor 5  */}
            <tr>
              <td className="border border-gray-300 px-4 py-1 font-semibold text-xl">
                Floor 5
              </td>

              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
            </tr>

            {/*  Floor 6  */}
            <tr>
              <td className="border border-gray-300 px-4 py-1 font-semibold text-xl">
                Floor 6
              </td>

              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
            </tr>

            {/*  Floor 7  */}
            <tr>
              <td className="border border-gray-300 px-4 py-1 font-semibold text-xl">
                Floor 7
              </td>

              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
            </tr>
            {/*  Floor 8  */}
            <tr>
              <td className="border border-gray-300 px-4 py-1 font-semibold text-xl">
                Floor 8
              </td>

              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#FF0000] text-white flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
            </tr>

            {/*  Floor 9  */}
            <tr>
              <td className="border border-gray-300 px-4 py-1 font-semibold text-xl">
                Floor 9
              </td>

              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
            </tr>

            {/*  Floor 10  */}
            <tr>
              <td className="border border-gray-300 px-4 py-1 font-semibold text-xl">
                Floor 10
              </td>

              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  1
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  2
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  3
                </div>
                <span className="text-md font-semibold">N/A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  4
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  5
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  6
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  7
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  8
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  9
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
              <td className="border border-gray-300 px-4 py-1">
                <div className="w-8 h-8 bg-[#63D820] font-semibold flex items-center justify-center mx-auto">
                  10
                </div>
                <span className="text-md font-semibold">A</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xl">
        <span className="text-red-600 font-bold">NOTE:</span> Your reservation
        is temporarily secured.However, to confirm your booking, payment must be
        completed within the next 24 hours. Failure to make payment within this
        period will result in your reservation being automatically cancelled and
        the room will become available for others to book.
      </p>

      <p className="mt-4 text-xl">
        After submission, a confirmation message will be sent to your email to
        confirm your booking.
      </p>
      <div className="flex justify-center py-10">
        <a href="/popup">
        <button className="mt-4 bg-[#900633] text-white px-16 py-3 rounded-md">
          Submit
        </button>
        </a>
        
      </div>
    </section>
   </>
  );
}
