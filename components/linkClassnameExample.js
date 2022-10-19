// Example: Adding className with <Link>
import Link from "next/link";
import styles from "styles/LinkClassnameExample.module.css";

export default function LinkClassnameExample({ children }) {
  // To add attributes like className, target, rel, etc.
  // add them to the <a> tag, not to the <Link> tag.
  return (
    <Link href="/">
      <a className={styles.foo} target="_self" rel="noopener noreferrer">
        {children}
      </a>
    </Link>
  );
}

// Take a look at https://nextjs.org/docs/api-reference/next/link to learn more!
