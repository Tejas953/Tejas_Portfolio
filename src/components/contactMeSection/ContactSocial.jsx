import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
    <SingleContactSocial link="https://www.linkedin.com/in/tejas-pingale/"  Icon={FaLinkedinIn} />
    <SingleContactSocial link="https://github.com/Tejas953" Icon={FiGithub} />
    <SingleContactSocial link="https://www.instagram.com/tejas_pingale_095/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
