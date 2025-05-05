import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
     I'm a driven Full Stack Developer and AI/ML Enthusiast, currently thriving as an Associate Software Developer at Contentstack. With deep expertise in Natural Language Processing, machine learning, and deep learning, I craft high-performance web and mobile applications using cutting-edge technologies like ReactJS, Angular, Node.js, Flask, and Android.

Recognized for excellence, I proudly hold First Place in the Smart India Hackathon 2023 and emerged as a winner in the Smith Detection Hackathon, showcasing my ability to deliver innovative, real-world solutions under pressure.

I bring a blend of technical acumen, analytical sharpness, and team-driven problem-solving to every project. My passion lies in transforming bold ideas into impactful tech that drives change and pushes boundaries.


     </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
