import { FaMobileAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { motion } from "framer-motion";
export default function Contact() {
  return (
    <main id="contact">
      <div className="banner">
        <div className="banner-overlay">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              opacity: {
                ease: "linear",
                duration: 0.5,
              },
              x: {
                ease: "easeOut",
                duration: 0.4,
              },
            }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
          >
            Contact Us
          </motion.h1>
        </div>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: {
            ease: "linear",
            duration: 0.5,
            delay: 0.2,
          },
          y: {
            ease: "easeOut",
            duration: 0.4,
            delay: 0.2,
          },
        }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
      >
        Next Law Practice
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: {
            ease: "linear",
            duration: 0.5,
            delay: 0.2,
          },
          y: {
            ease: "easeOut",
            duration: 0.4,
            delay: 0.2,
          },
        }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        className="contact-icons-container"
      >
        <div className="contact-icons">
          <div>
            <FaMobileAlt className="icon" />
            <p className="icon-title">Phone</p>
            <p className="icon-value">
            <a href="tel:+234891082144">
              +234-809-108-2144
            </a>
            </p>
          </div>
          <div>
            <FaMapMarkerAlt className="icon" />
            <p className="icon-title">Address</p>
            <p className="icon-value">
              {" "}
              <p
              >
                1 Adedeji Adekola Street, Off Freedom Way, Lekki Phase 1
              </p>
            </p>
          </div>
          <div>
            <MdMailOutline className="icon" />
            <p className="icon-title">Email</p>
            <p className="icon-value">contact@nextlawpractice.com</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          opacity: {
            ease: "linear",
            duration: 0.5,
            delay: 0.4,
          },
          y: {
            ease: "easeOut",
            duration: 0.4,
            delay: 0.4,
          },
        }}
        exit={{ opacity: 0, transition: { duration: 0.3 } }}
        className="contact-container"
      >
        <div>
          <header className="section-header">
            <p>Your Legal Success Starts Here</p>
            <h3>Get Your Free Consultation</h3>
          </header>
          <div className="contact-description">
            <p>
              We look forward to hearing from you to discuss how we can give you
              the outstanding legal representation you deserve.
            </p>
            <p>
              For immediate assistance, please call our office number at{" "}
              <a href="tel:+2348091082144">+234-809-108-2144</a>, and our administrative
              assistant will be happy to help.
            </p>
          </div>
        </div>
        <form name="contact-form" method="POST" data-netlify="true" action="/">
          <div className="form-row">
            <div>
              <input type="hidden" name="form-name" value="contact-form" />
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required={true}
              ></input>
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                required={true}
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" name="phone" id="phone" required={true}></input>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required={true}
              ></input>
            </div>
          </div>
          <label htmlFor="message">How can we help?</label>
          <textarea id="message" name="message"></textarea>

          <button>Send Message</button>
        </form>
      </motion.div>
    </main>
  );
}
