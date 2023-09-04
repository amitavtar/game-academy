import React from 'react';

function Forgot() {
  return (
    <div>
      <div className="modal fade" id="ForgotModal" tabindex="-1" aria-labelledby="ForgotModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-xl">
    <div className="modal-content">
      <div className="modal-body p-0">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div className="row">
		  <div className="col-sm-12 col-md-6 col-lg-6 bgloginImgUser">
			  <div className="logo-bg position-relative">
     {/* <!--		          <img src="assets/img/gamehuntlogo.png" className="logo-icon" alt="logo">--> */}
			  </div>
		  </div>
		  <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                <div className="form-style pe-2">
                  <form className="row">
			  <div className="form-group col-sm-12 col-md-12 text-center">
			  <h2 className="mdl-ttl">forgot password</h2>
                  <p>In order to retrieve your password, please enter registered email address</p>
			  </div>
                      
                      <div className="form-group col-sm-12 col-md-12 text-center mb-5">
			  <div className=""><img src="assets/img/Forgot.png" className="img-fluid" alt="" /></div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div className="input-container">
                  <input type="email" className="form-control ps-5" placeholder="Email ID" />
                      <img src="assets/img/email.png" className="input-img" alt="" />
                  </div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 text-center mb-5">
                  <span className="btn btn-submit" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#OTPModal">Submit</span>
			  </div>
                        
                      
			  <div className="form-group col-sm-12 col-md-12 text-center mb-5">
				  Not register Yet ? <span className="theme-color cursor-pointer fw-bold" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#createAccountModal">Create an Account</span>
			  </div>
			  </form>
                  </div>
		  </div>
		  </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default Forgot;
