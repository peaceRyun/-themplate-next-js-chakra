import { Container } from '@chakra-ui/react'
import React from 'react'

const Main = ({ children }) => {
  return (
    <main className='flex-1'>
      { children }
    </main>
  )
}

const Section = ({ children }) => {
  return (
    <Section>
      <Container>
        { children }
      </Container>
    </Section>
  )
}

export default Main