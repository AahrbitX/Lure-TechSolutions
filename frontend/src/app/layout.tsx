
import TopNavbar from "@/components/commons/TopNavbar"
import Footer from "@/components/commons/Footer"
import './globals.css'


export default function PageLayout({
  children,
}:{children: React.ReactNode})

{
  return (
    <html lang="en">
      <head>
        <title>Lure Tech Solutions</title>
        <meta name="description" content="Lure Tech Solutions: Digital marketing, branding, web, apps & AI for business growth. Trusted by 50+ brands. Results-driven strategies for startups and enterprises." />
        <meta name="keywords" content="Lure Tech Solutions, digital marketing, branding, web development, AI, business growth, SEO, leads, impressions, creative agency, India" />
        <meta name="author" content="Lure Tech Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Lure Tech Solutions" />
        <meta property="og:description" content="Digital marketing, branding, web, apps & AI for business growth. Trusted by 50+ brands." />
        <meta property="og:image" content="/assets/images/lure-logo/tech-solutions-logo.svg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luretechsolutions.com" />
        <link rel="icon" href="/assets/images/lure-logo/tech-solutions-logo.svg" type="image/png" />
      </head>
      <body>
        <TopNavbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}