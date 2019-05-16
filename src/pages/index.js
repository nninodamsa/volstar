import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/banner"
import About from "../components/about"
import Areas from "../components/areas"
import Contact from "../components/contact"
import Mision from "../components/mision"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Banner />
    <About />
    <div className="areas container">
      
            <Areas bg="#74a332" link="/sistema-es48" classorder="" title="" icon="tower" text="telecomunicaciones" />
            <Areas bg="#7daf38" link="#" classorder="main" title="áreas de aplicación" icon="delivery-truck" text="movilidad" />
            <Areas bg="#8bc13f" link="#" classorder="" title="" icon="golf-cart" text="movilidad industrial" />
    </div>
    <Contact/>
    <Mision/>
  </Layout>
)

export default IndexPage
