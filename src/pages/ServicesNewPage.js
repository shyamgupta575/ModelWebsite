import React from 'react'

function ServicesNewPage() {
  return (
    <div>
      <div className="container-fluid container3">
      <h1 className="text-center  mt-5" style={{color:"rgb(219, 32, 12)"}}>About Us</h1>
      <div className="row" style={{marginTop: "4%"}}>
        <div className="col-lg-1"></div>
          <div className="col-lg-5 mirror-border text-center">
            
            <img src="mirrorborder.jpg" className=" img-fluid rounded-pill span1  " alt='mirrorborder' />
          </div>
        
            <div className="col-lg-5 container3-text text-center"  style={{marginTop: "6%"}}>
            <p style={{color: "white"}}>Welcome to POIM, your premier destination for top-tier modeling services. Established with a passion for excellence and a commitment to nurturing talent, we pride ourselves on being a cornerstone of the fashion and entertainment industry.</p>
            <h5 className="p2 p-3" >
                         Courses
                    </h5>
                    <h5 className="p2 p-3" >
                         Courses
                    </h5>
                    <h5 className="p2 p-3" >
                         Courses
            </h5>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ServicesNewPage
