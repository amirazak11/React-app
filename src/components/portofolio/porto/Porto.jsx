import React, { Component } from 'react'
import Star from '../../star/Star'
import PortoImg from '../PortoImg/PortoImg'
import styles from './Porto.module.css'
export default class Porto extends Component {
  render(
  ) {
    return (
        <div className={`page-section  ${styles.portfolio}`} id="portfolio">

            <div className="container">
              <div className="row"> 
              <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
<Star/>
              </div>

<PortoImg/>  

             </div>

        


             </div>
    )
  }
}
