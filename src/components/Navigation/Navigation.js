import styles from "./Navigation.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.siteName}>
        <p className={styles.navs}>V-News</p>
      </div>
      <div className={styles.navigators}>
        <p className={`${styles.home} ${styles.navs}`}>Home</p>
        <p className={`${styles.disclaimer} ${styles.navs}`}>Disclaimer</p>
        <p className={`${styles.credits} ${styles.navs}`}>Credits</p>
      </div>
    </div>
  );
}
