import { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import NavInfo from "../../NavInfo";
import { api } from "@/api/interceptor";
import Modal from "@/component/Popup";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router";

const mapStatus = (status: string) => {
  switch (status) {
    case "available":
      return "A";
    case "not_available":
      return "N/A";
    default:
      return status;
  }
};

const getColor = (status: string) => {
  return status === "available" ? "#FF0000" : "#63D820";

};
// student id 
const student = JSON.parse(localStorage.getItem("student") || "{}");
const studentID = student.studentId;

export default function BookRoom() {



  const [roomData, setRoomData] = useState([]);
  const [selectedBlock, setSelectedBlock] = useState("A");
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await api.get("/rooms"); // Replace with your actual endpoint
        console.log(response.data);
        setRoomData(response.data);
      } catch (err) {
        console.error("Error fetching room data:", err);
      }
    };
    fetchRooms();
  }, []);

  const blockOptions = ["A", "B", "C"]; // Example block options

  const filteredData: any = roomData.filter(
    (block: any) => block.name === selectedBlock
  );

  const handleRoomClick = async (roomId: string) => {
    try {
      const response = await api.post("/rooms/assign", {
        studentId: studentID,
        roomId,
      });

      if (response.status === 201 || response.status === 200) {
        setModalVisible(true);
      }

    } catch (error: any) {
      console.error("Assignment failed:", error);

      toast({
        title: "Assignment Failed",
        variant: "destructive",
        description: error.response.data.message || "User  failed to be assigned  room",
      });

    }
  };

  return (
    <>
      <Navbar />
      <NavInfo title="Book Room" />
      <section className="mt-5 sm:mt-10 px-2 sm:px-4 md:px-8 lg:px-20">
        <div className="mb-4">
          <select
            className="text-sm sm:text-base md:text-lg md:px-10 sm:px-3 py-1 border"
            value={selectedBlock}
            onChange={(e) => setSelectedBlock(e.target.value)}
          >
            {blockOptions.map((block) => (
              <option key={block} value={block}>
                Block {block}
              </option>
            ))}
          </select>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-sm">
          <table className="w-full border-collapse text-sm sm:text-base">
            <thead>
              <tr>
                <th className="border border-gray-300 px-2 py-1 bg-gray-100 text-left" colSpan={100}>
                  Block {selectedBlock}
                </th>
              </tr>
              <tr>
                <th className="border border-gray-300 px-2 py-1">Floor</th>
                {filteredData[0]?.floors[0]?.rooms.map((_: any, idx: any) => (
                  <th key={idx} className="border border-gray-300 px-2 py-1">Room {idx + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-center">
              {filteredData[0]?.floors.map((floor: any) => (
                <tr key={floor.id}>
                  <td className="border border-gray-300 font-semibold px-2 py-1">
                    Floor {floor.number}
                  </td>
                  {floor.rooms.map((room: any) => (
                    <td key={room.id} className="border border-gray-300 px-2 py-1">
                      <div
                        className="cursor-pointer"
                        onClick={() => handleRoomClick(room.id)}
                      >
                        <div
                          className="w-6 h-6 sm:w-8 sm:h-8 text-xs sm:text-sm font-semibold flex items-center justify-evenly mx-auto text-white"
                          style={{ backgroundColor: getColor(room.status) }}
                        >
                          {room.number}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold">
                          {mapStatus(room.status)}
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>
      <div className="mt-6 sm:mt-8 flex justify-center gap-4">
        <Link to="/applicantInfo">
          <button className="bg-gray-500 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-gray-600 transition duration-300 text-sm sm:text-base">
            Back
          </button>
        </Link>
        </div>

      {/* Pass the modal visibility and onClose handler */}
      <Modal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </>
  );
}
