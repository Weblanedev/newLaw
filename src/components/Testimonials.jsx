import { MdFormatQuote } from "react-icons/md";
import stars from "../images/five-stars.png";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// export default function Testimonials() {
//   return (
//     <Swiper
//       // install Swiper modules
//       modules={[Navigation]}
//       navigation={true}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       ...
//     </Swiper>
//   );
// }

export default function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { ease: "easeInOut", duration: 0.6, delay: 0.1 },
      }}
      viewport={{ once: true }}
      // exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <header className="section-header">
        <p>Testimonials</p>
        <h2>Just ask our clients</h2>
      </header>
      <div className="reviews">
        <Swiper
          speed={700}
          spaceBetween={100}
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          loop={true}
        >

          <SwiperSlide>
            {" "}
            <div className="review">
              <MdFormatQuote className="quote-icon" />
              <img src={stars} alt="5 stars" className="stars"></img>
              <p className="review-text">
                Best attorneys out there they help me get out of being se
                dismissed and help me get out of immigration with a bond glad my
                sister in law knew about these people other attorney said it was
                a lost case that they would send me back to mexico but these
                people fought for me thank you guys
              </p>
              <p className="review-author">- Jose I.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="review">
              <MdFormatQuote className="quote-icon" />
              <img src={stars} alt="5 stars" className="stars"></img>
              <p className="review-text">
              I cannot thank Next Law Firm for their outstanding legal services. Their attorneys are not only highly skilled but also genuinely compassionate and dedicated to their clients' best interests. I felt confident and supported throughout my entire legal journey, and I wouldn't hesitate to turn to them again in the future
              </p>
              <p className="review-author">- Cindy R.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="review">
              <MdFormatQuote className="quote-icon" />
              <img src={stars} alt="5 stars" className="stars"></img>
              <p className="review-text">
              I am beyond grateful to Next Law Firm for their exceptional support and guidance during a challenging legal dispute. Their attorneys approached my case with a strategic mindset and unwavering dedication, ultimately securing a favorable outcome. I couldn't have asked for better representation and highly recommend them to anyone seeking legal assistance.
              </p>
              <p className="review-author">- Carlos R.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="review">
              <MdFormatQuote className="quote-icon" />
              <img src={stars} alt="5 stars" className="stars"></img>
              <p className="review-text">
              Their attorneys are not only incredibly knowledgeable but also genuinely caring and attentive to their clients' needs. They provided me with expert guidance and support throughout a complex legal process, and I am incredibly grateful for their representation. Highly recommend!
              </p>
              <p className="review-author">- Sergio T.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.section>
  );
}
