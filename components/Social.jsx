import Link from "next/link";


import { FaGithub, FaLinkedinIn, FaDiscord, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
    {icon: <FaGithub />,  path: "https://github.com/PayalKumari10" },
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/payalkumari10/" },
    {icon: <FaDiscord />, path: "payalkumari_" },
    {icon: <FaTwitter />, path: "https://x.com/PayalKumar89652" },
    { icon: <SiLeetcode />, path: "https://leetcode.com/u/kumaripayal7488/" }];

const Social = ({ containerStyles, iconStyles }) => {
  return (
  <div className={containerStyles}>
       {socials.map((item, index) => {
        return (
             <Link key={index} target="_blank" href={item.path} className={iconStyles}>
                {item.icon}
             </Link> 
       );
      })}
  </div>
  );
};

export default Social;