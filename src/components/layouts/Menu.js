import menuData from '../../../public/DB/menu.json';
import categories from '../../../public/DB/categories.json';
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
  const [dropdownOpen, setDropdownOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav id="navmenu" className="navmenu">
      <ul className={`mobile-ul ${menuOpen ? 'show-mobile' : 'hide-mobile'}`}>
        {menuData.map(({ name, href, children }, index) => (
          <li key={index}>
            {children ? (
              <div className={`dropdown ${menuOpen && dropdownOpen ? 'd-block' : 'd-flex'}`}>
                <Link href={href}>{name}</Link>
                <Link href="/" onClick={(e) => { e.preventDefault(); toggleDropdown(); }}>
                  <i className={`bi ${dropdownOpen && menuOpen ? 'bi bi-x' : 'bi bi-chevron-down'} mobile-nav-toggle`} />
                </Link>
                <ul className={`${dropdownOpen ? 'show-mobile' : 'hide-mobile'}`}>
                  {categories.map(category => (
                    <li key={category.id}>
                      <Link href={`/products/categories/${category.id}`}>{category.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link className={href === "/contact" ? `${menuOpen ? '' : 'cta-btn'} d-inline d-sm-inline` : ""} href={href}>
                {name}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <i id="main-toggle" className={`mobile-nav-toggle d-xl-none ${menuOpen ? 'bi bi-x' : 'bi bi-list'}`} onClick={toggleMenu} />
    </nav>
  );
};

export default Menu;

