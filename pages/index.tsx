import Head from "next/head";
import Hero from "@/features/homepage/hero/Hero";
import About from "@/features/homepage/about/About";
import Courses from "@/features/homepage/courses/Courses";
import Blog from "@/features/homepage/blog/Blog";
import Testimonial from "@/features/homepage/testimonial/Testimonial";
import FAQ from "@/features/homepage/faq/FAQ";
import Footer from "@/features/homepage/footer/Footer";
import Syllabus from "@/features/homepage/courses/Syllabus";
import { useState } from "react";
import { syllabusList } from "@/features/homepage/courses/courseSyllabus";
import BottomNav from "@/components/navbar/BottomNav";
import Navbar from "@/components/navbar/Navbar";
import Script from "next/script";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [syllabusId, setSyllabusId] = useState(0);

  function updateSyllabusId(id: number) {
    setSyllabusId(id);
  }
  return (
    <>
      <Head>
        <title>Neutrix</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script src="../path/to/flowbite/dist/flowbite.min.js" />

      <BottomNav />
      <Hero />
      <About />
      <Courses
        updateModal={() => setOpenModal(!openModal)}
        updateId={updateSyllabusId}
      />
      <Blog />
      <Testimonial />
      <FAQ />
      <Footer />
      <Syllabus
        open={openModal}
        updateModal={() => setOpenModal(!openModal)}
        syllabus={syllabusId}
      />
    </>
  );
}
