import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionFAQ from "./Accordion";
import ParagraphText from "@/components/typography/ParagraphText";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        id="faq"
      >
        <div className="md:container px-6 py-3">
          {/* SubHeading */}
          <div className="py-3">
            <ParagraphText>Frequently Asked Questions</ParagraphText>
          </div>

          {/* Heading */}
          <div className="mb-5">
            <h1 className="leading-48 md:leading-64 p-0 m-0 text-fallback sm:text-[40px] md:text-xl lg:text-2xl font-primary">
              FAQ
            </h1>
          </div>
        </div>
        <div className="md:container">
          <AccordionFAQ />
        </div>
      </motion.section>
    </>
  );
}
