import React from "react";
import Nav from "../components/Nav";
import Background from "../components/Background";
import Wave from "../components/Wave";
import Process from "../components/Process";
import Curve from "../components/Curve";
import Menopause from "../components/Menopause";
import Footer from "../components/Footer";
import Qualifications from "../components/Qualifications";
import { useInView } from "react-intersection-observer";

export default function HomePage() {
  const [refNavBackground, inViewNavBackground] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refWaveProcess, inViewWaveProcess] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refCurveQualifications, inViewCurveQualifications] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refMenopauseCloud, inViewMenopauseCloud] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [refFooter, inViewFooter] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <title>Jenny Gavin Hypnotherapy</title>
      <div
        ref={refNavBackground}
        className={`fade-in ${
          inViewNavBackground ? "visible" : ""
        } bg-hero-background bg-cover bg-center bg-no-repeat md:h-full`}
      >
        <Nav />
        <Background />
      </div>
      <div
        ref={refWaveProcess}
        className={`fade-in ${inViewWaveProcess ? "visible" : ""}`}
      >
        <Wave />
        <Process />
        <Curve />
      </div>
      <div
        ref={refCurveQualifications}
        className={`fade-in ${inViewCurveQualifications ? "visible" : ""}`}
      >
        <Qualifications />
      </div>
      <div
        ref={refMenopauseCloud}
        className={`fade-in ${inViewMenopauseCloud ? "visible" : ""}`}
      >
        <Wave />
        <Menopause />
        <Curve />
      </div>
      <div
        ref={refFooter}
        className={`fade-in ${inViewFooter ? "visible" : ""}`}
      >
        <Footer />
      </div>
    </div>
  );
}
