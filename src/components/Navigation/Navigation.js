import styles from "./Navigation.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.siteName}>
        <p>V-News</p>
      </div>
      <div className={styles.navigators}>
        <p className={styles.home}>Home</p>
        <p className={styles.disclaimer}>Disclaimer</p>
        <p className={styles.credits}>Credits</p>
      </div>
    </div>
  );
}
