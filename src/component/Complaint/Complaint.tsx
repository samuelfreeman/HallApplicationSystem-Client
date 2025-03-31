import Navbar from "../Navbar.tsx";
import NavInfo from "../NavInfo.tsx";

function Complaint() {
    return (
        <>
            <Navbar />
            <NavInfo title="Complaint Desk" />

            <section className="mt-4 sm:mt-6 mx-4 sm:mx-6 md:mx-8 lg:mx-20 font-Inter p-2 sm:p-6 pb-8 sm:pb-12">
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                    Report issues related to your hall accommodation. Our team will respond as soon as possible.
                </p> 

                <h2 className="text-xl sm:text-2xl font-semibold font-Inter mb-4 sm:mb-6">Complaint Submission Form</h2>

                <hr className="my-4 sm:my-6 border-gray-200 border" />

                <form className="flex flex-col gap-4 sm:gap-6 py-4 sm:py-6 pr-0 sm:pr-6 border-b-2 border-gray-200">
                    
                    {/* Form container */}
                    <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 pb-6 sm:pb-8">
                        {/* Left form section */}
                        <div className="flex flex-col gap-4 sm:gap-6 w-full lg:w-1/2">
                            
                            {/* Full Name */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="full_name" className="font-Inter font-semibold text-sm sm:text-base">Full Name</label>
                                <input 
                                    type="text" 
                                    id="full_name" 
                                    name="full_name" 
                                    className="border border-[#9C9C9C] bg-white w-full h-10 sm:h-11 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#900633] focus:border-transparent" 
                                />
                            </div>

                            {/* Room Number */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="room_number" className="font-Inter font-semibold text-sm sm:text-base">Room Number</label>
                                <input 
                                    type="text" 
                                    id="room_number" 
                                    name="room_number" 
                                    className="border border-[#9C9C9C] bg-white w-full h-10 sm:h-11 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#900633] focus:border-transparent" 
                                />
                            </div>

                            {/* Complaint Category */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="complaint_category" className="font-Inter font-semibold text-sm sm:text-base">Complaint Category</label>
                                <select 
                                    id="complaint_category" 
                                    name="complaint_category" 
                                    className="border border-[#9C9C9C] bg-white w-full h-10 sm:h-11 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#900633] focus:border-transparent"
                                >
                                    <option value="">Select a category</option>
                                    <option value="maintenance">Maintenance</option>
                                    <option value="security">Security</option>
                                    <option value="noise">Noise</option>
                                    <option value="theft">Theft</option>
                                    <option value="roommate_issue">Roommate Issue</option>
                                </select>
                            </div>

                            {/* File Upload */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center">
                                <label htmlFor="file_upload" className="font-Inter font-semibold text-sm sm:text-base">Evidence Upload</label>
                                <input 
                                    type="file" 
                                    id="file_upload" 
                                    name="file_upload" 
                                    className="border border-[#AFAFAF] p-2 rounded-md w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#900633] focus:border-transparent" 
                                />
                            </div>
                        </div>

                        {/* Right form section - Description */}
                        <div className="flex flex-col gap-2 sm:gap-3 w-full lg:w-1/2">
                            <p className="font-Inter font-semibold text-sm sm:text-base">Description (For detailed explanation)</p>
                            <textarea 
                                name="description" 
                                id="description" 
                                className="border border-[#9C9C9C] bg-white w-full h-48 sm:h-64 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#900633] focus:border-transparent resize-none" 
                                placeholder="Write here..."
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center mt-4 sm:mt-6">
                        <button 
                            type="submit" 
                            className="bg-[#900633] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md w-full sm:w-auto min-w-[148px] text-sm sm:text-base hover:bg-[#7a0529] transition-colors duration-200"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Complaint;
