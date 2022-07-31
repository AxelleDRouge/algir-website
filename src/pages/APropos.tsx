import React from "react"
import Layout from "../components/common/Layout"
import APropos from "../components/pages/APropos"
import Seo from "../components/seo"

export default function AProposPage() {
  return (
    <Layout>
      <Seo title="APropos" />
      <APropos />
    </Layout>
  )
}
