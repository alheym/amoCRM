import { isMobile } from 'react-device-detect'

import { presents, presentMobile } from '../../../data/content'

import {
  Wrapper,
  Present,
  Title,
  Description,
  Line,
  WrapperText
} from './presents.styles'

type PresentWithDescription = {
  title: string
  descr: string
}

type PresentWithoutDescription = {
  title: string
}

type PresentType = PresentWithDescription | PresentWithoutDescription;

export const Presents = () => {
  const mobile = isMobile
  const titlesArray: PresentType[] = mobile ? presentMobile : presents

  return (
    <Wrapper>
      {titlesArray.map((present) => (
        <Present key={present.title}>
          {mobile ?
            (<WrapperText>
              <Line /><Title>{present.title}</Title>
            </WrapperText>)
            : (<Title>{present.title}</Title>)}
          {('descr' in present) && !mobile && <Description>{present.descr}</Description>}
        </Present>
      ))}
    </Wrapper>
  )
}
