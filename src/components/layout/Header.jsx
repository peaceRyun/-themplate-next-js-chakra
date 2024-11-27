"use client";

import { Container, Heading } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 bg-white backdrop-blur-md'>
      <Container size="full" className='flex justify-between items-center'>
        <Heading as="h1">logo</Heading>
        <nav>nav</nav>
      </Container>
    </header>
  )
}

export default Header