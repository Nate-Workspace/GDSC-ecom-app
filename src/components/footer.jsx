import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <div className="mainWrap">
        <div className="topFooter">
          <div className="firstCol">
            <p>Sponsor 1</p>
            <p>Sponsor 2</p>
            <p>Sponsor 3</p>
          </div>
          <div className="secondCol">
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram 3</p>
          </div>
        </div>
        <div className="bottomFooter"> 
          <hr />
          <p>Copyright @ All rights are reserved</p> 
        </div>
    </div>
  )
}
