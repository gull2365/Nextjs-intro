import Link from "next/link";
import { Router, useRouter } from "next/router";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const router = useRouter();
  return (
    <nav>
      <Link
        className={`${styles.Link} ${
          router.pathname === "/" ? styles.active : ""
        }`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={[
          styles.Link,
          router.pathname === "/about" ? styles.active : "",
        ].join("")}
        href="/about"
      >
        about
      </Link>
    </nav>
  );
};
