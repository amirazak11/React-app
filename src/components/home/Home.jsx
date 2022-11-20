import React, { Component } from 'react'
import styles from './Home.module.css'
import thisImg from "../../imgs/avataaars.svg"
export default class Home extends Component {
  render() {
    return (
      <>
      <div className={`text-white text-center ${styles.divPadding}`}>
         <div classNameName="container d-flex align-items-center flex-column p-4">
         <img className={styles.imgStyle} src={thisImg} />
                <h1 className={`masthead-heading text-uppercase mb-0 ${styles.fontSize}`}>Start React</h1>
                <div>
            <div>
    <div className={`divider-light  ${styles.divChildern,styles.dividerCustom}`}>
    <div className={styles.dividerLine}></div>
    <div className={styles.dividerIcon}>
    <i className="fas fa-star"></i></div>
    <div className={styles.dividerLine}></div>
</div>
      </div>
    </div>             
       <p className="masthead-subheading font-weight-light mb-0">
                  Graphic Artist - Web Designer - Illustrator
                </p>
            </div>
      </div>
      </>
    )
  }
}
