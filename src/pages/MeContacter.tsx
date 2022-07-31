import React from "react"
import Layout from "../components/common/Layout"
import { MeContacter } from "../components/pages/MeContacter"
import Seo from "../components/seo"

export default function MeContacterPage() {
  return (
    <Layout>
      <Seo title="MeContacter" />
      <MeContacter />
    </Layout>
  )
}
