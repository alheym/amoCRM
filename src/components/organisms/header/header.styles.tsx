import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { colorText } from '../../../constants'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 4.5625rem;
  margin-top: 2.875rem;

  @media (max-width: 320px) {
    margin: 0;
  }
`
export const Logo = styled.img`
  width: 10.3125rem;
  object-fit: contain;
  object-position: center;
`
export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 31.4375rem;
  margin-right: 8.5625rem;
  margin-left: 1.6875rem;
  padding-top: 0.125rem;
`
export const Text = styled(NavLink)`
  color: ${colorText};
`
export const Contact = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  object-fit: contain;
  object-position: center;
`
export const Contacts = styled.div`
  display: flex;
  width: 19.375rem;
  padding-top: 0.125rem;
  flex-direction: row;
  justify-content: space-between;
`
