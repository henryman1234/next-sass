import Companies from "./components/Companies";
import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";


export default function Home () {
  return(
    <>
      <Header/>
      <Hero/>
      <Companies/>
      <Features/>
      <Pricing/>
    </>
  )
}