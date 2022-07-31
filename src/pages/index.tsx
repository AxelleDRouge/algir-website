import React from "react"
import Layout from "../components/common/Layout"
import Seo from "../components/seo"
import MainPage from "../components/pages/MainPage"

export default function HomePage() {
  return (
    <Layout>
      <Seo title="Home" />
      <MainPage />
    </Layout>
  )
}
