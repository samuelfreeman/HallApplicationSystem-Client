export default function AboutUS() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 py-16 md:px-[7.5rem] px-5 mt-16 bg-gradient-to-tr from-[#fff5f8] to-[#fef0f3] rounded-lg shadow-lg">
      
      {/* Left: Text Content */}
      <div className="flex-1 max-w-xl space-y-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center md:text-left text-[#900633] relative inline-block after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:rounded-sm after:-translate-y-2">
          About Us
        </h1>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          We simplify student hall living by automating room requests, payments, and allocations, creating a seamless and stress-free experience for both students and administrators. With an intuitive and transparent system, students can easily request their preferred rooms, track payment statuses, and stay informed with real-time updates.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          For administrators, managing room availability, monitoring occupancy, and handling requests becomes effortless, reducing manual workload and improving efficiency. The system ensures accuracy, minimizes errors, and enhances transparency, making the entire process smoother for everyone involved.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Whether securing a room for the first time or managing ongoing payments, students and administrators can rely on a smarter, faster, and more efficient way to handle accommodation. Experience convenience at its best with a solution designed to make hall management simple and effective.
        </p>
      </div>

      {/* Right: Image or Illustration */}
      <div className="flex-1 max-w-md flex justify-center md:justify-end">
        <img
          src="https://media.giphy.com/media/YQMh5vtGdungUT6Fde/giphy.gif?cid=ecf05e47bx73utosyn1qnsqxjll9k52c1gfvqn38qf3czbim&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt="Automation and simplification illustration"
          className="rounded-xl shadow-xl max-w-full h-auto transform hover:scale-105 transition-transform duration-500 ease-in-out"
          loading="lazy"
        />
      </div>
    </section>
  );
}
