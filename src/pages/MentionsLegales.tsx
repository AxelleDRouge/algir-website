import React from "react"
import Layout from "../components/common/Layout"
import { MentionsLegales } from "../components/pages/MentionsLegales"
import Seo from "../components/seo"

export default function MentionsLegalesPage() {
  return (
    <Layout>
      <Seo title="MentionsLegales" />
      <MentionsLegales />
    </Layout>
  )
}
