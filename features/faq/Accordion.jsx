import createClass from "create-react-class";
import styles from "./accordion.module.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export const AccordionFAQ = createClass({
  render() {
    let data = [
      {
        title: "Who is eligible for the courses?",
        content: `Anyone above the age of 13 is eligible to take on any of our courses.`,
      },
      {
        title: "What are the prerequisites for the courses?",
        content: `All our courses are custom made and tailored to the needs of our students. No prerequisite is needed as we are able to start off from your level.`,
      },
      {
        title: "How can I customise my own course?",
        content: `Because our course are tailored towards the individual needs of our students, they are able to select and customise their choice topics and courses by clicking here`,
      },
      {
        title: "Will I get a certification?",
        content: `Unfortunately no, we are not able to issue certificates at the moment.`,
      },
      {
        title: "Do I need Python knowledge before I can start?",
        content: `No prior knowledge of Python is required.`,
      },
      {
        title: "How much time is required?",
        content: `An average of 10 hours per week is recommended, however the course is self-paced depending on individual circumstances.`,
      },
      {
        title: "What help will I get to complete my projects?",
        content: `Our mentors are available to provide guidance and assistance for smooth completion of your projects`,
      },
      {
        title: "I can’t see answer to my question",
        content: `If you still have further questions, kindly email us on test.test@test.test`,
      },
    ];

    return <Accordion data={data} />;
  },
});

const Accordion = createClass({
  componentWillMount() {
    let accordion = [];

    this.props.data.forEach((i) => {
      accordion.push({
        title: i.title,
        content: i.content,
        open: false,
      });
    });

    this.setState({
      accordionItems: accordion,
    });
  },

  click(i) {
    const newAccordion = this.state.accordionItems.slice();
    const index = newAccordion.indexOf(i);

    newAccordion[index].open = !newAccordion[index].open;
    this.setState({ accordionItems: newAccordion });
  },

  render() {
    const sections = this.state.accordionItems.map((i) => (
      <div key={this.state.accordionItems.indexOf(i)}>
        <div
          className={`${styles.title} w-100 border border-primary hover:bg-slate font-normal text-textDark md:leading-48 leading-28`}
          onClick={this.click.bind(null, i)}
        >
          <div className={`block ${styles.arrow_wrapper}`}>
            <i className="text-textDark">
              {i.open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
            </i>
          </div>
          <span className={styles.title_text}>{i.title}</span>
        </div>
        <div
          className={
            i.open
              ? `${styles.content} ${styles.content_open} w-100 text-xs`
              : `${styles.content} text-xs`
          }
        >
          <div
            className={
              i.open
                ? `${styles.content_text} ${styles.content_text_open} `
                : `${styles.content_text} `
            }
          >
            {" "}
            {i.content}
          </div>
        </div>
      </div>
    ));

    return (
      <div className={`${styles.accordion} md:p-0 py-0 px-6 w-100`}>
        {sections}
      </div>
    );
  },
});
