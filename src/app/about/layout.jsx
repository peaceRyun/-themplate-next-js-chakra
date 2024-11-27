import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Main from '@/components/layout/Main'
import React from 'react'

const AboutLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{ children }</Main>
      <Footer />
    </>
  )
}

export default AboutLayout