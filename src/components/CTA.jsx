import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function CTA() {
  return (
    <motion.section
      id="cta"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { ease: "easeInOut", duration: 0.7, delay: 0.1 },
      }}
      viewport={{ once: true }}
    >
      <div className="cta-overlay">
        <div className="cta-container">
          <h3>Ready to discuss your legal needs? Contact us today to schedule a consultation.</h3>
          <p>
            we provide comprehensive legal solutions tailored to your needs. Our experienced attorneys are ready to help you navigate the complexities of the legal landscape with confidence and expertise.
          </p>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </motion.section>
  );
}
