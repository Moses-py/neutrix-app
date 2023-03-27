import { useState } from "react";
import styles from "./accordion.module.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
let data = [
  {
    title: "Who is eligible for the courses?",
    content: `Anyone above the age of 13 is eligible to take on any of our courses.`,
    open: false,
  },
  {
    title: "What are the prerequisites for the courses?",
    content: `All our courses are custom made and tailored to the needs of our students. No prerequisite is needed as we are able to start off from your level.`,
    open: false,
  },
  {
    title: "How can I customise my own course?",
    content: `Because our course are tailored towards the individual needs of our students, they are able to select and customise their choice topics and courses by clicking here`,
    open: false,
  },
  {
    title: "Will I get a certification?",
    content: `Unfortunately no, we are not able to issue certificates at the moment.`,
    open: false,
  },
  {
    title: "Do I need Python knowledge before I can start?",
    content: `No prior knowledge of Python is required.`,
    open: false,
  },
  {
    title: "How much time is required?",
    content: `An average of 10 hours per week is recommended, however the course is self-paced depending on individual circumstances.`,
    open: false,
  },
  {
    title: "What help will I get to complete my projects?",
    content: `Our mentors are available to provide guidance and assistance for smooth completion of your projects`,
    open: false,
  },
  {
    title: "I can’t see answer to my question",
    content: `If you still have further questions, kindly email us on test.test@test.test`,
    open: false,
  },
];

export default function AccordionFAQ() {
  const [accordion, setAccordion] = useState(data);

  function clickHandler(item) {
    const newAccordion = accordion.slice();
    const index = newAccordion.indexOf(item);

    newAccordion[index].open = !newAccordion[index].open;
    setAccordion(newAccordion);
  }

  const accordionItems = accordion.map((item) => {
    return (
      <div key={item.title} onClick={() => clickHandler(item)}>
        <div
          className={`${styles.title} w-100 border border-primary hover:bg-slate font-normal text-textDark md:leading-48 leading-28`}
        >
          <div className={`block ${styles.arrow_wrapper}`}>
            <i className="text-textDark">
              {item.open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </i>
          </div>
          <span className={styles.title_text}>{item.title}</span>
        </div>
        <div
          className={
            item.open
              ? `${styles.content} ${styles.content_open} w-100 text-xs`
              : `${styles.content} text-xs`
          }
        >
          <div
            className={
              item.open
                ? `${styles.content_text} ${styles.content_text_open} `
                : `${styles.content_text} `
            }
          >
            {" "}
            {item.content}
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className={`${styles.accordion} md:p-0 py-0 px-6 w-100`}>
        {accordionItems}
      </div>
    </>
  );
}
