
import Link from 'next/link';
import Menu from './Menu';
import { useRouter } from 'next/router';

/**
 * Header component renders the site's header with a logo link and a menu.
 *
 * The header is fixed at the top of the page and contains a logo that links to
 * the homepage and a Menu component. It uses Bootstrap classes for styling
 * and layout.
 */

export default function Header() {
  const { basePath } = useRouter();
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link href="/" className="logo d-flex align-items-center me-auto">
          <img src={`${basePath}/assets/img/logo.png`} alt="Logo" />
        </Link>
        <Menu />
      </div>
    </header>

  );
}
