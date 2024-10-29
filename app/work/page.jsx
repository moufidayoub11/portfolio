"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Swiper, SwiperSlide} from "swiper/react"

import "swiper/css"
import Image from "next/image"
import WorkSliderBtn from "@/components/WorkSliderBtn"
const projects = [
  {
    title: "VS Code Extension: Betty",
    description: "Betty Extension is a Visual Studio Code extension with over 3,500 users that helps you identify and handle errors and warnings related to the C coding style, known as Betty, used at Holberton School in real-time.",
    live: "https://marketplace.visualstudio.com/items?itemName=moufidayoub11.betty-extension",
    github: "https://github.com/moufidayoub11/betty-extension",
    stack: ["Javascript", "VS Code API", "Git"],
    image: "/assets/work/betty.png",
    num: "01"
  },
  {
    title: "Freelance Project: Flagri",
    description: "I designed a complete smart farming solution for Flagri, featuring a responsive website with a landing page, dashboard, and marketplace mockup. The platform includes secure user authentication and a database for streamlined data management. Additionally, I developed an IoT device that monitors real-time soil conditions and feeds data into the dashboard. An integrated AI model analyzes this data to provide personalized plant care recommendations, empowering farmers with actionable insights for improved crop management.",
    live: "https://flagry.vercel.app/",
    stack: ["Electronics", "Soldering", "MQTT", "Next.js", "Tailwind", "JavaScript", "CSS", "MongoDB", "API", "Git"],
    image: "/assets/work/flagri.png",
    num: "01"
  },
  {
    title: "Sorting Visualizer",
    description: "This sorting visualizer lets you compare and visualize how different sorting algorithms like Merge Sort, Heap Sort, Quick Sort, Radix Sort, and Bubble Sort work.",
    live: "https://sorting-visualizer-ecru-one.vercel.app/",
    github: "https://github.com/moufidayoub11/sorting-visualizer",
    stack: ["js", "sass", "html"],
    image: "/assets/work/sortvis.png",
    num: "02"
  },
  {
    title: "Algorithm Visualizer",
    description: "This tool allows you to compare and visualize different pathfinding algorithms such as A*, Dijkstra, DFS, and BFS. ",
    live: "https://algo-visualizer-tau.vercel.app/",
    github: "https://github.com/moufidayoub11/algo-visualizer",
    stack: ["js", "sass", "html"],
    image: "/assets/work/algovis.png",
    num: "03"
  }
]
const Page = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  }
  return (
    <motion.section initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, ease: 'easeIn', delay: 1.4 } }}
      className="min-h-[80vh] flex flex-col items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-text group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
              <p className=" text-text/80">{project.description}</p>
              {
                project.stack && (
                  <ul className="flex gap-4 flex-wrap">
                    {project.stack.map((stack, i) => (
                      <li key={i} className="text-xl text-accent">{stack}{i != project.stack.length - 1 && ","}</li>
                    ))}
                  </ul>
                )
              }
              <div className="border border-text/80"></div>
              <div className="flex gap-4">
              {project.live && (
                  <Link target="_blank" href={project.live} className="w-[70px] h-[70px] rounded-full bg-text/10 flex justify-center items-center group">
                  <BsArrowUpRight className="text-3xl text-text group-hover:text-accent" />
                </Link>
                  )
                }
                {project.github && (
                  <Link target="_blank" href={project.github} className="w-[70px] h-[70px] rounded-full bg-text/10 flex justify-center items-center group">
                    <BsGithub className="text-3xl text-text group-hover:text-accent" />
                  </Link>
                  )
                }
              </div>
              
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper slidesPerView={1} spaceBetween={30} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project, i) => (
                  <SwiperSlide key={i} className="w-full bg-primary">
                    <div className="h-[460px] relative group flex justify-center items-center bg-text/5">
                    <div className="absolute top-0 bottom-0 w-full h-full z-10"></div>
                    <div>
                      <Image priority={true} quality={100} src={project.image} fill className="object-contain bg-primary" alt="" />
                    </div>
                    </div>
                  </SwiperSlide>
                ))
              }
              <WorkSliderBtn containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent text-white hover:bg-accent-hover text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Page