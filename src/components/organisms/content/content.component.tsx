import { isMobile } from 'react-device-detect'

import { Presents, Tagline, Promo } from '../../molecules'

import { colorButton } from '../../../constants'
import {
  Wrapper,
  Description,
  ConsulttationButton
} from './content.styles'

export const Content = () => {
  const mobile = isMobile
  return (
    <Wrapper>
      <Tagline />
      <Description>
        <Promo />
        <Presents />
        {!mobile && <ConsulttationButton
          color={colorButton}>
          Получить консультацию
        </ConsulttationButton>
        }
      </Description>
    </Wrapper>
  )
}
