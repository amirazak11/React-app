import React, { Component } from 'react'
import "./PortoImg.css"
import Img1 from '../../../imgs/1.png'
import Img2 from '../../../imgs/2.png'
import Img3 from '../../../imgs/3.png'
import Img4 from '../../../imgs/4.png'
import Img5 from '../../../imgs/5.png'
import Img6 from '../../../imgs/6.png'
export default class PortoImg extends Component {
    state={
        PortImgs:[
            Img1,
            Img2,
            Img3,
            Img4,
            Img5,
            Img6  ]}
  render() 
  {
    return (
<div className="row ">
    {this.state.PortImgs.map((PortImg)=>
    <div className="col-4 p-2 mb-5  position-relative  ">
    <img className='w-100 ' src={PortImg}  />

          <div class="position-absolute middle">

          <div class="text"></div>
          </div>
          
    </div>

    )}
</div>
    )
  }
}
