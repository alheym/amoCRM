import { tagline } from '../../../data/content'

import {
  Wrapper,
  Company,
  Title,
  Description
} from './tagline.styles'

export const Tagline = () => {
  return (
    <Wrapper>
      <Title>{tagline.title}</Title>
      <Company>{tagline.company}</Company>
      <Description>{tagline.descr}</Description>
    </Wrapper>
  )
}
