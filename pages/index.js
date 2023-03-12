import Head from 'next/head';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import SectionTitle from '../components/sectionTitle';

import { benefitOne, benefitTwo } from '../components/data';
import Video from '../components/video';
import Benefits from '../components/benefits';
import Footer from '../components/footer';
import Testimonials from '../components/testimonials';
import Cta from '../components/cta';
import Faq from '../components/faq';
import PopupWidget from '../components/popupWidget';

import { useRef } from 'react';

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  const ref = useRef(null);
  const focusInput = () => {
    ref.current.focus();
  };

  return (
    <>
      <Head>
        <title>BiteBook App</title>
        <meta
          name="description"
          content="BiteBook helps you remember your favourite eats and provides you with the tools to make effortless food choices"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero ref={ref} />
      {/* <SectionTitle
        pretitle="Nextly Benefits"
        title=" Why should you use this landing page"
      >
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle> */}
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle pretitle="Watch Our Demo" title="Easy, Intuitive & Fast">
        Our video demo showcases how easy it is to use BiteBook.
      </SectionTitle>
      <Video />
      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle> */}
      {/* <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq /> */}
      <Cta ref={ref} />
      {/* <Footer />
      <PopupWidget /> */}
    </>
  );
}
