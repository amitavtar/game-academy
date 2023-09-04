import React from 'react';

function OTPModal() {
  return (
    <div>
      <div className="modal fade" id="OTPModal" tabindex="-1" aria-labelledby="OTPModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-xl">
    <div className="modal-content">
      <div className="modal-body p-0">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div className="row">
		  <div className="col-sm-12 col-md-6 col-lg-6 bgloginImgUser">
			  <div className="logo-bg position-relative">
        {/* <!--		     <img src="assets/img/gamehuntlogo.png" className="logo-icon" alt="logo">--> */}
			  </div>
		  </div>
		  <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                <div className="form-style mt-5 pe-2">
                  <form className="row">
			  <div className="form-group col-sm-12 col-md-12 text-center">
			  <h2 className="mdl-ttl">OTP Verification</h2>
                  <p>Please enter 6 digit code which has been send on your registered email address.</p>
			  </div>
                      
                      <div className="form-group col-sm-12 col-md-12 text-center mb-5">
			  <div className=""><img src="assets/img/OTPVery.png" className="img-fluid" alt="" /></div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div className="passcode-wrapper">
						<input id="codeBox1" type="number" maxlength="1" placeholder="0" />
						<input id="codeBox2" type="number" maxlength="1" placeholder="0" /> 
						<input id="codeBox3" type="number" maxlength="1" placeholder="0" /> 
						<input id="codeBox4" type="number" maxlength="1" placeholder="0" />
						<input id="codeBox5" type="number" maxlength="1" placeholder="0" />
						<input id="codeBox6" type="number" maxlength="1" placeholder="0" />
						</div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 text-center mb-3">
                  <p className="otp-timing">00:35</p>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 text-center">
                  <span className="btn btn-submit" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#ResetModal">Verify</span>
			  </div>
                      <div className="form-group col-sm-12 col-md-12 text-center mb-4">
				  <a href="#" className="forgot-pass theme-color">Resend Code</a>
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

export default OTPModal;
