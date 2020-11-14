import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Animation from "../components/Animation"
import KidsFeatures from "../components/KidsFeatures"
import AdultsFeatures from "../components/AdultsFeatures"
import ChooseYours from "../components/ChooseYours"
import Specifications from "../components/Specifications"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Animation />
    <KidsFeatures />
    <AdultsFeatures />
    <ChooseYours />
    <Specifications />
  </Layout>
)

export default IndexPage
