import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

export default function AboutPage() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div ref={ref1} className={`fade-in ${inView1 ? "visible" : ""}`}>
      <Nav />
      <h className="font-pacifico flex justify-center mt-16 text-5xl">
        Frequently Asked Questions
      </h>
      <div className="mx-6 my-16 flex flex-col space-y-4">
        <div className="collapse backdrop-blur-lg bg-white/50 border-2 border-gray-50 rounded-lg drop-shadow-lg">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-gray-700 text-xl font-medium">
            What is Hypnotherapy?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Hypnotherapy is a therapeutic technique that uses hypnosis to
              create a state of focused attention and heightened suggestibility.
              It is often used to help manage various psychological or physical
              conditions.
            </p>
          </div>
        </div>
        <div className="collapse backdrop-blur-lg bg-white/50 border-2 border-gray-50 rounded-lg drop-shadow-lg">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-gray-700 text-xl font-medium">
            Has Hypnotherapy Been Proven to Work??
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Numerous studies have shown that hypnotherapy can be effective for
              a variety of conditions. Its effectiveness can vary depending on
              the individual and the issue being addressed.
            </p>
          </div>
        </div>
        <div className="collapse backdrop-blur-lg bg-white/50 border-2 border-gray-50 rounded-lg drop-shadow-lg">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-gray-700 text-xl font-medium">
            What are Your Total List of Services?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Please <Link to="/services">visit our services page</Link> for a
              comprehensive list of our hypnotherapy services.
            </p>
          </div>
        </div>
        <div className="collapse backdrop-blur-lg bg-white/50 border-2 border-gray-50 rounded-lg drop-shadow-lg">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-gray-700 text-xl font-medium">
            Can I Ask for a Service Not Listed on Your Services Page?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              If you require a service not listed, please feel free to call or
              email us to discuss its feasibility. We are always open to
              exploring new ways to help our clients.
            </p>
          </div>
        </div>
        <div className="collapse backdrop-blur-lg bg-white/50 border-2 border-gray-50 rounded-lg drop-shadow-lg">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-gray-700 text-xl font-medium">
            How Can I Contact You for a Booking?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              You can book an appointment through our{" "}
              <Link to="/contact">contact page</Link>. We are available via
              phone or email during normal business hours.
            </p>
          </div>
        </div>
        <div className="collapse backdrop-blur-lg bg-white/50 border-2 border-gray-50 rounded-lg drop-shadow-lg">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-gray-700 text-xl font-medium">
            Can I Call to Discuss a Potential Booking If I Am Uncertain?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Absolutely! We encourage you to call us to discuss any queries or
              concerns you might have about booking a session.
            </p>
          </div>
        </div>
        <div className="collapse backdrop-blur-lg bg-white/50 border-2 border-gray-50 rounded-lg drop-shadow-lg">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-gray-700 text-xl font-medium">
            What Dates and Times Are You Available?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Currently, we are available for appointments on Fridays each week,
              from 9 AM to 4 PM.
            </p>
          </div>
        </div>
        <div className="collapse backdrop-blur-lg bg-white/50 border-2 border-gray-50 rounded-lg drop-shadow-lg">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-gray-700 text-xl font-medium">
            Is Hypnotherapy Safe?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Hypnotherapy is generally considered safe when conducted by a
              trained therapist. It is a non-invasive and gentle process
              focusing on relaxation and positive suggestions.
            </p>
          </div>
        </div>
        <div className="collapse backdrop-blur-lg bg-white/50 border-2 border-gray-50 rounded-lg drop-shadow-lg">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-gray-700 text-xl font-medium">
            How Many Sessions Will I Need?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              The number of sessions varies depending on your individual needs
              and goals. Some people see changes in just a few sessions, while
              others may require more
            </p>
          </div>
        </div>
        <div className="collapse backdrop-blur-lg bg-white/50 border-2 border-gray-50 rounded-lg drop-shadow-lg">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-gray-700 text-xl font-medium">
            Can Hypnotherapy Help with Anxiety?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Yes, hypnotherapy is often used to help manage anxiety. It can
              provide tools and techniques to relax and reframe anxious
              thoughts.
            </p>
          </div>
        </div>
        <div className="collapse backdrop-blur-lg bg-white/50 border-2 border-gray-50 rounded-lg drop-shadow-lg">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-gray-700 text-xl font-medium">
            What Should I Expect in My First Session?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              In your first session, we will discuss your goals, conduct an
              initial assessment, and give you a taste of hypnotherapy to help
              you feel comfortable with the process.
            </p>
          </div>
        </div>
        <div className="collapse backdrop-blur-lg bg-white/50 border-2 border-gray-50 rounded-lg drop-shadow-lg">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-gray-700 text-xl font-medium">
            Will I Be in Control During Hypnotherapy?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              Many people worry about losing control during hypnotherapy.
              However, you remain in control throughout the session.
              Hypnotherapy is a state of focused attention where you can choose
              to accept or reject the suggestions made by the therapist.
            </p>
          </div>
        </div>
        <div className="collapse backdrop-blur-lg bg-white/50 border-2 border-gray-50 rounded-lg drop-shadow-lg">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-gray-700 text-xl font-medium">
            How Should I Prepare for a Hypnotherapy Session?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              To prepare, ensure you are in a comfortable, distraction-free
              environment. It's helpful to have a clear goal for what you wish
              to achieve in the session. Also, be ready to engage openly with
              the process.
            </p>
          </div>
        </div>
        <div className="collapse backdrop-blur-lg bg-white/50 border-2 border-gray-50 rounded-lg drop-shadow-lg">
          <input type="radio" name="my-accordion-1" />
          <div className="collapse-title text-gray-700 text-xl font-medium">
            Are the Effects of Hypnotherapy Long-Lasting?
          </div>
          <div className="collapse-content text-gray-600">
            <p>
              The effects of hypnotherapy can be quite long-lasting. The
              duration varies from person to person and depends on the issue
              being addressed and the individual's responsiveness to hypnosis.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
