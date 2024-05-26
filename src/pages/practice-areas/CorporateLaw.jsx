import Sidebar from "../../components/Sidebar";
import Testimonials from "../../components/Testimonials";

import { motion } from "framer-motion";
export default function CorporateLaw() {
  return (
    <>
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
            Corporate Law
          </motion.h1>
        </div>
      </div>
      <main className="practice-area">
        <motion.section
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
          <header className="section-header">
            <p>Practice Areas</p>
            <h2>Corporate Law</h2>
          </header>
          <p className="practice-area__paragraph">
            Our Corporate Law team provides comprehensive legal services to support businesses at all stages of their lifecycle. Our services include:
          </p>
          <p className="practice-area__paragraph">
            <b>Mergers & Acquisitions:</b> Advising on the buying, selling, and merging of companies to achieve strategic growth. </p>
          <p className="practice-area__paragraph">
            <b>Business Formation and Structuring:</b> Assisting with the formation of corporations, LLCs, partnerships, and other business entities. Advising on the best structure to meet your business goals.</p>
          <p className="practice-area__paragraph">
            <b>Corporate Governance:</b> Advising on the rights and responsibilities of corporate boards, shareholder meetings, and compliance with corporate laws.</p>
          <p className="practice-area__paragraph">
            <b>Mergers and Acquisitions:</b> Legal support for buying, selling, and merging businesses, including due diligence, negotiation, and transaction documentation.</p>
          <p className="practice-area__paragraph">
            <b>Contract Law:</b> Drafting, reviewing, and negotiating contracts to ensure they meet your business needs and protect your interests.
          </p>
        </motion.section>
        <Sidebar />
      </main>
      <Testimonials />
    </>
  );
}
