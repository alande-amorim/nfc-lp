import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Animation from "../components/Animation"
import KidsFeatures from "../components/KidsFeatures"
import AdultsFeatures from "../components/AdultsFeatures"
import ChooseYours from "../components/ChooseYours"
import Specifications from "../components/Specifications"

import Image from "../components/Image"

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
