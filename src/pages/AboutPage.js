import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
        <Nav />
        <div className="mx-12 my-16 flex flex-col space-y-4">
            <div className="collapse bg-gray-50 bg-opacity-30 drop-shadow-md">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-gray-700 text-xl font-medium">
                What is Hypnotherapy?
                </div>
                <div className="collapse-content text-gray-600"> 
                    <p>Hypnotherapy is a type of therapy that uses hypnosis, a state of focused attention and increased suggestibility, to create subconscious change in a patient in the form of new responses, thoughts, attitudes, behaviors, or feelings.</p>
                </div>
            </div>
            <div className="collapse bg-gray-50 bg-opacity-30 drop-shadow-md">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-gray-700 text-xl font-medium">
                How Does Hypnotherapy Work?
                </div>
                <div className="collapse-content text-gray-600"> 
                    <p>Hypnotherapy works by inducing a hypnotic state marked by waking awareness that allows people to experience detached external attention and to focus on inner experiences. In this state, a person can be more open to suggestions and discussions, which can facilitate deeper therapeutic change.</p>
                </div>
            </div>
            <div className="collapse bg-gray-50 bg-opacity-30 drop-shadow-md">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-gray-700 text-xl font-medium">
                What Issues Can Hypnotherapy Help With?


                </div>
                <div className="collapse-content text-gray-600"> 
                    <p> Hypnotherapy can be used to help with various issues, including stress management, anxiety reduction, pain management, overcoming phobias, weight control, smoking cessation, improving sleep, and enhancing performance in various areas of life.</p>
                </div>
            </div>
            <div className="collapse bg-gray-50 bg-opacity-30 drop-shadow-md">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-gray-700 text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content text-gray-600"> 
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse bg-gray-50 bg-opacity-30 drop-shadow-md">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-gray-700 text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content text-gray-600"> 
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse bg-gray-50 bg-opacity-30 drop-shadow-md">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-gray-700 text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content text-gray-600"> 
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse bg-gray-50 bg-opacity-30 drop-shadow-md">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-gray-700 text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content text-gray-600"> 
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse bg-gray-50 bg-opacity-30 drop-shadow-md">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-gray-700 text-xl font-medium">
                    Click to open this one and close others
                </div>
                <div className="collapse-content text-gray-600"> 
                    <p>hello</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}
