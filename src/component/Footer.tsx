export default function Footer(){
  return(
    <footer className="bg-[#000] text-white w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start justify-between py-8 md:py-12">
          {/* Logo Section */}
          <div className="mb-8 md:mb-0">
            <img 
              src="/Aamusted logo (2).png" 
              alt="AAMUSTED Logo" 
              className="w-32 sm:w-40 md:w-48"
            />
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-20 w-full md:w-auto">
            {/* Help Section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Help</h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300 transition-colors">Lorem ipsum.</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Lorem ipsum.</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Lorem ipsum.</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Lorem ipsum.</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Lorem ipsum.</a></li>
              </ul>
            </div>

            {/* Payments Section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Payments</h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300 transition-colors">Lorem ipsum.</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Lorem ipsum.</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Lorem ipsum.</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Lorem ipsum.</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Lorem ipsum.</a></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Contact Us</h2>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300 transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">X</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-gray-300 transition-colors">Youtube</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#4F4F4F] py-4 md:py-6">
          <p className="text-center text-sm sm:text-base">
            Copyright@2024. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}