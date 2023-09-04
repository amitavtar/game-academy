import React from 'react';

function LoginModal() {
  return (
    <div>
          <div className="modal fade" id="LoginModal" tabindex="-1" aria-labelledby="LoginModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-xl">
    <div className="modal-content">
      <div className="modal-body p-0">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div className="row">
		  <div class="col-sm-12 col-md-6 col-lg-6 bgloginImgUser">
			  <div className="logo-bg position-relative">
	         
			  </div>
		  </div>
		  <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                    <div className="form-style mt-5 pe-2">
                  <form className="row">
			  <div className="form-group col-sm-12 col-md-12 text-center mb-4">
			  <h2 className="mdl-ttl">log in</h2>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div className="input-container">
                  <input type="email" className="form-control ps-5" placeholder="Phone Number" />
                      <img src="assets/img/mobile.png" className="input-img" alt="" />
                  </div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div className="input-container">
                  <div className=""><input className="styled-checkbox" id="RememberMe" type="checkbox" name="RememberMe" /><label for="RememberMe" className="w-100">Remember Me</label></div>
                  </div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <a href="#" className="btn btn-submit w-75">Continue</a>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <div className="orLine"><span className="orLog">or</span></div>
			  </div>
                      
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <p className="loginwithEmailBtn btn w-75" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#LoginEmailModal"><img src="assets/img/EmailArrowRight.png" alt="" /> Login with Email</p>
			  </div>
                      
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <div className="orLine"><span className="orLog">or</span></div>
			  </div> 
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <div className="d-flex justify-content-center align-items-center gap-3 my-3">
                  <img src="assets/img/facebook.png" alt="" />
				  <img src="assets/img/Google.png" alt="" />
                  </div>
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

export default LoginModal;
