import React from 'react'

function Contact2() {
  return (
    <div>
      <div className="container-fluid top-sections1 ">
        <div className="row m-5  ">
            <div className="col-lg-2 col-md-2 col-sm-0 col-0"></div>
            <div className="col-lg-10 col-md-12 col-sm-11 col-11 ">
            <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-2 col-2"></div>
                <div className="col-lg-8 col-md-10 col-sm-10 col-10 form1 text-center">
                    <form>
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-11">
                                <input type="text" style={{paddingLeft:"5%"}} name="name" placeholder="First name"/>
                                <br/>                    
                            </div>
                            <div className="col-lg-5 col-md-5 col-sm-11">
                                <input type="text" style={{paddingLeft:"5%"}} name="name" placeholder="Second name"/>
                                <br/>                   
                            </div>               
                            <div className="col-lg-10 col-md-10 col-sm-11">
                                <input type="email" name="email" placeholder="Email"/>
                                <br/>
                            </div>               
                            <div className="col-lg-10 col-md-10 col-sm-11">
                                <input type="phone" name="phone" placeholder="Phone number"/><br/>
                                <br/>
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-11">   
                                <textarea className="form-control" rows="5" cols="8" id="comment" name="text" placeholder="Message"></textarea>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Contact2
