import React from "react";

const Header =()=>{
    return(
        <>
        <section className="container main-hero-container"></section>
        <div className="row  justify-content-start  align-items-start ">
            <div id="content-div" className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column ">
                <h1 className="display-2">ONLINE PAYMENT MADE <br/> EASY FOR YOU.</h1>
                <p className="main-hero-para">
                Let your customers pay via any card, 65+ netbanking options, UPI, Paytm & other wallets, EMI and Pay Later options.Online Bill Payment Postpaid Bills, Quick Utility Bill, Insurance, Loan & Education Fee Payment. Postpaid Bill Payment - Mobile Post-paid bill payments for all the renowned operators such as Airtel, Vodafone
                </p>
                <h3>Get early access for you</h3>
                <div className="input-group mt-3">
                    <input type="text" className="rounded-pill w-75 me-3 p-2 form-control-text"/>
                    <div className="input-group-text">Get it now</div>
                </div>
            </div>
            </div>
            <div className=" justify-content-end align-items-center">
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center">
            <img id="abc" src="./images/img4.jpg"  alt="heroimg" className="img-fluid" />
            {/* <img src="./images/img2.webp" height="10px" width="500px" alt="heroimg" className="img-fluid" /> */}


        </div>
        </div>
  
       
        </>
    )
}
export default Header;