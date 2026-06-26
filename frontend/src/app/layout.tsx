
import TopNavbar from "@/components/commons/TopNavbar"
import Footer from "@/components/commons/Footer"
import CustomCursor from "@/components/commons/CustomCursor"
import './globals.css'


export default function PageLayout({
  children,
}:{children: React.ReactNode})

{
  return (
    <html lang="en">
      <head>
        <title>Entice Innovations — Premium Digital Partner</title>
        <meta name="description" content="Entice Innovations: End-to-end digital solutions — AI consulting, IT strategy, digital marketing, brand building, and tech infrastructure for premium clients." />
        <meta name="keywords" content="Entice Innovations, AI consulting, IT consulting, digital marketing, brand building, tech infrastructure, domain hosting, SEO, premium digital agency, India" />
        <meta name="author" content="Entice Innovations" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Entice Innovations" />
        <meta property="og:description" content="Entice Innovations: End-to-end digital solutions — AI consulting, IT strategy, digital marketing, brand building, and tech infrastructure for premium clients." />
        <meta property="og:image" content="/assets/logo/entice-logo.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://enticeinnovations.com" />
        <link rel="icon" href="/assets/logo/entice-logo.svg" type="image/svg+xml" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CustomCursor />
        <TopNavbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
