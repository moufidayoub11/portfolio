"use client"
import { useFormState  } from 'react-dom'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"
import { getContactData } from "@/lib/actions/contact.actions"
import { cn } from '@/lib/utils'

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+212) 70765-4099"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "moufidayoub883@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Agadir, Morocco"
  },
]
const initialState = {
  error: false,
  message: 'Send Message',
}
const services = ["wd", "iot", "as", "sd"];
const Page = () => {
  const [state, formAction] = useFormState(getContactData, initialState);
  const searchParams = useSearchParams();
  const defService = searchParams.get('service');
  if (state.message === "Sent!") {
    setTimeout(() => {
      window?.location.reload();
    }, 200)
  }
  return (
    <motion.section initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, ease: 'easeIn', delay: 1.4 } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form action={formAction} className="flex flex-col gap-6 p-10 bg-[#f4e6ea] rounded-xl">
              <h3 className="text-4xl to-accent">Let&apos;s work together</h3>
              <p className="text-text/80">
                Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" name="firstname" placeholder="Firstname"/>
                <Input type="lastname" name="lastname" placeholder="Lastname"/>
                <Input type="email" name="email" placeholder="Email"/>
                <Input type="phone" name="phone"  placeholder="Phone"/>
              </div>

              <Select name="service" defaultValue={services.includes(defService) ? defService : ""}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="wd">Web Development</SelectItem>
                    <SelectItem value="iot">IoT Projects</SelectItem>
                    <SelectItem value="as">Automation Scripts</SelectItem>
                    <SelectItem value="sd">Software Development</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea name="message" className="h-[200px]" placeholder="Type your message here"/>
              <p className={cn(!state.error ? 'hidden' : "", 'text-red-400 text-lg')}>{state.message}</p>
              <Button className="max-w-40">{!state.error ? state.message : "Send Message"}</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:h-[72px] xl:w-[72px] bg-[#f4e6ea] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-text/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Page