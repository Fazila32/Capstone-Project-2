import React from "react";
import "../../styling/resume.css";
import Profile from "../../images/profile.png";

import {
  FaMobileAlt,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaBookOpen,
} from "react-icons/fa";
import { TiScissors } from "react-icons/ti";
import { GiFlowerTwirl, GiMusicSpell } from "react-icons/gi";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeindesign,
  SiAdobexd,
} from "react-icons/si";

function ResumeLeft() {
  const contact = [
    {
      id: 1,
      icon: <FaRegEnvelope size={20} style={{ color: "rgba(3, 3, 56)" }} />,
      text: "anilaarshad@gmail.com",
    },
    {
      id: 2,
      icon: <FaMobileAlt size={20} style={{ color: "rgba(3, 3, 56)" }} />,
      text: "+92 313 9465882",
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt size={20} style={{ color: "rgba(3, 3, 56)" }} />,
      text: "Pakistan",
    },
  ];
  const skills = [
    {
      id: 1,
      logo: (
        <SiAdobeillustrator size={20} style={{ color: "rgba(3, 3, 56)" }} />
      ),
      skillName: "Adobe illustrator",
    },
    {
      id: 2,
      logo: <SiAdobephotoshop size={20} style={{ color: "rgba(3, 3, 56)" }} />,
      skillName: "Adobe indesign",
    },
    {
      id: 3,
      logo: <SiAdobeindesign size={20} style={{ color: "rgba(3, 3, 56)" }} />,
      skillName: "Adobe photoshop",
    },
    {
      id: 4,
      logo: <SiAdobexd size={20} style={{ color: "rgba(3, 3, 56)" }} />,
      skillName: "Adobe xd",
    },
  ];
  const hobbies = [
    {
      id: 1,
      hicon: <FaBookOpen size={40} />,
      hobby: "reading",
    },
    {
      id: 2,
      hicon: <TiScissors size={50} />,
      hobby: "Crafting",
    },
    {
      id: 3,
      hicon: <GiFlowerTwirl size={40} />,
      hobby: "designing",
    },
    {
      id: 4,
      hicon: <GiMusicSpell size={40} />,
      hobby: "music",
    },
  ];
  return (
    <div>
      <div class="left">
        <div class="img_holder">
          <img src={Profile} alt="profilePic" />
        </div>
        <div class="details_wrap pb">
          <div class="title">Contact</div>
          <div class="details">
            <ul>
              <li>
                {contact.map((SocialDetail) => (
                  <div class="li_wrap">
                    <div class="icon">{SocialDetail.icon}</div>
                    <div class="text">{SocialDetail.text}</div>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        </div>
        <div class="details_wrap pb">
          <div class="title">Skills</div>
          <div class="details">
            <ul>
              <li>
                {skills.map((SkillSet) => (
                  <div class="li_wrap">
                    <div class="icon">{SkillSet.logo}</div>
                    <div class="text">{SkillSet.skillName}</div>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        </div>
        <div class="hobbies_wrap pb">
          <div class="title">hobbies</div>
          <div class="hobbies">
            <ul>
              <li>
                {hobbies.map((myHobbies) => (
                  <div class="li_wrap">
                    <div class="icon">{myHobbies.hicon}</div>
                    <div class="text">{myHobbies.hobby}</div>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResumeLeft;
