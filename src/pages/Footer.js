import React from 'react'
// import { Link} from 'react-router-dom'


function Footer() {
  return (
   <>
   <section className="topcolor"></section> 
    <div className="container-fluid footer">
     
            <div className="row mx-auto " style={{ padding:"3%"}}>
            
                <div className="col-lg-4 col-md-4 col-sm-10 mx-auto colum1">
                    <img src="logo.png" style={{ width:"auto", height:"80px"}} alt='hello' />
                    <p className="mt-4" >Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl uekt aliquip ex ea commodo consequat duis auhtem.</p>
                    <span  style={{fontSize: "2rem"}} className="span2">
                    {/* <a style={{margin:"2%"}} href="#" ><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    <a style={{margin:"2%"}}  href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                    <a style={{margin:"2%"}} href="#"> <i className="fa fa-twitter-square" aria-hidden="true"></i></a> */}
                    </span>
                </div>
                <div className="col-lg-1 col-md-1"></div>
                <div className="col-lg-3 col-md-3 col-sm-12 colum2 " style ={{ marginTop: "2%"}} >
                    <h3 style={{marginTop: "-1%"}} >Help</h3>
                    <a href="faq1.html" >FAQ</a><br/>
                    <a href="aboutus.html" >About us</a><br/>
                    <a href="contact.html" >Contact us</a><br/>
                    <a href="privacypolicy.html" >Privacy policy</a><br/>
                    <a href="termsandconditions.html">Terms & Condition</a><br/>
                </div>
                
                <div className="col-lg-4 col-md-4 col-sm-12 " style={{ marginTop: "2%"}}>
                    <h3 style={{ marginTop: "-1%"}}> More information</h3>
                    <p>Enter your email and we’ll send you more information.</p>
                    <div className="sections2">
                        <div className="input-container">
                            <input type="email" className="mail" name="email" placeholder="Email ID"/>
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                        </div>
                       
                    </div>


                     
                </div>
               
            </div>
             <p  style={{color:"gray", marginTop:"3%", fontSize: "1.2rem"}}><span>&copy</span>Modeling Services. All rights reserved.</p>
    </div>
     <section className="bottomcolor">
        
     </section>
   </>
  );
}

export default Footer
