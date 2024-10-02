import { Menu } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="fixed w-full pt-10 px-10">
      {" "}
      <div className="phone:flex sm:hidden">
        <Menu />
      </div>
      <div className="font-sans phone:hidden sm:flex flex-row justify-between">
        <nav className="flex flex-row gap-11">
          <Link
            to="features"
            smooth={true}
            duration={1000}
            className="cursor-pointer"
          >
            Our Features
          </Link>
          <Link
            to="areas"
            smooth={true}
            duration={1000}
            className="cursor-pointer"
          >
            Areas
          </Link>
        </nav>
        <nav className="flex flex-row gap-11">
          <Link
            to="faqs"
            smooth={true}
            duration={1000}
            className="cursor-pointer"
          >
            FAQs
          </Link>
          <Link
            to="waitlist"
            smooth={true}
            duration={1000}
            className="cursor-pointer"
          >
            The Waitlist
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
