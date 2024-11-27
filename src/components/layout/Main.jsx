import { Container } from '@chakra-ui/react'
import React from 'react'

const Main = ({ children }) => {
  return (
    <main className='flex-1'>
      { children }
    </main>
  )
}

export const Section = ({ children }) => {
  return (
    <section className='py-20'>
      <Container>
        { children }
      </Container>
    </section>
  )
}

export default Main