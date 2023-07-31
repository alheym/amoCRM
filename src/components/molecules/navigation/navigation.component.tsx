import { isMobile } from 'react-device-detect'
import { navLinks } from '../../../data/content'

import { Wrapper, Text } from './navigation.styles'

export const Navigation = () => {
  const mobile = isMobile
  const maxItemsToShow = 4

  return (
    <Wrapper>
      {navLinks.slice(0, mobile ? maxItemsToShow : navLinks.length).map((link) => (
        <Text to={link.id} key={link.id}> {link.title} </Text>
      ))}
    </Wrapper>
  )
}
