import React from "react"
import Layout from "../components/Layout/Layout.view"
import Seo from "../components/seo"
import PageHeader from "../components/PageHeader"

export default function HomePage() {
  return (
    <Layout>
      <Seo title="Home" />
      <PageHeader />
    </Layout>
  )
}
