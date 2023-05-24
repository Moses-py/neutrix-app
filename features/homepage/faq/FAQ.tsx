import dynamic from "next/dynamic";

const Accordion = dynamic(() => import("./Accordion"));
const ParagraphText = dynamic(
  () => import("@/components/typography/ParagraphText")
);

export default function FAQ() {
  return (
    <>
      <section id="faq">
        <div className="md:container px-6 py-3">
          {/* SubHeading */}
          <div className="py-3">
            <ParagraphText>Frequently Asked Questions</ParagraphText>
          </div>

          {/* Heading */}
          <div className="mb-5">
            <h1 className="text-misc leading-48 md:leading-64 p-0 m-0 text-fallback sm:text-[40px] md:text-xl lg:text-2xl font-primary">
              FAQ
            </h1>
          </div>
        </div>
        <div className="md:container px-2">
          <Accordion />
        </div>
      </section>
    </>
  );
}
