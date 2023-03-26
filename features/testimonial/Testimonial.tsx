/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Headertext from "@/components/typography/Headertext";
import ParagraphText from "@/components/typography/ParagraphText";
import Image from "next/image";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <>
      <section id="testimonial" className="my-[4.5rem]">
        <div className="md:container">
          <div className="relative mx-auto text-center my-[4.5rem]">
            <div className="headerText relative z-20">
              <p className="text-slate leading-24 text-sm p-0 m-0 font-secondary font-light">
                What People have to say
              </p>
              <h1 className="leading-48 md:leading-64 p-0 m-0 text-fallback sm:text-[40px] md:text-xl lg:text-2xl font-primary">
                Testimonials
              </h1>
            </div>
          </div>
          <div className="p-6 lg:container testimonials grid lg:grid-cols-2 gap-6">
            <TestimonialCard
              bg={false}
              image={"ada.JPG"}
              name={"Ada Ada Chigbata"}
              position={"Student"}
            />
            <TestimonialCard
              bg={true}
              image={"kk.jpg"}
              name={"Kelechi"}
              position={"CEO, KK Wears"}
            />
            <TestimonialCard
              bg={true}
              image={"peace.JPG"}
              name={"Peace Ezeafulukwe"}
              position={"CEO, Openhouse"}
            />
            <TestimonialCard
              bg={false}
              image={"Sambaz.jpg"}
              name={"Sambaz"}
              position={"Student"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
