import React from 'react'
import { useState,useEffect } from 'react';

// isme photo add krni h 


function ServicesWeProvide() {

  const [data2 , setData]= useState([]);
    useEffect(() => {
        fetch("https://centurion.gharchahiye.in/api/test-list").then((result) =>{
            result.json().then((resp)=>{ 
                // console.warn("result",resp)
                setData(resp.data || []);
            })
        })
    },[])


  return (
    <div>

<div className="container-fluid container2  " >
        <div className="services text-center pt-5">
            <h1 style={{color:"rgb(219, 32, 12)"}}> Services we Provide</h1>
            <div className="row" >
                
                <div className="col-lg-5 col-md-5 col-sm-10 col-10 service-left-side text-center" style={{margin:"5%", fontSize: "1.3rem"}}>
                    <p style={{color:"white"}}>Modeling agencies offer a variety of services aimed at both models and clients. For models, agencies provide representation, assisting them in securing work in the fashion industry.  </p>
                    
                    {
                      data2.map((item) => 
                      <a href="service.html"  style={{textDecoration:"none"}} ><p className="p1 p-3" style={{width:"70%"}}>
                        Promotion and Marketing {item.id}
                    </p></a>

                      )

                    }
                    

                    

                </div>
                <div className="col-lg-1"></div>
               
            
            </div>
        

        </div>
    </div>
    
    
      
    </div>
  )
}

export default ServicesWeProvide
