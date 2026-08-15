import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/logo1.jpg";
import { RiCloseLargeFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";

const styles = {
  link: "hover:bg-stone-300 hover:text-black px-2 py-2 rounded-full duration-700",
};

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [color, setColor]=useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

const changeBackground = () => {
 
  if (window.scrollY>=1){
    setColor(true)
  }else{
    setColor(false)
  }

}
useEffect(() => {
  window.addEventListener("scroll", changeBackground);

  return () => {
    window.removeEventListener("scroll", changeBackground);
  };
}, []);

  return (
   <nav
  className={`fixed top-0 left-0 w-full z-50 flex transition-all duration-300 ${
    color
      ? "bg-white text-black shadow-md"
      : "bg-transparent text-white"
  }`}
>
      <div className="container mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <img src={Logo} alt="Logo" className="h-10 w-auto" />

        {/* Desktop menu */}
        <ul className=" absolute left-1/2 hidden -translate-x-1/2 items-center space-x-6 md:flex">
          <li>
            <a href="#" className={styles.link}>
              Home
            </a>
          </li>

          <li>
            <a href="#" className={styles.link}>
              Market Place
            </a>
          </li>

          <li>
            <a href="#" className={styles.link}>
              Join
            </a>
          </li>

          <li>
            <a href="#" className="flex items-center justify-center rounded-full p-3 transition duration-300 hover:bg-stone-300 hover:text-black">
              <ShoppingCart size={18} />
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="cursor-pointer md:hidden">
          {isMenuOpen ? (
            <RiCloseLargeFill size={20} onClick={toggleMenu} />
          ) : (
            <GiHamburgerMenu size={20} onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 ">
          <ul className="flex flex-col space-y-4 text-center">
            <li>
              <a href="#" className={`${styles.link} block`}>
                Home
              </a>
            </li>

            <li>
              <a href="#" className={`${styles.link} block`}>
                Market Place
              </a>
            </li>

            <li>
              <a href="#" className={`${styles.link} block`}>
                Join
              </a>
            </li>

            <li>
              <a href="#" className={`${styles.link} block`}>
                Cart
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav> 
  );
};

export default Navbar;