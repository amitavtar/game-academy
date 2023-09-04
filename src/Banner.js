import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Banner() {
  const settings = {
    slidesToShow: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          autoplay: true,
          autoplaySpeed: 3000,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
            autoplay: true,
            autoplaySpeed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://13.233.104.251:8080/api/coach/homeScreen?longitude=&latitude=')
      .then(response => {
        setState(response.data.data.appBanners);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <form >
        
      </form>
      <div className="d-none">
        <i className="fa fa-question-circle-o" aria-hidden="true"></i> Help
      </div>
      <header>
        <div >
          <div className="carousel-inner">
            <Slider {...settings} className="text-center" >
              {state.map((item, i) => (
                <div key={i} >
                  {item.image && (
                    <div>
                      <img src={item.image} alt={`Image ${i}`} className="img-fluid eventTabImg" />
                    </div>
                  )}
                </div>
              ))}
            </Slider>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Banner;
