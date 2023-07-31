import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'

import { Contacts, Navigation } from '../../molecules'

import { Wrapper, Logo } from './header.styles'
import { logo } from '../../../assets'

export const Header = () => {
  const mobile = isMobile

  return (
    <Wrapper>
      {!mobile &&
        <Link to='/'>
          <Logo src={logo} alt='logo' />
        </Link>
      }
      <Navigation />
      {!mobile && <Contacts />}
    </Wrapper>
  )
}
