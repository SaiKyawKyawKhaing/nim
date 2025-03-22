import React from "react";
import { useRouter } from "next/router";

/**
 * Renders a banner with a title, description, and breadcrumbs.
 *
 * @param {string} title - The title of the page.
 * @param {string} description - The description of the page.
 * @param {object[]} breadcrumbs - An array of breadcrumb data. Each breadcrumb
 *   should have a `href` property and a `text` property.
 * @returns {React.ReactElement} The banner.
 */
export default function Banner({ title, description, breadcrumbs }) {
  const { basePath } = useRouter();
  
  return (
    <main className="main"> 
      <div className="page-title page-banner">
        <div className="container position-relative">
          <h1>{title}</h1>
          <p>{description}</p>
          <nav className="breadcrumbs">
            <ol>
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={index} className={breadcrumb.current ? "current" : ""}>
                  <a href={`${basePath}${breadcrumb.href}`}>{breadcrumb.text}</a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </main>
  );
}