import React from 'react'
import './testimonials.css'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>      
  
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <h5 className='client__name'>Luis, CEO at SCNE® Records</h5>
            <small className='client__review'>
              Akshay has produced a site beyond what our initial design and functionality ideas. I'm very confident that the website is going to enhance our brand further and hopefully lead to more traffic and recognition. Thank you for all of your hard work!
            </small>
          </div>
        </SwiperSlide>


        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <h5 className='client__name'>Sunil, CEO at GraduateAtDriving</h5>
            <small className='client__review'>
              A professional individual, Akshay has worked tirelessly on getting this site designed to spec. He has a fantastic eye for detail and you can see no corners have been cut in the end product. The "Book A Call" functionality will help me manage and generate new business in a way that caters to my needs as the owner. The mobile and tablet versions look very slick! Many thanks!
            </small>
          </div>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <h5 className='client__name'>David, CEO at Slap It For Retail</h5>
            <small className='client__review'>
              I only recently founded this company and Akshay has done an outstanding job here. It makes me proud to know that when I push the brand to our audience, we now have a solid website that embodies what we're all about! The high quality finish and easy user experience will make this a great tool for sneaker heads. 
            </small>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
)
}


export default Testimonials