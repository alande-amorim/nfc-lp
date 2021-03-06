import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import HeroCta from "../components/HeroCta"
import Animation from "../components/Animation"
import KidsFeatures from "../components/KidsFeatures"
import ChooseYours from "../components/ChooseYours"
import Specifications from "../components/Specifications"
import AdultsFeatures from "../components/AdultsFeatures"

const IndexPage = () => (
  <Layout>
    <Hero />
    <HeroCta />

    <Animation />
    <KidsFeatures />
    <AdultsFeatures />
    <ChooseYours />
    <Specifications />
  </Layout>
)

export default IndexPage
