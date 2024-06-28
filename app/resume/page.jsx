"use client"

import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import {  FaLinux , FaFigma} from "react-icons/fa"
import { RiTailwindCssLine,RiRobot2Line, RiNodejsLine, RiJavascriptLine, RiGitBranchLine, RiCss3Line, RiNextjsLine, RiReactjsLine  } from "react-icons/ri";
import { TbBrandMongodb } from "react-icons/tb";
import { ImHtmlFive2} from "react-icons/im";
import { TbBrandTypescript, TbSql } from "react-icons/tb";
import { AiOutlinePython } from "react-icons/ai";
import { CgCPlusPlus } from "react-icons/cg";
import { SiPostgresql } from "react-icons/si";

const about = {
  title: "About Me",
  description: "I am Ayoub Moufid, a software engineering student with over 5 years of experience in this field. I started learning about technology at age 14, driven by a passion for self-learning and creating useful solutions.",
  infos: [
    {
      fieldName: "Full Name",
      fieldValue: "Ayoub Moufid"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+212) 70765-4099"
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years"
    },
    {
      fieldName: "Discord",
      fieldValue: "moufidayoub11"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Moroccan"
    },
    {
      fieldName: "Email",
      fieldValue: "moufidayoub883@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Arabic, French"
    },

  ]
}

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experiences",
  description: "A showcase of my professional and extracurricular engagements, highlighting my versatile skills and dedication.",
  items: [
    {
      company: "Auto-Entrepreneur",
      position: "Freelancer",
      duration: "2019 - Present",
    },
    {
      company: "Ecole Polytechnique d'Agadir",
      position: "Administrative Assistant",
      duration: "2023 - Present",
    },
    {
      company: "Ecole Polytechnique d'Agadir",
      position: "Member of the Robotics Club (FABLAB)",
      duration: "2023 - Present",
    },
  ]
}

const education = {
  icon: "/assets/resume/badge.svg",
  title: "My Education",
  description: "A blend of formal education and self-directed learning experiences, showcasing my dedication to mastering this field.",
  items: [
    {
      institution: "Ecole Polytechnique d'Agadir",
      degree: "Software Engineer",
      duration: "2023 - 2028",
    },
    {
      institution: "Self-Directed Learning",
      degree: "Computer Science",
      duration: "2018 - present",
    },
  ]
}

const skills = {
  title: "My Skills",
  description: "A diverse set of technical skills acquired through both formal education and self-directed learning, enabling me to build robust and innovative solutions.",
  skillList: [
    {
      name: "Linux",
      icon: <FaLinux />,
    },
    {
      name: "C/C++",
      icon: <CgCPlusPlus />,
    },
    {
      name: "Python",
      icon: <AiOutlinePython />,
    },
    {
      name: "Electronics/IoT",
      icon: <RiRobot2Line />,
    },
    {
      name: "HTML5",
      icon: <ImHtmlFive2/>,
    },
    {
      name: "CSS3",
      icon: <RiCss3Line />,
    },
    {
      name: "Tailwind CSS",
      icon: <RiTailwindCssLine />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },
    {
      name: "JavaScript",
      icon: <RiJavascriptLine />,
    },
    {
      name: "TypeScript",
      icon: <TbBrandTypescript />,
    },
    {
      name: "React",
      icon: <RiReactjsLine />,
    },
    {
      name: "Next.js",
      icon: <RiNextjsLine />,
    },
    {
      name: "Node.js",
      icon: <RiNodejsLine />,
    },
    {
      name: "MongoDB",
      icon: <TbBrandMongodb />,
    },
    {
      name: "SQL",
      icon: <TbSql />,
    },
    {
      name: "Git",
      icon: <RiGitBranchLine />,
    },
  ]
}



const Resume = () => {
  return (
    <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, ease: 'easeIn', delay: 1.4 } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-text/90 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#f4e6ea] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-text/90">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-text/90 mx-auto xl:mx-0">{education.description}</p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#f4e6ea] h-[184px] py-6 px-10 rounded-xl flex flex-col items-center justify-center lg:items-start gap-1">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-text/90">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-text/90 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index} className="flex flex-col items-center">
                      <div className="w-full h-[130px] bg-[#f4e6ea] rounded-xl flex justify-center items-center group">
                        <div className="text-6xl flex flex-col items-center justify-center gap-2 group-hover:text-accent transition-all duration-300">
                          {skill.icon}
                          <p className="text-lg text-text/80 font-semibold transition-all du300 group-hover:text-accent">
                            {skill.name}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">
                  {about.title}
                </h3>
                <p className="max-w-[620px] text-text/90 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.infos.map((info, index) => (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-text/80">{info.fieldName}:</span>
                      <span className="text-xl text-nowrap">{info.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume