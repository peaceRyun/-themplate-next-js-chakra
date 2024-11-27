"use client";

import { Button, Container, Heading } from '@chakra-ui/react'
import React from 'react'

const Header = ({type = "type1", title }) => {
  const renderHeader = () => {
    switch (type) {
      // 메인헤더
      case 'type1':
        return (
            <header className='fixed top-0 left-0 right-0 z-50 bg-white-700 backdrop-blur-md py-3'>
              <Container size="full" className='flex justify-between items-center'>
                <Heading as="h1">logo</Heading>
                <nav>nav</nav>
              </Container>
            </header>
          )
      // 이전, 타이틀, 각페이지에 맞는 버튼
      case 'type2':
        return (
        <header>
          <Container>
            <Button>이전</Button>
            <Heading>{title}</Heading>
            {공유 && <Button>공유</Button>}
            {등록 && <Button>등록</Button>}
          </Container>
        </header>
      )        
      // 로그인 헤더
      case 'type3':
        return <div>type3</div>
      default:
        return <div>default</div>
    }
  }

  return renderHeader();
}

export default Header

