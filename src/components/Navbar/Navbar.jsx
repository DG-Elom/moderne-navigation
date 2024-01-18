"use client";

import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
  { name: "Autres", path: "/autres" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className={styles.nav_list}>
        {links.map((link, index) => (
          <li
            key={index}
            className={pathname === link.path ? styles.active_link : ""}
          >
            <Link
              href={link.path}
              aria-current={pathname === link.path ? "page" : ""}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
