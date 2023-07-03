import { NavLink } from "react-router-dom";
import './navbar.css';
import { FaComments, FaHome, FaProjectDiagram, FaUserAlt } from "react-icons/fa";

const NavBar = () => {
    return (
        <nav className="glassBg h-1/2 flex justify-center items-center px-4 rounded-l-lg fixed">
            <ul className="flex md:flex-col gap-6 text-white font-semibold text-lg ">
                <li ><NavLink
                className={({ isActive, isPending }) =>
                isActive
                  ? "text-sky-400 flex items-center gap-2"
                  : isPending
                  ? "pending"
                  : "flex items-center gap-2"
              }
                to='/'><FaHome/> Home</NavLink></li>
                <li ><NavLink 
                className={({ isActive, isPending }) =>
                isActive
                  ? "text-sky-400 flex items-center gap-2"
                  : isPending
                  ? "pending"
                  : "flex items-center gap-2"
              }
                to='/about'><FaUserAlt/> About</NavLink></li>
                <li ><NavLink 
                className={({ isActive, isPending }) =>
                isActive
                  ? "text-sky-400 flex items-center gap-2"
                  : isPending
                  ? "pending"
                  : "flex items-center gap-2"
              }
                to='/projects'><FaProjectDiagram/> Projects</NavLink></li>
                <li ><NavLink 
                className={({ isActive, isPending }) =>
                isActive
                  ? "text-sky-400 flex items-center gap-2"
                  : isPending
                  ? "pending"
                  : "flex items-center gap-2"
              }
                to='/contact'><FaComments/> Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavBar;