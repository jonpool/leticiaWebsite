import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Banner2 from "@/components/sections/Banner2"
import Blog1 from "@/components/sections/Blog1"
import Clients1 from "@/components/sections/Clients1"
import Contact1 from "@/components/sections/Contact1"
import Gallery1 from "@/components/sections/Gallery1"
import Instagram1 from "@/components/sections/Instagram1"
import Marquee1 from "@/components/sections/Marquee1"
import Pricing1 from "@/components/sections/Pricing1"
import Services1 from "@/components/sections/Services2"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial8"
import Video1 from "@/components/sections/Video1"
export default function Home() {

  return (
    <>
    <Layout headerStyle={3} footerStyle={2} headTitle="Brows By Leticia | Premium Eyebrow Design & Brow Lamination in Melrose, MA">
      <Banner2 />
      <About1 />
      <Services1 />
      <Marquee1 />
      <Video1 />
      <Gallery1 />
      <Pricing1 />
      <Testimonial1 />
      <Instagram1 />
    </Layout>
    </>
  )
}