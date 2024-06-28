import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const social_links = [
    {path: "https://github.com/moufidayoub11/", icon: <FaGithub />},
    {path: "https://www.linkedin.com/in/moufidayoub11/", icon: <FaLinkedin />}
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
        {
            social_links.map((link, index) => (
                <Link key={index} href={link.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                </Link>
            ))
        }
    </div>
  )
}

export default Socials