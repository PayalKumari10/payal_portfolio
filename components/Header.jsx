import Link from "next/link";
import { FaLinkedin } from "react-icons/fa"; // Import LinkedIn icon from react-icons
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  const linkedInProfile = "https://www.linkedin.com/in/payalkumari10/"; // Replace with your LinkedIn profile URL

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo  */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Payal Kumari<span className="text-accent">.</span>
          </h1>
        </Link>
        
        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <a href={linkedInProfile} target="_blank" rel="noopener noreferrer" className="text-white">
            <Button>
              Hire me <FaLinkedin className="ml-2" />
            </Button>
          </a>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header> 
  );
};

export default Header;
