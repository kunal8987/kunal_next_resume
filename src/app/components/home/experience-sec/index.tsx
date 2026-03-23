import React from "react";

const ExperienceSec = () => {
  const experiences = [
    // {
    //   year: "2018",
    //   title: "Junior UX Designer",
    //   company: "www.startup.com",
    //   type: "Fulltime",
    //   description:
    //     "Suffered alteration in some form by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
    // },
    {
      year: "NOV-2025 To Present",
      title: "React.js Developer",
      company: "Techquadra Software Solution",
      type: "OnSite",
      description:
        "Developed cutting-edge web applications using ReactJS and integrated various APIs. Collaborated with cross-functional teams to ensure smooth integration throughout the stack. Handled project-related tasks while coordinating with project managers and stakeholders. Led a team to migrate legacy systems to modern web technologies, improving performance and scalability. Implemented state management solutions, optimizing the application's efficiency and maintainability.",
    },
    {
      year: "JAN-2025 TO OCT-2025",
      title: "MERN Stack Developer ",
      company: "Distinct Technology",
      type: "Work From Home",
      description:
        "Created responsive web applications using ReactJS and integrated various APIs. Enhanced UI/UX by utilizing reusable components and implementing responsive design. Collaborated with cross-functional teams to ensure seamless integration across the stack.",
    },
    {
      year: "JULY-2024 TO DEC-2024",
      title: "Web Developer",
      company: "Xceller IT Services",
      type: "Work From Home",
      description:
        "Crafted dynamic websites and REST API. Boosted performance through thorough debugging and code refactoring. Engaged in project-related activities, focusing on timelines and deliverables",
    },
  ];

  return (
    <section className="print-page">
      <div className="resume-page py-16 md:py-32">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Experience</h2>
            <p className="text-xl text-primary">( 02 )</p>
          </div>

          <div className="space-y-7 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative break-inside-avoid"
              >
                <div className="">
                  <p className="text-2xl font-bold text-primary">{exp.title}</p>
                  <p className=" text-lg font-bold mb-2 text-black">
                    {exp.year}
                  </p>
                </div>

                <div className=" relative">
                  {index < experiences.length && (
                    <div
                      className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? "h-40" : "h-30"} bg-softGray`}
                    ></div>
                  )}

                  <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                    <div
                      className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${
                        index === 0 ? "border-primary" : "border-black"
                      }`}
                    >
                      {index === 0 && (
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      )}
                    </div>
                  </div>

                  <div className="pl-4 lg:pl-7">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl text-black font-semibold">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-lg text-gray-600 font-normal">
                      {exp.type}
                    </p>
                  </div>
                </div>

                <div className="pl-8 sm:pl-0">
                  <p className="leading-relaxed text-gray-700">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
