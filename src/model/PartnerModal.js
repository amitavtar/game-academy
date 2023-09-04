import React from 'react';

function PartnerModal() {
  return (
    <div>
      <div className="modal fade" id="PartnerModal" tabindex="-1" aria-labelledby="PartnerModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-xl">
    <div className="modal-content">
    <div className="modal-body p-0">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <div className="row fliprow">
            <div className="col-sm-12 col-md-12 col-lg-6 bgloginImgvenue pb-1">
                <div className="logo-bg position-relative"><img src="assets/img/gamehuntlogo.png" className="logo-icon" alt="logo" /></div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 mt-5">
                <ul className="nav nav-pills mb-2 justify-content-center tabsnew" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active text-capitalize" type="button" role="tab">
                            <img src="assets/img/venueName_red.png" className="selectIcon" alt="" /><img src="assets/img/venueName.png" className="UnselectIcon" alt="" />venues
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link text-capitalize" type="button" role="tab"><img src="assets/img/coachIcon_red.png" className="selectIcon" alt="" /><img src="assets/img/coachIcon.png" className="UnselectIcon" alt="" />coach</button>
                    </li>
                </ul>
                <div className="tab-content pe-2" id="pills-tabContent">
                    <div className="form-style mt-3 mt-md-5 px-4">
                        <form className="">
                            <div className="row">
                                <div className="col-sm-12 col-md-12 text-center mb-3"><h2 className="mdl-ttl">Login</h2></div>
                                <div className="col-sm-12 col-md-12 mb-4">
                                    <div className="form-group">
                                        <div className="input-container"><input className="form-control ps-5" placeholder="Email Address" name="email" value="" /><img src="assets/img/email.png" className="input-img" alt="" /></div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 mb-1">
                                    <div className="form-group">
                                        <div className="input-container">
                                            <input id="password-field" type="password" name="password" className="form-control ps-5" placeholder="Password" value="" /><img src="assets/img/password.png" className="input-img" alt="" />
                                            <span className="pass-view field-icon toggle-password"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 text-end mb-1">
                                    <p className="mb-0"><span className="theme-color cursor-pointer fw-bold">Forgot Password?</span></p>
                                </div>
                                <div className="form-group col-sm-12 col-md-12 col-lg-12 mb-4">
                                    <div className="input-container">
                                        <div className=""><input className="styled-checkbox" id="RememberMe" type="checkbox" name="RememberMe" /><label for="RememberMe" className="w-100">Remember Me</label></div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-12 text-center"><button type="submit" className="btn btn-submit mt-0">Login</button></div>
                                <div className="text-center my-5">Not register Yet ? <span className="theme-color cursor-pointer fw-bold">Create an Account</span></div>
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
    </div>
  );
}

export default PartnerModal;
