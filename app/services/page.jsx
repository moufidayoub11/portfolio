"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight} from "react-icons/bs";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Creating responsive and user-friendly websites tailored to your needs.',
    href:"/contact?service=wd"
  },
  {
    num: '02',
    title: 'IoT Projects',
    description: 'Designing and implementing IoT solutions, from hardware setup to programming and integration.',
    href:"/contact?service=iot"
  },
  {
    num: '03',
    title: 'Automation Scripts',
    description: 'Developing scripts to automate tasks, such as creating trading bots and streamlining workflows.',
    href:"/contact?service=as"
  },
  {
    num: '04',
    title: 'Software Development',
    description: 'Building custom software solutions to enhance business processes and efficiency.',
    href:"/contact?service=sd"
  },
];


export default function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 0.4, ease: 'easeIn', delay: 1.4}}}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-text group-hover:bg-accent transition-all duration-500 flex justify-center items-center group-hover:-rotate-45" >
                <BsArrowDownRight className="text-primary text-2xl"/>
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-text group-hover:text-accent transition-all duration-500">{service.title}</h2>
              <p className="text-text/80">{service.description}</p>
              <div className="border-b border-text/40 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
}
