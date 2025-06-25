import CallToAction from "./components/CallToAction";
import Companies from "./components/Companies";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";


export default function Home () {
  return(
    <>
      <Header/>
      <Hero/>
      <Companies/>
      <Features/>
      <Pricing/>
      <Testimonials/>
      <CallToAction/>
    </>
  )
}