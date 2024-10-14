import Sidebar from "../../components/Sidebar";
import Testimonials from "../../components/Testimonials";
import { motion } from "framer-motion";

export default function DeportationDefense() {
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
Regulatory Engagement
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
            <h2>Regulatory Engagement
            </h2>
          </header>
          <p className="practice-area__paragraph">
          We offer expert regulatory engagement services to help businesses navigate Nigeria's
           complex legal and policy landscape. Our team works closely with government bodies, 
           regulatory authorities, and key stakeholders to advocate for favorable policies, 
           ensure compliance, and resolve regulatory issues. Through strategic advocacy, we 
           foster relationships and influence regulatory outcomes that align with our clients'
            business objectives, all while adhering to legal and ethical standards.
          </p>
        </motion.section>
        <Sidebar />
      </main>
      <Testimonials />
    </>
  );
}
