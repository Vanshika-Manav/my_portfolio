import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaTelegram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20" src={logo} alt=""/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin/><p className="text-sm">https://www.linkedin.com/in/vanshika-manav-8661a1231/</p>
            <FaGithub/><p className="text-sm">github.com/Vanshika-Manav</p>
            {/* <FaInstagram/><p className="text-sm">https://www.linkedin.com/in/vanshika-manav-8661a1231/</p>
            <FaFacebook/><p className="text-sm">https://www.linkedin.com/in/vanshika-manav-8661a1231/</p>
            <FaTelegram/><p className="text-sm">https://www.linkedin.com/in/vanshika-manav-8661a1231/</p> */}
        </div>
    </nav>
  )
}

export default Navbar
