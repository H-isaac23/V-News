import styles from "./Navigation.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.siteNameContainer}>
        <div className={styles.siteName}>V-News</div>
      </div>
      <div className={styles.navigators}>
        <Link to="/" className={`${styles.home} ${styles.navs}`}>
          Home
        </Link>
        <Link
          to="/disclaimer"
          className={`${styles.disclaimer} ${styles.navs}`}
        >
          Disclaimer
        </Link>
        <Link to="/credits" className={`${styles.credits} ${styles.navs}`}>
          Credits
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
