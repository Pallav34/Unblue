import { useRef, useEffect } from "react";
import { navLinks } from "../../constants";
import "./Navbar.css";

const Navbar = () => {
  const headerRef = useRef(null);

  const menuRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("nav_shrink");
    } else {
      headerRef.current.classList.remove("nav_shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");

    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  const toogleMenu = () => menuRef.current.classList.toggle("menu_active");
  return (
    <nav className="navabar" ref={headerRef}>
      <div className="container">
        <div className="wrapper">
          <div className="logo">
            <h2 className="company_title">UnBlue.in</h2>
          </div>
          <div className="navigation" ref={menuRef} onClick={toogleMenu}>
            <ul className="menu">
              {navLinks.map((nav, index) => (
                <li key={index} className="menu-items">
                  <a href={nav.id} onClick={handleClick} className="menu_link">
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <span className="mobile_menu" onClick={toogleMenu}>
            <i class="ri-menu-3-line"></i>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
