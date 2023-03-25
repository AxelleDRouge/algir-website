import React, { useState } from "react"
import Layout from "../components/common/Layout"
import Seo from "../components/seo"
import MainPage from "../components/pages/MainPage"
import { LinkButton } from "../components/pages/MainPage/MainPage.styles"
import useWindowDimensions from "../components/hooks/useWindowDimensions.hook"
import { navigate } from "gatsby"

export default function HomePage() {
  const { width } = useWindowDimensions()
  const [focus, setFocus] = useState(false)

  return (
    <Layout>
      <Seo title="Home" />
      <MainPage />
      <LinkButton
        width={width}
        focus={focus}
        onClick={() => {
          setFocus(true)
          navigate("/MeContacter")
        }}
      >
        Me contacter
      </LinkButton>
    </Layout>
  )
}
