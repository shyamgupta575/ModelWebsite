import React from 'react'

function BestPhotographer() {
  return (
    <div>
      <section className="bottomcolor"></section>
    <div className="container-fluid text-center Photographers">
        <h1 className="text-center"> <span style={{fontSize: "1.7rem"}}>--Our Best--</span> <br/>Photographers</h1>
        <div className="row m-3 mx-auto">
            
            <div className="col-lg-3 col-md-3 col-sm-11 col-11 mt-5 mx-auto">
                <div className="card" >
                    <img className="card-img-top" src="Photographer1.jpg" alt="Photographer1" style={{width:"100%", height:"300px"}}/>
                    <div className="card-body" >
                        <h4 className="card-title" >John Doe</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada, ante eu aliquam dapibus, purus sapien aliquam nisl, ut tincidunt est nunc a massa. Vivamus pretium vitae lectus vitae dictum.</p>
                        <a href="#"  className="btn ">Read More</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-11 col-11 mt-5 mx-auto">
                <div className="card" >
                    <img className="card-img-top" src="Photographer2.jpg" alt="Photographer2" style={{width:"100%", height:"300px"}}/>
                    <div className="card-body" >
                        <h4 className="card-title" >John Doe</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada, ante eu aliquam dapibus, purus sapien aliquam nisl, ut tincidunt est nunc a massa. Vivamus pretium vitae lectus vitae dictum.</p>
                        <a href="#"  className="btn ">Read More</a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-11 col-11 mt-5 mx-auto">
                <div className="card" >
                    <img className="card-img-top" src="Photographer3.jpg" alt="Photographer3" style={{width:"100%", height:"300px"}}/>
                    <div className="card-body" >
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut malesuada, ante eu aliquam dapibus, purus sapien aliquam nisl, ut tincidunt est nunc a massa. Vivamus pretium vitae lectus vitae dictum.</p>
                        <a href="#"  className="btn ">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default BestPhotographer
