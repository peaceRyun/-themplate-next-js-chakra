"use client";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import { Container } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Container className="py-6">
          main
        </Container>
      </Main>
      <Footer />
    </>
  );
}
