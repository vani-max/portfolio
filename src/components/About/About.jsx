import React from "react";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png"
import workshop from "../../assets/workshop.png"
import neutron from "../../assets/neutron.png"
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex flex-col overflow-hidden items-center bg-black bg-opacity-30 shadow-xl mx-4 md:mx-20 rounded-lg p-12"
    >
      <div className="mb-12 w-full">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">About Me</h2>
        <div className="md:flex md:items-start gap-6">
          <img className="md:h-80 rounded-lg" src={image2} alt="About img" />
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Fullstack Developer
            </h3>
            <p className="text-sm md:text-md leading-relaxed">
              I'm Vani Vashishtha from Uttar Pradesh, currently a second-year B-Tech student at Newton School of Technology, Rishihood University. An aspiring full-stack web developer passionate about creating meaningful web experiences. I have hands-on experience building multiple projects that solve real-world problems, and I'm constantly improving my technical skills by tackling complex coding challenges—120+ DSA problems solved on LeetCode.
              <br /><br />
              Beyond coding, I'm an active volunteer, a member of the Literary Club, Vice President of the Robotics Club, and a lawn tennis enthusiast. I enjoy collaborating on projects, learning new technologies, and turning ideas into functional solutions. My goal is to contribute to impactful projects while continuously growing as a developer.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg flex flex-col items-center text-center">
          <img src={image3} alt="Robotics" className="h-40 mb-4 rounded" />
          <h4 className="text-xl font-semibold mb-2">Robotics Competitions</h4>
          <p className="text-sm leading-relaxed">
        Participated in several robotics competitions, including one hosted at Delhi Technological University, 
      and currently contributing to the development of a driverless car system as part of the Robotics Club.
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg flex flex-col items-center text-center">
          <img src={workshop} alt="Workshop" className="h-40 mb-4 rounded" />
          <h4 className="text-xl font-semibold mb-2">Workshops</h4>
          <p className="text-sm leading-relaxed">
            Actively participated in and organized multiple workshops on robotics, 
      and showcased projects at renowned venues such as Bharat Mandapam, sharing knowledge and practical insights with peers.
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg flex flex-col items-center text-center">
          <img src={neutron} alt="Techfest" className="h-40 mb-4 rounded" />
          <h4 className="text-xl font-semibold mb-2">Techfest Coordinator</h4>
          <p className="text-sm leading-relaxed">
            Led the Competitions Department for Neutron 2025 Techfest, gaining valuable skills in leadership, 
      event management, and teamwork while ensuring smooth execution of university-level technical events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
