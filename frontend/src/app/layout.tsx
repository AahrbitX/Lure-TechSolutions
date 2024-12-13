
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import './globals.css'


export default function PageLayout({
  children,
}:{children: React.ReactNode})

{
  return (
    <html lang="en">
      <body className="w-[95%]">
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}