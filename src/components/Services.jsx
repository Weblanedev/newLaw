import { FaAddressCard } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { FaRegIdBadge } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { ease: "easeInOut", duration: 0.7, delay: 0.1 },
      }}
      viewport={{ once: true }}
    >
      <div className="services-icons">
        <Link to="/corporate-law" className="service">
          <FaAddressCard className="icon" />
          <h4>Corporate Law</h4>
          <p>Assisting with the formation of corporations, LLCs, partnerships, and other business entities</p>
        </Link>
        <Link to="/intellectual-property" className="service">
          <FaUserCheck className="icon" />
          <h4>Intellectual Property</h4>
          <p> Registration, protection, and enforcement of trademarks to safeguard your brand identity.</p>
        </Link>
        <Link to="/real-estate-law" className="service">
          <FaShieldAlt className="icon" />
          <h4>Real Estate Law</h4>
          <p>Legal services for buying, selling, leasing, and developing commercial properties.</p>
        </Link>
        <Link to="/litigation-and-dispute-resolution" className="service">
          <FaRegIdBadge className="icon" />
          <h4>Litigation and Dispute Resolution</h4>
          <p>Representing businesses in commercial disputes, including breach of contract, fraud, and business torts.</p>
        </Link>
        <Link to="/regulatory-engagement" className="service">
          <FaRegIdBadge className="icon" />
          <h4>Regulatory Engagement          </h4>
          <p>We offer expert regulatory engagement services to help businesses navigate Nigeria's complex legal and policy landscape</p>
        </Link>
      </div>
      <div className="services-text">
        <div className="section-header">
          <p></p>
          <h2>Areas of Practice</h2>
        </div>
        <p>
          Our team consists of highly skilled attorneys with extensive experience in their respective fields. We are dedicated to staying abreast of the latest legal developments to provide informed and effective representation.
        </p>
        <p>
          We prioritize our clients' needs and work closely with them to develop personalized legal strategies. Our goal is to ensure that our clients feel supported and confident throughout the legal process.
        </p>
        <p>
          We have a proven track record of successfully resolving complex legal issues. Our clients trust us to deliver results, and we take that responsibility seriously.
        </p>
      </div>
    </motion.section>
  );
}
