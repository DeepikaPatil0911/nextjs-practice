import React from 'react'
import styles from "../styles/pages/About.module.scss"
import BUTTON from "../components/button"
import Header from "../components/Header"
const about = () => {
   return (
      <>
         <Header />
         <div className={`${styles.wrapper} ${styles.wrapper_next} container section_spacing`}>
            <div className={styles.wrapper2}>
               <BUTTON />
            </div>
         </div>
      </>
   )
}

