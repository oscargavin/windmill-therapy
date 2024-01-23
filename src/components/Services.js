import React from "react";
import ServiceCard from "./ServiceCard";
import { useInView } from "react-intersection-observer";

function Services() {
  // Create a hook for each ServiceCard
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="mt-24 flex z-0 flex-col justify-center items-center md:grid md:grid-cols-3 gap-8 mx-6 md:mx-12 my-16">
      <div ref={ref1} className={`fade-in ${inView1 ? "visible" : ""}`}>
        <ServiceCard
          img="/menopause.png"
          title="Menopause"
          description="Navigate the challenges of menopause with ease. Our expert hypnotherapists can help alleviate symptoms and bring a sense of balance and calm."
          price="£80"
        />
      </div>
      <div ref={ref2} className={`fade-in ${inView2 ? "visible" : ""}`}>
        <ServiceCard
          img="/stress.png"
          title="Stress & Anxiety"
          description="Manage stress effectively with our tailored hypnotherapy solutions. Experience relaxation and regain control over your stress responses."
          price="£75"
        />
      </div>
      <div ref={ref3} className={`fade-in ${inView3 ? "visible" : ""}`}>
        <ServiceCard
          img="/weight.png"
          title="Weight"
          description="Break free from the grip of anxiety. Personalized hypnotherapy sessions are designed to reduce anxiety symptoms and foster a peaceful state of mind."
          price="£50"
        />
      </div>
      <div ref={ref4} className={`fade-in ${inView4 ? "visible" : ""}`}>
        <ServiceCard
          img="/insomnia.png"
          title="Insomnia"
          description="Overcome insomnia and enjoy restful sleep. Our hypnotherapy techniques are aimed at relaxing your mind and improving your sleep patterns."
          price="£50"
        />
      </div>
      <div ref={ref5} className={`fade-in ${inView5 ? "visible" : ""}`}>
        <ServiceCard
          img="/phobias.png"
          title="Phobias"
          description="Boost your self-confidence and self-esteem through targeted hypnotherapy sessions. Embark on a journey to discover and empower your inner self."
          price="£50"
        />
      </div>
      <div ref={ref6} className={`fade-in ${inView6 ? "visible" : ""}`}>
        <ServiceCard
          img="/smoking.png"
          title="Smoking"
          description="Are you struggling with quitting smoking? Book a personal session with our trained hypnotherapists."
          price="£175"
        />
      </div>
    </div>
  );
}

export default Services;
