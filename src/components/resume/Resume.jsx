import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-100px] top-[45%] items-center rotate-[90deg] sm:left-[-80px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[100px] bg-gray-300 h-[2px] sm:w-[90px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Bachelor of Architecture Engineering
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Sriwijaya University
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  2019 - 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  - Member of IMA Sriwijaya <br />- Expert Staff of Interest and
                  Talent Division
                </p>
              </div>
            </div>

            <br className="h-[5px] bg-white" />
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-100px] top-[45%] items-center rotate-[90deg] sm:left-[-80px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[100px] bg-gray-300 h-[2px] sm:w-[90px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  “Bu Lies” Restaurant Project
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  As Freelance Architect
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  February 2023
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Interior and exterior designer of the restaurant “Bu Lies”.
                </p>
              </div>
            </div>
            <br className="h-[5px] bg-white" />
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-100px] top-[45%] items-center rotate-[90deg] sm:left-[-80px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[100px] bg-gray-300 h-[2px] sm:w-[90px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Residential Project
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  As Architectural Designer
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  January 2023
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Residential interior and exterior renovation.
                </p>
              </div>
            </div>
            <br className="h-[5px] bg-white" />
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-100px] top-[45%] items-center rotate-[90deg] sm:left-[-80px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[100px] bg-gray-300 h-[2px] sm:w-[90px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  “Rumah Songket Adis” Boutique Project
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  As Freelance Architect
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  December 2022
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Interior and exterior renovation.
                </p>
              </div>
            </div>
            <br className="h-[5px] bg-white" />
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-100px] top-[45%] items-center rotate-[90deg] sm:left-[-80px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[100px] bg-gray-300 h-[2px] sm:w-[90px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  “Koppi Warehouse” Cafe Project
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  As Freelance Architect
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  December 2022
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Interior and exterior renovation.
                </p>
              </div>
            </div>
            <br className="h-[5px] bg-white" />
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-100px] top-[45%] items-center rotate-[90deg] sm:left-[-80px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[100px] bg-gray-300 h-[2px] sm:w-[90px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Dinas PERKIM SUMSEL Project
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  As Supervisor Internship
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  May 2022 - August 2022
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Supervision of the Gandus Palembang campground mess project.
                </p>
              </div>
            </div>
            <br className="h-[5px] bg-white" />
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-100px] top-[45%] items-center rotate-[90deg] sm:left-[-80px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[100px] bg-gray-300 h-[2px] sm:w-[90px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Musi Rawas District Project
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  As Freelance Architect
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  March 2021
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Designing the welcome gate border of Musi Rawas district
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
