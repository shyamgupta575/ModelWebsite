import React from 'react'

function Services4() {
  return (
    <div>
      <div  className="container-fluid hairstyleservice">
        <h1>Hairstyling Services</h1>
        <p className="p1 text-center">Our hairstyling services accommodate a wide spectrum of tastes and aesthetics, from elegant and refined to daring and avant-garde. Our skilled stylists apply originality and accuracy to every styling session, whether it's creating editorial-inspired looks or runway-ready haircuts, making sure that clients radiate confidence from head to toe.</p>
        <div className="row " style={{margin: "5% 25%"}}>
            <div className="col-lg-3 col-md-3 col-sm-3 col-3  mt-3 images1 flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <img src="hairstle1.jpg" alt="hairstle1" className="img-fluid " />
                    </div>
                    <div className="flip-box-back " >
                        <h2 style={{fontSize:"1.5rem"}}>rahg kfjk</h2>
                        <p>Age:24</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 mt-3 images1 flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <img src=".hairstle2.jpg" alt="hairstle2" className="img-fluid " />
                    </div>
                    <div className="flip-box-back " >
                        <h2 style={{fontSize:"1.5rem"}}>rahg kfjk</h2>
                        <p>Age:24</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 mt-3 images1 flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <img src="hairstle3.jpg" alt="hairstle3" className="img-fluid "   />
                    </div>
                    <div className="flip-box-back " >
                        <h2 style={{fontSize:"1.5rem"}}>rahg kfjk</h2>
                        <p>Age:24</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-3 col-3 mt-3 images1 flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <img src="hairstle4.jpg"alt="hairstle4" className="img-fluid "  />
                    </div>
                    <div className="flip-box-back " >
                        <h2 style={{fontSize:"1.5rem"}}>rahg kfjk</h2>
                        <p>Age:24</p>
                    </div>
                </div>
            </div>

        </div>
    </div >
    </div>
  )
}

export default Services4
