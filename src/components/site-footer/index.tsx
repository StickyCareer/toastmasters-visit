import React from 'react'
import styles from './styles.module.scss'

const SiteFooter = () => {
  return(
    <><div className={styles.container}>

      <div id="Disclaimer">
       The information on this website is for the sole use of Toastmasters’ members, for Toastmasters business only. It is not to be used for solicitation and distribution of non-Toastmasters material or information.
      </div>

      <div id="Links">
       <div>
        <a href="./">Terms</a>
        <a href="./">Privacy Policy</a>
       </div>
       <div>Website by <span>StickyCareer</span></div>
      </div>
      
      </div></>
  )
}
export default SiteFooter