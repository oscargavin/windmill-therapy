// HomePage.js
import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { useInView } from "react-intersection-observer";

export default function ContactPage() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div ref={ref1} className={`fade-in ${inView1 ? "visible" : ""}`}>
      <Nav />
      <Contact />
      <Footer />
    </div>
  );
}
