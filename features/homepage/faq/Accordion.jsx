import { Disclosure } from "@headlessui/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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

export default function Accordion() {
  return (
    <>
      <div className="w-full">
        <div className="w-full rounded-2xl bg-white p-2 max-w-full">
          {data.map((item) => {
            return (
              <>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        key={data.indexOf(item)}
                        className="flex w-full justify-between rounded-lg my-3 bg-misc px-4 py-5 text-left text-xs font-normal text-white hover:bg-misc/90 focus:outline-none focus-visible:ring focus-visible:ring-purple/50 focus-visible:ring-opacity-75"
                      >
                        <span>{item.title}</span>
                        <ExpandMoreIcon
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 my-2 rounded-lg text-sm text-gray-900 border border-gray-300">
                        {item.content}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
