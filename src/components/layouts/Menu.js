import menuData from '../../../public/DB/menu.json';
import categories from '../../../public/DB/categories.json';
import { FaChevronCircleDown } from "react-icons/fa";
import { useState,useEffect } from 'react';
import Link from 'next/link';

/**
 * The navigation menu component.
 *
 * This component renders the navigation menu at the top of the page. It
 * consists of a list of links, with a dropdown menu containing links to
 * individual product categories. The menu is responsive; it will collapse
 * into a hamburger menu on smaller screens.
 *
 * State:
 * - menuOpen: boolean indicating whether the menu is open or not.
 * - dropdownOpen: boolean indicating whether the dropdown menu is open or not.
 *
 * Effects:
 * - On window resize, if the window is >= 1200px wide, set menuOpen and
 *   dropdownOpen to false.
 *
 * Props:
 * - none
 *
 * Returns:
 * - The navigation menu component.
 */

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setMenuOpen(false);
        setActiveSubmenu(null);
        // setDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  // const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleSubmenu = (itemId) => {
    setActiveSubmenu(activeSubmenu === itemId ? null : itemId);
  };

  return (
    <nav id="navmenu" className="navmenu">
      <ul className={`mobile-ul ${menuOpen ? 'show-mobile' : 'hide-mobile'}`}>
        {menuData.map((item) => (
          <li key={item.id} className="nav-item">
            {item.submenu ? (
              <>
                <div className="d-flex align-items-center justify-content-between w-100 mobile-nav-link">
                  <Link href={item.href} onClick={(e) => e.preventDefault()}>
                    {item.name}
                  </Link>
                  <button 
                    className={`dropdown-toggle-btn ${activeSubmenu === item.id ? 'active' : ''} ${item.name === "Web Hosting" ? 'hosting-dropdown' : ''}`}
                    onClick={() => toggleSubmenu(item.id)}
                  >
                    <FaChevronCircleDown />
                  </button>
                </div>
                <ul className={`submenu ${activeSubmenu === item.id ? 'show-mobile' : ''}`}>
                  {item.submenu.map((subItem) => (
                    <li key={subItem.id}>
                      <Link href={subItem.href} className="submenu-item">
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link 
                className={item.href === "/contact" ? `${menuOpen ? '' : 'cta-btn'} d-inline d-sm-inline` : ""} 
                href={item.href}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <i 
        id="main-toggle" 
        className={`mobile-nav-toggle d-xl-none ${menuOpen ? 'bi bi-x' : 'bi bi-list'}`} 
        onClick={toggleMenu} 
      />
    </nav>
  );
};

export default Menu;

