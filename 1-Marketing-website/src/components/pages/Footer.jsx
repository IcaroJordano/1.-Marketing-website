import "/home/icaro/Área de trabalho/50-Projects/1-Marketing-website/src/components/pages/Footer.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


function Footer() {
    return(
        <footer>
            <p><MdEmail></MdEmail>icarojordano08@gmail.com</p>
            <span>&copy;2024 Marketing-website</span>
            <div>
                <FaGithub></FaGithub>
                <FaLinkedin></FaLinkedin>
                <FaInstagram></FaInstagram>
                <FaXTwitter></FaXTwitter>
            </div>
        </footer>
    )
}
export default Footer