const About = () => {
  return (
    <section
      id="about"
      className="bg-secondary_background py-20 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between min-h-[90vh] overflow-x-hidden"
    >
      {/* Left content */}
      <div className="flex-1 max-w-xl text-center md:text-left space-y-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#900633]">
          About Us
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          We simplify student hall living by automating room requests, payments, and allocations, ensuring a seamless experience for both students and administrators.
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Our platform empowers students to easily select and request their preferred rooms, track payment statuses, and stay updated on important notifications.
        </p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          For administrators, it provides tools to manage room availability, allocate spaces efficiently, and monitor analytics in real-time.
        </p>
      </div>

      {/* Right image */}
      <div className="flex-1 mt-10 md:mt-0 max-w-lg mb-10 md:mb-0 flex justify-center">
        <img
          src="https://media.giphy.com/media/YQMh5vtGdungUT6Fde/giphy.gif?cid=ecf05e47bx73utosyn1qnsqxjll9k52c1gfvqn38qf3czbim&ep=v1_gifs_search&rid=giphy.gif&ct=g"
          alt="Student Data Management"
          className="rounded-xl shadow-lg max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default About;
