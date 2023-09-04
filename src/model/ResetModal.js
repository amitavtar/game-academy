import React from 'react';

function ResetModal() {
  return (
    <div>
      <div className="modal fade" id="ResetModal" tabindex="-1" aria-labelledby="ResetModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-xl">
    <div className="modal-content">
      <div className="modal-body p-0">
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div className="row">
		  <div className="col-sm-12 col-md-6 col-lg-6 bgloginImgUser">
			  <div className="logo-bg position-relative">
          {/* <img src="assets/img/gamehuntlogo.png" className="logo-icon" alt="logo">--> */}
			  </div>
		  </div>
		  <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
                <div className="form-style mt-5 pe-2">
                    <form className="row">
			  <div className="form-group col-sm-12 col-md-12 text-center">
			  <h2 className="mdl-ttl">reset password</h2>
                  <p>Please reset your password here</p>
			  </div>
                        
			     <div className="form-group col-sm-12 col-md-12 text-center mb-5">
			  <div className=""><img src="assets/img/Password_graphic.png" className="img-fluid" alt="" /></div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div className="input-container">
                  <input id="password-field" type="password" className="form-control ps-5" placeholder="Set New Password" />
				  <img src="assets/img/password.png" className="input-img pass" alt="" />
				  <span toggle="#password-field" className="pass-view field-icon toggle-password"></span>
                  </div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                  <div className="input-container">
                  <input id="password-field" type="password" className="form-control ps-5" placeholder="Set Confirm New Password" />
                      <img src="assets/img/password.png" className="input-img" alt="" />
                      <span toggle="#password-field" className="pass-view field-icon toggle-password"></span>
                  </div>
			  </div>
			  <div className="form-group col-sm-12 col-md-12 text-center">
				  <button className="btn btn-submit">Done</button>
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

export default ResetModal;
