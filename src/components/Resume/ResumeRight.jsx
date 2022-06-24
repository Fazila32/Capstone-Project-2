import React from "react";

function ResumeRight() {
  const education = [
    {
      id: 1,
      date: "2014 - 2016",
      edu: "Msc Statistics",
      inst: "GCUF",
      detail: "Lorem ipsum dolor sit amet fuga necessitatibus vero repellendus",
    },
    {
      id: 2,
      date: "2012 - 2014",
      edu: "Graduation",
      inst: "Punjab University Lahore",
      detail: "Lorem ipsum dolor sit amet fuga necessitatibus vero repellendus",
    },
    {
      id: 1,
      date: "2010 - 2012",
      edu: "HSSC",
      inst: "BISE Faisabad",
      detail: "Lorem ipsum dolor sit amet fuga necessitatibus vero repellendus",
    },
    {
      id: 1,
      date: "2000-2010",
      edu: "Schooling",
      inst: "Faisalabad",
      detail: "Lorem ipsum dolor sit amet fuga necessitatibus vero repellendus",
    },
  ];
  const experience = [
    {
      id: 1,
      date: "2018 - Present",
      edu: "Graphic Designing",
      inst: "Freelance",
      detail: "Lorem ipsum dolor sit amet fuga necessitatibus vero repellendus",
    },
  ];
  return (
    <div>
      <div class="right">
        <div class="Cvheader">
          <div class="name_role">
            <h1 class="name">Anila Adnan</h1>
            <div class="role">Graphic Designer</div>
          </div>
          <div class="about">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            dicta beatae optio, corporis fugit accusantium
          </div>
        </div>
        <div class="right_inner">
          <div class="exp">
            <div class="title">Education</div>
            <div class="exp_wrap">
              <ul>
                <li>
                  {education.map((eduDetails) => (
                    <div class="li_wrap">
                      <div class="date">{eduDetails.date}</div>
                      <div class="info">
                        <div class="info_title">{eduDetails.edu}</div>
                        <div class="info_com">{eduDetails.inst}</div>
                        <div class="info_cont">{eduDetails.detail}</div>
                      </div>
                    </div>
                  ))}
                </li>
              </ul>
            </div>
          </div>
          <div class="exp">
            <div class="title">Education</div>
            <div class="exp_wrap">
              <ul>
                <li>
                  {experience.map((expDetails) => (
                    <div class="li_wrap">
                      <div class="date">{expDetails.date}</div>
                      <div class="info">
                        <div class="info_title">{expDetails.edu}</div>
                        <div class="info_com">{expDetails.inst}</div>
                        <div class="info_cont">{expDetails.detail}</div>
                      </div>
                    </div>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResumeRight;
