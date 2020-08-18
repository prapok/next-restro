import Slider from "react-slick";
import { useContext } from 'react';
import { SliderContext } from '../../contexts/HeaderContext';
import Link from 'next/link';

const SimpleSlider = () => {
    
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        adaptiveHeight: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      
      const homeSlides = useContext(SliderContext)

      return (
          
        <Slider {...settings}>
            
            { homeSlides.map((item, ind) => 
                <div key={ind} className="carousel-item">
                  <div className="carousel-img">
                      <img src={`${item.Image.url}`} width="100%"/>
                  </div>
                    <div className="carousel-caption">
                     <h1 className="animated fadeInLeft">{item.SlideHeading}</h1>
                     <h6 className="animated fadeInUp">{item.SlideSubtitle}</h6>
                     {item.SlideButton !== null ? (
                      <div className="slider-btn">
                        { item.SlideButton.map((item, ind) => 
                          <div key={ind} className="animated inner-btn fadeInUp">
                            <Link href="/[slug]" as={item.link}>
                              <a className={`btn btn-${item.buttonType} btn-large`}>{item.buttonText}</a>
                            </Link>
                          </div>
                        )}
                      </div>
                      ) : ('')}
                  </div>
                </div>
                )}
            </Slider>
       
      );
    }

  export default SimpleSlider