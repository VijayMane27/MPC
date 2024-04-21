import { Link as ScrollLink } from "react-scroll";

const NavLink = ({ href, title }) => {
  return (
    <ScrollLink
      to={href.slice(1)} // remove the '#' from href
      spy={true}
      smooth={true}
      duration={500}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-sm rounded md:p-0 hover:text-white cursor-pointer"
    >
      {title}
    </ScrollLink>
  );
};

export default NavLink;
