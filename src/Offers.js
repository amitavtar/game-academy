import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Offers = () => {

  const settings = {
    // Your existing settings here
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2, // Number of slides to show on smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1, // Number of slides to show on even smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };
  
    
    const imageStyle = {
      width: '110%', 
      height: '200px', 
      objectFit: 'cover', 
    };


  const [stateO, setStateO] = useState([]);

  useEffect(() => {
    // Make a GET request using axios
    axios.get('http://13.233.104.251:8080/api/coach/homeScreen?longitude=&latitude=')
      .then(response => {
        setStateO(response.data.data.offers);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Log the "Offer" data to the console
    stateO.forEach(item => {
      if (item.image) {
        console.log('Offer:', item.image);
      };
      

    });
  }, [stateO]);
  



  return (
    <div>
         <section className="pt-4" id="Offerevents">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-center"><h3 className="sec-title">Offers and Sport Events</h3></div>
                <div className="col-sm-12 col-md-12 col-lg-12 mb-3 text-center">
                    <ul className="nav nav-pills mb-3 justify-content-center tabsnew lineAlign" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active text-capitalize d-grid" type="button" id="pills-offer-tab" data-bs-toggle="pill" data-bs-target="#pills-offer">offers</button></li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link text-capitalize d-grid" type="button" id="pills-events-tab" data-bs-toggle="pill" data-bs-target="#pills-events">events</button></li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                         {/* <div className="tab-pane fade show active" id="pills-offer" role="tabpanel" aria-labelledby="pills-offer-tab">
                        <div id="dynamicDots" className="position-relative">
                            <div > */}
                                {/* <div>
                                                <div tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                                    <div className="">
                                                        <div className="eventGridFlex"><img src="assets/img/offerImage1.png" className="img-fluid eventTabImg" alt="" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                <div>
                                                <div tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                                    <div className="">
                                                        <div className="eventGridFlex"><img src="assets/img/offerImage2.png" className="img-fluid eventTabImg" alt="" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                <div>
                                                <div tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                                    <div className="">
                                                        <div className="eventGridFlex"><img src="assets/img/offerImage3.png" className="img-fluid eventTabImg" alt="" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                <div>
                                                <div tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                                    <div className="">
                                                        <div className="eventGridFlex"><img src="assets/img/offerImage1.png" className="img-fluid eventTabImg" alt="" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                <div>
                                                <div tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                                    <div className="">
                                                        <div className="eventGridFlex"><img src="assets/img/offerImage2.png" className="img-fluid eventTabImg" alt="" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                <div>
                                                <div tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                                    <div className="">
                                                        <div className="eventGridFlex"><img src="assets/img/offerImage3.png" className="img-fluid eventTabImg" alt="" /></div>
                                                    </div>
                                                </div>
                                            </div> */}

                                           

                                     <Slider {...settings} className="nav nav-pills mb-3 justify-content-start justify-content-md-center tabsnew lineAlign" id="pills-tab" role="tablist">
                                       {stateO.map((item, i) => (
                                        <div key={i} className="nav-item" role="presentation">
                                         {item.image && (
                                          <div>
                                             <img src={item.image} alt={`Image ${i}`} className="img-fluid eventTabImg" style={imageStyle} />
                                          </div>
                                             )}
                                        </div>
                                                ))}
                                      </Slider>

                            {/* </div>
                        </div>
                        </div> */}
                         <div className="tab-pane fade" id="pills-events" role="tabpanel" aria-labelledby="pills-events-tab">
                        <div id="dynamicDots" className="position-relative">
                             <div className="slider EventNewsSlider sportSlider">
                                <div className="">
                                    <div className="AlreadyEvent">
                                  <div className="AlreadyEventBox">
                                    <img
                                      src="assets/img/dummyImage.png"
                                     
                                      alt=""
                                      className="eventImg"
                                    />

                                    <a href="#"
                                      className="text-dark"
                                    >
                                      <h6 className="mb-0 nameAddressEllip">
                                        void acadamy
                                      </h6>
                                      <p className="mb-0 nameAddressEllip">
                                        Kandivali
                                      </p>
                                    </a>
                                    <span className="position-relative Sidetag">
                                      <img
                                        src="assets/img/Sidetag.png"
                                        alt=""
                                      />
                                      <span
                                        className= "SidetagText"
                                        
                                      >
                                        Booked User: 11/20
                                      </span>
                                    </span>
                                  </div>
                                  <div className="eventCreateDetail">
                                    <div className="row px-1 align-items-center">
                                      <div className="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne">
                                        <img
                                          src="assets/img/employe.png"
                                          className="rounded-circle eventCreaterIcon"
                                          alt=""
                                        />
                                        <span>
                                          <p className="mb-0">Created by</p>
                                          <p className="mb-0 fw-bold">
                                            lav kush
                                          </p>
                                        </span>
                                      </div>
                                      <div className="col-sm-12 col-md-6 col-lg-4 vercalLIne">
                                        <span>
                                          <p className="mb-0">
                                            Available Sports
                                          </p>
                                          <p className="mb-0 fw-bold">
                                            Cricket
                                          </p>
                                        </span>
                                      </div>
                                      <div className="col-sm-12 col-md-6 col-lg-4">
                                        <span>
                                          <p className="mb-0">Date & Time</p>
                                          <p className="mb-0 fw-bold">
                                            Dec 20, 2022
                                          </p>
                                          <p className="mb-0 fw-bold">
                                            10:00am - 11:00pm
                                          </p>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="paymentJoin">
                                    <span>
                                      <p className="mb-0">Payment required</p>
                                      <p className="mb-0 theme-color fw-bold">
                                        <i className="fa fa-inr"></i> 35
                                        /-
                                      </p>
                                    </span>
                                    <button className="joinUsBtn">
                                        Join Us
                                      </button>
                                  </div>
                                </div>
                                 </div>
                                <div className="">
                                    <div className="AlreadyEvent">
                                  <div className="AlreadyEventBox">
                                    <img
                                      src="assets/img/dummyImage.png"
                                     
                                      alt=""
                                      className="eventImg"
                                    />

                                    <a href="#"
                                      className="text-dark"
                                    >
                                      <h6 className="mb-0 nameAddressEllip">
                                        void acadamy
                                      </h6>
                                      <p className="mb-0 nameAddressEllip">
                                        Kandivali
                                      </p>
                                    </a>
                                    <span className="position-relative Sidetag">
                                      <img
                                        src="assets/img/Sidetag.png"
                                        alt=""
                                      />
                                      <span
                                        className= "SidetagText"
                                        
                                      >
                                        Booked User: 11/20
                                      </span>
                                    </span>
                                  </div>
                                  <div className="eventCreateDetail">
                                    <div className="row px-1 align-items-center">
                                      <div className="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne">
                                        <img
                                          src="assets/img/employe.png"
                                          className="rounded-circle eventCreaterIcon"
                                          alt=""
                                        />
                                        <span>
                                          <p className="mb-0">Created by</p>
                                          <p className="mb-0 fw-bold">
                                            lav kush
                                          </p>
                                        </span>
                                      </div>
                                      <div className="col-sm-12 col-md-6 col-lg-4 vercalLIne">
                                        <span>
                                          <p className="mb-0">
                                            Available Sports
                                          </p>
                                          <p className="mb-0 fw-bold">
                                            Cricket
                                          </p>
                                        </span>
                                      </div>
                                      <div className="col-sm-12 col-md-6 col-lg-4">
                                        <span>
                                          <p className="mb-0">Date & Time</p>
                                          <p className="mb-0 fw-bold">
                                            Dec 20, 2022
                                          </p>
                                          <p className="mb-0 fw-bold">
                                            10:00am - 11:00pm
                                          </p>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="paymentJoin">
                                    <span>
                                      <p className="mb-0">Payment required</p>
                                      <p className="mb-0 theme-color fw-bold">
                                        <i className="fa fa-inr"></i> 35
                                        /-
                                      </p>
                                    </span>
                                    <button className="joinUsBtn">
                                        Join Us
                                      </button>
                                  </div>
                                </div>
                                 </div>
                                <div className="">
                                    <div className="AlreadyEvent">
                                  <div className="AlreadyEventBox">
                                    <img
                                      src="assets/img/dummyImage.png"
                                     
                                      alt=""
                                      className="eventImg"
                                    />

                                    <a href="#"
                                      className="text-dark"
                                    >
                                      <h6 className="mb-0 nameAddressEllip">
                                        void acadamy
                                      </h6>
                                      <p className="mb-0 nameAddressEllip">
                                        Kandivali
                                      </p>
                                    </a>
                                    <span className="position-relative Sidetag">
                                      <img
                                        src="assets/img/Sidetag.png"
                                        alt=""
                                      />
                                      <span
                                        className= "SidetagText"
                                        
                                      >
                                        Booked User: 11/20
                                      </span>
                                    </span>
                                  </div>
                                  <div className="eventCreateDetail">
                                    <div className="row px-1 align-items-center">
                                      <div className="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne">
                                        <img
                                          src="assets/img/employe.png"
                                          className="rounded-circle eventCreaterIcon"
                                          alt=""
                                        />
                                        <span>
                                          <p className="mb-0">Created by</p>
                                          <p className="mb-0 fw-bold">
                                            lav kush
                                          </p>
                                        </span>
                                      </div>
                                      <div className="col-sm-12 col-md-6 col-lg-4 vercalLIne">
                                        <span>
                                          <p className="mb-0">
                                            Available Sports
                                          </p>
                                          <p className="mb-0 fw-bold">
                                            Cricket
                                          </p>
                                        </span>
                                      </div>
                                      <div className="col-sm-12 col-md-6 col-lg-4">
                                        <span>
                                          <p className="mb-0">Date & Time</p>
                                          <p className="mb-0 fw-bold">
                                            Dec 20, 2022
                                          </p>
                                          <p className="mb-0 fw-bold">
                                            10:00am - 11:00pm
                                          </p>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="paymentJoin">
                                    <span>
                                      <p className="mb-0">Payment required</p>
                                      <p className="mb-0 theme-color fw-bold">
                                        <i className="fa fa-inr"></i> 35
                                        /-
                                      </p>
                                    </span>
                                    <button className="joinUsBtn">
                                        Join Us
                                      </button>
                                  </div>
                                </div>
                                 </div>
                                <div className="">
                                    <div className="AlreadyEvent">
                                  <div className="AlreadyEventBox">
                                    <img
                                      src="assets/img/dummyImage.png"
                                     
                                      alt=""
                                      className="eventImg"
                                    />

                                    <a href="#"
                                      className="text-dark"
                                    >
                                      <h6 className="mb-0 nameAddressEllip">
                                        void acadamy
                                      </h6>
                                      <p className="mb-0 nameAddressEllip">
                                        Kandivali
                                      </p>
                                    </a>
                                    <span className="position-relative Sidetag">
                                      <img
                                        src="assets/img/Sidetag.png"
                                        alt=""
                                      />
                                      <span
                                        className= "SidetagText"
                                        
                                      >
                                        Booked User: 11/20
                                      </span>
                                    </span>
                                  </div>
                                  <div className="eventCreateDetail">
                                    <div className="row px-1 align-items-center">
                                      <div className="col-sm-12 col-md-6 col-lg-4 eventCreater vercalLIne">
                                        <img
                                          src="assets/img/employe.png"
                                          className="rounded-circle eventCreaterIcon"
                                          alt=""
                                        />
                                        <span>
                                          <p className="mb-0">Created by</p>
                                          <p className="mb-0 fw-bold">
                                            lav kush
                                          </p>
                                        </span>
                                      </div>
                                      <div className="col-sm-12 col-md-6 col-lg-4 vercalLIne">
                                        <span>
                                          <p className="mb-0">
                                            Available Sports
                                          </p>
                                          <p className="mb-0 fw-bold">
                                            Cricket
                                          </p>
                                        </span>
                                      </div>
                                      <div className="col-sm-12 col-md-6 col-lg-4">
                                        <span>
                                          <p className="mb-0">Date & Time</p>
                                          <p className="mb-0 fw-bold">
                                            Dec 20, 2022
                                          </p>
                                          <p className="mb-0 fw-bold">
                                            10:00am - 11:00pm
                                          </p>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="paymentJoin">
                                    <span>
                                      <p className="mb-0">Payment required</p>
                                      <p className="mb-0 theme-color fw-bold">
                                        <i className="fa fa-inr"></i> 35
                                        /-
                                      </p>
                                    </span>
                                    <button className="joinUsBtn">
                                        Join Us
                                      </button>
                                  </div>
                                </div>
                                 </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default Offers;
