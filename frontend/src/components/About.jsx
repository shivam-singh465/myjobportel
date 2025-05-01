import React from "react";
import { Navbar,Footer } from "./index";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="py-16 px-4 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          About <span className="text-purple-600">JobPortal</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
          JobPortal is the <span className="text-purple-600 font-medium">#1 platform</span> to find your dream job. 
          We empower job seekers with smart tools and help recruiters find the right talent quickly.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl border border-purple-100 transition">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Job Seekers</h3>
            <p className="text-gray-600">
              Apply easily, track applications, and find roles that match your goals and skills.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl border border-purple-100 transition">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Recruiters</h3>
            <p className="text-gray-600">
              Reach top talent fast with smart job posting and filtering tools.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl border border-purple-100 transition">
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To bridge the gap between passion and profession, globally and impactfully.
            </p>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>

  );
};

export default About;
