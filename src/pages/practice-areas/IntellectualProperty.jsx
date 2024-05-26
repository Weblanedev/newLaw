import Sidebar from "../../components/Sidebar";
import Testimonials from "../../components/Testimonials";
import { motion } from "framer-motion";

export default function IntellectualProperty() {
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
            Intellectual Property
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
            <h2>Intellectual Property</h2>
          </header>
          <p className="practice-area__paragraph">
            <b>Trademarks:</b> Registration, protection, and enforcement of trademarks to safeguard your brand identity.
          </p>
          <p className="practice-area__paragraph">
            <b>Patents:</b> Assistance with patent applications and protection of inventions and technological innovations.
          </p>
          <p className="practice-area__paragraph">
            <b>Copyrights:</b> Securing and enforcing copyright protection for original works of authorship, including literature, music, and art.
          </p>
          <p className="practice-area__paragraph">
            <b>Trade Secrets:</b> Advising on the protection of confidential business information and trade secrets.
          </p>

        </motion.section>
        <Sidebar />
      </main>
      <Testimonials />
    </>
  );
}
