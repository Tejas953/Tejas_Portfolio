import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full-Stack Developer",
    company: "HAB biomass pvt.Ltd",
    date: "jan 2024 - may 2024",
    responsibilities: [
      "Built digital ecosystem for Hab Biomass.",
      "Created portfolio site with React, Flask",
      "Set up real-time e-commerce with PayPal.",
      "Developed order tracking system.",
      "Deployed apps on AWS and Google Cloud.",
    ],
  },
  {
    job: "AL-ML Developer",
    company: "Eumentis Informatics Private Limited ",
    date: "june 2024 - Aug 2024",
    responsibilities: [
      "Built ML/DL models for image classification tasks.",
      "Developed full stack web applications.",
      "Created Android apps with intuitive UI/UX.",
      "Optimized code using efficient algorithms.",
    ],
  },
  {
    job: "Asssociate Software Developer",
    company: "ContentStack Company",
    date: "2025 - Present",
    responsibilities: [
      "Working on CMS-based solutions at Contentstack.",
      "Integrating CMS with frontend frameworks.",
      "Fetching data via APIs and SDKs from CMS.",
      "Learning and applying JavaScript, React, Tailwind CSS, Node.js.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
