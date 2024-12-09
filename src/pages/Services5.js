import React from 'react'

function Services5() {
  return (
    <div>
      <div  className="container-fluid Photoshootsservice">
        <h1>Portfolio Development & Photoshoots</h1>
        <p className="p1 text-center">Beauty Present provides clients with unique chances to enhance their modeling portfolios via expert photoshoots. Working with well-known stylists and photographers, we create customized photoshoot experiences that highlight clients' individual personalities and talents and provide them a gorgeous portfolio to launch their modeling careers.</p>
        <div className="row " style={{margin: "5% 25%"}}>
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 mt-3 images1 flip-box">
                <div className="flip-box-inner">
                    <div className="flip-box-front">
                        <img src="/photoshoot1.jpg" alt="photoshoot1" className="img-fluid " />
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
                        <img src="photoshoot2.jpg" alt="photoshoot2" className="img-fluid "  />
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
                        <img src="photoshoot3.jpg" alt="photoshoot3" className="img-fluid " />
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
                        <img src="photoshoot4.jpg"alt="photoshoot1" className="img-fluid "  />
                    </div>
                    <div className="flip-box-back " >
                        <h2 style={{fontSize:"1.5rem"}}>rahg kfjk</h2>
                        <p>Age:24</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Services5
