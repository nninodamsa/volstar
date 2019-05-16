import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Intro from "../components/intro"
import UsosEs48 from "../components/usos-es48"
import Control from "../components/control"
import Slidder from "../components/slidder"
import Info from "../components/info"
import Contact from "../components/contact"

const SecondPage = () => (
  <Layout>
    <SEO title="SISTEMA ES48 " />
    <Intro title="SISTEMA ES48" slogan="rectificador y controlador multifunción en 48 VDC" />

    <UsosEs48/>
    <Control/>
    <Slidder/>
    <Info/>
    <Contact/>
  </Layout>
)

export default SecondPage
