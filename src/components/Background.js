import { Link } from "react-router-dom";
import { PlaidLinkStableEvent } from "react-square-web-payments-sdk";

function Background() {
  return (
    <div className="md:h-full md:mb-24">
      <div className="flex flex-col md:mt-24 my-8">
        <h1 className="text-3xl mx-auto font-pacifco md:text-7xl text-gray-700">
          Your Path to Gentle Healing
        </h1>
        <h2 className="text-2xl mx-auto title text-gray-500 mt-1">
          Clinical Hypnotherapy
        </h2>
        <p className="mt-4 text-center text-gray-60 font-messiri w-4/5 md:w-2/5 text-lg mx-auto">
          My name is Jenny Gavin and I work as a clinical hypnotherapist. I have
          worked as a healthcare professional both in nursing and as a
          specialist clinical healthcare scientist for many years. I work in a
          lovely room in Lytham. Hypnotherapy is a safe and natural treatment
          which has ancient origins. It works through harnessing the power of
          your own subconscious mind by creating your desired changes within you
          by relaxing your mind and helping you to adjust and rebalance. It is
          often a calming therapy that will be effective in creating the change
          that you desire quickly. Hypnotherapy aims to promote a sense of
          wellbeing.
        </p>
        <div className="flex flex-row space-x-2 mt-8 justify-center">
          <button className="btn btn-accent bg-cyan-400 font-extralight hover:bg-cyan-500">
            <Link to="/contact">Contact</Link>
          </button>
          <button className="btn btn-outline bg-blue-100 bg-opacity-30 border-gray-500 text-gray-500">
            <Link to="/services">Services</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Background;
