import Sidebar from "../../components/Sidebar";
import Testimonials from "../../components/Testimonials";

import { motion } from "framer-motion";
export default function RealEstateLaw() {
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
            Real Estate Law
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
            <h2>Real Estate Law & Naturalization</h2>
          </header>
          <p className="practice-area__paragraph">
            <b>Commercial Real Estate:</b> Legal services for buying, selling, leasing, and developing commercial properties.
          </p>
          <p className="practice-area__paragraph">
            <b>Residential Real Estate: </b>Assisting with residential real estate transactions, including purchases, sales, and leases.
          </p>
          <p className="practice-area__paragraph">
           <b> Land Use and Zoning:</b> Advising on land use, zoning laws, and obtaining necessary permits and approvals for property development.</p>
          <p className="practice-area__paragraph">
            <b>Real Estate Litigation: </b>Representing clients in disputes related to property transactions, landlord-tenant issues, and real estate development.
          </p>
        </motion.section>
        <Sidebar />
      </main >
      <Testimonials />
    </>
  );
}
