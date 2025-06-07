
import TopNavbar from "@/components/commons/TopNavbar"
import Footer from "@/components/commons/Footer"
import './globals.css'


export default function PageLayout({
  children,
}:{children: React.ReactNode})

{
  return (
    <html lang="en">


      <body>
        <TopNavbar/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}