import signature from "../images/signature.png";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { ease: "easeInOut", duration: 0.7, delay: 0.1 },
      }}
      viewport={{ once: true }}
    >
      <div className="about-text">
        <header className="section-header">
          <p>About</p>
          <h2>Next Law Practice</h2>
        </header>
        <p>
        We are dedicated to providing exceptional legal services across a broad spectrum of practice areas. Our team of experienced attorneys 
        is committed to delivering personalized and strategic solutions tailored to meet your unique needs.
        Whether you are an individual seeking legal advice or a business navigating complex legal challenges, we are here to support you every step of the way.
        </p>
        <p>
        Our mission is to provide high-quality legal services with a client-centered approach. We strive to achieve the best possible outcomes for our clients through dedication, expertise, and innovative solutions. We are committed to upholding
        the highest standards of integrity and professionalism in all our dealings.
        </p>
        <div className="about-quote">
          "Our objective is to to be recognized as a leading law firm that delivers results and fosters long-lasting relationships based on trust and mutual respect."
        </div>
        {/* <div className="about-signature"></div> */}
        {/* <img
          src={signature}
          className="about-signature"
          alt="ali crocker russell signature"
        /> */}
      </div>
      <div className="about-image"></div>
    </motion.section>
  );
}
