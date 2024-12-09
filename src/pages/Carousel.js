import React from 'react'

// isme href ko shi krna h and isme scroll nhi ho rha 

function Carousel() {
  return (
    <div id="demo" className="carousel slide" data-bs-ride="carousel" >
         <div className="carousel-inner">
            <div className="carousel-item active top-section" id="carousal1">
        
                <video className="video-bg" autoPlay muted loop>
                <source src="model.mp4" type="video/mp4"/>
                </video>
            <div className="carousel-caption">
                <h1 style={{color:"rgb(219, 32, 12)", fontSize: "2rem"}}>Top Models  </h1>
                <p style={{fontSize:"2rem"}}> of <a href="#" ><img src="logo.png" className="img-fluid" alt='hom' style={{width:"100px", height:"50px"}}/></a></p>

        
            </div>
            </div>
            <div className="carousel-item top-section" id="carousal1">
                <video className="video-bg" autoPlay muted loop>
                <source src="model1.mp4" type="video/mp4"/>
                </video>
                <div className="carousel-caption">
                    <h1 style={{color:"rgb(219, 32, 12)", fontSize: "2rem"}}>Top Models  </h1>
                    <p style={{fontSize: "2rem"}}> of <a href="#" ><img src="logo.png" className="img-fluid" alt='Hell' style={{width:"100px", height:"50px"}}/></a></p>
                </div>
            </div>
            <div className="carousel-item top-section" id="carousal1">
                <video className="video-bg" autoPlay muted loop>
                <source src="model2.mp4" type="video/mp4"/>
                </video>
                <div className="carousel-caption">
                    <h1 style={{color:"rgb(219, 32, 12)", fontSize: "2rem"}}>Top Models  </h1>
                    <p style={{fontSize:"2rem"}}> of <a href="#" ><img src="logo.png" className="img-fluid" alt='Hello' style={{width:"100px", height:"50px"}}/></a></p>
                </div>
            </div> 
            
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
        </button>
    
    </div>
</div>

  )
}

export default Carousel