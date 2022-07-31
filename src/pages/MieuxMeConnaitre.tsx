import React from "react"
import Layout from "../components/common/Layout"
import MieuxMeConnaitre from "../components/pages/MieuxMeConnaitre"
import Seo from "../components/seo"

export default function MieuxMeConnaitrePage() {
  return (
    <Layout>
      <Seo title="MieuxMeConnaitre" />
      <MieuxMeConnaitre />
    </Layout>
  )
}
