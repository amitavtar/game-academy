import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Online() {


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
            breakpoint: 480, 
            settings: {
              slidesToShow: 1, 
              slidesToScroll: 1,
            },
          },
        ],
      };
      const imageStyle = {
        width: '100%', 
        height: '300px', 
        // objectFit: 'cover', 
      };
  

    const [dataO, setDataO] = useState([]);

  useEffect(() => {
   
    axios.get('http://13.233.104.251:8080/api/coach/homeScreen?longitude=&latitude=')
      .then(response => {
        setDataO(response.data.data.onlineSession);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    
    dataO.forEach(item => {
      if (item) {
        console.log('sport:', item);
      }
    });
  }, [dataO]);


  return (
    <div>
        <section className="mt-4 pt-4">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 mb-2 mb-md-5 text-center"><h3 className="sec-title">Online Session</h3></div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 mb-4">
                    <div className="slick-slider EventNewsSlider sportSlider slick-initialized">
                        <div className="slick-list">
                            <div className="slick-track" style={{ width: '1296px', opacity: 1, transform: 'translate3d(0px, 0px, 0px)' }}>
                                <div data-index="0" className="slick-slide slick-active slick-current" tabindex="-1" aria-hidden="false" style={{ outline: 'none', width: '432px' }}>
                                    <div>
                                        <div tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                            {/* <a href="https://www.youtube.com/embed/IkNfPb3sfLQ" target="_blank" className="text-dark"> */}
                                                <div className="">
                                                    <div className="eventGridFlex position-relative">
                                                        {/* <iframe
                                                            src="https://www.youtube.com/embed/IkNfPb3sfLQ"
                                                            title="Use this three-letter word to Stop Trash-Talking to yourself! - Coach Amreen"
                                                            frameborder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowfullscreen=""
                                                        ></iframe> */}
                                                        <div className="slick-track" style={{ width: '78vw', opacity: 1, transform: 'translate3d(-35px, 0px, 0px,)' }}>

                                                        <Slider {...settings} className="nav nav-pills mb-3 justify-content-start justify-content-md-center tabsnew lineAlign" id="pills-tab" role="tablist">
                                       {dataO.map((item, i) => (
                                        <div key={i} >
                                         {item.link && (
                                          <div>
                                             <iframe src={item.link} alt={`Image ${i}`} className="img-fluid eventTabImg" style={imageStyle} ></iframe>
                                          </div>
                                             )}
                                        </div>
                                                ))}
                                      </Slider>
                                                </div>           
                                                    </div>
                                                </div>
                                            {/* </a> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <div data-index="1" className="slick-slide slick-active" tabindex="-1" aria-hidden="false" style={{ outline: 'none', width: '432px' }}>
                                    <div>
                                        <div tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                            <a href="https://www.youtube.com/embed/qXcdq826f5Q" target="_blank" className="text-dark">
                                                <div className="">
                                                    <div className="eventGridFlex position-relative">
                                                        <iframe
                                                            src="https://www.youtube.com/embed/qXcdq826f5Q"
                                                            title="Use this three-letter word to Stop Trash-Talking to yourself! - Coach Amreen"
                                                            frameborder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowfullscreen=""
                                                        ></iframe>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div data-index="2" className="slick-slide slick-active" tabindex="-1" aria-hidden="false" style={{ outline: 'none', width: '432px' }}>
                                    <div>
                                        <div tabindex="-1" style={{ width: '100%', display: 'inline-block' }}>
                                            <a href="https://www.youtube.com/embed/jBs2RtZ1rDM" target="_blank" className="text-dark">
                                                <div className="">
                                                    <div className="eventGridFlex position-relative">
                                                        <iframe
                                                            src="https://www.youtube.com/embed/jBs2RtZ1rDM"
                                                            title="Use this three-letter word to Stop Trash-Talking to yourself! - Coach Amreen"
                                                            frameborder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowfullscreen=""
                                                        ></iframe>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
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

export default Online;
