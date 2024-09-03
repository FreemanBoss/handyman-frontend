
const Team = () => {
  return (
    <>
  {/* TEAM SECTION  */}
  <div className="bg-[#f4ece4] py-16">
    {/* Expert Team Section */}
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide">
            Meet the Team
          </h2>
          <h3 className="mt-2 text-3xl font-bold">Expert Team</h3>
          <p className="mt-4 text-base text-gray-600 max-w-lg">
          Our skilled professionals bring years of experience 
          and dedication to every project, ensuring the highest 
          quality work. We take pride in delivering exceptional 
          results that exceed expectations.
          </p>
        </div>
        <a href="#" className="text-blue-600 font-medium hover:text-blue-800">
          View More →
        </a>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <img
            className="w-40 h-40 rounded-full object-cover"
            src="../src/assets/images/team1.jpg"
            alt="Team Member 1"
          />
          <p className="mt-4 text-lg font-bold">Jason Kurlan</p>
          <p className="text-sm text-gray-500">Handyman</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-40 h-40 rounded-full object-cover"
            src="../src/assets/images/team.jpg"
            alt="Team Member 2"
          />
          <p className="mt-4 text-lg font-bold">Kevin Martin</p>
          <p className="text-sm text-gray-500">Handyman</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="w-40 h-40 rounded-full object-cover"
            src="../src/assets/images/team3.jpg"
            alt="Team Member 3"
          />
          <p className="mt-4 text-lg font-bold">Noper Mick</p>
          <p className="text-sm text-gray-500">Handyman</p>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default Team

