import React from 'react'

function ApplyInformation() {
  return (
    <div>
      <section className="info ">
  <div className="container-fluid personal-info">
    <h1>--Information--</h1>
    <div className="row p-5">
      <div className="col-lg-1 col-md-1" />
      <div className="col-lg-11 col-md-11 col-sm-12 col-12 form1">
        <form>
          <div className="row">
            <h4 style={{ color: "white", margin: "2% 0 1% 0" }}>
              Personal Information
            </h4>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <input
                className="input1"
                type="text"
                name="name"
                placeholder="First name"
              />
              <br />
              <br />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <input
                className="input1"
                type="text"
                name="name"
                placeholder="Second name"
              />
              <br />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-11">
              <input
                className="input1"
                type="date"
                placeholder="dd-mm-yyyy"
                name="dob"
              />
              <br />
              <br />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-11 mt-3">
              <select id="month" name="month">
                <option value="">Gender</option>
                <option value={"01"}>Male</option>
                <option value={"02"}>Female</option>
              </select>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-11">
              <input
                className="input1"
                type="text"
                placeholder="Nationality"
                name="Nationality"
              />
              <br />
              <br />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-11">
              <input
                className="input1"
                type="text"
                placeholder="Language"
                name="language"
              />
            </div>
          </div>
          <div className="row mt-5">
            <h4 style={{ color: "white", margin: "2% 0 1% 0" }}>
              Contact Information
            </h4>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <input
                className="input1"
                type="email"
                name="email"
                placeholder="Email address"
              />
              <br />
              <br />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <input
                className="input1"
                type="phone"
                name="phone"
                placeholder="Phone Number"
              />
              <br />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-11">
              <input
                className="input1"
                type="text"
                placeholder="City"
                name="city"
              />
              <br />
              <br />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <input
                className="input1"
                type="text"
                name="postcode"
                placeholder="Post Code"
              />
              <br />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-11">
              <input
                className="input1"
                type="text"
                placeholder="State"
                name="state"
              />
              <br />
              <br />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-11">
              <input
                className="input1"
                type="text"
                placeholder="Country"
                name="country"
              />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-11">
              <input
                className="input1"
                type="text"
                placeholder="Address line1"
                name="Address1"
              />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-11">
              <input
                className="input1"
                type="text"
                placeholder="Address line2"
                name="Address2"
              />
            </div>
          </div>
          <div className="row mt-5">
            <h4 style={{ color: "white", margin: "2% 0 1% 0" }}>
              Modeling Information
            </h4>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <input
                className="input1"
                type="text"
                name="height"
                placeholder="Height,cm"
              />
              <br />
              <br />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12">
              <input
                className="input1"
                type="text"
                name="weight"
                placeholder="Weight,kg"
              />
              <br />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-11">
              <input
                className="input1"
                type="text"
                placeholder="Chest/Bust,cm"
                name="chestsize"
              />
              <br />
              <br />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-11">
              <input
                className="input1"
                type="text"
                placeholder="Weist,cm"
                name="weistsize"
              />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-11">
              <input
                className="input1"
                type="text"
                placeholder="Hips,cm"
                name="hips"
              />
              <br />
              <br />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-11">
              <input
                className="input1"
                type="text"
                placeholder="Shoes EUR"
                name="Shoes_EUR"
              />
              <br />
              <br />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-11">
              <input
                className="input1"
                type="text"
                placeholder="Hair length"
                name="hairlength"
              />
              <br />
              <br />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-11">
              <input
                className="input1"
                type="text"
                placeholder="Hair Color"
                name="haircolor"
              />
            </div>
          </div>
          <div className="row mt-5">
            <h4 style={{ color: "white", margin: "2% 0 1% 0" }}>
              PHOTOS (.JPG) &amp; VIDEOS (.MP4)
            </h4>
            <div className="col-lg-5 col-md-5 col-sm-11">
              <label
                htmlFor="imageUpload"
                style={{ color: "rgb(219, 32, 12)" }}
              >
                Choose Image:
              </label>
              <input
                type="file"
                id="imageUpload"
                name="imageUpload"
                accept="image/*"
              />
            </div>
            <div className="col-lg-5 col-md-5 col-sm-11">
              <label
                htmlFor="videoUpload"
                style={{ color: "rgb(219, 32, 12)" }}
              >
                Choose Video:
              </label>
              <input
                type="file"
                id="videoUpload"
                name="videoUpload"
                accept="video/*"
              />
            </div>
          </div>
          <div className="row mt-5">
            <h2 style={{ color: "white", paddingBottom: "2%" }}>BIOGRAPHY</h2>
            <div className="col-lg-10 col-md-10 col-sm-10">
              <textarea
                rows={5}
                cols={8}
                id="comment"
                name="biography"
                placeholder="Tell us about yourself "
                style={{ width: "95%" }}
                defaultValue={" "}
              />
            </div>
          </div>
          <button
            className="btn"
            style={{
              backgroundColor: "rgb(219, 32, 12)",
              padding: "1% 2% 1% 2%",
              margin: "5% 0% 5% 0%",
              color: "white",
              fontFamily: "Rubik Doodle Shadow"
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default ApplyInformation
