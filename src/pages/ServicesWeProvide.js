import React, { useState, useEffect } from "react";

function ServicesWeProvide() {
  const [data2, setData] = useState([]);

  useEffect(() => {
    fetch("https://centurion.gharchahiye.in/api/test-list")
      .then((result) => result.json())
      .then((resp) => {
        // Update the state with fetched data or an empty array
        setData(resp.data || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="container-fluid container2">
        <div className="services text-center pt-5">
          <h1 style={{ color: "rgb(219, 32, 12)" }}>Services We Provide</h1>
          <div className="row">
            <div
              className="col-lg-5 col-md-5 col-sm-10 col-10 service-left-side text-center"
              style={{ margin: "5%", fontSize: "1.3rem" }}
            >
              <p style={{ color: "white" }}>
                Modeling agencies offer a variety of services aimed at both
                models and clients. For models, agencies provide representation,
                assisting them in securing work in the fashion industry.
              </p>

              {data2.map((item) => (
                <div
                  key={item.id}
                  className="service-item p-3"
                  style={{
                    width: "70%",
                    margin: "auto",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    marginBottom: "20px",
                  }}
                >
                  {/* Display the image */}
                  <img
                    src={item.image || "https://via.placeholder.com/150"}
                    alt={item.title || "Service Image"}
                    style={{
                      width: "100%",
                      height: "150px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                  {/* Display the service title or description */}
                  <a
                    href="service.html"
                    style={{
                      textDecoration: "none",
                      display: "block",
                      marginTop: "10px",
                    }}
                  >
                    <p
                      className="p1"
                      style={{
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                        color: "rgb(219, 32, 12)",
                      }}
                    >
                      {item.title || "Promotion and Marketing"} {item.id}
                    </p>
                  </a>
                </div>
              ))}
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesWeProvide;
