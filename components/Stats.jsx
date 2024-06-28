"use client"

import { cn } from "@/lib/utils"
import CountUp from "react-countup"

const stats = [
    {
        num: 5,
        text: "Years of Experience"
    },
    {
        num: 50,
        text: "Projects Completed"
    },
    {
        num: 30,
        text: "Happy Clients"
    },
    {
        num: 850,
        text: "Code Contributions Last Year"
    }
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pb-0">
        <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[80vw] mx-auto lg:max-w-none">
                {stats.map((stat, index) => (
                    <div key={index} className="flex gap-4 items-center justify-start xl:justify-start">
                        <CountUp suffix="+" end={stat.num} duration={5} delay={2} className="text-4xl font-extrabold xl:text-6xl" />
                        <p className={cn(stat.text.length < 15 ? "w-[100px]" : "w-[150px]", "leading-snug text-text/80")}>
                          {stat.text}  
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Stats