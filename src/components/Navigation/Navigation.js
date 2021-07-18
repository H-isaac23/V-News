import styles from "./Navigation.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.siteNameContainer}>
        <div className={styles.siteName}>V-News</div>
      </div>
      <div className={styles.navigators}>
        <div className={`${styles.home} ${styles.navs}`}>Home</div>
        <div className={`${styles.disclaimer} ${styles.navs}`}>Disclaimer</div>
        <div className={`${styles.credits} ${styles.navs}`}>Credits</div>
      </div>
    </div>
  );
}
