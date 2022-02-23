import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout/Layout.view"
import Seo from "../components/seo"

export default function HomePage() {
  return (
    <Layout>
      <Seo title="Home" />
      <StaticImage
        src="../images/home-page.jpeg"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="algir-home-background"
      />
    </Layout>
  )
}
