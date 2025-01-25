
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import './globals.css'


export default function PageLayout({
  children,
}:{children: React.ReactNode})

{
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}