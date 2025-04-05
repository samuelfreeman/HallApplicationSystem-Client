const Footer = () => {
  return (
    <footer className="bg-black border-t">
      <div className="mx-auto max-w-screen-xl space-y-8 py-16 px-6 lg:space-y-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img height={"200px"} width={"150px"} src="/Aamusted logo (2).png" alt="AAMUSTED Logo" />
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-white">Quick Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="/about" className="text-white transition hover:opacity-75">About Us</a></li>
                <li><a href="/rules" className="text-white transition hover:opacity-75">Hall Rules</a></li>
                <li><a href="/faqs" className="text-white transition hover:opacity-75">FAQs</a></li>
                <li><a href="/contact" className="text-white transition hover:opacity-75">Contact</a></li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Student Resources</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="/register" className="text-white transition hover:opacity-75">Room Registration</a></li>
                <li><a href="/payments" className="text-white transition hover:opacity-75">Payment Portal</a></li>
                <li><a href="/room-status" className="text-white transition hover:opacity-75">Room Availability</a></li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Admin</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="/admin/dashboard" className="text-white transition hover:opacity-75">Dashboard</a></li>
                <li><a href="/admin/allocations" className="text-white transition hover:opacity-75">Room Allocations</a></li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-white">Hall Info</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li><a href="/history" className="text-white transition hover:opacity-75">Hall History</a></li>
                <li><a href="/team" className="text-white transition hover:opacity-75">Hall Executives</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Optional: Social Media */}
        <ul className="flex space-x-4 justify-end w-full text-white">
          <h1 className="text-sm text-white">Connect with us:</h1>
          <li><a href="#"><img height="50" width="20" src="/facebook.png" alt="Facebook" /></a></li>
          <li><a href="#"><img height="50" width="20" src="/instagram.png" alt="Instagram" /></a></li>
        </ul>
      </div>

      <div className="h-20 w-full flex justify-center border-t-2 p-7">
        <p className="text-xs text-md font-bold text-center text-white">
          COPYRIGHT &copy; 2025 AAMUSTED Hall Management System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
