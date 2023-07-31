import React from 'react'

import { Section } from './main.styles'

import { Content, Footer, Header } from '../../organisms'

export const MainTemplate: React.FC = () => {
  return (
    <Section>
      <Header />
      <Content />
      <Footer />
    </Section>
  )
}
