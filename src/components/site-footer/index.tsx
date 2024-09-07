import React from "react";
import styles from "./styles.module.scss";

const SiteFooter = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.disclaimer}>
        The information on this website is for the sole use of Toastmasters’
        members, for Toastmasters business only. It is not to be used for
        solicitation and distribution of non-Toastmasters material or
        information.
      </div>

      <div className={styles.links}>
        <div className={styles.leftLinks}>
          <a href="./">Terms</a>
          <a href="./">Privacy Policy</a>
        </div>
        <div className={styles.rightText}>
          Website by <span>StickyCareer</span>
        </div>
      </div>
    </footer>
  );
};
export default SiteFooter;
