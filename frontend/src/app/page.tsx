'use clients'

import Home from "@/components/sections/Home"
import About from "@/components/sections/About"
import Service from "@/components/sections/Service"
import Contact from "@/components/sections/Contact"
import Testimonial from "@/components/sections/Testimonial"
import Clients from "@/components/sections/Clients"



export default function Page(){
  return (
    <main>
      <Home/>
      <About/>
      <Clients />
      <Testimonial/>
      <Service/>
      <Contact/>
    </main>
  )
}
