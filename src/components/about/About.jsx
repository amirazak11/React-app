import React, { Component } from 'react'
import styles from './about.module.css'
export default class about extends Component {
  render() {
    return (
        <>

        <section className={`text-white text-center ${styles.divPadding}`}>
            <div className="container">
            <h1 className={`masthead-heading text-uppercase mb-0 ${styles.fontSize}`}>Start React</h1>
            <div>
    <div className={`divider-light  ${styles.divChildern,styles.dividerCustom}`}>
    <div className={styles.dividerLine}></div>
    <div className={styles.dividerIcon}>
    <i className="fas fa-star"></i></div>
    <div className={styles.dividerLine}></div>
</div>
      </div>
<div class="row justify-content-center">
 <div class="col-4 ml-auto "><p class="lead">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
 <div class="col-4 mr-auto "><p class="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
                </div>            
            </div>
        </section>
        </>

    )
  }
}
