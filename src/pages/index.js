import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Animation from "../components/Animation"
import KidsFeatures from "../components/KidsFeatures"
import AdultsFeatures from "../components/AdultsFeatures"
import ChooseYours from "../components/ChooseYours"
import Specifications from "../components/Specifications"
import DemoCarousel from "../components/DemoCarousel"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Animation />
    <KidsFeatures />
    {/* <AdultsFeatures /> */}
    <DemoCarousel />
    <ChooseYours />
    <Specifications />
  </Layout>
)

export default IndexPage
