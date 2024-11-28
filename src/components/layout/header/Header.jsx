"use client";

import { Button, Container, Heading } from '@chakra-ui/react'
import { ChevronLeft, Share } from 'lucide-react';
import React from 'react'

const Header = ({type = "type1", title, sharing, prev }) => {
  const renderHeader = () => {
    switch (type) {
      // 메인헤더
      case 'type1':
        return (
              <Container size="full" className='flex justify-between items-center'>
                <Heading as="h1">logo</Heading>
                <nav>
                  {/* <Navigation /> */}
                </nav>
              </Container>
          )
      // 이전, 타이틀, 각페이지에 맞는 버튼
      case 'type2':
        return (
          <Container className='flex justify-between items-center'>
            {prev && <Button variant='icon' className='flex justify-start -ml-1'>
              <ChevronLeft strokeWidth={3} size={3} />
              <span className="blind">이전</span>
            </Button>}            
            {title && <Heading>{title}</Heading>}
            {sharing && 
              <Button variant='icon' className='flex justify-end'>
                <Share strokeWidth={3} />
                <span className="blind">공유</span>
              </Button>
            }
            {/* {등록 && <Button>등록</Button>} */}
          </Container>
      )        
      // 로그인 헤더
      case 'type3':
        return <Container>type3</Container>
      default:
        return <Container>default</Container>
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white-700 backdrop-blur-md py-3">
      {renderHeader()}
    </header>
  );
}

export default Header

