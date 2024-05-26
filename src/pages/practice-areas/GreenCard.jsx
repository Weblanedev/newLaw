import Sidebar from "../../components/Sidebar";
import Testimonials from "../../components/Testimonials";
import { motion } from "framer-motion";

export default function LitigationandDisputeResolution() {
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
            Litigation and Dispute Resolution
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
            <h2>Litigation and Dispute Resolution</h2>
            </header>
            <p className="practice-area__paragraph">
              <b>Commercial Litigation:</b> Representing businesses in commercial disputes, including breach of contract, fraud, and business torts.</p>
            <p className="practice-area__paragraph">
              <b>Civil Litigation:</b> Handling a broad range of civil disputes, including personal injury, property damage, and defamation cases.</p>
            <p className="practice-area__paragraph">
              <b>Alternative Dispute Resolution (ADR):</b> Providing mediation and arbitration services to resolve disputes outside of court.</p>
            <p className="practice-area__paragraph">
              <b>Employment Litigation:</b> Representing clients in employment-related disputes, including wrongful termination, discrimination, and wage and hour claims.
            </p>
         
        </motion.section>
        <Sidebar />
      </main>
      <Testimonials />
    </>
  );
}
