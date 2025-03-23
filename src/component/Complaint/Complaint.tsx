import Navbar from "../Navbar.tsx";
import NavInfo from "../NavInfo.tsx";

function Complaint() {
    return (
        <>
            <Navbar />
            <NavInfo title="Complaint Desk" />

            <section className="mt-[25px] ml-[100px] mr-[70px] font-Inter p-[20px] pb-[100px]">

                <p>Report issues related to your hall accommodation. Our team will respond as soon as possible.</p> 

                <h2 className="text-2xl font-semibold font-Inter my-[10px]">Complaint Submission Form</h2>

                <hr className="my-[17px] border-gray-200 border" />

                <form className="flex flex-col gap-4 py-[20px] pr-[20px] border-b-2 border-gray-200">
                    
                    {/* Div flexing 2 forms */}
                    <div className="flex flex-row gap-[80px] pb-[30px]">

                        {/* Div holding form 1 */}
                        <div className="flex flex-col gap-4">
                            
                            {/* Control 1 */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="full_name" className="font-Inter font-semibold">Full Name</label>
                                <input type="text" id="full_name" name="full_name" className="border border-[#9C9C9C] text-[#F5F5F5] w-[515px] h-[39px] p-1" />
                            </div>

                            {/* Control 2 */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="room_number" className="font-Inter font-semibold">Room Number</label>
                                <input type="text" id="room_number" name="room_number" className="border border-[#9C9C9C] text-[#F5F5F5] w-[515px] h-[39px] p-1" />
                            </div>

                            {/* Control 3 */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="complaint_category" className="font-Inter font-semibold">Complaint Category</label>
                                <select id="complaint_category" name="complaint_category" className="border border-[#9C9C9C] text-[#F5F5F5] w-[515px] h-[39px] p-1">
                                    <option value=""></option>
                                    <option value="maintenance">Maintenance</option>
                                    <option value="security">Security</option>
                                    <option value="noise">Noise</option>
                                    <option value="theft">Theft</option>
                                    <option value="roommate_issue">Roommate Issue</option>
                                </select>
                            </div>

                            {/* Control 4 (file upload) */}
                            <div className="flex flex-row gap-4 items-center">
                                <label htmlFor="file_upload" className="font-Inter font-semibold">Evidence Upload</label>
                                <input type="file" id="file_upload" name="file_upload" placeholder="Upload file" className="border border-[#AFAFAF] p-1" />
                            </div>
                            
                        </div>

                        {/* Div holding form 2 */}
                        <div className="flex flex-col gap-3">
                            <p className="font-Inter font-semibold">Description (For detailed explanation)</p>
                            <textarea name="description" id="description" className="border border-[#9C9C9C] bg-[#F5F5F5] w-[515px] h-[246px] p-3" placeholder="Write here..." />
                        </div>


                    </div>

                    <button type="submit" className="bg-[#900633] text-white px-4 py-2 w-[148px] text-center mx-auto">Submit</button>
                    
                </form>
                
            </section>
        </>
    )
}

export default Complaint;
