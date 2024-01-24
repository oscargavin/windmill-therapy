import { Link } from "react-router-dom";

function Background() {
  return (
    <div className="h-full md:h-full md:mb-24 md:w-full">
      <div className="flex flex-col justify-center mx-2 md:mt-16 my-8 backdrop-blur-md bg-white/30 py-16 md:w-5/6 md:mb-24 items-center md:mx-auto rounded-lg border-2 border-gray-50 drop-shadow-lg">
        <h1 className="text-5xl font-pacifico mb-6 mx-auto text-center md:text-7xl text-gray-700">
          Your Path to Gentle Healing
        </h1>
        <h2 className="text-2xl mx-auto font-messiri title text-gray-500 mt-1">
          Clinical Hypnotherapy
        </h2>
        <p className="mt-4 text-center text-xl text-gray-800 font-gothic w-4/5 md:w-2/5 mx-auto">
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
        <div className="flex flex-row space-x-2 mt-24 justify-center">
          <button className="btn btn-accent bg-cyan-400 font-extralight hover:bg-cyan-500">
            <Link to="/contact" className="text-xl font-light font-messiri">
              Contact
            </Link>
          </button>
          <button className="btn btn-outline bg-blue-100 bg-opacity-30 border-gray-500 text-gray-500">
            <Link to="/services" className="text-xl font-light font-messiri">
              Services
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Background;
